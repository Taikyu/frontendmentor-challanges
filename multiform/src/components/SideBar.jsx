import React from "react";

import Card from "./UI/Card.jsx";

const SideBar = () => {
  return (
    <Card className="fixed top-0 w-full h-32 flex gap-8 items-start pt-8 justify-center rounded-none bg-cover bg-mobileBackground  text-magnolia sm:relative sm:h-[30rem] sm:w-56 sm:mt-3 sm:ml-4 sm:flex-col sm:bg-sideBackground sm:bg-cover sm:justify-start sm:pt-8 sm:pl-8 sm:gap-3">
      <div className="flex gap-6 items-center cursor-pointer">
        <strong className="border border-magnolia rounded-full px-2 text-center bg-lightBlue text-marineBlue">
          1
        </strong>
        <div className="hidden sm:block">
          <small className="text-coolGray">STEP 1</small>
          <p className="font-[600] text-xs">YOUR INFO</p>
        </div>
      </div>
      <div className="flex gap-6 items-center cursor-pointer">
        <strong className="border border-magnolia rounded-full px-2 text-center">
          2
        </strong>
        <div className="hidden sm:block">
          <small className="text-coolGray">STEP 2</small>
          <p className="font-[600] text-xs">SELECT PLAN</p>
        </div>
      </div>
      <div className="flex gap-6 items-center cursor-pointer">
        <strong className="border border-magnolia rounded-full px-2 text-center">
          3
        </strong>
        <div className="hidden sm:block">
          <small className="text-coolGray">STEP 3</small>
          <p className="font-[600] text-xs">ADD-ONS</p>
        </div>
      </div>
      <div className="flex gap-6 items-center cursor-pointer">
        <strong className="border border-magnolia rounded-full px-2 text-center">
          4
        </strong>
        <div className="hidden sm:block">
          <small className="text-coolGray">STEP 4</small>
          <p className="font-[600] text-xs">SUMMARY</p>
        </div>
      </div>
    </Card>
  );
};

export default SideBar;
