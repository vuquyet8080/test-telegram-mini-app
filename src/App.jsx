import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WebApp from "@twa-dev/sdk";
console.log("xxx", WebApp.version);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center px-10 pt-10 md:px-20 gap-y-4">
      <div className="flex flex-row gap-x-4">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-2xl text-gray-300">Vite + React</h1>
      <div className="card">
        <button
          onClick={() =>
            WebApp.showAlert(`Hello World! Current count is ${count}`)
          }
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Show Alert
        </button>
      </div>
    </div>
  );
}

export default App;
