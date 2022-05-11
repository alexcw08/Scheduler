import "./App.css";
import Today from "./Components/Today";

function App() {
  const date = new Date();
  console.log(date);
  let today = date.toDateString();
  today = today.substring(4);
  return (
    <div className="App">
      <Today today={today} />
      <hr></hr>
    </div>
  );
}

export default App;
