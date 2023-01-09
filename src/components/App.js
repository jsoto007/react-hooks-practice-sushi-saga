import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [data, setData] = useState([])

  useEffect(()=> {
    fetch(API)
      .then((resp) => resp.json())
      .then((item)=> setData(item))
  }, [])

  return (
    <div className="app">
      <SushiContainer data={data} />
      <Table />
    </div>
  );
}

export default App;
