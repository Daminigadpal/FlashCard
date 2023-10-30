import React from "react";
import { Link } from "react-router-dom";
import notImg from "../Assets/not-img.png"
import { useLocation } from "react-router-dom";
import wolfImg from "../Assets/wolf-img.jpg";
import dogImg from "../Assets/dog-img.png";
import Capture from "../Assets/capture.png"



const MAX_CHARACTERS = 70;

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};


const MyFlashcard = ({userData =[], onRemove }) => {

  console.log(userData.map); // Debug line
  // const location = useLocation();
  // const flashcardData = location.state && location.state.flashcardData;


  return (
    <>
    {userData.length !== 0 ? (
    <div className=" mx-40 mb-6 grid grid-cols-3 gap-9">
      {/* 1 up card */}
      {userData ((user, index) => (

                  
       
            
              
        <div key={index} className="round-[1px]">      

        <img className="object-cover rounded-tl-md banner rounded-tr-md brightness-[100%] w-full  h-24 " src={user.cards[0].cardImage}  alt="banner" />
                    
        <div className=" col-span-1  bg-white drop-shadow-lg border-gray-300 pb-5  px-4  justify-center rounded-bl-md rounded-br-md">
            {/* group image */}
            <div>
              <img
                className=" border-[3px] object-cover border-white relative m-auto -top-8 rounded-full w-[75px] h-[75px]"
                src={user.groupImg}
                alt="profile_img"
              />
            </div>

            <div>
              {/* group name */}

              <div>
                <h1 className=" text-center -mt-6 text-black font-bold letter tracking-wider">
                  {user.groupname}
                </h1>
              </div>

              {/* group description  */}

              <div className="mx-6 ">
                <h1 className=" my-3 text-center text-sm font-medium ">
                  {truncateText(user.groupdescription, MAX_CHARACTERS)}
                </h1>
              </div>

              {/* number of cards  */}
              <div>
                <p className="text-center text-gray-500 font-medium text-sm">
                  {user.cards.length} Cards
                </p>
              </div>
              {/* view card button  */}
              <div className="flex space-x-11 justify-center ">
                <Link to={`/flashcarddetails/${index}`}>
                  <button className="mt-4 border-2 rounded-[4px] py-[1px] w-24 hover:bg-red-500 hover:text-white hover:shadow-rose-300 shadow-lg  border-red-200 hover:border-red-500 text-red-500 font-medium ">
                     Details
                  </button>
                </Link>

                <button
                  onClick={() => onRemove(index)}
                  className="mt-4 border-2 rounded-[4px] w-24 py-[2px] hover:bg-red-500 hover:text-white hover:shadow-rose-300 shadow-lg border-red-200 hover:border-red-500 text-red-500 font-medium "
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    ): (

      <div className="text-center">
          <img src={notImg} alt="not found" className="mx-auto h-48"/>
          <h1 className="text-xl mb-4 font-semibold">Flashcard not available</h1>
          <p className="text-gray-500 mb-4" >Sorry about that, Please create Flashcard</p>
          <Link to={`/`}> {" "}
            <button type="button" className="px-7 py-2 border-[1px] border-red-500   text-red-500 hover:bg-red-500 hover:text-white font-medium rounded-lg shadow-md"><span>Create Flashcard</span> </button>
          </Link>
        </div>
    ) }
</>
  );
    };

      export default MyFlashcard;