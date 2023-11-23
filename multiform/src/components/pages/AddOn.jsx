import React, { useContext } from "react";

import { userContext } from "../../store/form-context";

import check from "../../assets/images/icon-checkmark.svg";

let classes, checkboxClasses;

const AddOn = () => {
  const { user, updateAddons } = useContext(userContext);
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
      {user.addons.map((addon) => {
        if (addon.status) {
          classes =
            "flex justify-between items-center w-full my-1 px-1 py-1 border border-purplishBlue bg-magnolia rounded-md hover:border-purplishBlue cursor-pointer sm:my-1 sm:px-4 sm:py-2";
          checkboxClasses =
            "flex justify-center items-center h-5 w-5 border rounded-md border-lightGray bg-purplishBlue";
        } else {
          classes =
            "flex justify-between items-center w-full my-1 px-1 py-1 border border-lightGray rounded-md hover:border-purplishBlue cursor-pointer sm:my-1 sm:px-4 sm:py-2";
          checkboxClasses =
            "flex justify-center items-center h-5 w-5 border rounded-md border-lightGray ";
        }

        return (
          <div
            key={addon.id}
            onClick={() => updateAddons(addon.id)}
            className={classes}
          >
            <div className="flex items-center gap-6 ">
              <div className={checkboxClasses}>
                <img src={check} />
              </div>

              <div className="flex flex-col">
                <strong className="text-md text-marineBlue">{addon.id}</strong>
                <small className="text-coolGray">{addon.description}</small>
              </div>
            </div>
            <p className="text-purplishBlue text-md">
              +${user.rate ? addon.amount + "/mo" : addon.amount * 10 + "/yr"}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AddOn;
