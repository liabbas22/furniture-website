import React, { useContext, useState } from "react";
import "./style.css";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/Context/Context";
import UseFetchStrapiData from "../../store/ApiUtility/fetch/useFetchStrapi/UseFetchStrapiData";

const Search = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { query, setQuery } = useContext(Context);
  const navigate = useNavigate();

  const { data, loading, error } = UseFetchStrapiData(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  const handleSearch = () => {
    if (query.trim()) {
      navigate("/search", { state: { products: data, query: query } });
    }
    setQuery("");
  };

  const HandleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
    if (e.key === "Enter" && query) {
      setShowSuggestions(false);
    }
  };
  const handleSelect = (product) => {
    setQuery(product?.title);
    setShowSuggestions(false);
    // navigate(`/search/${product.id}`);
    handleSearch();
  };
  return (
    <div className="Search">
      <div className="content-wrapper">
        <div className="Search-Container">
          <div className="Browser-Category">
            <h4>Browse Categories</h4>
            <span className="icons">
              <IoIosArrowDown />
            </span>
          </div>
          <div className="Input-Container">
            <input
              type="text"
              placeholder="Search for products..."
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggestions(true);
              }}
              value={query}
              onKeyDown={(e) => HandleKeyDown(e)}
            />
            <span className="search-icon" onClick={handleSearch}>
              <IoIosSearch />
            </span>

            {showSuggestions && query && (
              <div className="suggestions-box">
                {data?.data?.length > 0 ? (
                  data.data.map((product) => (
                    <div
                      key={product.id}
                      className="suggestion-item"
                      onClick={() => handleSelect(product)}
                    >
                      <span>{product?.title}</span>
                    </div>
                  ))
                ) : (
                  <div className="suggestion-item">product not found</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
