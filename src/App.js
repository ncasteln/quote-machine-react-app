import React, { useEffect, useState } from 'react';
import Card from './Components/Card.js';
import colorList from './colors';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState([])
  const [color, setColor] = useState([]);

  const getQuotes = async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      if (!response.ok) {
        throw new Error(`${response.status}`)
      }
      const data = await response.json();
      const randomNumber = Math.floor(Math.random()*data.length);
      setQuote(
        {
          id: randomNumber,
          text: data[randomNumber].text,
          author: data[randomNumber].author
        }
      )
    }
    catch(error) {
      console.error(`Fetch data failed - error ${error}`)
    }
  }

  const changeColor = () => {
    const randomColor = colorList[Math.floor(Math.random()*colorList.length)];
    setColor(randomColor);
  }

  useEffect(() => {
    getQuotes();
    changeColor();
  }, []);

  const handleClick = () => {
    getQuotes();
    changeColor();
  }

  return (
    <div id='quote-box'
      style={{ backgroundColor: color, transition: '0.7'}}>
      <Card
        id={quote.id}
        text={quote.text}
        author={quote.author}
        handleClick={handleClick}
        color={color}
      />
    </div>
  )
}

export default App;
