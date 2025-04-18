import { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory={setCategory} />
      <News category={category} />
    </>
  );
}

export default App;
