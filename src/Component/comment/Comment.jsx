import React, { useState } from "react";
import "./style.css";

const Comment = () => {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comment || !name || !email) {
      alert("All fields are required!");
      return;
    }

    console.log("Comment Submitted:", { name, email, comment });

    setComment("");
    setName("");
    setEmail("");

    alert("Your comment has been submitted!");
  };

  return (
    <form className="comment-container" onSubmit={handleSubmit} id="comment">
      <h2>Leave a Reply</h2>
      <p>
        Your email address will not be published. Required fields are marked{" "}
        <span>*</span>
      </p>
      <div className="input_boxes">
        <div className="field">
          <p>
            Comment <span>*</span>
          </p>
          <textarea
            placeholder="Write your comment here..."
            rows="5"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="user_input">
          <div className="field">
            <p>
              Name <span>*</span>
            </p>
            <input
              type="text"
              placeholder="Enter Your Name Here..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <p>
              Email <span>*</span>
            </p>
            <input
              type="email"
              placeholder="Enter Your Email Here..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
      <button className="post-comment" type="submit">
        Post Comment
      </button>
    </form>
  );
};

export default Comment;
