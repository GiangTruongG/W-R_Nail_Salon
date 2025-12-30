import React from 'react'
import Image1 from '../assets/image1.jpg';
import Button from './Button';

const Hero = () => {
  return (
    <>
    {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => console.error('Video error:', e)}
          onLoadedData={() => console.log('Video loaded successfully')}
        >
          <source src="/hero_video.mp4" type="video/mp4" />
          <img src={Image1} alt="Fallback" />
        </video>

        {/* Single combined overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50"></div>
  

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold playfair-display-medium bright-text-color mb-6 leading-tight">
            W&R Salon
            <span className='text-xl italic'>/ Nail Culture</span>
          </h1>
          
          <p className="text-4xl playfair-display-medium md:text-xl mb-8 bright-text-color">
            Where the beatuy arises
          </p>

          <button>
            <Button text={'Book Now'} bg_color={'bg-transparent'} text_color={'bright-text-color'} border_color={'border-gray-200'}  />
          </button>
        </div>
      </section>
    </>
  )
}

export default Hero