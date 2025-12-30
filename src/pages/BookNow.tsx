import React, { useState, useEffect } from 'react'
import BookingSection from '../components/BookingSection';
import Image10 from '../assets/image10.jpg';
import Image11 from '../assets/image11.jpg';
import Image12 from '../assets/image12.jpg';
import Image13 from '../assets/image13.jpg';
import { SlideInRight } from '../components/AnimationWrappers';

const BookNow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    Image10,
    Image11,
    Image12,
    Image13
  ]

  useEffect(() => {
    // Change image every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <SlideInRight delay={0.3}>
      <div>
        <BookingSection />

        <div className='mb-10'>
          <div className='relative h-96 w-full overflow-hidden'>
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
        </div>
      </div>
      </SlideInRight>
    </>
  )
}

export default BookNow