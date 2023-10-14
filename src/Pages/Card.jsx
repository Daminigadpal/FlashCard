import React from "react";
import wolfImg from "../Assets/wolf-img.jpg";
import dogImg from "../Assets/dog-img.png";
const Card = () => {
  return (
    <>
      <div className=" mx-40 mb-6 pt-16 grid grid-cols-3 gap-6">
      {/* 1 up card */}
        <div className=" col-span-1  bg-white drop-shadow-lg border-[1px] rounded-md border-gray-300">
          <div >
            <img className="object-cover rounded-tl-md rounded-tr-md brightness-[90%] w-full  h-24 " src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" alt="banner"/>
          </div>
        
        <div className="pb-5  px-4  justify-center rounded-bl-md rounded-br-md">
        
          <div>
            <img
              className=" border-[3px] border-white relative m-auto -top-8 rounded-full w-[75px]"
              src={dogImg}
              alt="profile_img"
            />
          </div>
          <div>
            <div>
              <h1 className=" text-center -mt-6 text-black font-bold ">
                Web 3
              </h1>
            </div>
            <div>
              <p className=" my-3 m text-center text-sm font-medium ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
              <h6 className="text-center text-gray-500 font-medium text-sm">
                6 Cards
              </h6>
            </div>
            <div className="flex items-center">
              <button className="mt-4 mx-auto border-2 rounded-[4px] w-48 py-1 hover:bg-red-500 hover:text-white hover:shadow-rose-300 shadow-lg border-red-500 text-red-600 font-medium ">
                View Cards
              </button>
            </div>
          </div>
        </div>
        </div>

        {/* 2 up card */}
        <div className=" col-span-1  bg-white drop-shadow-lg border-[1px] rounded-md border-gray-300">
          <div >
            <img className="object-cover rounded-tl-md rounded-tr-md brightness-[80%] w-full  h-24 " src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" alt="banner"/>
          </div>
        
        <div className="pb-5  px-4  justify-center rounded-bl-md rounded-br-md">
        
          <div>
            <img
              className=" border-[2px] border-white relative m-auto -top-8 rounded-full w-[75px]"
              src={dogImg}
              alt="profile_img"
            />
          </div>
          <div>
            <div>
              <h1 className=" text-center -mt-6 text-black font-bold ">
                Web 3
              </h1>
            </div>
            <div>
              <p className=" my-3 m text-center text-sm font-medium ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            {/* <div>
              <h6 className="text-center text-gray-500 font-medium text-sm">
                6 Cards
              </h6>
            </div> */}
            <div className="flex items-center">
              <button className=" mt-4 mx-auto border-2 rounded-[4px] w-48 py-1 hover:bg-neutral-50 border-red-500 text-red-600 font-medium ">
                View Cards
              </button>
            </div>
          </div>
        </div>
        </div>

        {/* 3 up card */}
        <div className=" col-span-1 drop-shadow-lg border-[1px] rounded-md border-gray-300">
          <div >
            <img className="object-cover rounded-tl-md rounded-tr-md brightness-[80%] w-full  h-24 " src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" alt="banner"/>
          </div>
        
        <div className="pb-5 bg-white  px-4  justify-center rounded-bl-md rounded-br-md">
        
          <div>
            <img
              className=" border-[2px] border-white relative m-auto -top-8 rounded-full w-[75px]"
              src={dogImg}
              alt="profile_img"
            />
          </div>
          <div>
            <div>
              <h1 className=" text-center -mt-6 text-black font-bold ">
                Web 3
              </h1>
            </div>
            <div>
              <p className=" my-3 m text-center text-sm font-medium ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
              <h6 className="text-center text-gray-500 font-medium text-sm">
                6 Cards
              </h6>
            </div>
            <div className="flex items-center">
              <button className="mt-4 mx-auto border-2 rounded-[4px] w-48 py-1 hover:bg-neutral-50 border-red-500 text-red-600 font-medium ">
                View Cards
              </button>
            </div>
          </div>
        </div>
        </div>


      </div>

      {/* 1 down second card */}
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
{/* 2nd down card */}
        
{/* 3 down card */}
        
      </div>
    </>
  );
};
export default Card;
