import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../app/slices/catalogSlice";
import { Sort } from "./Sort";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const onChange = (event) => {
    setSearchValue(event.target.value);
  };
  const [isOpen, setIsOpen] = useState();

  const handleClear = () => {
    if (isOpen) {
      setSearchValue("");
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  useEffect(() => {
    dispatch(setSearch(searchValue));
  }, [searchValue]);
  return (
    <section className="catalog__header">
      <form>
        <div className="cont" onClick={handleClear}>
          <input
            type="text"
            placeholder="Search..."
            onChange={onChange}
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
