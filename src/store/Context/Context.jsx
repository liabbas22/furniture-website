import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UseFetchStrapiData from "../ApiUtility/fetch/useFetchStrapi/UseFetchStrapiData";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [products, setProducts] = useState();
  const [category, setCategory] = useState();
  const [cart, setCart] = useState(false);
  const [query, setQuery] = useState("");

  

  const loaction = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loaction]);
  return (
    <Context.Provider
      value={{
        category,
        setCategory,
        products,
        setProducts,
        cart,
        setCart,
        query,
        setQuery,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default AppContext;
