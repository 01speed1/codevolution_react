import React from 'react';
import './App.css';

//Components
import Greet from './components/Greet'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import Message from './components/Message';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
{/*       <Greet name="Oscar">
        <p> The child </p>
      </Greet>
      <Greet name="supabuton">
        <button> Text </button>
      </Greet>
      <Greet name="Guzman" />
      <Hello />

      <Welcome name="Natasha">
        <p> BlackWidow </p>
      </Welcome> */}

      {/* <Message></Message> */}
      <Counter></Counter>
    </div>
  );
}

export default App;
