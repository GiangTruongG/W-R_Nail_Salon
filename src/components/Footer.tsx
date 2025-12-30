import React, { useState } from 'react'
import { Facebook, Instagram } from 'lucide-react';
import InputText from './InputText';
import Button from './Button';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <footer>
      <div className='bg-light-gray py-10 grid grid-cols-1 gap-10'>
        {/* Logo section */}
        <div className='flex flex-col items-center gap-3'>
          <div className="text-5xl playfair-display-medium font-bold main-text-color">
            W&R
          </div>
          <div className='max-w-[400px]'>
            <p className='outfit-medium text-gray-400 text-center'>Immerse yourself - in a brand new experience with coffee & nails culture</p>
          </div>
          <a className='outfit-medium text-gray-400'>Terms of Service</a>

          <div className="flex justify-center gap-4 outfit-medium text-gray-400">
            <a 
              href="https://www.facebook.com/wrnails/photos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <span>__</span>
            <a 
              href="https://www.instagram.com/wrnails22/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Our location section */}
        <div className='flex flex-col items-center gap-3'>
          <div className='flex justify-center items-center'>
            <h2 className='text-center playfair-display-medium main-text-color text-3xl font-medium'>Our Location</h2>
          </div>

          <ul className='outfit-medium text-gray-400 flex flex-col gap-2'>
            <li>
              <a>Shepparton 3630</a>
            </li>
            <li>
              <a>Epping 3076</a>
            </li>
          </ul>
        </div>

        {/* Quick Links section */}
        <div className='flex flex-col items-center gap-3'>
          <div className='flex justify-center items-center'>
            <h2 className='text-center playfair-display-medium main-text-color text-3xl font-medium'>Quick Links</h2>
          </div>

          <ul className='outfit-medium text-gray-400 flex flex-col gap-2'>
            <li>
              <a>Book Now</a>
            </li>
            <li>
              <a>New Gel</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Mailing List */}
        <div>
          <div className='flex justify-center items-center'>
            <h2 className='text-center playfair-display-medium main-text-color text-3xl font-medium'>Mailing List</h2>
          </div>

          <div className='flex flex-col gap-2 px-5'>
            <InputText type={'text'} placeholder={'Name..'} value={name} setChange={setName} />
            <InputText type={'email'} placeholder={'Enter Email..'} value={email} setChange={setEmail} />
            <button>
              <Button text={'Sign Up'} text_color={'text-gray-400'} border_color={'border-gray-400'} bg_color={'bg-transparen'} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer