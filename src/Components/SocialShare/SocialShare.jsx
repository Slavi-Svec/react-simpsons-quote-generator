import React from 'react'

const SocialShare = ({ quote, character, className, icon, style }) => {
   console.log(character)
   return (
      <a
         href={`https://twitter.com/intent/tweet?text= ${quote} ${character}`}
         target="_blank"
         rel="noopener noreferrer"
         className={className}
      >
      Twitter
      </a>
   )
}

export default SocialShare