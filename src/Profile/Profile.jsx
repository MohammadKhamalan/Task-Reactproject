import "./Profile.scss";
import React from "react";
import Reactpost from "../Reactpost/Reactpost";
import PostContainer from "../Reactpost/PostContainer";
import Stories from "../Stories/Stories";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FavoriteIcon from "@mui/icons-material/Favorite";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import VoiceChatOutlinedIcon from "@mui/icons-material/VoiceChatOutlined";
import PhotoTwoToneIcon from "@mui/icons-material/PhotoTwoTone";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="/cover.PNG" alt="" className="cover" />
        <div className="place">
        <img src="/Capture.PNG" alt="" className="profilePic" />
     
    </div>
      </div>

      <div className="profileContainer">
        <span>Mohammad Khamalan</span>
        <span>
          {" "}
          <FavoriteIcon />
          رفرف يا علمي اعلى و جدد املي
        </span>
        <div className="bit">
        <button>Edit bio</button></div>

        <div className="details">
          <div className="container">
            <span>
              {" "}
              <SchoolOutlinedIcon /> Studies Computer Engineering at ‎جامعة
              النجاح الوطنية - An-Najah National University
            </span>

            <span >
              {" "}
              <CottageOutlinedIcon /> Lives in Nablus
            </span>
            <span>
              <LocationOnOutlinedIcon /> From nablus{" "}
            </span>
            <span>
              <AccessTimeOutlinedIcon />Joined May 2015
            </span>
            <Stories/>
          </div>
          <div className="posts">
            <img src="/Capture.PNG" alt="" className="photo" />
            <div className="input-container">
              <input type="text" placeholder="What's on your mind" />
              <div className="post-options">
                <div className="option">
                <span>
                  <VoiceChatOutlinedIcon /> Live video
                </span>
                <span>
                  <PhotoTwoToneIcon /> Photo/video
                </span>
                <span>
                  <AssistantPhotoIcon /> Life event
                </span>
                </div>
                <div className="story">
                <button className="add-story-button">
  <AddOutlinedIcon />
  Add story
</button>
<button className="add-story-button">
  <ModeEditOutlineOutlinedIcon />
  Edit profile
</button>
</div>

              </div>
            </div>
          </div>
        </div>
        <PostContainer />
      </div>
    </div>
  );
};

export default Profile;
