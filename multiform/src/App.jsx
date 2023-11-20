import { useState } from "react";

import Attribution from "./components/Attribution.jsx";
import SideBar from "./components/SideBar.jsx";
import Card from "./components/UI/Card.jsx";
import Main from "./components/Main.jsx";

function App() {
  return (
    <>
      <Card className=" flex mx-auto mt-16 space-x-24 bg-magnolia shadow-none sm:w-[50rem] sm:h-[32rem] sm:bg-white sm:shadow-lg">
        <SideBar />
        <div className="sm:w-[25rem] sm:h-[30rem] mx-auto py-6 relative">
          <Main />
          <div className="fixed left-0 bottom-0 bg-white px-4 py-2 w-full flex justify-between font-semiBold text-base sm:absolute sm:bottom-4 sm:p-0 sm:text-sm ">
            <button className="text-coolGray px-4 py-2 rounded-lg hover:text-marineBlue cursor-pointer  ">
              Go Back
            </button>
            <button className="text-magnolia px-4 py-2 rounded-lg bg-marineBlue hover:bg-purplishBlue cursor-pointer ">
              Next Step
            </button>
          </div>
        </div>
      </Card>
      <Attribution />
    </>
  );
}

export default App;
