import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncCategories } from "../store/categorySlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);
};

export default Sidebar;
