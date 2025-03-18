import React, { useEffect, useState } from "react";
import {
  MdEmail,
  MdFacebook,
  MdHome,
  MdOutlineKeyboardArrowRight,
  MdWhatsapp,
  MdZoomIn,
} from "react-icons/md";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";
import { BsTwitter } from "react-icons/bs";
import { TiSocialTumblerCircular } from "react-icons/ti";
import { PiPinterestLogoFill } from "react-icons/pi";
import Releated_Product from "../../../Component/releated_Product/Releated_Product";
import UseFetchStrapiData from "../../../store/ApiUtility/fetch/useFetchStrapi/UseFetchStrapiData";
import TopContainer from "../../../Component/topContainer/TopContainer";
import Comment from "../../../Component/comment/Comment";

const BlogDetails = () => {
  const [postQuer, setPostQuery] = useState("");
  const { id } = useParams();
  const { data } = UseFetchStrapiData(
    `/api/blogs?populate=*&[filters][id]=${id}`
  );
  const { data: allBlogsData } = UseFetchStrapiData(`/api/blogs?populate=*`);
  const { data: searchData } = UseFetchStrapiData(
    `/api/blogs?populate=*&[filters][title][$contains]=${postQuer}`
  );
  const navigate = useNavigate();
  const postData = allBlogsData?.data;

  const HandleSearch = () => {
    if (postQuer.trim()) {
      navigate("/BlogSearch", {
        state: { searchData: searchData, postQuer: postQuer },
      });
    }
    setPostQuery("");
  };
  const HandleKeyDown = (e) => {
    if (e.key === "Enter" && postQuer) {
      HandleSearch();
    }
  };
  return (
    <>
      <TopContainer title={"blog"} text={"Lifestyle"} />
      <div className="content-wrapper">
        <div className="Blog_container">
          <div className="left">
            {data?.data?.map((blogData) => (
              <>
                <div className="blogtext-container">
                  <button>life style</button>
                  <h2 className="titles">{blogData.title}</h2>
                  <div className="shopify">
                    {" "}
                    <span className="shopify_Api">
                      By <p>Shopify API</p>
                    </span>{" "}
                    <span className="slash">/</span>
                    <a href="#comment" className="Link">
                      <span className="com">Leave a Comment</span>
                    </a>
                  </div>
                </div>
                <div className="blog_card" key={blogData.id}>
                  <img
                    src={"http://localhost:1337" + blogData?.img?.url}
                    alt="Slider Image"
                  />

                  <div className="date Blog_date">
                    <span>{blogData.date}</span>
                    <p>{blogData.Month}</p>
                  </div>
                  <div className="blog_textContainer">
                    <p className="p1">{blogData?.des}</p>
                  </div>
                </div>
              </>
            ))}

            <div className="social-icons">
              <Tooltip title="Follow us on Facebook" arrow>
                <IconButton color="primary">
                  <MdFacebook className="Icon" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Chat on WhatsApp" arrow>
                <IconButton color="success">
                  <MdWhatsapp className="Icon" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Send us an Email" arrow>
                <IconButton color="error">
                  <MdEmail className="Icon" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Follow us on Twitter" arrow>
                <IconButton color="info">
                  <BsTwitter className="Icon" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Follow us on Tumblr" arrow>
                <IconButton color="secondary">
                  <TiSocialTumblerCircular className="Icon" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Follow us on Pinterest" arrow>
                <IconButton sx={{ color: "#BD081C" }}>
                  <PiPinterestLogoFill className="Icon" />
                </IconButton>
              </Tooltip>
            </div>

            <Comment />
          </div>
          <div className="right">
            <h2>Search</h2>
            <div className="input_box">
              <input
                type="text"
                placeholder="Search for Post"
                onChange={(e) => setPostQuery(e.target.value)}
                onKeyDown={(e) => HandleKeyDown(e)}
                value={postQuer}
              />
              <button onClick={HandleSearch}>Search</button>
            </div>
            <h2>Recent Post</h2>
            <div className="recentPost_box">
              {postData?.map((data, index) => {
                return (
                  <div className="post">
                    <img
                      src={"http://localhost:1337" + data?.img.url}
                      alt={data?.title}
                    />
                    <div className="text">
                      <h5 onClick={() => navigate(`/blog/${data.id}`)}>
                        {data?.title}
                      </h5>
                      <p>
                        {data?.date} {data?.Month}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
