import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";

function App() {
  return (
    // <div className="App">
    // </div>

    // Using react fragment removes default component positions
    <>
      <h1>APP Component</h1>
      <Header />
      <Nav />
    </>
  );
}

export default App;
