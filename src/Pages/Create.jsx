import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';


function Create () {
    //Defined the initial form values
    const initialValues = {
    groupName: '',
    Image:'',
    Description:'',

    };
    //Define the form submuttion handler
        const handlerSubmit = (values) => {
            console.log(values);
        };
        //define form validation rules
        const validateForm = (values) => {
            const errors={};

            if(!values.groupName){
                errors.groupName = 'Group Name is required';
            }
            if(!values.Image){
                errors.Image = 'Image is Required';
            }
            if(!values.Description){
                errors.Description = 'Description is required';
            }
            return errors;
        };

    //Define the inputes of the form
    <div>
        <Formik
            initialValues={initialValues}
            onSubmit={handlerSubmit}
            validate={validateForm}
            >
                <Form>
                    <div>
                        <label htmlFor="groupName">groupName</label>
                        <Field type="text" id="groupName" name="groupName"/>
                        <ErrorMessage name="groupName" component="div"/>
                    </div>
                    <div>
                        <label htmlFor="groupName">groupName</label>
                        <Field type="text" id="groupName" name="groupName"/>
                        <ErrorMessage name="groupName" component="div"/>
                    </div>
                    <div>
                        <label htmlFor="groupName">groupName</label>
                        <Field type="text" id="groupName" name="groupName"/>
                        <ErrorMessage name="groupName" component="div"/>
                    </div>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>

    </div>

    return(
        <div class="bg-orange-400 ">
            <div class="bg-white m-40 font-semibold  pl-9 py-5 border-2 border-gray-300" >
                <label className="block mb-2 text-gray-500">Create Group<span class= "text-rose-500"> *</span></label>
                <div class=" flex bg-white font-semibold  ">            
                    <input
                        className=" border border-gray-400  rounded px-2 py-1"
                        type="text"
                        placeholder="Group Name"
                    />
                    <label htmlFor="upload" class="flex items-center border border-gray-400 rounded pr-2 mx-5 text-blue-400 cursor-pointer text-sm mx-2 color=red text-xl" >Upload Image
                    </label>
                    <input id="upload" type="file" accept="image/jpg, image/jpeg, image/gif" className="hidden" font/>
                    
                </div>
                <div>
                    <label className="block mb-2 text-gray-500 mt-3 ">Add description</label>
                    <textarea class="border border-gray-400 rounded-md px-3 py-2 resize-none text-sm" placeholder="Description the role, responsibility, skill required for the job and help candidate understand the role better." rows={4} cols="85"/>
                </div>
            </div>

        </div>

    );
}

export default Create;