import React, { useState } from 'react';
import axios from 'axios';
import {Navigate} from 'react-router-dom'
import swal from "sweetalert";

function PhotoPage() {
  const [file, setFile] = useState('');
  const [image, setImage] = useState('');
  const [redirect , setRedirect] = useState(false);

  function handleChange(e) {
    const file = e.target.files[0];
    setFile(file);
    previewFiles(file);
  }

  function previewFiles(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    };
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await axios.post('/user/upload-img', {
        image: image,
      });
      setRedirect(true);
      swal({
        title: "Success!",
        text: "Updated Successfully",
        icon: "success",
        button: "Ok!",
      });
    } catch (error) {
      swal({
        title: "Success!",
        text: " Upload Failed",
        icon: "success",
        button: "Ok!",
      });
      console.log(error);
    }
  }

  if(redirect){
    return <Navigate to={'/profile'} />
  }

  return (
    <div className="container mx-auto my-10 p-8 bg-gray-100 rounded-lg shadow-md">
      {image && (
        <div className="flex justify-center mt-8">
          <img src={image} alt="Preview" className="w-64 h-64 rounded-md shadow-md" />
        </div>
      )}
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center">
        <label htmlFor="fileInput" className="mb-4 text-xl font-bold text-gray-600">
          Upload an Image
        </label>
        <input
          type="file"
          id="fileInput"
          onChange={(e) => handleChange(e)}
          required
          accept="image/png,image/jpeg,image/jpg,image/jfif"
          className="mb-4 p-2 border border-gray-300 rounded-md"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </form>
      
    </div>
  );
}

export default PhotoPage;
