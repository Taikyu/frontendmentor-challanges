import React from "react";

import check from "../../assets/images/icon-checkmark.svg";

const AddOn = () => {
  return (
    <div className="fixed left-[10vw] bg-white w-4/5 rounded-lg flex flex-col cursor-default text-sm p-4 sm:text-base sm:left-0 sm:relative sm:p-0 sm:w-full ">
      <div className="sm:pt-4 sm:pb-4">
        <h1 className="text-xl line font-[900] text-marineBlue sm:text-3xl">
          Pick add-ons
        </h1>
        <p className="text-coolGray text-sm py-2">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="flex justify-between items-center w-full my-1 px-1 py-1 border border-purplishBlue bg-magnolia rounded-md hover:border-purplishBlue cursor-pointer sm:my-4 sm:px-4 sm:py-2">
        <div className="flex items-center gap-6 ">
          <div className="flex justify-center items-center h-5 w-5 border rounded-md border-lightGray bg-purplishBlue">
            <img src={check} />
          </div>

          <div className="flex flex-col">
            <strong className="text-md text-marineBlue">Online service</strong>
            <small className="text-coolGray">Access to multiplayer games</small>
          </div>
        </div>
        <p className="text-purplishBlue text-md">+$1/mo</p>
      </div>
      <div className="flex justify-between items-center w-full my-1 px-1 py-1 border border-purplishBlue bg-magnolia rounded-md hover:border-purplishBlue cursor-pointer sm:my-4 sm:px-4 sm:py-2">
        <div className="flex items-center gap-6 ">
          <div className="flex justify-center items-center h-5 w-5 border rounded-md border-lightGray">
            <img src={check} />
          </div>

          <div className="flex flex-col">
            <strong className="text-md text-marineBlue">Larger storage</strong>
            <small className="text-coolGray">Extra 1TB of cloud save</small>
          </div>
        </div>
        <p className="text-purplishBlue text-md">+$2/mo</p>
      </div>
      <div className="flex justify-between items-center w-full my-1 px-1 py-1 border border-purplishBlue bg-magnolia rounded-md hover:border-purplishBlue cursor-pointer sm:my-4 sm:px-4 sm:py-2">
        <div className="flex items-center gap-6 ">
          <div className="flex justify-center items-center h-5 w-5 border rounded-md border-lightGray">
            <img src={check} />
          </div>

          <div className="flex flex-col">
            <strong className="text-md text-marineBlue">
              Customizable Profile
            </strong>
            <small className="text-coolGray">
              Custom theme on your profile
            </small>
          </div>
        </div>
        <p className="text-purplishBlue text-md">+$2/mo</p>
      </div>
    </div>
  );
};

export default AddOn;
