import React, { useState, useEffect } from 'react';
import Text from './Components/Text/Text'
// import Image from './Components/Image/Image'
import Button from './Components/Button/Button'
import './App.css';

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
    <div className="App">
      <Text
        text="quotes"
        className="quote__title"
        variant="h1"
      />
      {/* <Image className="quote__image src={quote} /> */}
      <Button />

    </div>
  )
}




export default App;
