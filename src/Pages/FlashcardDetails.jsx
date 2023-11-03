import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import notImg from "../Assets/not-img.png"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BsArrowLeft } from "react-icons/bs";
import { LiaShareSolid } from "react-icons/lia";
import { FiDownload } from "react-icons/fi";
import { BsPrinter } from "react-icons/bs";
import {LuChevronLeft, LuChevronRight} from "react-icons/lu";

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
      <div className="mx-40">
        <div>
          
            <div className=" flex items-center text-lg mb-2 ">
            <Link to={"/Myflashcard"}>
            <BsArrowLeft className="text-rose-600 text-xl font-extrabold " /></Link>
            
            <h1 className="font-bold ml-6 leading-3 ">{user.groupname}</h1></div>
           <div> <p className="ml-11 leading-5 font-normal te text-slate-500 ">{user.groupdescription}</p></div>
          
        </div>
        <div className="flex mt-7">
          <div className="bg-white w-60 h-min py-3 px-5 mr-5 drop-shadow-lg rounded-md">
            <div>
              <h2 className="text-sm font-semibold mb-1">Flashcard</h2>
            </div>
                <hr className=""/>
            <div className="mt-4">
            {user.cards.map((card,index)=>( 
              <ul key={index} className=" mt-2  font-medium ">
                <li className=" text-red-500"><button>{card.cardname}</button></li>
              </ul>
             ) )}
            </div>
          </div>
          <div>
          <div className="bg-white drop-shadow-lg  py-9 w-[600px] mr-5  rounded-md">
          <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          selectedItem={activeIndex}
          onClickItem={(index) => setActiveIndex(index)}
        >
          {user.cards.map((card, index) => (
            <div key={index} className=" grid grid-cols-5 mx-4 px-5 gap-5 ">
            <div className=" col-start-1 col-span-3 m-auto">
              <img className=" rounded-lg h-40 object-fill drop-shadow-lg " src={card.cardImage}  alt="profile" />
            </div>
            <div className="col-start-4 col-span-7 text-sm text-left pl-3">
              <p className="text-base font-semibold mb-3 leading-3 "> {card.cardname} </p>
              <p>
                {card.carddescription} 
              </p>
            </div> 
            </div>
          ))}
      </Carousel> 
        </div>

        <div className='mt-9 flex justify-center w-full pb-8'>
        <div className="flex items-center carousel-navigation space-x-16">
          <span className="carousel-arrow cursor-pointer" onClick={goToPreviousSlide}>
          <LuChevronLeft className="text-2xl hover:text-red-500"/>
          </span>
          <span className="page-indicator">
            {activeIndex + 1}/{user.cards.length}
          </span>
          <span className="carousel-arrow cursor-pointer" onClick={goToNextSlide}>
           <LuChevronRight className="text-2xl hover:text-red-500"/>
          </span>
        </div>
      </div>
      </div>
          <div className="w-60 ">
            
              <button onClick={handleShare} className="font-medium rounded-lg w-full drop-shadow-lg px-6 flex items-center py-2 bg-white"><LiaShareSolid className="mr-5 text-lg"/> Share</button>
            
              <button onClick={handleDownload} className="font-medium rounded-lg w-full drop-shadow-lg px-6 my-4 flex items-center py-2 bg-white"><FiDownload className="mr-5 text-lg" /> Download</button>
            
              <button onClick={handlePrint} className="font-medium rounded-lg w-full drop-shadow-lg px-6 my-4 flex items-center py-2 bg-white"><BsPrinter className="mr-5 text-lg" /> Print</button>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default FlashcardDetails;