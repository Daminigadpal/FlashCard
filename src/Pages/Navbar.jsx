import React from "react";
const Navbar = () => {
return(
    <>
        <div>
            <div className="bg-yellow-100 w-full ">
                <img className="" src="" alt=""/>
            </div>
            <div className="mx-40">
                <div>
                    <h1 className="font-bold mt-7 text-lg">Create FlashCard</h1>
                </div>
                <div>
                    <ul className="flex py-2 font-medium text-base ">
                        <li className="px-2 mr-2">Create New</li>
                        <li className="px-2 ml-2">My FlashCard</li>
                    </ul>
                    <hr/>
                </div>
            </div>
        </div>
    </>
);


}

export default Navbar;