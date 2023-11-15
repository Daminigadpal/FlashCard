import React, { useRef, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  setFieldValue,
  useFormikContext
} from "formik";
import FlashCardSchema from "../Validations/schema/FlashcardSchema";
import { nanoid } from "nanoid";
import {
  AiOutlinePlus,
  AiOutlineUpload,
  AiOutlineEdit,
  AiOutlineDelete,
  AiFillFileImage,
  AiOutlineClose
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import TextError from "../Validations/customErrorForm/TextError";
import { setFlashCard } from "../App/features/flashcardSlice";

const CreateFlashCard = ({ onSubmit }) => {
  
  const [DisableCards, setDisableCards] = useState(true);
  const [showCloseButton, setShowCloseButton] = useState(false);
const [removeImage, setRemoveImage] = useState(false);

  const dispatch = useDispatch();
  const filePicker = useRef(null);

  const handleEditButtonClick = (index) => {
    editRef.current[index].focus();
  }

  const editRef = useRef([]);

  // Define a function to handle card image click
const handleCardImageClick = (index, setFieldValue) => {
  setFieldValue(`cards.${index}.cardImage`,null)
}

const filePickerRef = useRef([]);

  return (
    <Formik
      initialValues={{
        id: nanoid(),
        groupname: "",
        groupdescription: "",
        groupImg: null,
        cards: [
          {
            cardid: nanoid(),
            cardname: "",
            carddescription: "",
            cardImage: null,
          },
        ],
        createOn: new Date(Date.now()).toLocaleString(),
      }}
      validationSchema={FlashCardSchema}
      onSubmit={(values, { resetForm }) => {
        // onSubmit(values); // Pass the values to the parent component
        dispatch(setFlashCard(values));
        resetForm(); // Clear the form
        toast.success("👍 Flashcard Created !", {
          position: "top-center",
          autoClose: 2000, // 3 seconds
          hideProgressBar: false,
        });
        // saveForm(values);
      }}
    >
      {({ values, isSubmitting,setFieldValue }) => (
        <Form className="max-w-screen-2xl  mx-auto text-black-600 text-bold 2xl:text-xl font-medium px-4 lg:px-40 2xl:px-16">
          {/* Create group */}
          <div className="px-10 py-4 bg-white drop-shadow-lg rounded-lg">
            {/* Name Group */}
            <div className="flex items-end gap-7">
              <div className="flex flex-col ">
                <label htmlFor="createGroup" className="text-gray-600  py-2 mt-2"
                >
                  Create Group <span className="text-red-700">*</span>
                </label>
                <Field
                  type="text"
                  name="groupname"
                  id="createGroup"
                  placeholder="Enter Group Name"
                  className="border-gray-300 md:w-96 font-medium border-[1px] rounded-md p-2 bg-gray-50"
                  onBlur={(e) => {
                    // Enable the carddescription field when group description is filled
                    if (e.target.value) {
                      setDisableCards(false);
                    } else {
                      setDisableCards(true);
                    }
                  }}
                />
                <ErrorMessage component={TextError} name="groupname" />
              </div>
              
              
              <div className="">
               
                  <button
                    type="button"
                    onClick={() => filePicker.current.click()}
                    className="md:flex items-center px-5 py-2 mt-6 border-[1px] border-slate-300 text-blue-700 font-semibold rounded-md space-x-2 shadow-md"
                  >
                    <input
                      type="file"
                      ref={filePicker}
                      name="groupImg"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        const reader = new FileReader();
                        reader.readAsDataURL(file);

                        reader.onload = () => {
                          setFieldValue(`groupImg`, reader.result);
                        };
                      }}
                      hidden
                    />
                    <AiOutlineUpload className="w-5 h-5" />
                    {values.groupImg ? <span>Change Image</span> : <span>Upload Image</span>}
                  </button>
                  
               

                
              </div> {values.groupImg && (
                <img
                    src={values.groupImg}
                    alt="groupImg"
                    className="h-20 rounded-lg border-[1px] shadow-md object-contain z-10 relative top-9"/>)}
            </div>

            {/* Add Description */}
            <div className="flex flex-col w-full my-5">
              <label
                htmlFor="addDescription"
                className="text-gray-600 mb-2 font-semibold"
              >
                Add Description <span className="text-red-700">*</span>
              </label>
              <Field
                as="textarea"
                name="groupdescription"
                id="addDescription"
                placeholder="Write your description here (max length is 500 words)"
                className="border-[1px] 2xl:h-40 border-gray-200 md:h-20 bg-gray-50 rounded-md p-3 resize-none"
                maxLength="500"
                spellCheck="false"
              />
              <ErrorMessage component={TextError} name="groupdescription" />
            </div>
          </div>

          {/* card  */}

          <div className={` text-black drop-shadow-lg pt-8 bg-white border shadow-lg rounded-lg py-10 pl-10 mt-5 ${
              DisableCards ? "pointer-events-none, opacity-50" : ""
            }`}>

            <FieldArray name="cards">
              {(arrayHelper) => {
                const cards = values.cards;
                return (
                  <div className="   flex flex-col w-full ">
                    {cards && cards.length > 0
                      ? cards.map((card, index) => (
                          <div key={index} className="flex gap-6 pr-4">
                            <div className="w-2 h-2 px-3 py-3 flex items-center justify-center bg-red-400 text-white text-md font-semibold rounded-full">
                              {index + 1}
                            </div>
                            {/* Enter term */}
                            <div className="">
                              <label
                                htmlFor={`cards.${index}.cardname`}
                                className=" text-gray-600 text-base block">
                                Enter Term{" "}
                                <span className="text-red-600">*</span>
                              </label>
                              <Field
                                type="text"
                                id={`cards.${index}.cardname`}
                                innerRef={(ref)=>editRef.current[index]=ref}
                                name={`cards.${index}.cardname`}
                                className="border-gray-200 mt-1 border-[1px] p-2 md:w-72 2xl:w-96 rounded-lg bg-gray-50"
                                placeholder="javascript"
                                disabled={DisableCards}
                              />
                              <ErrorMessage
                                component={TextError}
                                name={`cards.${index}.cardname`}
                              />
                            </div>

                            {/* Enter Description  */}
                            <div>
                              <label
                                htmlFor={`cards.${index}.carddescription`}
                                className="text-gray-600 text-base block"
                              >
                                Enter Description{" "}
                                <span className="text-red-600">*</span>
                              </label>
                              <Field
                                as="textarea"
                                id={`cards.${index}.carddescription`}
                                value= {card.carddescription}
                                name={`cards.${index}.carddescription`}
                                className= "mb-0  border-gray-200 mt-1 border-[1px] p-2 h-20 md:w-[350px] 2xl:w-[420px] rounded-lg bg-slate-50 resize-none"
                                placeholder="This is description"
                                disabled={DisableCards}
                              />
                              <ErrorMessage
                                component={TextError}
                                name={`cards.${index}.carddescription`}
                              />
                            </div>

                            {/* Upload card image  */}
                            <div className="">
                              {card.cardImage ? (
                                <div className="flex ">
                                    <button className="absolute z-50 rounded-2xl ml-[4px] h-auto mt-8 border-red-600 border-2 text-xs text-red-700" onClick={() => handleCardImageClick(index,setFieldValue)}> <AiOutlineClose/> </button>
                                  <img
                                    src={card.cardImage}
                                    alt="cardimg"
                                    className=" h-20 shadow-md mt-7 border-[1px] object-contain rounded-lg hover:opacity-50 "
                                    
                                />                               
                                </div>
                              ) : (
                                <button
                                  type="button"
                                  className=" md:flex items-center px-10 py-2 mt-7 border-[1px] border-blue-500 text-blue-600 
                            drop-shadow-lg font-semibold rounded-md"
                                  onClick={() => filePickerRef.current[index].click()}
                                  disabled={DisableCards}
                                >
                                  <input
                                    type="file"
                                    ref={(ref) => (filePickerRef.current[index]= ref)}
                                    value={card.cardImage}
                                    onChange={(e) => {
                                      const file = e.target.files[0];
                                      const reader = new FileReader();
                                      reader.readAsDataURL(file);

                                      reader.onload = () => {
                                        setFieldValue(
                                          `cards.${index}.cardImage`,
                                          reader.result
                                        );
                                      };
                                    }}
                                    hidden
                                  />
                                  <span>Select Image</span>
                                  
                                  
                                </button>
                                
                                
                              )}
                            </div> 
                            <div className="  ml-2 space-y-4 mt-9 2xl:ml-9">
                                    <button
                                    
                                      type="button"
                                      onClick={() => 
                                        
                                        handleEditButtonClick(index)
                                      }
                                      className=" text-blue-500 block text-lg font-extrabold p-1"
                                      disabled={DisableCards}
                                    >
                                      <AiOutlineEdit/>
                                    </button>

                                    <button
                                      type="button"
                                      className=" text-red-500  text-lg  p-1"
                                      onClick={() => arrayHelper.remove(index)}
                                      disabled={DisableCards}
                                    >
                                      <AiOutlineDelete />
                                    </button>
                                  </div>
                           
                          </div>
                        ))
                      : null}



                    {/* add more button  */}
                    <div className=" py-2">
                      <button
                        type="button"
                        onClick={() =>
                          arrayHelper.push({
                            cardid: nanoid(),
                            cardname: "",
                            carddescription: "",
                            cardImage: null,
                          })
                        }
                        className="flex items-center space-x-2 text-blue-600 text-md mt-0"
                        disabled={DisableCards}
                      >
                        <AiOutlinePlus />
                        <span>Add More</span>
                      </button>
                    </div>
                  </div>
                );
              }}
            </FieldArray>
          </div>

          <div className="flex justify-center w-full my-8">
            <button
              disabled={isSubmitting}
              type="submit"
              className="py-2 px-14 border-[1px]  border-red-500 hover:bg-red-500 shadow-md text-red-500 hover:text-white rounded-md"
            >
              Create
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default CreateFlashCard;
