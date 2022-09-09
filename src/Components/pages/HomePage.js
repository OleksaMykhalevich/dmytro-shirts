import React from "react";
import homePreviewImg from "../../Components/pages/pagesImg/words1.jpg";
import "./HomePage.css";
import { tShirtsArray } from "../shared/tShirtsArray";
import { ShirtElement } from "../Elements/shirtElement";
import { Grid } from "@mui/material";
import backgroundImgCar from "./pagesImg/0317dfa27223471ac1a44d76d61b8f65.jpg";

export const HomePage = () => {
  return (
    <>
      <div className="preview">
        <div className="backgroundImg">
          <img alt="backgroundImgCar" src={backgroundImgCar}></img>
        </div>
        <div className="title">
          <img alt="homePreviewImg" src={homePreviewImg}></img>
        </div>
      </div>
      <div className="container">
        <div className="shirtsTitle">
          <h1>OUR COLLECTION</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>

        <div className="shirtsPart">
          {tShirtsArray.map(({ id, title, img1, img2, price, text }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <ShirtElement
                id={id}
                title={title}
                img1={img1}
                img2={img2}
                price={price}
                text={text}
              />
            </Grid>
          ))}
        </div>
      </div>
    </>
  );
};
