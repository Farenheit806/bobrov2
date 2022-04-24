import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const navList = ["/", "news", "catalog", "about"];
  return (
    <nav>
      <ul>
        {navList.map((element) => (
          <li key={element}>
            <NavLink to={element}>{element}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
