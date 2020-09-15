import React, { useState } from 'react';
import Text from './Components/Text/Text';
import Image from './Components/Image/Image';
import Button from './Components/Button/Button';
import SimpsonTitle from './Assets/simpsons-quotes-title.png';
import SocialShare from './Components/SocialShare/SocialShare';
// import TestButton from './Components/TestButton/TestButton'
import './App.scss';

const App = () => {
  const [quote, setQuote] = useState('')
  const [character, setCharacter] = useState('')
  const [image, setImage] = useState('https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638')
  const returnQuotes = () => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data[0].character)
        setQuote(data[0].quote)
        setImage(data[0].image)
      })
  }

  return (
    <section className="main">
      <div className="main__background">
        <div className="main__container">
          <Image
          className="main__Title-image"
          src={SimpsonTitle}
          />
          <Button
            className="main__button"
            heading="Press for quote"
            variant="primary"
            onClick={returnQuotes}
          />
            <SocialShare
            className="main__social-share"
            quote={quote}
            character={character}
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
            className="main__image"
            src={image}
          />
        </div>
      </div>
    </section>
  )
}

export default App;


   {/* <div className="" */}


