import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [data, setData] = useState([]);
  const [wallet, setWallet] = useState(0);

  useEffect(()=> {
    fetch(API)
      .then((resp) => resp.json())
      .then((sushis) => {
        const updatedShushis= sushis.map((sushi) => {
          return {...sushi, eaten: false };
        });
          setData(updatedShushis)
      })
  }, [])

  function handleEatSushi(eatenSushi) {
    if (wallet >= eatenSushi.price) {
      const updatedShushis = data.map((sushi) => {
        if (sushi.id === eatenSushi.id) return {...sushi, eaten: true};
          return data;
      });
      setData(updatedShushis);
      setWallet((wallet) => wallet - eatenSushi.price);
    } else {
      alert("Need more money");
    }
  }

  function handleAddMoney(moreMoney) {
    setWallet((wallet) => wallet + moreMoney);
  }

  const eatenSushis = sushi.filter((sushi) => sushi.eaten); 

  return (
    <div className="app">
      <SushiContainer data={data}  onEatSushi={handleEatSushi} />
      <Table wallet={wallet} onAddMoney={handleAddMoney} plates={eatenSushis} />
    </div>
  );
}

export default App;
