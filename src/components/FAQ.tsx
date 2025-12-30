import React, { useState } from 'react'
import Heading from './Heading';
import { ChevronRight } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does a typical nail appointment take?",
      answer: "A standard manicure takes about 30-45 minutes, while a full set of acrylics or gel nails can take 60-90 minutes. We recommend booking enough time to ensure you get the perfect result without feeling rushed."
    },
    {
      question: "Do I need to remove my old nail polish before coming in?",
      answer: "No need to worry! We'll remove your old polish as part of the service. However, if you're coming in for a gel removal, please let us know when booking as this requires extra time."
    },
    {
      question: "How often should I get my nails done?",
      answer: "For regular manicures, we recommend every 2-3 weeks. For gel nails or acrylics, every 2-4 weeks is ideal to maintain their appearance and health. Your nail technician can provide personalized recommendations based on your nail growth and lifestyle."
    },
    {
      question: "What's the difference between gel and acrylic nails?",
      answer: "Gel nails are cured under UV light and tend to look more natural with a glossy finish. Acrylics are created using a liquid and powder mixture, are generally stronger, and better for nail extensions. Both last 2-3 weeks with proper care."
    },
    {
      question: "Do you accept walk-ins or appointment only?",
      answer: "While we welcome walk-ins when available, we highly recommend booking an appointment to ensure your preferred time slot and technician. You can book online or call us directly."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='mb-10'>
      <Heading text_top={['FREQUENTLY', 'ASK', 'QUESTIONS']} text_middle={'FAQ'} />

      <div className='px-5'>
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="rounded-lg main-text-color playfair-display-medium overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between px-4 pb-5 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-lg pr-4">{faq.question}</span>
              <ChevronRight 
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-500 ${
                  openIndex === index ? 'rotate-90' : ''
                }`}
              />
            </button>
            
            {/* Answer */}
            <div 
              className={`overflow-hidden transition-all duration-800 outfit-medium ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="p-4 pt-0 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ