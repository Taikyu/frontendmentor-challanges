import { useState } from "react";

import Attribution from "./components/Attribution.jsx";
import SideBar from "./components/SideBar.jsx";
import Card from "./components/UI/Card.jsx";
import Main from "./components/Main.jsx";

function App() {
  return (
    <Card className=" flex w-[50rem] h-[32rem] mx-auto mt-16 space-x-24 bg-white  shadow-lg">
      <SideBar />
      <div className="w-[25rem] h-[30rem] mx-auto py-6 relative">
        <Main />
        <div className="flex justify-between w-full absolute bottom-4">
          <button className="text-coolGray px-4 py-2 rounded-lg hover:text-marineBlue cursor-pointer text-sm font-semiBold">
            Go Back
          </button>
          <button className="text-magnolia px-4 py-2 rounded-lg bg-marineBlue hover:bg-purplishBlue cursor-pointer text-sm font-semiBold">
            Next Step
          </button>
        </div>
      </div>
    </Card>
  );
}

export default App;

// Personal info
// Please provide your name, email address, and phone number.

// Name
//

//
// e.g. stephenking@lorem.com

//
//

// Next Step
