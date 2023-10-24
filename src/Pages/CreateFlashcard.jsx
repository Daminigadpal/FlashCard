import React, { useRef, useState, useEffect } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  setFieldValue,
} from "formik";

import FlashCardSchema from "../Validations/schema/FlashcardSchema";
import { nanoid } from "nanoid";
import {
  AiOutlinePlus,
  AiOutlineUpload,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setFlashCard } from "../App/features/flashcardSlice";
import TextError from "../Validations/customErrorForm/TextError";
import { useNavigate } from "react-router-dom";

const CreateFlashCard = ({ onSubmit }) => {
  const [DisableCards, setDisableCards] = useState(true);
  const [DisableImage, setDisableImage] = useState(true);
  const dispatch = useDispatch();
  const filePickerRef = useRef(null);
  const editRef = useRef(null);
  const filePicker = useRef(null);
  const [groupImg, setGroupImg] = useState(""); // Import navigate
  // Load the groupname and groupdescription from local storage
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const storedGroupname = localStorage.getItem("groupname");
  //   const storedGroupdescription = localStorage.getItem("groupdescription");

  //   if (storedGroupname) {
  //     // If groupname exists in local storage, set it in the form
  //     setFieldValue("groupname", storedGroupname);
  //   }

  //   if (storedGroupdescription) {
  //     // If groupdescription exists in local storage, set it in the form
  //     setFieldValue("groupdescription", storedGroupdescription);
  //   }
  // }, []);

  //   const onSubmit = (values, actions) => {
  //     dispatch(setFlashCard(values));
  //     actions.resetForm();
  //     // localStorage.setItem("groupname", values.groupname);
  //     // localStorage.setItem("groupdescription", values.groupdescription);

  //     // Send data to MyFlashCard and navigate to it
  //     // navigate("/myflashcard", { state: { flashcardData: values } });
  // };

  return (
    <Formik
      initialValues={{
        groupid: nanoid(),
        groupname: "",
        groupdescription: "",
        groupimg: null,
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
        onSubmit(values); // Pass the values to the parent component
        resetForm(); // Clear the form
        localStorage.setItem("formData", JSON.stringify(values));
      }}
    >
      {({ values, isSubmitting, setFieldValue }) => (
        <Form className="max-w-screen-2xl  mx-auto text-black-600 text-bold font-medium px-4 lg:px-40 2xl:px-16">
          {/* Create group */}
          <div className="px-10 py-4 bg-white drop-shadow-lg rounded-lg">
            {/* Name Group */}
            <div className="flex items-end gap-7">
              <div className="flex flex-col ">
                <label
                  htmlFor="createGroup"
                  className="text-gray-600 py-2 mt-2"
                >
                  Create Group <span className="text-red-700">*</span>
                </label>
                <Field
                  type="text"
                  name="groupname"
                  id="createGroup"
                  placeholder="Enter Group Name"
                  className="border-gray-300 md:w-96 border-2 rounded-md p-2 bg-gray-50"
                  onBlur={(e) => {
                    // Enable the carddescription field when group description is filled
                    if (e.target.value) {
                      setDisableCards(false);
                      setDisableImage(false);
                    } else {
                      setDisableCards(true);
                      setDisableImage(true);
                    }
                  }}
                />
                <ErrorMessage component={TextError} name="groupname" />
              </div>
              <div className=" ">
                {groupImg ? (
                  <img
                    src={groupImg}
                    alt="groupImg"
                    className="w-24 object-contain"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => filePicker.current.click()}
                    className={`md:flex items-center px-5 py-2 mt-6 border-2 border-slate-300 active:border-blue-600 text-blue-700 font-semibold rounded-md space-x-2`}
                  >
                    <input
                      type="file"
                      ref={filePicker}
                      value={groupImg}
                      onChange={(e) => {
                        const file = e.target.files[0];
                        const reader = new FileReader();
                        reader.readAsDataURL(file);

                        reader.onload = () => {
                          setFieldValue("groupimg", reader.result);
                          setGroupImg(reader.result);
                        };
                      }}
                      hidden
                    />
                    <AiOutlineUpload className="w-5 h-5" />
                    <span>Upload Image</span>
                  </button>
                )}
              </div>
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
                className="border-2 2xl:h-40 border-gray-200 md:h-20 bg-gray-50 rounded-md p-3 resize-none"
                maxLength="500"
                spellCheck="false"
              />
              <ErrorMessage component={TextError} name="groupdescription" />
            </div>
          </div>

          {/* card  */}

          <div
            className={` text-black drop-shadow-lg pt-8 bg-white border shadow-lg rounded-lg p-10 mt-11 ${
              DisableCards ? "pointer-events-none, opacity-50" : ""
            }`}
          >
            <FieldArray name="cards">
              {(arrayHelper) => (
                <div className="   flex flex-col w-full ">
                  {values.cards.map((card, index) => (
                    <div key={index} className="flex gap-7 pr-4 pb-4">
                      {/* Enter term */}
                      <div className="">
                        <label
                          htmlFor={`cards.${index}.cardname`}
                          className=" text-gray-600 text-base block"
                        >
                          Enter Term <span className="text-red-600">*</span>
                        </label>
                        <Field
                          type="text"
                          id={`cards.${index}.cardname`}
                          innerRef={editRef}
                          name={`cards.${index}.cardname`}
                          className="border-gray-200 mt-1 border-2 p-2 w-96 rounded-lg bg-gray-50"
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
                          name={`cards.${index}.carddescription`}
                          className="border-gray-200 mt-1 border-2 p-2 h-11 w-[420px] rounded-lg bg-slate-50 resize-none"
                          placeholder="This is description"
                          disabled={DisableCards}
                        />
                        <ErrorMessage
                          component={TextError}
                          name={`cards.${index}.carddescription`}
                        />
                      </div>

                      {/* Upload card image  */}
                      <div className="flex items-center">
                        {card.cardImage ? (
                          <div className="flex items-center">
                            <img
                              src={card.cardImage}
                              alt="cardimg"
                              className="w-32 object-contain "
                            />
                            <div className=" space-x-2 ml-4">
                              <button
                                type="button"
                                onClick={() => {
                                  editRef.current.focus();
                                }}
                                className=" text-white p-2  rounded-md  px-3 bg-blue-500 hover:text-blue-700  "
                              >
                                <AiOutlineEdit />
                              </button>

                              {values.cards.length <= 1 ?null :  (
                                <button
                                  className="bg-red-500 px-3 text-white p-2 rounded-md hover:text-red-500"
                                  onClick={() => arrayHelper.remove(index <= 1)}
                                >
                                  <AiOutlineDelete />
                                </button>
                              )}
                            </div>
                          </div>
                        ) : (
                          <button
                            className="md:flex items-center px-5 py-2 mt-5 border-2 border-slate-200 active:border-blue-600 text-blue-700 font-semibold rounded-md  space-x-2"
                            onClick={() => {
                              if (!DisableImage) {
                                filePickerRef.current.click();
                              }
                            }}
                            disabled={DisableImage}
                          >
                            <input
                              type="file"
                              ref={filePickerRef}
                              value={card.cardImage}
                              onChange={(e) => {
                                const file = e.target.files[0];
                                const reader = new FileReader();
                                reader.readAsDataURL(file);

                                reader.onload = () => {
                                  arrayHelper.replace(index, {
                                    ...card,
                                    cardImage: reader.result,
                                  });
                                };
                              }}
                              hidden
                            />
                            <AiOutlineUpload className="w-5 h-5" />
                            <span>Upload Image</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}

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
                      className="flex items-center space-x-2 text-blue-900 text-md mt-0"
                      disabled={DisableCards}
                    >
                      <AiOutlinePlus />
                      <span>Add More</span>
                    </button>
                  </div>
                </div>
              )}
            </FieldArray>
          </div>

          <div className="flex justify-center w-full my-8">
            <button
              disabled={isSubmitting}
              type="submit"
              className="py-2 px-14 border-2  border-red-500 hover:bg-red-500 shadow-md text-red-500 hover:text-white rounded-md"
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
