import React from 'react'

const TextGradient = ({children}) => {
  return (
    <div className="font-black text-transparent   text-3xl  md:text-4xl  bg-clip-text bg-gradient-to-r from-slate-400 via-gray-900 to-slate-500">
          {children}
        </div>
  )
}

export default TextGradient