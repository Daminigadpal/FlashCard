import Create from './Pages/Create';
import MyComponent from './Pages/Mycomponent';
import './App.css';
import React from 'react';
import Myform from './Pages/Create';
import Button from './Pages/button';

function App() {
  return (
    <div>
      <Create/>
      {/* <MyComponent/> */}
      <Myform/>
      <Button/>
    </div>
  );
}

export default App;

