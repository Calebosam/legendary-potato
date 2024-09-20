import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [status, setStatus] = useState("No Error occured");

  const handleTypeError = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      console.log(res.data.idd.somthing);
    });

    setStatus("Type Error occured");
  };

  const handleReset = () => {
    setStatus("No Error occured");
  };
  const handleGetUserID = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        setStatus(`User ID: ${res.data.id}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>Legendary Potato</h1>
      <div className="card">
        <button style={{ marginRight: "5px" }} onClick={() => handleReset()}>
          Reset
        </button>
        <button
          style={{ marginRight: "5px" }}
          onClick={() => handleTypeError()}
        >
          Type Error
        </button>
        <button onClick={() => handleGetUserID()}>Get User ID</button>
        <p>{status}</p>
      </div>
    </>
  );
}

export default App;
