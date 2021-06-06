import './App.css';
import Column from './Column.js'
import {data} from "./data"

function App() {

  const columnElements = data.map(item => <Column height={item.height}/>)
  console.log(columnElements)

  return (
      <div className="container">
        {columnElements}
      </div>
  );
}

export default App;
