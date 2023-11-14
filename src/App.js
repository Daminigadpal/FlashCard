
import React ,{useEffect} from "react"
import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import CreateFlashcard from "./Pages/CreateFlashcard";
import MyFlashcard from "./Pages/MyFlashcard";
import FlashcardDetails from "./Pages/FlashcardDetails";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [userData, setUserData]=useState([]);
  
  const handleFormSubmit = (values) =>{
    localStorage.setItem('userData',JSON.stringify([...userData, values]))
    setUserData([...userData,values]);
  };
  
  useEffect(()=>{
    const storedData = localStorage.getItem('userData');
   // Parse the JSON string into an array
   if (storedData){
    setUserData(JSON.parse(storedData) || [])
   }
  },[])
 

  const handleRemoveUser = (index) => {
    const updatedUserData = [...userData];
    updatedUserData.splice(index, 1);
    setUserData(updatedUserData);
  }
  
   return (
    <BrowserRouter>
    <div>
    <Header/>
      <Navbar/>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<CreateFlashcard onSubmit={ handleFormSubmit} />}></Route>
        <Route path="/myflashcard" element={<MyFlashcard userData={userData} onRemove={handleRemoveUser}/>}></Route>
        <Route path="/flashcarddetails/:id" element={<FlashcardDetails userData={userData}/>}></Route>
      </Routes>

      </div>
    </BrowserRouter>
   );
   
}

export default App;
