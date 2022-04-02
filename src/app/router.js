import { Route, Routes } from "react-router-dom";

import Home from "../features/Home";
import About from "../features/About";
import News from "../features/News";
import Catalog from "../features/Catalog";
import Cart from "../features/Cart";

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
