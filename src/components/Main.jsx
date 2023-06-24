import { useStateContext } from "../context/StateProvider";

import Nav from "./Nav";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Main = () => {
  const { isOpen } = useStateContext();

  return (
    <main
      className={`min-h-screen w-full my-5 ${
        isOpen ? "sm:ml-[235px]" : "sm:ml-[110px]"
      }`}
    >
      <Nav />
      <main className="mx-2 mt-6">
        <Section1 isOpen={isOpen} />
        <Section2 />
        <Section3 />
      </main>
    </main>
  );
};

export default Main;
