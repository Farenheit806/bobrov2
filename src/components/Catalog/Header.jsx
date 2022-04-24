import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchValue,
  setSearch,
  updateSearch,
} from "../../app/slices/catalogSlice";
import { Sort } from "./Sort";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState();
  const dispatch = useDispatch();
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClear = () => {
    if (isOpen) {
      if (searchValue !== "") {
        setSearchValue("");
        dispatch(setSearch(""));
      }
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  useEffect(() => {
    let timeout = setTimeout(() => {
      dispatch(setSearch(searchValue));
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchValue]);
  return (
    <section className="catalog__header">
      <form>
        <div className="cont" onClick={handleClear}>
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            onClick={handleClear}
            value={searchValue}
            title={isOpen ? "Search resets when closing" : "Search"}
          />
          <div className="search"></div>
        </div>
      </form>
      <Sort />
    </section>
  );
};
