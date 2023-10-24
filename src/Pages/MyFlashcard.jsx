import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import wolfImg from "../Assets/wolf-img.jpg";
import dogImg from "../Assets/dog-img.png";
import Capture from "../Assets/capture.png"


const MAX_CHARACTERS = 40;

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};


const MyFlashcard = ({userData,onRemove}) => {
  // const location = useLocation();
  // const flashcardData = location.state && location.state.flashcardData;


  return (
    <>{userData ? (
      
      <div className=" mx-40 mb-6 grid grid-cols-3 gap-6">
          {/* 1 up card */}
          
            <div className=" col-span-1  bg-white drop-shadow-lg border-[1px] rounded-md border-gray-300">
            
            {/* {userData && userData.length > 0 && (
              <div>
              {userData.map((user, index) => (
                <div >
                  {user.card.cardImage && (
                    <img className="object-cover rounded-tl-md rounded-tr-md brightness-[90%] w-full  h-24 " src={card.cardImage} alt="banner" />
                  )}
                </div>
              ))}
              </div>
              )} */}
              
              {userData.map((user, index) => ( 
              <div key={index} className="pb-5  px-4  justify-center rounded-bl-md rounded-br-md">
                {/* group image */}
                <div>
                  
                    <img
                      className=" border-[3px] border-white relative m-auto -top-8 rounded-full w-[75px]"
                      src={user.groupimg}
                      alt="profile_img"
                    />
                  

                </div>
               
                <div>
                 {/* group name */}

                    <div>
                      <h1 className=" text-center -mt-6 text-black font-bold ">
                    {user.groupname}
                      </h1>
                    </div>
                 
                  {/* group description  */}
                  
                    <div>
                      <p className=" my-3 m text-center text-sm font-medium ">{truncateText
                        (user.groupdescription, MAX_CHARACTERS)}
                      </p>
                    </div>
                
                  {/* number of cards  */}
                  <div>
                    <p className="text-center text-gray-500 font-medium text-sm">
                      {user.cards.length} Cards
                    </p>
                  </div>
                  {/* view card button  */}
                  <div className="flex">
                    <link to = {`/flashcarddetails/${index}`}>
                    <button className="mt-4 mx-auto border-2 rounded-[4px] w-48 py-1 hover:bg-red-500 hover:text-white hover:shadow-rose-300 shadow-lg border-red-500 text-red-600 font-medium ">
                      View Cards
                    </button>
                    </link>
                    <button onClick={()=> onRemove(index)} className="mt-4 mx-auto border-2 rounded-[4px] w-48 py-1 hover:bg-red-500 hover:text-white hover:shadow-rose-300 shadow-lg border-red-500 text-red-600 font-medium ">
                      Remove
                    </button>
                  </div>

                </div>
              </div>
              ))}
            </div>
          </div>
        
      
    ) : (
     <p>create card first</p>
      /* Your rendering logic */

       /* <>
          <div className=" mx-40 pb-48 grid grid-cols-3  gap-6">
            <div className="px-6 py-6 pb-5 bg-white drop-shadow-lg  border-[1px] border-gray-300 rounded-md justify-center">
              <div className="grid grid-cols-4 ">
                <div>
                  <img
                    className="col-start-1 col-span-1  rounded-full w-14"
                    src={wolfImg}
                    alt="profile_img"
                  />
                </div>
                <div className="my-auto mx-2 col-span-3 col-end-5 ">
                  <h1 className="  text-black font-bold ">Web 3</h1>
                  <h6 className=" text-gray-500 font-medium text-xs">6 Cards</h6>
                </div>
              </div>
              <div>
                <p className=" my-5 text-sm font-medium ">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
              </div>
              <div className="">
                <button className="my-1  mx-auto  hover:bg-neutral-50 text-red-600 font-medium ">
                  View Cards
                </button>
              </div>
            </div>

          </div>
        </> */

      )}
    </>
      );
    };

      export default MyFlashcard;