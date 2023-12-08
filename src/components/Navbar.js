import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div className="flex flex-row px-10 justify-between w-full py-14">
      <div className=" w-1/2 px-20">
        <Image
          src="/images/logo.svg"
          alt="Picture of the author"
          width={160}
          height={150}
        />
      </div>
      <div className="flex flex-row text-lg font-semibold gap-20 w-1/2 flex-start items-center px-20">
        <div>Home</div>
        <div>About</div>
        <div>Blog</div>
        <div className="bg-amber-500  py-1.5 px-4 rounded-full cursor-pointer">
          Download App
        </div>
      </div>
    </div>
  );
}

export default Navbar;
