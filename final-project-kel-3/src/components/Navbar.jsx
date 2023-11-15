import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../store/categorySlice";
import {
  getAllCarts,
  getCartItemsCount,
  getCartTotal,
} from "../store/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts, dispatch]);

  return (
    <nav className="flex items-center space-x-16 mt-4">
      <div>
        <Link to="/">
          <h1 className="font-raleway font-bold text-3xl">TokoKita</h1>
        </Link>
      </div>
      <div>
        <div className="h-10 w-[850px] bg-white px-1 rounded-sm">
          <div className="flex items-center">
            <input
              type="text"
              className="h-10 w-[800px] p-4 rounded-l-sm text-sm font-roboto text-black"
              placeholder="Cari produk dan merk"
              onChange={(e) => handleSearchTerm(e)}
            />
            <Link
              to={`search/${searchTerm}`}
              className="bg-primary h-8 w-[62px] rounded-sm flex items-center justify-center">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </div>
        </div>
        <div className="mt-1 flex space-x-4">
          {categories.slice(0, 8).map((category, idx) => (
            <li
              key={idx}
              className="flex capitalize font-roboto font-light text-xs">
              <Link to={`category/${category}`} className="">
                {category.replace("-", " ")}
              </Link>
            </li>
          ))}
        </div>
      </div>
      <div>
        <Link to="/cart" className="relative">
          <i className="fa-solid fa-cart-shopping text-xl"></i>
          <div className="absolute w-5 h-5 top-[-15px] right-[-10px] bg-white text-primary rounded-full flex items-center justify-center font-roboto">
            {itemsCount}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
