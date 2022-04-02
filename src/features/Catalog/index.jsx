import "./catalog.scss";
import { Header } from "./Header";
import { ProductList } from "./ProductList";

const Catalog = () => (
  <main className="catalog">
    <div className="catalog__flex container">
      <Header />
      <ProductList />
    </div>
  </main>
);

export default Catalog;
