import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/Quiz", label: "Quiz" },
];

export default function Nav() {
  const { token } = useSelector((state) => state.auth);

  return (
  <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
  <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
    
    {/* Logo Area */}
    <h2 className="text-sm sm:text-lg font-black tracking-wide text-slate-900">
      My Exercise Website
    </h2>

    {/* Navigation Items */}
    <div className="flex items-center gap-2 sm:gap-3">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition-all ${
              isActive
                ? "bg-slate-100 text-slate-900 shadow-sm" // Active: Light Gray Background
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900" // Inactive: Grey text, subtle hover
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}

      {/* Auth Button - High Contrast Monochrome */}
      <NavLink
        to="/auth"
        className={({ isActive }) =>
          `rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all shadow-sm ${
            isActive
              ? "bg-slate-800 text-white ring-2 ring-slate-200 ring-offset-1"
              : "bg-slate-900 text-white hover:bg-slate-700 hover:shadow-md"
          }`
        }
      >
        {token ? "Account" : "Login"}
      </NavLink>
    </div>
  </nav>
</header>
  );
}
