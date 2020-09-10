import React, { useState, useEffect } from 'react';
import Text from './Components/Text/Text'
import Image from './Components/Image/Image'
import Button from './Components/Button/Button'
import SimpsonTitle from './Assets/simpsons-quotes-title.png'
// import HomerImage from './Assets/homer-alternate.jpg'
import './App.scss';
import SocialShare from './Components/SocialShare/SocialShare';

const simpsonsUrl = 'https://thesimpsonsquoteapi.glitch.me/quotes'

const App = () => {
  const [character, setCharacter] = useState('')
  const [quote, setQuote] = useState('')
  const [image, setImage] = useState('')
  useEffect(() => {
    fetch(simpsonsUrl)
      .then((response) => response.json())
      .then((data) => {
      const simpsonCharacter = data[0].character
      const simpsonQuote = data[0].quote
      const simpsonImage = data[0].image
      // setCharacter(simpsonCharacter)
      // setQuote(simpsonQuote)
      // setImage(simpsonImage)

    })
  })

  const testing = () => {
     alert('hello')
  }

  return (
    <section className="main">
      <div className="main__background">
        <div className="main__container">
          <Image
          className="main__image"
          src={SimpsonTitle}
          />
          <Button
            className="main__button"
            heading="Press for quote"
            variant="primary"
            onClick={testing}
          />
          <Text
            className="main__quotes"
            text={quote}
            variant="h3"
          />
          <Text
            className="main__characters"
            text={character}
            variant="p"
          />
          <Image
            className="quote__image"
            src={image}
          />
           {/* <SocialShare
            quote={quote}
            author={character}
          /> */}

        </div>
      </div>
    </section>

  )
}

export default App;
