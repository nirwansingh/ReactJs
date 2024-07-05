import './App.css';
import {useState} from "react";


function App() {
  const[count, setCount] =useState(0);

  function decHandler() {
    setCount(count-1)
  }

  function incHandler() {
    setCount(count+1)
  }

  function resetHandler(){
    setCount(0)
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center 
    bg-gradient-to-r from-cyan-500 to-blue-500  flex-col gap-10">
      <div className="text-white text-2xl font-medium ">
        Increment & Decrement</div>
      <div className=" bg-white flex rounded-md justify-center gap-12 py-3
      text-[25px] text-[#344151]">
        <button onClick={decHandler} className="border-r-2 text-center
        w-20 border-[#bfbfbf] text-5xl">
          -
        </button>
        <div className="font-bold gap-12 text-5xl">
          {count}
        </div>
        <button onClick={incHandler} className="border-l-2 text-center
        w-20 border-[#bfbfbf] text-5xl">
          +
        </button>
       
      </div>
      <button onClick={resetHandler} className="bg-white text-black px-5 py-3
      text-lg rounded-lg">
          reset
        </button>
    </div>
  );
}

export default App;
