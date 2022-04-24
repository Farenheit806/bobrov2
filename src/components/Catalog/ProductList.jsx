import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPages,
  selectFilteredList,
  selectPageToShow,
  showContent,
} from "../../app/slices/catalogSlice";
import { Footer } from "./Footer";
import { List, NoMatches } from "./Main";

export const ProductList = () => {
  const filteredProducts = useSelector(selectFilteredList);
  const pageToShow = useSelector(selectPageToShow);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPages());
  }, [filteredProducts]);

  useEffect(() => {
    dispatch(showContent(pageToShow));
  }, [pageToShow, filteredProducts]);

  return (
    <section className="catalog__list">
      {!filteredProducts.length ? <NoMatches /> : <List />}
      <Footer />
    </section>
  );
};
