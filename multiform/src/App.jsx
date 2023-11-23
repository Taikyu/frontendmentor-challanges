import Attribution from "./components/Attribution.jsx";
import SideBar from "./components/SideBar.jsx";
import Card from "./components/UI/Card.jsx";
import Main from "./components/Main.jsx";
import UserContextProvider from "./store/form-context.jsx";

function App() {
  return (
    <UserContextProvider>
      <Card className=" flex mx-auto mt-16 space-x-24 bg-magnolia shadow-none sm:w-[50rem] sm:h-[32rem] sm:bg-white sm:shadow-lg">
        <SideBar />
        <Main />
      </Card>
      <Attribution />
    </UserContextProvider>
  );
}

export default App;
