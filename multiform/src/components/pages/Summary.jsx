import React, { useContext } from "react";

import { userContext } from "../../store/form-context";

function priceTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

const Summary = () => {
  const { user, navigatePrev } = useContext(userContext);

  const chosenPlan = user.paymentPlans.find((plan) => plan.status === true);
  const selectedAddons = user.addons.filter((addon) => addon.status === true);
  const addonPrices = selectedAddons.map((addon) => addon.amount);

  let priceArray = [chosenPlan.amount];
  priceArray.push(...addonPrices);

  const totalPrice = priceTotal(priceArray);

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
            <strong>
              {chosenPlan.id}
              {user.rate ? " (Monthly)" : " (Yearly)"}
            </strong>
            <a
              onClick={() => navigatePrev(2)}
              className="w-12 text-coolGray border-purplishBlue hover:text-purplishBlue hover:border-b "
            >
              Change
            </a>
          </div>
          <strong>
            ${user.rate ? chosenPlan.amount : chosenPlan.amount * 10}
            {user.rate ? "/mo" : "/yr"}
          </strong>
        </div>
        <div className="border-t border-lightGray mt-4 ">
          {selectedAddons &&
            selectedAddons.map((addon) => (
              <div key={addon.id} className="flex justify-between pt-2">
                <p className="text-coolGray text-md">{addon.id}</p>
                <p className="text-marineBlue text-md">
                  +${user.rate ? addon.amount : addon.amount * 10}
                  {user.rate ? "/mo" : "/yr"}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-between px-8 py-4 sm:p-8">
        <p className="text-coolGray">
          Total{user.rate ? " (per month)" : " (per year)"}
        </p>
        <strong className="text-purplishBlue text-base">
          +${user.rate ? totalPrice : totalPrice * 10}
          {user.rate ? "/mo" : "/yr"}
        </strong>
      </div>
    </div>
  );
};

export default Summary;
