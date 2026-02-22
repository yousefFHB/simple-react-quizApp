import React from 'react'

export default function ProgressBar({ current, total, className = "" }) {
    const percentage = Math.round((current / total) * 100)


    return (
        <div className={`w-full ${className}`}>

            {/* Text Labels */}
            <div className='flex justify-between items-center mb-3'>
                <span className='text-sm font-medium text-slate-500'>
                    Question <span className="text-slate-900 font-bold">{current}</span> of <span className="text-slate-900 font-bold">{total}</span>
                </span>
                <span className='text-xs font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded-md'>
                    {percentage}%
                </span>
            </div>

            {/* Progress Bar Track */}
            <div className='w-full overflow-hidden rounded-full h-3 bg-slate-100 shadow-inner'>
                {/* Progress Bar Fill */}
                <div
                    className='h-full transition-all duration-500 ease-out bg-linear-to-br from-blue-200 via-gray-700 to-neutral-900 rounded-full'
                    style={{ width: `${percentage}%` }}
                >
                </div>
            </div>

        </div>
    )
}
