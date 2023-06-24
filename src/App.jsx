import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import StateProvider from "./context/StateProvider";

const App = () => {
  return (
    <StateProvider>
      <div className="flex md:gap-4 min-h-screen md:max-w-screen-2xl md:mx-auto overflow-x-hidden">
        <Sidebar />
        <Main />
      </div>
    </StateProvider>
  );
};

export default App;
