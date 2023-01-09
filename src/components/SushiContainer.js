import React from "react";
import MoreButton from "./MoreButton";
import Suhsi from "./Sushi";

function SushiContainer( { data }) {
  return (
    <div className="belt">
      { 
        data.map((item) => {
          return (
            <Suhsi 
              data={item} 
              key={item.id}
            />

          )
        })
      }
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
