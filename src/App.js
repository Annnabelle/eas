import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Rights from "./components/rights";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./routing";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.sass";
import ScrollToTop from "./utils";

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routing/>
      <Footer/>
      <Rights/>
      </BrowserRouter>
    </div>
  );
}

export default App;