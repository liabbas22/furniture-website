import React, { useEffect, useState } from "react";
import "./style.css";
import {
  MdEmail,
  MdFacebook,
  MdHome,
  MdOutlineKeyboardArrowRight,
  MdWhatsapp,
  MdZoomIn,
} from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

import { IconButton, Tooltip } from "@mui/material";
import { BsTwitter } from "react-icons/bs";
import { TiSocialTumblerCircular } from "react-icons/ti";
import { PiPinterestLogoFill } from "react-icons/pi";
import Releated_Product from "../../Component/releated_Product/Releated_Product";
import Comment from "../../Component/comment/Comment";
import { dataBlog } from "../../data/Data";
import TopContainer from "../../Component/topContainer/TopContainer";
import UseFetchStrapiData from "../../store/ApiUtility/fetch/useFetchStrapi/UseFetchStrapiData";

const Blog = () => {
  const [postQuer, setPostQuery] = useState("");
  const { data: allBlogsData } = UseFetchStrapiData(`/api/blogs?populate=*`);
  const { data: searchData } = UseFetchStrapiData(
    `/api/blogs?populate=*&[filters][title][$contains]=${postQuer}`
  );
  const loaction = useLocation();
  const blogData = loaction.state;
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogData]);

  const postData = allBlogsData?.data;
  const HandleSearchClick = () => {
    if (postQuer.trim()) {
      navigate("/BlogSearch", {
        state: { searchData: searchData, postQuer: postQuer },
      });
    }
  };
  const HandleKeyDown = (e) => {
    if (e.key === "Enter" && postQuer) {
      HandleSearchClick();
    }
  };
  return (
    <>
      <TopContainer title={"blog"} text={"Lifestyle"} />
      <div className="content-wrapper">
        <div className="Blog_container">
          <div className="left">
            {blogData && (
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
                      <span className="com">{blogData.comment}</span>
                    </a>
                  </div>
                </div>
                <div className="blog_card" key={blogData.id}>
                  <img src={blogData.image} alt="Slider Image" />

                  <div className="date Blog_date">
                    <span>{blogData.date}</span>
                    <p>{blogData.month}</p>
                  </div>
                </div>
              </>
            )}
            <div className="blog_textContainer">
              <p className="p1">
                Tortor ac litora phasellus a porta hac vestibulum fringilla
                taciti gravida adipiscing est litora sed massa per a ut vivamus
                libero vel. Ridiculus non et dis fermentum non libero per hac
                vestibulum senectus tortor leo nisl lobortis consectetur
                senectus habitant facilisi sodales vestibulum potenti nisl a.
              </p>
            </div>

            {dataBlog?.map((data, index) => {
              return (
                <>
                  <p className="p2">{data.p2}</p>

                  <div className="best_clothing">
                    <div className="image_box">
                      <img src={data?.image1} alt={data?.title} />
                    </div>
                    <div className="text_box">
                      <h3>
                        <span>{`${data?.id}.`}</span>
                        {data?.title}
                      </h3>
                      <ul>
                        <li>
                          <span>
                            <MdOutlineKeyboardArrowRight />
                          </span>
                          <p>Aliquam tincidunt mauris eu risus.</p>
                        </li>
                        <li>
                          <span>
                            <MdOutlineKeyboardArrowRight />
                          </span>
                          <p>Vestibulum auctor dapibus neque.</p>
                        </li>
                        <li>
                          <span>
                            <MdOutlineKeyboardArrowRight />
                          </span>
                          <p>Nunc dignissim risus id metus.</p>
                        </li>
                        <li>
                          <span>
                            <MdOutlineKeyboardArrowRight />
                          </span>
                          <p>Cras ornare tristique elit.</p>
                        </li>
                        <li>
                          <span>
                            <MdOutlineKeyboardArrowRight />
                          </span>
                          <p>Vivamus vestibulum nulla nec ante. </p>
                        </li>
                        <li>
                          <span>
                            <MdOutlineKeyboardArrowRight />
                          </span>
                          <p>Praesent placerat risus quis eros.</p>
                        </li>
                      </ul>
                      <div className="text">
                        <p>{data?.middleText}</p>
                      </div>
                    </div>
                  </div>

                  <p className="p_text">{data?.bottomText} </p>
                  <Releated_Product products={data?.releated_products} />
                  <button className="View-More">View More</button>
                </>
              );
            })}

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
              <button onClick={HandleSearchClick}>Search</button>
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

export default Blog;
