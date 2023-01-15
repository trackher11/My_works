// import logo from "./logo.svg";
// import "./App.css";
// let name = "Ash";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />

      <div className="container my-3">
        <TextForm />
      </div>
    </>
  );
}

export default App;
