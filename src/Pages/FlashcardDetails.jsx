import React, {useState,useRef,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import notImg from "../Assets/not-img.png";
import Img from "../Assets/img.png";
import { Carousel } from 'react-responsive-carousel';
import {AiOutlineShareAlt, AiFillPrinter, AiOutlineArrowLeft, AiOutlineDownload, AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import handleDownload from "../Components/handleDownload";
import ShareModal from "../Components/Card-Ui/ShareModal";
import { useSelector } from "react-redux/es/hooks/useSelector";

const FlashcardDetails = () => {
  const userData = useSelector((state) => state.flashcards);
  const { id } = useParams();
  //add the content here 
  const pdfRef = useRef();
  const printRef = useRef();
  const user = userData[id];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen,setIsOpen]= useState(false);
  const [share, setShare] = useState("initial");
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const [selectorCardIndex,setSelectorCardIndex]=useState(0);

  const handlePrint = useReactToPrint({
    content: () => printRef.current
  });
  const handelCardClick =(index)=>{
    setSelectorCardIndex(index);
    setActiveIndex(index);
    
  };

 
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
    setIsOpen (true);
    const handleCloseShare = () => {
      setShare("none");
  };
  };

  const downloadPDF = ()=>{
    handleDownload(pdfRef);
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
            <AiOutlineArrowLeft className="text-rose-600 text-xl  2xl:text-2xl font-extrabold " /></Link>
            
            <h1 className="font-bold text-lg 2xl:text-2xl 2xl:font-bold ml-6 leading-3 ">{user.groupname} </h1></div>
           <div> <p className="ml-11 leading-5 font-normal 2xl:text-xl text-slate-500 ">{user.groupdescription}</p></div>
          
        </div>
        <div className="flex mt-7 2xl:mt-10">
          <div className="bg-white w-60 2xl:w-72 h-min py-4 px-7 mr-7 drop-shadow-lg rounded-md">
            <div>
              <h2 className="2xl:text-base text-sm   mb-2">Flashcard</h2>
            </div>
                <hr className=""/>
            <div className="mt-5">
            {user.cards.map((card,index)=>( 
              <ul key={index} className=" mt-2  font-medium ">
                <li className={index === selectorCardIndex ? " text-red-500 mb-1" : "text-black mb-1 font-normal"} onClick ={()=> handelCardClick(index)} ><button>{card.cardname}</button></li>
              </ul>
             ) )}
            </div>
          </div>
          <div>
         <div ref = {printRef}>
          <div className="prinablediv bg-white drop-shadow-lg  py-9 w-[600px] 2xl:w-[775px] mr-7 px-4  rounded-md" ref = {pdfRef}>
          <Carousel 
          
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          selectedItem={activeIndex}
          onClickItem={(index) => setActiveIndex(index)}
        >
          {user.cards.map((card, index) => (
            <div key={index} className=" grid grid-cols-5 px-5 gap-5 h-56 2xl:h-[340px]"  >
            <div className=" col-start-1 col-span-3 my-auto">
              <img className=" rounded-lg h-40 2xl:h-56 object-cover drop-shadow-lg " src={card.cardImage || Img }  alt="profile" />
            </div>
            <div className="col-start-4 col-span-6 text-sm 2xl:text-xl text-left pl-3">
              <p className="text-base 2xl:text-xl font-semibold mb-2 leading-3 "> {card.cardname} </p>
              <p className=" text-slate-500">
                {card.carddescription} 
              </p>
            </div> 
            </div>
          ))}
      </Carousel> 
        </div>
        </div>
        

        <div className='mt-9 flex justify-center pb-8'>
        <div className="flex items-center carousel-navigation space-x-16">
          <span className="carousel-arrow cursor-pointer" onClick={goToPreviousSlide}>
          <AiOutlineLeft className="text-lg font-bold  hover:text-red-500"/>
          </span>
          <span className="page-indicator">
            {activeIndex + 1}/{user.cards.length}
          </span>
          <span className="carousel-arrow cursor-pointer" onClick={goToNextSlide}>
           <AiOutlineRight className="text-lg hover:text-red-500"/>
          </span>
        </div>
      </div>
      </div>
          <div className="w-60 2xl:w-72">
            <div>
            
              <button onClick={openModal} className="font-medium rounded-lg w-full drop-shadow-lg px-6 2xl:px-9 flex items-center py-2 2xl:py-3 bg-white"><AiOutlineShareAlt className="mr-5 text-xl 2xl:text-xl"/> Share</button>
             
              </div>
              
              <button onClick={downloadPDF} className="font-medium rounded-lg w-full drop-shadow-lg 2xl:py-3 2xl:px-9 px-6 my-4 flex items-center py-2 bg-white"><AiOutlineDownload className="mr-5 text-xl 2xl:text-2xl" /> Download</button>
            
              <button onClick={handlePrint} className="font-medium rounded-lg w-full drop-shadow-lg px-6 2xl:py-3 2xl:px-9 my-4 flex items-center py-2 bg-white"><AiFillPrinter className="mr-5 text-xl 2xl:text-2xl" /> Print</button>
            
          </div>
          <ShareModal isOpen={isOpen} closeModal={closeModal} />
        </div>
      </div>
    </>
  );
};
export default FlashcardDetails;