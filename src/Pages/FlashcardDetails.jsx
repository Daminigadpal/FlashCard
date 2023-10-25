import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import notImg from "../Assets/not-img.png"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BsArrowLeft } from "react-icons/bs";
import { LiaShareSolid } from "react-icons/lia";
import { FiDownload } from "react-icons/fi";
import { BsPrinter } from "react-icons/bs";

const FlashcardDetails = ({ userData }) => {
  const { id } = useParams();
  const user = userData[id];
  const [activeIndex, setActiveIndex] = useState(0);

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
        title: `User Details: ${user.groupname}`,
        text: `Check out the profile of ${user.groupname}`,
        url: shareableLink,
      });
    } else {
      // Provide a fallback for browsers that don't support the Web Share API
      alert(`Shareable Link: ${shareableLink}`);
    }
  };

  const handleDownload = () => {
    // Create a text string with user details
    const flashcardDetailsText = `
    FlashCard:
      Group Name: ${user.groupname}
      Group Description: ${user.groupdescription}
        ${user.cards.map((card, index) => `
        Card ${index + 1}:
          Card Name : ${card.cardname}
          Card Description: ${card.carddescription}`).join('\n')}
    `;

    // Create a Blob and generate a downloadable link
    const blob = new Blob([flashcardDetailsText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FlashCard_${user.groupname}.txt`;
    a.click();
    URL.revokeObjectURL(url);
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
            
            <h1 className="font-bold ml-4">{user.groupname}</h1></div>
           <div> <p className="pl-9">{user.groupdescription}</p></div>
          
        </div>
        <div className="flex mt-7">
          <div className="bg-white w-60 h-min py-3 px-5 mr-5 drop-shadow-lg rounded-md">
            <div>
              <h2 className="text-sm font-semibold mb-3">Flashcard</h2>
            </div>
                <hr className=""/>
            <div>
            {user.cards.map((card,index)=>( 
              <ul key={index} className="py-1  font-medium ">
                <li className="mt-2 text-red-500"><button>{card.cardname}</button></li>
              </ul>
             ) )}
            </div>
          </div>
          <div>
          <div className="bg-white drop-shadow-lg  py-10 px-8 w-[600px] mr-5  rounded-md">
          <Carousel
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          selectedItem={activeIndex}
          onClickItem={(index) => setActiveIndex(index)}
        >
          {user.cards.map((card, index) => (
            <div key={index} className="flex flex-cols gap-5">
            <div className="w-full drop-shadow-md">
              <img className="  rounded-lg h-48" src={card.cardImage}  alt="profile" />
            </div>
            <div className="text-sm pl-5 break-all text-start">
              <h1 className="text-base font-semibold mb-2  "> {card.cardname} </h1>
              <p>
                {card.carddescription} 
              </p>
            </div> 
            </div>
          ))}
        </Carousel> 
        </div>

        <div className='mt-9 flex justify-center '>
        <div className="carousel-navigation space-x-6 ">
          <span className="carousel-arrow cursor-pointer" onClick={goToPreviousSlide}>
            &lt;
          </span>
          <span className="page-indicator">
            {activeIndex + 1}/{user.cards.length}
          </span>
          <span className="carousel-arrow cursor-pointer" onClick={goToNextSlide}>
            &gt;
          </span>
        </div>
      </div>
      </div>
          <div className="w-60 ">
            
              <button onClick={handleShare} className="font-medium rounded-lg w-full drop-shadow-lg px-6 flex items-center py-1.5 bg-white"><LiaShareSolid className="mr-5 text-lg"/> Share</button>
            
              <button onClick={handleDownload} className="font-medium rounded-lg w-full drop-shadow-lg px-6 my-4 flex items-center py-1.5 bg-white"><FiDownload className="mr-5 text-lg" /> Download</button>
            
              <button onClick={handlePrint} className="font-medium rounded-lg w-full drop-shadow-lg px-6 my-4 flex items-center py-1.5 bg-white"><BsPrinter className="mr-5 text-lg" /> Print</button>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default FlashcardDetails;