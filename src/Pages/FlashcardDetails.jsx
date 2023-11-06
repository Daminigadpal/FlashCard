import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import notImg from "../Assets/not-img.png"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { BsArrowLeft } from "react-icons/bs";
// import { LiaShareSolid } from "react-icons/lia";
import {FcShare} from "react-icons/fc"
import { FiDownload } from "react-icons/fi";
import { BsPrinter } from "react-icons/bs";
// import {LuChevronLeft, LuChevronRight} from "react-icons/lu"
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import { Document, Page } from "react-pdf";

const FlashcardDetails = ({ userData }) => {
  const { id } = useParams();
  const user = userData[id];
  const [activeIndex, setActiveIndex] = useState(0);
const [pdf, setPdf] = useState();
  if (!user) {
    return(
      <div className="text-center">
          <img src={notImg} alt="not found" className="mx-auto h-48"/>
          <h1 className="text-xl mb-4 font-semibold">Flashcard not available</h1>
          <p className="text-gray-500 mb-4" >Sorry about that, Please create Flashcard</p>
          <Link to={`/`}> {" "}
            <button className="px-7 py-2 border-[1px] border-red-500   text-red-500 hover:bg-red-500 hover:text-white font-medium rounded-lg shadow-md"> Create Flashcard</button>
          </Link>
        </div>
    );
  };
  const handleShare = () => {
    // Create a shareable link to the current details page
    const shareableLink = window.location.href;

    // Use the Web Share API to share the link
    if (navigator.share) {
      navigator.share({
        title: `FlashCard: ${user.groupname}`,
        text: `Check out the FlashCard ${user.groupname}`,
        url: shareableLink,
      });
    } else {
      // Provide a fallback for browsers that don't support the Web Share API
      alert(`Shareable Link: ${shareableLink}`);
    }
  };

  const handleDownload = () => {
    // Create a text string with user details
    
      fetch("windows.pdf")
        .then((response) => response.blob())
        .then((file) => {
          const url = window.URL.createObjectURL(file);
          const anchor = document.createElement("a");
          anchor.href = url;
          anchor.download = "windows.pdf";
          anchor.click();
        });

  };

  const handlePrint = () => {
    // Implement the print functionality here
    window.print();
  };


  const goToPreviousSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (activeIndex < user.cards.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <>
      <div className="mx-40 2xl:mx-64 2xl:text-xl">
        <div>
          
            <div className=" flex items-center mb-2 ">
            <Link to={"/Myflashcard"}>
            <BsArrowLeft className="text-rose-600 text-xl 2xl:text-2xl font-extrabold " /></Link>
            
            <h1 className="font-bold text-lg 2xl:text-2xl 2xl:font-bold ml-6 leading-3 ">{user.groupname}</h1></div>
           <div> <p className="ml-11 leading-5 font-normal 2xl:text-xl text-slate-500 ">{user.groupdescription}</p></div>
          
        </div>
        <div className="flex mt-7 2xl:mt-10">
          <div className="bg-white w-60 2xl:w-72 h-min py-3 px-7 mr-7 drop-shadow-lg rounded-md">
            <div>
              <h2 className="text-base  mb-2">Flashcard</h2>
            </div>
                <hr className=""/>
            <div className="mt-4">
            {user.cards.map((card,index)=>( 
              <ul key={index} className=" mt-2  font-medium ">
                <li className=" text-red-500 mb-2"><button>{card.cardname}</button></li>
              </ul>
             ) )}
            </div>
          </div>
          <div>
          <div className="bg-white drop-shadow-lg  py-9 w-[600px] 2xl:w-[775px] mr-7 px-4  rounded-md">
          <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          selectedItem={activeIndex}
          onClickItem={(index) => setActiveIndex(index)}
        >
          {user.cards.map((card, index) => (
            <div key={index} className=" grid grid-cols-5 mx-4 px-5 gap-5 h-56 2xl:h-80">
            <div className=" col-start-1 col-span-3 m-auto">
              <img className=" rounded-lg h-40 2xl:h-56 object-fill drop-shadow-lg " src={card.cardImage}  alt="profile" />
            </div>
            <div className="col-start-4 col-span-7 text-sm 2xl:text-xl text-left pl-3">
              <p className="text-base 2xl:text-xl font-semibold mb-3 leading-3 "> {card.cardname} </p>
              <p className=" text-slate-500">
                {card.carddescription} 
              </p>
            </div> 
            </div>
          ))}
      </Carousel> 
        </div>

        <div className='mt-9 flex justify-center pb-8'>
        <div className="flex items-center carousel-navigation space-x-16">
          <span className="carousel-arrow cursor-pointer" onClick={goToPreviousSlide}>
          <AiOutlineLeft className="text-2xl hover:text-red-500"/>
          </span>
          <span className="page-indicator">
            {activeIndex + 1}/{user.cards.length}
          </span>
          <span className="carousel-arrow cursor-pointer" onClick={goToNextSlide}>
           <AiOutlineRight className="text-2xl hover:text-red-500"/>
          </span>
        </div>
      </div>
      </div>
          <div className="w-60 2xl:w-72">
            
              <button onClick={handleShare} className="font-medium rounded-lg w-full drop-shadow-lg px-6 2xl:px-9 flex items-center py-2 2xl:py-3 bg-white"><FcShare className="mr-5 text-lg 2xl:text-xl"/> Share</button>
            
              <button onClick={handleDownload} className="font-medium rounded-lg w-full drop-shadow-lg 2xl:py-3 2xl:px-9 px-6 my-4 flex items-center py-2 bg-white"><FiDownload className="mr-5 text-lg 2xl:text-2xl" /> Download</button>
            
              <button onClick={handlePrint} className="font-medium rounded-lg w-full drop-shadow-lg px-6 2xl:py-3 2xl:px-9 my-4 flex items-center py-2 bg-white"><BsPrinter className="mr-5 text-lg 2xl:text-2xl" /> Print</button>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default FlashcardDetails;