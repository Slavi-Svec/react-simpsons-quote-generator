import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import './styles.scss'

const SocialShare = ({ quote, character, className, icon, style }) => {
   return (
      <a
         href={`https://twitter.com/intent/tweet?text= ${quote} ${character}`}
         target="_blank"
         rel="noopener noreferrer"
         className={className}
      >
      <FontAwesomeIcon className="twitter" icon={faTwitter} size="5x" />
      </a>
   )
}

export default SocialShare