import React from "react";
import { Link } from "react-router-dom";
import notImg from "../Assets/not-img.png";
import { useLocation } from "react-router-dom";
import wolfImg from "../Assets/wolf-img.jpg";
import dogImg from "../Assets/dog-img.png";
// import Capture from "../Assets/capture.png"
import ShareModal from "../Components/Card-Ui/ShareModal";



import Capture from "../Assets/capture.png";
import Img from "../Assets/img.png";
import profileImg from "../Assets/profileimg.png";

const MAX_CHARACTERS = 70;

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const MyFlashcard = ({ userData, onRemove }) => {
  // const location = useLocation();
  // const flashcardData = location.state && location.state.flashcardData;

  return (
    <>
      {userData.length !== 0 ? (
        <div className=" mx-40 2xl:mx-64 mb-6 grid grid-cols-3 gap-9">
          {userData.map((user, index) => (
            <div key={index} className="round-[1px] 2xl:text-xl">
              <img
                className="object-cover rounded-tl-md banner rounded-tr-md brightness-[100%] w-full  h-24 2xl:h-32"
                src={user.cards[0].cardImage || Img }
                alt="banner"
              />

              <div className=" col-span-1   bg-white drop-shadow-lg border-gray-300 pb-5 px-4 h-60 2xl:h-72 justify-center rounded-bl-md rounded-br-md">
                {/* group image */}
                <div>
                  <img
                    className=" border-[3px] object-cover border-white relative m-auto -top-8 rounded-full w-[75px] h-[75px]"
                    src={user.groupImg || Capture}
                    alt="profile_img"
                  />
                </div>

                <div className="">
                  {/* group name */}

                  <div>
                    <h1 className=" text-center -mt-6 text-black font-bold 2xl:text-xl 2xl:-mt-4  letter tracking-wider">
                      {user.groupname}
                    </h1>
                  </div>

                  {/* group description  */}

                  <div className="mx-6 ">
                    <h1 className=" my-3 2xl:my-5 h-12 text-center text-sm 2xl:text-base font-medium ">
                      {truncateText(user.groupdescription, MAX_CHARACTERS)}
                    </h1>
                  </div>

                  {/* number of cards  */}
                  <div>
                    <p className="text-center text-gray-500 2xl:text-base font-medium text-sm">
                      {user.cards.length} Cards
                    </p>
                  </div>
                  {/* view card button  */}
                  <div className="flex space-x-11 2xl:space-x-20 justify-center mt-4 2xl:mt-6">
                    <Link to={`/flashcarddetails/${index}`}>
                      <button className=" border-[1px] rounded-[4px] py-[2px] 2xl:py-1 w-24 2xl:w-28 bg-rose-500 text-white shadow-lg border-red-500 font-medium ">
                        Details
                      </button>
                    </Link>

                    <button
                      onClick={() => onRemove(index)}
                      className=" border-[1px] rounded-[4px] w-24 py-[2px] 2xl:w-28 border-red-200 shadow-lg hover:border-red-500 text-red-600 font-medium "
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <img src={notImg} alt="not found" className="mx-auto h-48" />
          <h1 className="text-xl mb-4 font-semibold">
            Flashcard not available
          </h1>
          <p className="text-gray-500 mb-4">
            Sorry about that, Please create Flashcard
          </p>
          <Link to={`/`}>
            {" "}
            <button
              type="button"
              className="px-7 py-2 border-[1px] border-red-500   text-red-500 hover:bg-red-500 hover:text-white font-medium rounded-lg shadow-md"
            >
              <span>Create Flashcard</span>{" "}
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default MyFlashcard;
