import React from "react";
import Reactpost from "./Reactpost"; // Import the Reactpost component

const PostContainer = () => {
  return (
    <div className="post-container">
      <div className="text-posts">
        {/* Regular text posts */}
        <Reactpost
          type="text"
          text="Be strong ,Lean on yourself🖤"
          likeCount={10}
          commentCount={5}
          height={120}
          width={1550}
        />

      </div>

      <div className="link-posts">
        {/* Link posts */}
        <Reactpost
          type="link"
          linkUrl="https://www.facebook.com"
          linkTitle="Facebook Website"
          linkDescription="Go to your account in facebook."
          likeCount={20}
          commentCount={8}
          height={180}
          width={1550}

        />

        {/* Add more link posts here */}
      </div>
      <div className="imagepost">
        <Reactpost 
        type="image"
        text="- الأيّام الثقِيلة مَا جاءَت إلّا لتصنعنَا ❤️!"
        imageUrl="/imagepost.jpg"
        likeCount={10}
        commentCount={5}
        height={700}
        width={1550}

        />
      </div>
      <div className="multipleimage">
        <Reactpost
        type="multimage"
        text="Check out these images!"
          imageUrls={[
            "/story.jpg",
            "/story2.jpg",
            // Add more image URLs as needed
          ]}
          likeCount={15}
          commentCount={7}
          height={600}
          width={1550}

          />
      </div>
    </div>
  );
};

export default PostContainer;
