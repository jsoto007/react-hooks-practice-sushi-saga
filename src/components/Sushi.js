import React from "react";

function Sushi( { data } ) {

  return (
    <div className="sushi">
      <div className="plate" onClick={/* Give me a callback! */ null}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={data.img_url}
            alt={data.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {data.name} - ${data.price}
      </h4>
    </div>
  );
}

export default Sushi;
