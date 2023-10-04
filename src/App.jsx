import { useState } from "react";
import "./App.css";
import Routing from "./routing";
import { houseContext } from "./context";

function App() {
  const [showMore, setShowMore] = useState(6);
  const [city, setCity] = useState("New_York");
  const [text, setText] = useState("Show More");
  const [alldata, setAllData] = useState([]);

  return (
    <>
      <houseContext.Provider
        value={{
          showMore,
          setShowMore,
          city,
          setCity,
          text,
          setText,
          alldata,
          setAllData,
        }}
      >
        <Routing />
      </houseContext.Provider>
    </>
  );
}

export default App;
