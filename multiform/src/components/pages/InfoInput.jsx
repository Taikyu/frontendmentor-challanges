import React from "react";

const InfoInput = () => {
  return (
    <>
      <div className="pt-4">
        <h1 className="text-3xl line font-[900] text-marineBlue">
          Personal info
        </h1>
        <p className="text-coolGray text-sm py-2">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form className="flex flex-col mt-4 gap-1">
        <div className="flex flex-col ">
          <label className=" text-marineBlue text-sm font-[600]">Name</label>
          <input
            className=" cursor-pointer py-2 px-4 text-base font-semiBold  text-marineBlue border rounded-lg focus:outline-none focus:border-1 focus:border-purplishBlue"
            type="text"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className=" text-marineBlue text-sm font-semiBold">
            Email Address
          </label>
          <input
            className="cursor-pointer py-2 px-4 text-base font-semiBold  text-marineBlue border rounded-lg focus:outline-none focus:border-1 focus:border-purplishBlue"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className=" text-marineBlue text-sm font-semiBold">
            Phone Number
          </label>
          <input
            className="cursor-pointer py-2 px-4 text-base font-semiBold  text-marineBlue border rounded-lg focus:outline-none focus:border-1 focus:border-purplishBlue"
            type="tel"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
    </>
  );
};

export default InfoInput;
