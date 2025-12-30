import React from 'react'

const PriceListItem = ({ serviceItem, description, price }) => {
  return (
    <div className='my-3'>
      <div className="flex items-center gap-4">
        <h3 className="text-lg playfair-display-medium main-text-color">{serviceItem}</h3>
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="text-lg playfair-display-medium font-bold main-text-color">{price}</span>
      </div>
      <p className='text-gray-400 outfit-medium'>{description}</p>
    </div>
  )
}

export default PriceListItem