import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./app/router";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <Router />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
