import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../api";

const UseFetchStrapiData = (endpoint) => {
  const [data, setData] = useState();
  useEffect(() => {
    MakeRequest();
  }, [endpoint]);
  const MakeRequest = async () => {
    const res = await fetchDataFromApi(endpoint);
    setData(res);
  };
  return { data };
};
export default UseFetchStrapiData;
