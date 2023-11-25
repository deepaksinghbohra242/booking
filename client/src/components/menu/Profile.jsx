import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  function linkClasses(type = null) {
    let classes = "inline-flex gap-2 py-2 px-6 rounded-full";
    if (type === subpage) {
      classes += " bg-primary text-white ";
    } else {
      classes += " bg-gray-300";
    }
    return classes;
  }
  return (
    <>
      <div>
        <div className="w-full flex justify-center mt-8 gap-8">
          <Link className={}></Link>
        </div>
      </div>
    </>
  );
}

export default Profile;
