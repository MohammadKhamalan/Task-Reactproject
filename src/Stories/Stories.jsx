import React from "react";
import "./Stories.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Stories = () => {
  return (
    <div className="stories">
      <div className="story">
        <div className="story-image">
          <img src="/story1.jpg" alt="" />
          
          <span>
Highlight 1          </span>
        </div>
      </div>
      <div className="story">
        <div className="story-image">
          <img src="/story2.jpg" alt="" />
          <span>
          Highlight 2           </span>
        </div>
      </div>
      <div className="story">
        <div className="story-image">
          <img src="/story.jpg" alt="" />
          <span>
          Highlight 3          </span>
        </div>
      </div>
      <div className="story">
        <div className="story-image">
          <img src="/Capture.PNG" alt="" />
          <span>
          Highlight 4          </span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
