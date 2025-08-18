import React from 'react'

const IconButton = ({ icon, title, onClick, color = 'text-white/60 hover:text-white' }) => {
  return (
    <>
    <button
      onClick={onClick}
      title={title}
      className={`p-2 rounded-md transition ${color}`}
    >
      {icon}
    </button>
    </>
  )
}

export default IconButton