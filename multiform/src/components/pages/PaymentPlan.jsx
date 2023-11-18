import React from "react";

import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";

const PaymentPlan = () => {
  return (
    <>
      <div className="pt-4">
        <h1 className="text-3xl line font-[900] text-marineBlue">
          Select your plan
        </h1>
        <p className="text-coolGray text-sm py-2">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex justify-between mt-4">
        <div className=" flex flex-col justify-between w-28 h-40 rounded-md border p-3 border-coolGray hover:border-purplishBlue hover:bg-lightGray">
          <img src={arcade} alt="arcade" className="w-10 h-10" />
          <div>
            <strong className="text-marineBlue">Arcade</strong>
            <p className="text-sm text-coolGray">$9/mo</p>
          </div>
        </div>
        <div className=" flex flex-col justify-between w-28 h-40 rounded-md border p-3 border-coolGray hover:border-purplishBlue hover:bg-lightGray">
          <img src={advanced} alt="arcade" className="w-10 h-10" />
          <div>
            <strong className="text-marineBlue">Advanced</strong>
            <p className="text-sm text-coolGray">$12/mo</p>
          </div>
        </div>
        <div className=" flex flex-col justify-between w-28 h-40 rounded-md border p-3 border-coolGray hover:border-purplishBlue hover:bg-lightGray">
          <img src={pro} alt="arcade" className="w-10 h-10" />
          <div>
            <strong className="text-marineBlue">Pro</strong>
            <p className="text-sm text-coolGray">$15/mo</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center rounded-md bg-lightGray w-full h-10 mt-4 gap-1">
        <p className="text-marineBlue text-sm font-semiBold">Monthly</p>
        <div className="flex relative items-center w-10 h-5 rounded-full bg-marineBlue mx-4 ">
          <div className="absolute w-3 h-3 bg-magnolia rounded-full right-1"></div>
        </div>
        <p className="text-coolGray text-sm font-semiBold">Yearly</p>
      </div>
    </>
  );
};

export default PaymentPlan;

//
//

// Arcade
//

// Advanced
//

// Pro
// $15/mo

// Monthly
// Yearly
