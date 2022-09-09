import React from "react";

export const ShirtElement = ({ id, title, img1, img2, price, text }) => {
  return (
    <>
      <div className="shirtItem">
        <div className="shirt ">
          <img className="postImg" alt="img" src={img1} />
          <img className="postImg1" alt="img" src={img2}></img>
          <div className="postContent">
            <p>{title}</p>
            <span>{text}</span>
            <p className="postText">$ {price}</p>
            {/* <p className="line"> </p> */}
            <div className="viewMore">
              <a>View more</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
