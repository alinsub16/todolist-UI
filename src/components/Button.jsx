import React from 'react'
import { Plus} from 'lucide-react';

const Button = ({ label = '',icon = <Plus />, onClick, type = 'button', variant = 'default', disabled = false }) => {
 const base = 'w-full py-3 mt-4 rounded-md font-semibold flex justify-center items-center gap-2 transition';

//  color of buttons
  const variants = {
    default: 'bg-black/50 hover:bg-white text-white hover:text-gray-800',
    small: 'px-4 py-2 bg-white/10 text-white rounded w-full max-w-[90px]',
    green: 'bg-green-600 hover:bg-green-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    cancel: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
    paginationButton: 'bg-blue-100 hover:opacity-50 text-gray-800 w-full max-w-[90px]',
  };
  const disabledStyles = disabled ? 'opacity-50 hover:bg-blue-100  cursor-default' : 'cursor-pointer ';
  
  return (
    <>
    <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${base} ${variants[variant] || variants.default} ${disabledStyles}`}
      >
        {icon}
        {label}
      </button>
    </>
  )
}

export default Button