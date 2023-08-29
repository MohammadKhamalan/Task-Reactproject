import React from "react";
import "./Reactpost.scss";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

const Reactpost = ({ type, text, linkUrl, linkTitle, linkDescription, imageUrls, likeCount, commentCount, height,width }) => {
  return (
    <div className="small-post" style={{ height: `${height}px`, width: `${width}px` }}>
     
      <div className="post-image">
        <img src="/Capture.PNG" alt="Post" />
      </div>
      <div className="post-content">
        <span className="user-name">Mohammad Khamalan</span>

        {type === "link" && (
          <div className="link-preview">
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
              <h3 className="link-title">{linkTitle}</h3>
              <p className="link-description">{linkDescription}</p>
            </a>
          </div>
        )}

        {type === "text" && (
          <p className="post-text">{text}</p>
        )}

        {type === "image" && (
          <div className="image-post">
            <p className="post-text">{text}</p>
            <img src="/imagepost.jpg" alt="Image Post" className="imgg" />
            
            <div className="interaction-counts">
              <span className="like-icon">
                {likeCount} 👍
              </span>
              <span className="comment-count">
                {commentCount} comments
              </span>
            </div>
          </div>
        )}
        {type==="multimage" && (
           <div className="image-post">
           <p className="post-text">{text}</p>
           <div className="image-gallery">
             {imageUrls.map((imageUrl, index) => (
               <img key={index} src={imageUrl} alt={`Image ${index + 1}`} className="imgg2" />
             ))}
           </div>
           </div>
        )}

        <div className="post-info">
          <span className="like-icon">
            {likeCount} 👍
          </span>
          <span className="comment-count">{commentCount} comments</span>
        </div>
        <div className="interaction-icons">
          <span className="icon">
            Like <ThumbUpOutlinedIcon />
          </span>
          <span className="icon">
            Comment <ChatBubbleOutlineOutlinedIcon />
          </span>
          <span className="icon">
            Share <ShareOutlinedIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Reactpost;
