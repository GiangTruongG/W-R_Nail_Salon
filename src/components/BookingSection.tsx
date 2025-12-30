import React from 'react'
import Heading from './Heading';
import LocationCard from './LocationCard';

const BookingSection = () => {
  return (
    <section>
      <Heading text_top={['BOOK', 'NOW']} text_middle={'Reserve a Time'} text_bottom={'Save time and reserve your booking for a seamless experience'} />

      {/* Select a location */}
      <div>
        <div className='flex justify-center items-center mb-10'>
          <h2 className='text-center playfair-display-medium main-text-color text-3xl font-medium'>Select a Location:</h2>
        </div>

        <div className='px-3 flex flex-col gap-3'>
          <LocationCard location={'Shepparton'} postcode={'3630'} />
          <LocationCard location={'Epping'} postcode={'3076'} />
        </div>

        <div className='flex justify-center items-center py-10'>
          <h3 className='text-center outfit-medium text-gray-400'>Note: You will leave website, please check confirmation to ensure you are booking for the right locations.</h3>
        </div>
      </div>
    </section>
  )
}

export default BookingSection