import React from 'react'
import Heading from './Heading';
import Image2 from '../assets/image2.jpg';
import Image3 from '../assets/image3.jpg';
import Image4 from '../assets/image4.jpg';
import Image5 from '../assets/image5.jpg';
import Image6 from '../assets/image6.jpg';
import Image7 from '../assets/image7.jpg';
import Image8 from '../assets/image8.jpg';
import Image9 from '../assets/image9.jpg';

const OurWork = () => {
  return (
    <section className='pb-10'>
      <Heading text_top={['OUR', 'WORK']} text_middle={'All hail the nails'} text_bottom={'@W&RSalon/instagram'} />

      <div>
        <div className='overflow-hidden h-[430px]'>
          <img src={Image2} alt='' className='w-full h-full object-cover' />
        </div>

        <div className='overflow-hidden h-[430px]'>
          <img src={Image3} alt='' className='w-full h-full object-cover' />
        </div>

        <div className='overflow-hidden h-[430px]'>
          <img src={Image4} alt='' className='w-full h-full object-cover' />
        </div>

        <div className='overflow-hidden h-[430px]'>
          <img src={Image5} alt='' className='w-full h-full object-cover' />
        </div>

        <div className='overflow-hidden h-[430px]'>
          <img src={Image6} alt='' className='w-full h-full object-cover' />
        </div>

        <div className='overflow-hidden h-[430px]'>
          <img src={Image7} alt='' className='w-full h-full object-cover' />
        </div>

        <div className='overflow-hidden h-[430px]'>
          <img src={Image8} alt='' className='w-full h-full object-cover' />
        </div>

        <div className='overflow-hidden h-[430px]'>
          <img src={Image9} alt='' className='w-full h-full object-cover' />
        </div>
      </div>
    </section>
  )
}

export default OurWork