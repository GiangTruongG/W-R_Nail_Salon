import React, { useState } from 'react'
import Heading from '../components/Heading';
import InputText from '../components/InputText';
import Button from '../components/Button';
import { FadeInUp } from '../components/AnimationWrappers';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <div>
        <Heading text_top={['HAVE', 'A', 'QUESTION?']} text_middle={'Get in touch with us'} text_bottom={'Use this form for general inquiries only - for bookings & requests, please see the "Book Now" page.'} />

        <FadeInUp delay={0.5}>
        <div className='my-10'>
          <div className='flex flex-col gap-5 px-5'>
            <InputText type={'text'} placeholder={'Name..'} value={name} setChange={setName} />
            <InputText type={'email'} placeholder={'Enter Email..'} value={email} setChange={setEmail} />
            <InputText type={'number'} placeholder={'Contact No..'} value={phoneNumber} setChange={setPhoneNumber} />
            <div>
              <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message.."
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-gray-800 resize-none"
                />
            </div>
            <button>
              <Button text={'Send Message'} text_color={'text-gray-400'} border_color={'border-gray-400'} bg_color={'bg-transparen'} />
            </button>
          </div>
        </div>
        </FadeInUp>
      </div>
    </>
  )
}

export default ContactUs