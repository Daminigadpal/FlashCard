import React from "react";
import wolfImg from "../Assets/wolf-img.jpg";
import dogImg from "../Assets/dog-img.png";
const Card = () => {
  return (
    <>
      <div className=" mx-40 mb-6 pt-16 grid grid-cols-3 gap-6">
      {/* 1 up card */}
        <div className="pb-5 col-span-1 bg-white drop-shadow-lg px-4 border-[1px] border-gray-300 rounded-md justify-center">
          <div>
            <img
              className=" relative m-auto -top-8 rounded-full w-16"
              src={dogImg}
              alt="profile_img"
            />
          </div>
          <div>
            <div>
              <h1 className=" text-center -mt-4 text-black font-bold ">
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

        {/* 2 up card */}
        <div className="pb-5 col-span-1 bg-white drop-shadow-lg px-4 border-[1px] border-gray-300 rounded-md justify-center">
          <div>
            <img
              className=" relative m-auto -top-8 rounded-full w-16"
              src={dogImg}
              alt="profile_img"
            />
          </div>
          <div>
            <div>
              <h1 className=" text-center -mt-4 text-black font-bold ">
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
        {/* 3 up card */}
        <div className="pb-5 col-span-1 bg-white drop-shadow-lg px-4 border-[1px] border-gray-300 rounded-md justify-center">
          <div>
            <img
              className=" relative m-auto -top-8 rounded-full w-16"
              src={dogImg}
              alt="profile_img"
            />
          </div>
          <div>
            <div>
              <h1 className=" text-center -mt-4 text-black font-bold ">
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
{/* 3 down card */}
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
    </>
  );
};
export default Card;