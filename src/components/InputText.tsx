import React from 'react'

const InputText = ({ type, placeholder, value, setChange }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setChange(e.target.value)}
        className='border-b w-full pb-2 px-2 outfit-medium text-gray-400 outline-0'
      />
    </div>
  )
}

export default InputText