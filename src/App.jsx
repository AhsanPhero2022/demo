import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
