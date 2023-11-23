import { useContext } from "react";

import InfoInput from "./pages/InfoInput.jsx";
import PaymentPlan from "./pages/PaymentPlan.jsx";
import AddOn from "./pages/AddOn.jsx";
import Summary from "./pages/Summary.jsx";
import Success from "./pages/Success.jsx";
import { userContext } from "../store/form-context.jsx";

const Main = () => {
  const { user, navigateNext, navigatePrev } = useContext(userContext);
  let classes = "";
  let actions = "";

  if (user.pageNumber > 1) {
    classes =
      "fixed left-0 bottom-0 bg-white px-4 py-2 w-full flex justify-between font-semiBold text-base sm:absolute sm:bottom-4 sm:p-0 sm:text-sm ";
    actions = (
      <>
        <button
          onClick={() => navigatePrev()}
          className="text-coolGray px-4 py-2 rounded-lg hover:text-marineBlue cursor-pointer  "
        >
          Go Back
        </button>
        <button
          onClick={() => navigateNext()}
          className="text-magnolia px-4 py-2 rounded-lg bg-marineBlue hover:bg-purplishBlue cursor-pointer "
        >
          {user.pageNumber === 4 ? "Confirm" : "Next Step"}
        </button>
      </>
    );
  }

  // continue from here tomorrow, add the actions button to info input only, edit the or statement

  return (
    <>
      <div className="sm:w-[25rem] sm:h-[30rem] mx-auto py-6 relative">
        {user.pageNumber === 1 && <InfoInput />}
        {user.pageNumber === 2 && <PaymentPlan />}
        {user.pageNumber === 3 && <AddOn />}
        {user.pageNumber === 4 && <Summary />}
        {user.pageNumber === 5 && <Success />}
        {user.pageNumber >= 5 ? "" : <div className={classes}>{actions}</div>}
      </div>
    </>
  );
};

export default Main;
