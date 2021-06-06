import React from "react";

function Column(props) {
  const sarsCount = props.sarsCount + "%";

  return (
    <div
      class="bar"
      style={{ "--bar-value": sarsCount }}
      data-name={props.brand}
      title={`${props.brand} ${sarsCount}`}
    >
      {props.sarsCount}
    </div>
  );
}

export default Column;
