import React from 'react'
import '../css/dashboard.css'

const SkeletonLoader2 = () => {
  return (
    <>
        <div className='flex flex-col items-center gap-2 relative'>
            <h2 className='absolute top-[-30px] text-center text-base'>Please wait<span className='animate-pulse text-white/40'>...</span></h2>
            <div className="skeleton-loader animate-pulse bg-white/20 rounded-2xl w-full h-20 flex justify-between px-6 items-center ">
                <div className='flex flex-col gap-2'>
                    <span className='animate-pulse bg-white/40 rounded-2xl w-40 h-5'></span>
                    <span className='animate-pulse bg-white/40 rounded-2xl w-60 h-5'></span>
                </div>
                <div className='flex justify-center gap-5'>
                    <span className='animate-pulse bg-white/40 rounded-2xl h-5 w-7'></span>
                    <span className='animate-pulse bg-white/40 rounded-2xl h-5 w-6'></span>
                    <span className='animate-pulse bg-white/40 rounded-2xl h-5 w-6'></span>
                </div>
            </div>
            <div className="skeleton-loader animate-pulse bg-white/20 rounded-2xl w-full h-20 flex justify-between px-6 items-center ">
                <div className='flex flex-col gap-2'>
                    <span className='animate-pulse bg-white/40 rounded-2xl w-40 h-5'></span>
                    <span className='animate-pulse bg-white/40 rounded-2xl w-60 h-5'></span>
                </div>
                <div className='flex justify-center gap-5'>
                    <span className='animate-pulse bg-white/40 rounded-2xl h-5 w-7'></span>
                    <span className='animate-pulse bg-white/40 rounded-2xl h-5 w-6'></span>
                    <span className='animate-pulse bg-white/40 rounded-2xl h-5 w-6'></span>
                </div>
            </div>
            <div className="skeleton-loader animate-pulse bg-white/20 rounded-2xl w-full h-20 flex justify-between px-6 items-center ">
                 <div className='flex flex-col gap-2'>
                    <span className='animate-pulse bg-white/40 rounded-2xl w-40 h-5'></span>
                    <span className='animate-pulse bg-white/40 rounded-2xl w-60 h-5'></span>
                </div>
                <div className='flex justify-center gap-5'>
                    <span className='animate-pulse bg-white/40 rounded-2xl h-5 w-7'></span>
                    <span className='animate-pulse bg-white/40 rounded-2xl h-5 w-6'></span>
                    <span className='animate-pulse bg-white/40 rounded-2xl h-5 w-6'></span>
                </div>
            </div>
            <div className="skeleton-loader animate-pulse bg-white/20 rounded-2xl w-full h-20 flex justify-between px-6 items-center ">
                <div className='flex flex-col gap-2'>
                    <span className='animate-pulse bg-white/40 rounded-2xl w-40 h-5'></span>
                    <span className='animate-pulse bg-white/40 rounded-2xl w-60 h-5'></span>
                </div>
                <div className='flex justify-center gap-5'>
                    <span className='animate-pulse bg-white/40 rounded-2xl h-5 w-7'></span>
                    <span className='animate-pulse bg-white/40 rounded-2xl h-5 w-6'></span>
                    <span className='animate-pulse bg-white/40 rounded-2xl h-5 w-6'></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default SkeletonLoader2