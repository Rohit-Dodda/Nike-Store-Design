import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true)

  function hideContainer() {
    setIsVisible(false)
  }

  return (
    <div className={`h-30 bg-gradient-to-b gap-3 from-blue-500 to-blue-600 font-extrabold drop-shadow-lg text-sky-100 flex items-center justify-center fs-14 container  fw-500 ${isVisible ? '' : 'hidden'}`}>
      <XMarkIcon className='hover:scale-110 duration-700 transition-all icon-style w-5 h-5 ease-in-out' onClick={hideContainer}/>
      Free Shipping Till Tuesday!
    </div>
  )
}

export default Announcement