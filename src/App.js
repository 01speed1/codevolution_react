import React from 'react';
import './App.css';

//Components
//import Greet from './components/Greet'
//import Hello from './components/Hello'
//import Welcome from './components/Welcome'
//import Message from './components/Message';
//import Counter from './components/Counter';
//import Hi from './components/Hi';
//import FunctionClick from './components/FunctionClick';
//import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';


function App() {
  return (
    <div className="App">
      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
