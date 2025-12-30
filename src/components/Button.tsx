import React from 'react'

const Button = ({ text, text_color, border_color, bg_color }) => {
  return (
    <div className={`px-8 py-2 text-2xl border-1 cursor-pointer ${border_color} outfit-medium ${text_color} ${bg_color}`}>
      {text}
    </div>
  )
}

export default Button