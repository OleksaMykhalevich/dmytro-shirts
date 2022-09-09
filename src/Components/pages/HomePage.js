import React from "react";
import homePreviewImg from "../../Components/pages/pagesImg/words.jpg";
import "./HomePage.css";
import { tShirtsArray } from "../shared/tShirtsArray";
import { ShirtElement } from "../Elements/shirtElement";
import { Grid } from "@mui/material";

export const HomePage = () => {
  return (
    <>
      <div className="preview">
        <div className="title">
          <img alt="homePreviewImg" src={homePreviewImg}></img>
        </div>
      </div>
      <div className="container">
        <p className="shirtsTitle">Футболки</p>
        <div className="shirtsPart">
          {tShirtsArray.map(({ id, title, img, price, text }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <ShirtElement
                id={id}
                title={title}
                img={img}
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
