import React, { useState } from 'react'
import axios from 'axios'

function photoPage() {
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
      const result = await axios.post("/user/upload-img",{
        image : image
      })
      try {
        console.log(result);
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

export default photoPage
