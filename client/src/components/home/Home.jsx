// import React, { useState } from "react";
// import axios from "axios";

// export default function Home() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageChange = (e) => {
//     setSelectedImage(e.target.files[0]);
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     if (!selectedImage) {
//       return;
//     }

//     // Prepare form data
//     const formData = new FormData();
//     formData.append("image", selectedImage);

//     try {
//       // Make API call
//       const response = await axios.post('/user/uploadprofilephoto',
//         formData
//       );

//       // Handle success
//       console.log("Image uploaded successfully:", response.data);
//     } catch (error) {
//       // Handle error
//       console.error("Error uploading image:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-300">
//           Upload profile photo
//         </h2>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form action="/uploadprofilephoto" method="post" encType="multipart/form-data" className="space-y-6" onSubmit={handleFormSubmit}>
//             {/* Image container without Dropzone */}
//             <div className="flex items-center justify-center bg-gray-100 border-dashed border-2 border-gray-300 h-32">
//               <label htmlFor="image" className="cursor-pointer">
//                 <input
//                   type="file"
//                   id="image"
//                   name = "Image"
//                   className="hidden"
//                   onChange={handleImageChange}
//                 />
//                 <span className="text-gray-300 text-lg hover:text-gray-500">
//                   Click here to select image
//                 </span>
//               </label>
//             </div>

//             <p className="text-sm text-gray-500">
//               PNG, JPG, GIF minimum size 400kb uploaded only 1 image
//             </p>

//             <div>
//               <button
//                 type="submit"
//                 value="Upload Photo"
//                 className="inline-flex justify-center w-full px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
//               >
//                 <span className="-ml-1 mr-2 h-5  text-gray-400">📷</span>
//                 <span>Upload Photo</span>
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react'
import axios from 'axios'

function Home() {
  const [file ,setFile ] = useState("");
  const [image, setImage] = useState("");

  function handleChange(e){
    const file = e.target.files[0];
    setFile(file);
    previewFiles(file);

  }
  function previewFiles(file){
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = ()=>{
      setImage(reader.result);
    }
    
  }

  async function handleSubmit(e){
    e.preventDefault();
    // console.log(e);
    // console.log(file);
    const result = await axios.post("/user/upload-img",{
      image : image
    })
    try {
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <form onSubmit={e=>handleSubmit(e)} >
        <label htmlFor="fileInput">Upload a image</label>
        <input type="file" id='fileInput' onChange={e=>handleChange(e)} required 
        accept='image/png,image/jpeg ,image/jpg,image/jfif' />
        <button className='bg-blue-300'>submit </button>
      </form>
      <img src={image} alt="test" />
    </>
  )
}

export default Home

