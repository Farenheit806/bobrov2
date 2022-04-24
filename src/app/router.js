import { Route, Routes } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";
import News from "../components/News";
import Catalog from "../components/Catalog";
import Cart from "../components/Cart";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="news" element={<News />} />
    <Route path="catalog" element={<Catalog />} />
    <Route path="cart" element={<Cart />} />
  </Routes>
);

export default Router;
