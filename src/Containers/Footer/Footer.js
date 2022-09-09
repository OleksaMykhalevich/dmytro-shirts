import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <p className="contactUs"> Contact Us</p>
        <div className="container">
          <div className="fPosition">
            <div className="contacts">
              <div className="firstPartOfContacts">
                <p className="adress">Adrress:Goryvska str.</p>
                <p className="telefon">Number:+499999999999</p>
                <p className="mail">Email:klasnifutbolki@gmail.com</p>
              </div>
              <div className="secondPartOfContacts">
                <p className="workTime">
                  MON - FRI: 7am - 10pm
                  <br />
                  SATURDAY: 8am - 10pm
                  <br />
                  SUNDAY: 8am - 11pm
                </p>
              </div>
            </div>
            <div className="regForm">
              <input
                className="name"
                type="text"
                id="fname"
                name="fname"
                placeholder="Name"
              ></input>
              <input
                className="email"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              ></input>
              <input
                className="contMessage"
                type="text"
                id="message"
                name="message"
                placeholder="Message"
              ></input>
              <button className="send">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
