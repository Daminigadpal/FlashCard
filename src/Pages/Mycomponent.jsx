import React from 'react';
import { AiOutlineUpload } from 'react-icons/ai';

function MyComponent() {
  return (
    <div>
    
        {/* Form fields here */}
        <label htmlFor="upload" className="flex items-center content-center px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer">
          <AiOutlineUpload className="mr-2" />
          Upload File
        </label>
        <input id="upload" type="file" className="hidden" />
      
    </div>
  );
}

export default MyComponent;
