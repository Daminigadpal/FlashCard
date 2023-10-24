import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { LiaShareSolid } from "react-icons/lia";
import { FiDownload } from "react-icons/fi";
import { BsPrinter } from "react-icons/bs";

const FlashcardDetails = () => {
  return (
    <>
      <div className="mx-40 py-48 ">
        <div>
          <div className="  ">
            <div className=" flex items-center text-lg mb-2 "><BsArrowLeft />
            
            <h1 className="font-bold ml-5">Web 3</h1></div>
           <div> <p className="pl-9">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p></div>
          </div>
        </div>
        <div className="flex mt-7">
          <div className="bg-white w-60 h-min py-3 px-5 mr-5 drop-shadow-lg rounded-md">
            <div>
              <h2 className="text-xs mb-3">Flashcard</h2>
            </div>
                <hr className=""/>
            <div>
              <ul className="py-2 font-medium">
                <li className="mt-3 text-red-500"><button>Card 1</button></li>
                <li className="mt-3"><button>Card 2</button></li>
                <li className="mt-3"><button>Card 3</button></li>
                <li className="mt-3"><button>Card 4</button></li>
                <li className="mt-3"><button>Card 5</button></li>
              </ul>
            </div>
          </div>
          <div className="bg-white drop-shadow-lg grid grid-cols-5 py-12 px-8 w-[600px] mr-5  rounded-md">
            <div className="col-start-1 col-span-3">
              <img className=" rounded-mg " src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" alt="profile" />
            </div>
            <div className="col-end-6 col-span-2 font-sans leading-4 text-sm pl-7">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div> 
          </div>
          <div className="w-60 ">
            
              <button className="font-medium rounded-lg w-full drop-shadow-lg px-6 flex items-center py-1.5 bg-white"><LiaShareSolid className="mr-5 text-lg"/> Share</button>
            
              <button className="font-medium rounded-lg w-full drop-shadow-lg px-6 my-4 flex items-center py-1.5 bg-white"><FiDownload className="mr-5 text-lg" /> Download</button>
            
              <button className="font-medium rounded-lg w-full drop-shadow-lg px-6 my-4 flex items-center py-1.5 bg-white"><BsPrinter className="mr-5 text-lg" /> Print</button>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default FlashcardDetails;