import { TentIcon } from 'lucide-react'
import React from 'react'

export default function LogedIn() {
  return (
    <div className='py-20 flex h-min-screen justify-center'>
        <div className='p-10 w-1/2 h-full inline-flex '>

            <h1 className= 'w-full flex items-center justify-center gap-2 rounded-2xl shadow-2xl text-white shadow-slate-500 text-center p-10 font-semibold font-mono text-3xl bg-slate-900 '><TentIcon/>You are logged in</h1>
        </div>
      
    </div>
  )
}
