import React from 'react'

function Account() {
  return (
    <>
    <div className=" h-screen border-gray-600  pt-8 min-3 flex items-center justify-center">
      <div className=" bg-white h-screen w-1/2 border shadow-2xl flex flex-col p-8 rounded-md">
       
       <div className='border border-gray-300 h-2/3 rounded-2xl '> 
        <img
          className="mx-auto w-16 h-2/3 rounded-full mb-4"
          src=""
          alt="User Profile"
        />
        </div>
        <h2 className="mt-4 text-2xl font-semibold mb-2">
          firstname lastname
        </h2>
        <p className="text-gray-600 mb-4">userName</p>
        <p className="text-gray-600 mb-4">Email</p>
        <p className="text-gray-600 mb-4">Phone No.</p>
      </div>
    </div>
    </>
  )
}

export default Account
