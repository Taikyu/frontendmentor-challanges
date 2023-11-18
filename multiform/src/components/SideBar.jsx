import React from "react";
import Card from "./UI/Card.jsx";

const SideBar = () => {
  return (
    <Card className=" flex flex-col gap-3 pt-8 pl-8 h-[30rem] w-56 mt-3 ml-4  bg-cover bg-sideBackground  text-magnolia">
      <div className="flex gap-6 items-center cursor-pointer">
        <strong className="border border-magnolia rounded-full px-2 text-center bg-lightBlue text-marineBlue">
          1
        </strong>
        <div>
          <small className="text-coolGray">STEP 1</small>
          <p className="font-[600] text-xs">YOUR INFO</p>
        </div>
      </div>
      <div className="flex gap-6 items-center cursor-pointer">
        <strong className="border border-magnolia rounded-full px-2 text-center">
          2
        </strong>
        <div>
          <small className="text-coolGray">STEP 2</small>
          <p className="font-[600] text-xs">SELECT PLAN</p>
        </div>
      </div>
      <div className="flex gap-6 items-center cursor-pointer">
        <strong className="border border-magnolia rounded-full px-2 text-center">
          3
        </strong>
        <div>
          <small className="text-coolGray">STEP 3</small>
          <p className="font-[600] text-xs">ADD-ONS</p>
        </div>
      </div>
      <div className="flex gap-6 items-center cursor-pointer">
        <strong className="border border-magnolia rounded-full px-2 text-center">
          4
        </strong>
        <div>
          <small className="text-coolGray">STEP 4</small>
          <p className="font-[600] text-xs">SUMMARY</p>
        </div>
      </div>
    </Card>
  );
};

export default SideBar;
