import React from 'react'

function Account() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <img
          className="mx-auto w-16 h-16 rounded-full mb-4"
          src="{user.pic}"
          alt="User Profile"
        />
        <h2 className="text-2xl font-semibold mb-2">
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
