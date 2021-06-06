import React from "react";
import Column from "./Column";
import { sarsData } from "./data/sarsData";
import "./App.css";

function App() {
  const columnElement = sarsData.map((dataItem) => (
    <Column sarsCount={dataItem.sarsCount} brand={dataItem.brand} />
  ));

  return (
    <>
      <div class="chart-wrap vertical">
        <h2 class="title">SARs - Bar Chart</h2>
        <div class="grid">{columnElement}</div>
      </div>
    </>
  );
}

export default App;
