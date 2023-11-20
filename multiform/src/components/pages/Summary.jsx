import React from "react";

const Summary = () => {
  return (
    <div className="fixed left-[10vw] bg-white w-4/5 rounded-lg flex flex-col cursor-default text-sm p-4 sm:text-base sm:left-0 sm:relative sm:p-0 sm:w-full ">
      <div className="sm:pt-4 sm:pb-4 ">
        <h1 className="text-xl font-[900] text-marineBlue sm:text-3xl">
          Finishing up
        </h1>
        <p className="text-coolGray text-sm py-2">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="w-full bg-magnolia rounded-md p-6">
        <div className="flex justify-between items-center text-marineBlue">
          <div className="flex flex-col text-sm">
            <strong>Arcade(Monthly)</strong>
            <a
              href="#"
              className="w-12 text-coolGray border-purplishBlue hover:text-purplishBlue hover:border-b hover:font-semiBold "
            >
              Change
            </a>
          </div>
          <strong>$9/mo</strong>
        </div>
        <div className="border-t border-lightGray mt-4 ">
          <div className="flex justify-between pt-2">
            <p className="text-coolGray text-md">Online services</p>
            <p className="text-marineBlue text-md">+$1/mo</p>
          </div>
          <div className="flex justify-between pt-2">
            <p className="text-coolGray text-md">Larger storage</p>
            <p className="text-marineBlue text-md">+$2/mo</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-8 py-4 sm:p-8">
        <p className="text-coolGray">Total (per month)</p>
        <strong className="text-purplishBlue text-base">+$12/mo</strong>
      </div>
    </div>
  );
};

export default Summary;
