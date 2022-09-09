import React from "react";
import PropTypes from "prop-types";

export const ShirtElement = ({ id, title, img, price, text }) => {
  return (
    <>
      <div className="shirtItem">
        <div className="shirt ">
          <img className="postImg" alt="img" src={img} />
          <div className="postContent">
            <p>{title}</p>
            <p className="postText">
              <span>{text}</span>
              <br /> {price}.
            </p>
            <p className="line"> -</p>
          </div>
        </div>
      </div>
    </>
  );
};
