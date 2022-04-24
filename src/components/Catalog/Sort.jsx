import { useDispatch } from "react-redux";
import { setFilter } from "../../app/slices/catalogSlice";

export const Sort = () => {
  const dispatch = useDispatch();
  const handleSort = (event) => {
    dispatch(setFilter(+event.target.value));
  };
  return (
    <form className="filters">
      <label>Sort by</label>
      <select onChange={handleSort} defaultValue={"unsorted"}>
        <option value={"unsorted"} hidden disabled>
          unsorted
        </option>
        <option value={0}>Price ↑</option>
        <option value={1}>Price ↓</option>
        <option value={2}>A-Z</option>
        <option value={3}>Z-A</option>
      </select>
    </form>
  );
};
