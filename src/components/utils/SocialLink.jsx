import React from 'react'

const SocialLink = ({ icon, url }) => {
  const handleClick = () => {
    window.open(url, '_tab')
  }
  return (
   <>
      <img
        src={icon}
        alt="icon/social"
        className="w-8 h-8 transition-all duration-800 hover:scale-110"
        onClick={handleClick}
      />
      
   </>
  )
}

export default SocialLink