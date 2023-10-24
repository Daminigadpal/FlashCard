import React from "react"
import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import CreateFlashcard from "./Pages/CreateFlashcard";
import MyFlashcard from "./Pages/MyFlashcard";
import FlashcardDetails from "./Pages/FlashcardDetails";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";

function App() {
  const [userData, setUserData]=useState([]);
  const handleFormSubmit = (values) =>{
    setUserData([...userData,values]);
  }



   return (
    <BrowserRouter>
    <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<CreateFlashcard onSubmit={handleFormSubmit} />}/>
        <Route path="/myflashcard" element={<MyFlashcard userData= {userData}/>}/>
        <Route path="/flashcarddetails/:id" element={<FlashcardDetails userData= {userData}/>}/>
      </Routes>
    </BrowserRouter>
   );
   
}

export default App;
