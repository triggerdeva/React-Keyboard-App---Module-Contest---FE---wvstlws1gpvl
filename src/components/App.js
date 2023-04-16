import "../styles/App.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const keys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

const App = () => {
  const [preview, setPreview] = useState('');
  const [quote, setQuote] = useState('');

  const handleClick = (keyValue) => {
    const updatedPreview = preview + keyValue;
    setPreview(updatedPreview);

    if (updatedPreview === 'forty two') {
      axios.get('https://api.quotable.io/random').then((response) => {
        setQuote(response.data.content);
      });
    } else {
      setQuote('');
    }
  };
  const renderKeys = () => {
   
    return keys.map((keyValue) => (
      <button key={`key-${keyValue}`} id={`key-${keyValue === ' ' ? 'space' : keyValue}`} onClick={() => handleClick(keyValue)}>
        {keyValue}
      </button>
    ));
  };

  return (
    <div className="App">
      <div className="preview">{preview}</div>
      {preview === 'forty two' && <div className="quote">{quote}</div>}
      <div className="keyboard">{renderKeys()}</div>
    </div>
  );

};



export default App;
