import { useState, useEffect } from "react";
import productService from "../services/productSrvice";
import { useLocation } from "react-router-dom";
const useFetch = (id) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  console.log("Id", id);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await productService.fetchProducts();

        setData(res.filter((p) => p.category === id));
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [location]);

  return { loading, error, data };
};

export default useFetch;
