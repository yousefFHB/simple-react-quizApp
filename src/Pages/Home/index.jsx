import React from "react";
import { Link } from "react-router-dom";

const quickLinks = [
 
  {
    title: "Authentication",
    description: "Go to auth flow and test route guards using Redux token state.",
    to: "/auth",
    cta: "Go To Auth",
  },
  {
    title: "Quiz app",
    description: "Randomise Questions for the quiz using redux .",
    to: "/Quiz",
    cta: "Go To Quiz",
  },

];

export default function Home() {
  return (<section className="w-full max-w-6xl mx-auto px-6 py-12 sm:py-16">
      <div className="relative overflow-hidden rounded-3xl border border-white/25 bg-white/10 backdrop-blur-md p-8 sm:p-12 shadow-2xl shadow-black/30">
        {/* Changed colored blobs to slate */}
        <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-slate-400/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-gray-900/10 blur-3xl" />

        <div className="relative z-10">
          {/* Badge text changed to slate */}
          <p className="inline-flex items-center rounded-full border border-white/30 px-3 py-1 text-xs tracking-wide text-slate-200">
            React + Redux + Router Practice
          </p>
          <h1 className="mt-5 text-3xl sm:text-5xl font-black leading-tight text-white">
            Build Faster With
            {/* Highlight text changed to slate */}
            <span className="block text-slate-800">Hands-On Exercises</span>
          </h1>
          <p className="mt-4 max-w-2xl text-slate-100/90 text-sm sm:text-base">
            This learning project contains small but practical exercises for
            component state, data fetching, route protection, and reusable UI.
          </p>

          
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
        {quickLinks.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-white/20 bg-slate-900/45 text-white p-5 shadow-lg shadow-black/20"
          >
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-100/80">{item.description}</p>
            <Link
              to={item.to}
              // Link text changed to slate
              className="mt-4 inline-block text-blue-300 font-medium hover:text-slate-100"
            >
              {item.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
