import React from 'react'

const FlexContent = ({ type: { title, heading, text, img, btn, url }}) => {
  return (
   <div className='flex items-center justify-between lg:flex-col lg:justify-center nike-container flex-row'>
    <div className='max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center'>
      <h1 className='text-4xl sm:text-3xl font-bold text-gradient'>{heading}</h1>
      <p className='xl:text-sm my-4 text-slate-900'>{text}</p>
      <a href={url} className='flex items-center' target={"_blank"} role="button">
        <button type='button' className='button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5'>{btn}</button>
      </a>
    </div>
    <div className='flex items-center justify-center max-w-xl relative lg:max-w-none w-full'>
      <img 
      src={img}
      alt={`img/${heading}`}
      className={`w-auto object-fill transitions-theme h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40 rotate-[15deg] hover:rotate-12`}
      />
    </div>
   </div>
  )
}

export default FlexContent
