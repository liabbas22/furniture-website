import React from "react";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { FaGooglePlusG, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const BlogSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchData, postQuer } = location.state || [];
  console.log("Blog Search", searchData);

  return (
    <div className="blogSearch">
      <div className="productLength">
        {searchData?.data?.length > 0 ? (
          <span>{`${searchData?.data?.length} results for “${postQuer}”`}</span>
        ) : (
          <span>Search our site</span>
        )}
      </div>
      <div className="content-wrapper">
        {searchData?.data?.length > 0 ? (
          <div className="searchBlog-container">
            {searchData?.data?.map((data) => (
              <div className="SearchBlog-Item" key={data?.id}>
                 <div className="date">
                      <span>{data.date}</span>
                      <p>{data?.Month}</p>
                    </div>
                <h3 className="title">{data?.title}</h3>
                <img
                  src={"http://localhost:1337" + data?.img.url}
                  alt={data?.title}
                  onClick={() => navigate(`/blog/${data.id}`, { state: data })}
                />
                <p>{data?.des}</p>
                <div className="Icons-container">
                  <span>
                    <GrFacebookOption />
                  </span>
                  <span>
                    <FaTwitter />
                  </span>
                  <span>
                    <FaGooglePlusG />
                  </span>
                  <span>
                    <MdMail />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="productnotfound">
            <p className="text">
              This Blogs Not found. Try searching for something else!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSearch;
