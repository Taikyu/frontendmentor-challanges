import React from "react";

import check from "../../assets/images/icon-checkmark.svg";

const AddOn = () => {
  return (
    <>
      <div className="pt-4 pb-4">
        <h1 className="text-3xl line font-[900] text-marineBlue">
          Pick add-ons
        </h1>
        <p className="text-coolGray text-sm py-2">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="flex justify-between items-center w-full my-4 px-4 py-2 border border-purplishBlue bg-magnolia rounded-md">
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
      <div className="flex justify-between items-center w-full my-4 px-4 py-2 border border-lightGray rounded-md">
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
      <div className="flex justify-between items-center w-full my-4 px-4 py-2 border border-lightGray rounded-md">
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
    </>
  );
};

export default AddOn;

//
//

//
//
// +$1/mo

// Larger storage
// Extra 1TB of cloud save
// +$2/mo

// Customizable Profile
// Custom theme on your profile
// +$2/mo

// Go Back
// Next Step
