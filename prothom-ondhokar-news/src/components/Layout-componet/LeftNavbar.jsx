import { useEffect, useState } from "react";
import { data, NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h2 className="font-semibold mb-3">All Category({categories.length})</h2>
      <div className="flex flex-col gap-2 ">
        {categories.map((cat) => (
          <NavLink to={`/category/${cat.category_id}`} className="btn " key={cat.category_id}>{cat.category_name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
