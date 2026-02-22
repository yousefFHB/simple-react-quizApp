import React, { useState } from 'react'
import UseFormFields from '../../../Hooks/UseFormFields'
import { useDispatch } from 'react-redux'
import notify from '../../../Utils/Notify'
import { login } from '../../../Store/Slices/AuthSlice'

export default function Login({ handlePageType }) {
  const [fields, handleChange, setFields] = UseFormFields({
    username: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://fakestoreapi.com/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(fields),
        },
      );
      if (!res.ok) {
        throw new Error("username or password incorrect")
      }
      const data = await res.json()
      dispatch(
        login({
          token: data.token,
          user: { username: fields.username },
        }),
      );

      setFields({
        username: "",
        password: "",
      })
      notify("success", "login successfully")

    } catch (error) {
      setFields({
        username: "",
        password: "",
      })
      notify("error", "login failed")

      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-sm mx-auto pt-4">

      {/* Username Input */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-slate-700">Username</label>
        <input
          name='username'
          type="text"
          placeholder="Enter your username"
          onChange={handleChange}
          value={fields.username}
          className="
        w-full px-4 py-2.5
        bg-white border border-slate-300 rounded-lg
        text-slate-900 placeholder-slate-400
        focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500
        transition-all duration-200
      "
        />
      </div>

      {/* Password Input (Changed type to 'password') */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-slate-700">Password</label>
        <input
          name='password'
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={fields.password}
          className="
        w-full px-4 py-2.5
        bg-white border border-slate-300 rounded-lg
        text-slate-900 placeholder-slate-400
        focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500
        transition-all duration-200
      "
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="
      w-full mt-2 px-4 py-2.5
      bg-slate-900 hover:bg-slate-800
      text-white font-semibold text-sm
      rounded-lg shadow-sm
      disabled:opacity-70 disabled:cursor-not-allowed
      transition-colors duration-200
    "
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Logging in...
          </span>
        ) : (
          "Login"
        )}
      </button>

      {/* Switch to Register */}
      <span
        onClick={handlePageType}
        className="
      text-sm text-center text-slate-500 
      cursor-pointer hover:text-slate-900 hover:underline 
      transition-colors mt-2
    "
      >
        Don't have an account? <span className="font-semibold">Register now!</span>
      </span>

    </form>
  )
}
