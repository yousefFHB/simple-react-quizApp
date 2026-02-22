import React from "react";
import { Link } from "react-router-dom";

export default function Register({handlePageType}) {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Create an Account
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Sign up to access the dashboard
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="
                w-full rounded-xl border border-slate-300
                px-4 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-slate-900
              "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="
                w-full rounded-xl border border-slate-300
                px-4 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-slate-900
              "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="
                w-full rounded-xl border border-slate-300
                px-4 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-slate-900
              "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="
                w-full rounded-xl border border-slate-300
                px-4 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-slate-900
              "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full mt-2
              rounded-xl bg-slate-900
              px-4 py-2.5
              text-sm font-semibold text-white
              transition hover:bg-slate-800
            "
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
         <button onClick={handlePageType} className="text-neutral-950 border-b-2 active:scale-110 transition-all" >login</button>
        </div>
      </div>
    </div>
  );
}
