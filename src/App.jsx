import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./app/router";
import Footer from "./features/Footer";
import Header from "./features/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
