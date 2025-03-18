import React, { useEffect } from "react";
import { useState } from "react";
import { fetchProducts } from "../api";

const UseFetch = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);
  console.log("Products", products);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

  return { loading, products, error };
};

export default UseFetch;

// simple Fetch Data

// const fetchData = async () => {
//   try {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const result = await res.json();
//     setProducts(result);
//   } catch (err) {
//     setError(err.message);
//   } finally {
//     setLoading(false);
//   }
// };
// fetchData();
// }, [];
