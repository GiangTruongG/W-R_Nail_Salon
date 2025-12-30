import React from 'react'
import Heading from '../components/Heading';
import PriceListItem from '../components/PriceListItem';
import FAQ from '../components/FAQ';
import Image10 from '../assets/image10.jpg';
import Image11 from '../assets/image11.jpg';
import Image12 from '../assets/image12.jpg';
import Image13 from '../assets/image13.jpg';
import { SlideInLeft, SlideInRight, FadeInUp } from '../components/AnimationWrappers';

const PriceList = () => {
  return (
    <>
      <div>
        <Heading text_top={['SERVICE', 'PRICING']} text_middle={'Nail Bar'} text_bottom={'All prices are subject to change without notice and are listed without card fees. 15% Surcharge applies on publuc holidays.'} />

        <div className='px-8'>
          {/* Signature Service */}
          <SlideInLeft delay={0.2}>
          <div className='py-5'>
            <h3 className='playfair-display-medium text-2xl main-text-color'>Signature Services</h3>

            <PriceListItem 
              serviceItem={'Nailology Mani-Pedi Co..'} 
              description={'Freshen up with Nailology mani/pedi cure. Extra for Gel & Nail Polish. Note: Extras are charged per service.'} 
              price={'70'}
            />

            <PriceListItem 
              serviceItem={'Nailology Manicure'} 
              description={'Freshen up with a natural soak, delicate cuticle work, trimming, buffing, and shaping. Topped off with a clear polish.'} 
              price={'35'}
            />

            <PriceListItem 
              serviceItem={'Nailology Pedicure'} 
              description={'Relax with salt soak, followed with a cut, shape, buff, cuticle & callus removal. Clear coat and moisturizing lotion. Extra for Gel or/and Nail Polish.'} 
              price={'50'}
            />
          </div>
          </SlideInLeft>

          {/* Removal */}
          <SlideInRight delay={0.2}>
          <div className='py-5'>
            <h3 className='playfair-display-medium text-2xl main-text-color'>Removal</h3>

            <PriceListItem 
              serviceItem={'Acrylic Removal'} 
              description={'Removal Only.'} 
              price={'30'}
            />

            <PriceListItem 
              serviceItem={'Dipping Powder Removal'} 
              description={'Removal of your current dipping set only. No other services required. Hands only.'} 
              price={'22'}
            />

            <PriceListItem 
              serviceItem={'Builder Gel Removal'} 
              description={'Removal of your current builder gel set only. No other services required. Hands only.'} 
              price={'30'}
            />

            <PriceListItem 
              serviceItem={'Gel Polish Removall'} 
              description={'Removal of your current Gel Polish set only. No other services required. Hands or feet.'} 
              price={'17'}
            />
          </div>
          </SlideInRight>

          {/* Color Application */}
          <FadeInUp delay={0.2}>
          <div className='py-5'>
            <h3 className='playfair-display-medium text-2xl main-text-color'>Colour Application</h3>

            <PriceListItem 
              serviceItem={'Gel Polish (Shellac)'} 
              description={'Perfect for those with strong natural nails after an extra glossy finish. Hands or feet.'} 
              price={'45'}
            />

            <PriceListItem 
              serviceItem={'Nail Polish'} 
              description={'A liquid that forms a film on your natural nails for those who have healthy natural nails. Hands or feet.'} 
              price={'40'}
            />

            <PriceListItem 
              serviceItem={'Dipping Powder (SNS)'} 
              description={'Dipping powder is known to be super durable. Applied to natural hand nails only. Add-ons extra.'} 
              price={'60'}
            />

            <PriceListItem 
              serviceItem={'Builder Gel (BIAB)'} 
              description={'Build thickness or add strength to your natural nails with The Gel Bottle. Recommended on natural nails only.'} 
              price={'75'}
            />

            <PriceListItem 
              serviceItem={'Gel-X Extensions'} 
              description={'Soft gel nail extension, shaped to your preference with your colour of choice.'} 
              price={'77'}
            />

            <PriceListItem 
              serviceItem={'Acrylic'} 
              description={'New acrylic set on natural nails with a gel colour of your choice. Hands or feet.'} 
              price={'from 75'}
            />

            <PriceListItem 
              serviceItem={'Acrylic Refills'} 
              description={'Refill of existing acrylic set with a fresh gel polish finish. Removal of existing colour included.'} 
              price={'70'}
            />
          </div>
          </FadeInUp>
        </div>

        <div>
          <Heading text_top={['ELEVATE', 'YOUR', 'NAILS']} text_middle={'State of the Nail Art'} text_bottom={'See the below guide to understand the different levels of nail art design sets. Quote prior to service.'} />

          <div>
            <SlideInLeft delay={0.3}>
            <div>
              <div className='p-3 overflow-hidden h-150'>
                <img 
                  src={Image10} 
                  alt='' 
                  className='w-full h-full object-cover rounded-2xl'
                  />
              </div>

              <div className='flex flex-col gap-3 p-5'>
                <h2 className='text-center playfair-display-medium main-text-color text-3xl font-medium'>Simple Art</h2>
                <p className='text-center outfit-medium text-gray-400'>Simple shapes and colours to add a little bit of flair to your new set. From $15</p>
              </div>
            </div>
            </SlideInLeft>

            <SlideInLeft delay={0.3}>
            <div>
              <div className='p-3 overflow-hidden h-150'>
                <img 
                  src={Image11} 
                  alt='' 
                  className='w-full h-full object-cover rounded-2xl'
                  />
              </div>

              <div className='flex flex-col gap-3 p-5'>
                <h2 className='text-center playfair-display-medium main-text-color text-3xl font-medium'>Complex Art</h2>
                <p className='text-center outfit-medium text-gray-400'>Complex shapes and designs with multiple techniques to make it pop. From $30</p>
              </div>
            </div>
            </SlideInLeft>

            <SlideInRight delay={0.3}>
            <div>
              <div className='p-3 overflow-hidden h-150'>
                <img 
                  src={Image12} 
                  alt='' 
                  className='w-full h-full object-cover rounded-2xl'
                  />
              </div>

              <div className='flex flex-col gap-3 p-5'>
                <h2 className='text-center playfair-display-medium main-text-color text-3xl font-medium'>Creative Art</h2>
                <p className='text-center outfit-medium text-gray-400'>Creative artistic designs and colours to stand out from the rest. From $55</p>
              </div>
            </div>
            </SlideInRight>

            <SlideInRight delay={0.3}>
            <div>
              <div className='p-3 overflow-hidden h-150'>
                <img 
                  src={Image13} 
                  alt='' 
                  className='w-full h-full object-cover rounded-2xl'
                  />
              </div>

              <div className='flex flex-col gap-3 p-5'>
                <h2 className='text-center playfair-display-medium main-text-color text-3xl font-medium'>Custom Art</h2>
                <p className='text-center outfit-medium text-gray-400'>Custom designs and embellishments to be the nail envy of your friends. From $90</p>
              </div>
            </div>
            </SlideInRight>
          </div>
        </div>

        <FAQ />
      </div>
    </>
  )
}

export default PriceList