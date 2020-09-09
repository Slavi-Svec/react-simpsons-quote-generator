import React, { useState, useEffect } from 'react';
import Text from './Components/Text/Text'
// import Image from './Components/Image/Image'
import Button from './Components/Button/Button'
import './App.scss';

const simpsonsUrl = 'https://thesimpsonsquoteapi.glitch.me/quotes'


const App = () => {
  const [quote, setQuote] = useState('')
  useEffect(() => {
    fetch(simpsonsUrl)
      .then((response) => response.json())
      .then((data) => {
      const simpsonQuote = data[0].image
      // console.log(simpsonQuote)

      setQuote(simpsonQuote)

    })
  })

  return (
    <section className="main">
      <div className="main__background">
          <div className="main__container">
            <Text
              text="quotes"
              className="quote__title"
              variant="h1"
            />
      {/* <Image className="quote__image src={quote} /> */}
      <Button className="quote__button" heading="Press for quote" variant="primary" />

        </div>
      </div>
    </section>

  )
}




export default App;
