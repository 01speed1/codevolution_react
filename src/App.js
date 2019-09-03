import React from 'react';
import './App.css';

//Components
import Greet from './components/Greet'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import Message from './components/Message';
import Counter from './components/Counter';
import Hi from './components/Hi';
import FunctionClick from './components/FunctionClick';


function App() {
  return (
    <div className="App">
      <FunctionClick></FunctionClick>

      {/* <Greet name="Oscar" heroName="Paps" > </Greet> */}
      {/* <Hello /> */}

      {/* <Welcome name="Natasha">
        <p> BlackWidow </p>
      </Welcome>} */}

      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <Hi></Hi> */}
    </div>
  );
}

export default App;
