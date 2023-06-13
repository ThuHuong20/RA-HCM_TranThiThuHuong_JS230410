import React, { useState } from 'react'
import './App.css';
import Header from './Header';
import Body from './Body';

function App() {
  const [texts, setTexts] = useState(() => {
    const getLocal = JSON.parse(localStorage.getItem("texts")) ?? []
    return getLocal
  })
  const handleUser = (user) => {
    const newText = [...texts, user]
    setTexts(newText)
    localStorage.setItem("texts", JSON.stringify(newText))
  }
  const handleClick = (id) => {
    const newText = texts.filter(text => text.id !== id)
    setTexts(newText)
    localStorage.setItem("texts", JSON.stringify(newText))
  }
  return (
    <div className="App">
      <Header handleUser={handleUser}></Header>
      <Body texts={texts} handleClick={handleClick}></Body>
    </div>
  );
}

export default App;
