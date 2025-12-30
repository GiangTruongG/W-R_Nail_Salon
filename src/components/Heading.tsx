import React from 'react'

const Heading = ({ text_top, text_middle, text_bottom, text_bottom_link }) => {
  return (
    <>
      <div className='px-10 py-10 flex flex-col gap-5'>
        {/* Top */}
        <div className='flex justify-center items-center'>
          <h2 className="text-md text-gray-400 font-bold outfit-medium flex items-center justify-center gap-2">
            {text_top && text_top.map((word, index) => 
              {
                if (index == (text_top.length - 1)) {
                  return (
                    <div>
                      <span>{word}</span>
                    </div>
                  )
                }

                return (
                  <div className='flex items-center justify-center gap-2'>
                    <span>{word}</span>
                    <span className="text-sm">•</span>
                  </div>
                )
              }
            )}
          </h2>
        </div>

        {/* Middle */}
        <div className='flex justify-center items-center'>
          <h2 className='text-center playfair-display-medium main-text-color text-3xl font-medium'>{text_middle}</h2>
        </div>

        {/* Bottom */}
        {
          text_bottom_link ? (
            <div className='flex justify-center items-center'>
              <h3 className='text-center outfit-medium text-gray-400'>{text_bottom}</h3>
            </div>
          ) : (
            <div className='flex justify-center items-center'>
              <h3 className='text-center outfit-medium text-gray-400'>{text_bottom}</h3>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Heading