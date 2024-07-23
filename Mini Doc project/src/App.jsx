import React from "react";
import Backgroud from "./components/Backgroud";
import Foreground from "./components/Foreground";

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-800 relative">
      <Backgroud />
      <Foreground />
    </div>
  );
};

export default App;
