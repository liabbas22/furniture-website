import React from "react";
import { useParams } from "react-router-dom";
import UseFetchStrapiData from "../../store/ApiUtility/fetch/useFetchStrapi/UseFetchStrapiData";
import FeactureProducts from "../FeactureProducts/FeactureProducts";

const Category = () => {
  const { id } = useParams();
  const { data } = UseFetchStrapiData(
    `/api/products?populate=*&[filters][categories][id] = ${id}`
  );
  const CategoryTitle = UseFetchStrapiData(
    `/api/categories?populate=*&[filters][id]=${id}`
  );
  console.log("categories", data, CategoryTitle);
  console.log("CategoryTitle", CategoryTitle);
  console.log("title", CategoryTitle?.data?.data);

  return (
    <div className="catgory-container">
      {CategoryTitle?.data?.data?.map((item) => (
        <FeactureProducts products={data} title={item?.title} />
      ))}
    </div>
  );
};

export default Category;
