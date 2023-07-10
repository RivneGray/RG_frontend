// import logo from './logo.svg';
// import './App.css';
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  	
  enum Season { Winter, Spring, Summer, Autumn };
  console.log(Season.Summer); 

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
