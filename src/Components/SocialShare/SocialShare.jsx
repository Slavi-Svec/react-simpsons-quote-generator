import React from 'react'

const SocialShare = ({ quote, character }) => {
  return (
     <React.Fragment>
        <a href={`https://twitter.com/intent/tweet?text= ${quote} ${character}`} target="_blank" title="Post this quote on twitter!" id='tweet-quote'>
           <i className="fab fa-twitter twitter-icon" />
        </a>
     </React.Fragment>
  )
}

export default SocialShare