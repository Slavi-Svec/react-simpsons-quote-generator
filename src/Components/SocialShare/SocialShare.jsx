import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"

const SocialShare = ({ quote, character, className, icon, style }) => {
   console.log(character)
   return (
      <a
         href={`https://twitter.com/intent/tweet?text= ${quote} ${character}`}
         target="_blank"
         rel="noopener noreferrer"
         className={className}
      >
      <FontAwesomeIcon icon={faTwitter} size="5x" />
      </a>
   )
}

export default SocialShare