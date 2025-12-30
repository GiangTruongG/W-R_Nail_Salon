import React from 'react'
import Hero from '../components/Hero';
import Heading from '../components/Heading';
import BookingSection from '../components/BookingSection';
import OurWork from '../components/OurWork';
import { FadeInUp, SlideInLeft } from '../components/AnimationWrappers';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Heading text_top={['WE', 'ARE', 'NAILOLOGIST']} text_middle={'A Brand new experience with coffee & nail culture - pamper yourself'} text_bottom={''} />
      <div className='bg-light-gray'>
        <SlideInLeft delay={0.2}>
          <BookingSection />
        </SlideInLeft>
      </div>
      <FadeInUp delay={0.3}>
        <OurWork />
      </FadeInUp>
    </>
  )
}

export default HomePage