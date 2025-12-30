import React from 'react'

const LocationCard = ({ location, postcode }) => {
  return (
    <div className='bg-color-primary text-white flex-col flex items-center p-5 outfit-medium text-xl rounded-[8px]'>
      <h3>{location}</h3>
      <h3>{postcode}</h3>
    </div>
  )
}

export default LocationCard