import React from 'react'

const SkeletonLoader = ({className}) => {
  return (
    <>
      <div className={`animate-pulse bg-white/20 rounded-2xl ${className}`}>
      </div>
    </>
  )
}

export default SkeletonLoader
