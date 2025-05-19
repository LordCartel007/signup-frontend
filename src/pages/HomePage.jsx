import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import "../components/VideoBackground.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Title = styled.h1`
  font-weight: bolder;

  margin-top: 20px;
  color: #ffffff;
  text-decoration: none;
  font-family: "Rye", serif;
  font-weight: 400;
  font-style: normal;
  flex: 1; /* Makes title fill available space */
  justify-content: center;

  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 767px) {
    font-size: 3rem;
  }

  /* nest hub tv screen */
  @media screen and (min-width: 1023px) {
    font-size: 4rem;
  }
`;

const Pwords = styled.p`
  font-weight: bolder;

  margin: 0;
  color: #ffc107;
  text-decoration: none;
  font-family: "Rye", serif;
  font-weight: 400;
  font-style: normal;
  flex: 1; /* Makes title fill available space */
  justify-content: center;

  @media screen and (max-width: 767px) {
    font-size: 0%.9;
  }

  @media screen and (min-width: 767px) {
    font-size: 1.2rem;
  }

  /* nest hub tv screen */
  @media screen and (min-width: 1023px) {
    font-size: 1.3rem;
  }
`;
const PathButton = styled.button`
  background-color: #ffc107;
  color: #0e0e10; /* Text color */
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px; /* Optional: Rounded corners */
  font-family: "Rye", serif;
  margin-top: 25px;
  padding: 10px;
  width: 200px;
  height: 50px;
  font-style: normal;

  @media screen and (max-width: 768px) {
    font-size: 10px;
    height: 40px;
    width: 90px;
  }
`;

const StyledDiv = styled.div`
  height: 50vh;
  width: 100vw;
  @media screen and (max-width: 767px) {
    height: 30vh;
    width: 100vw;
  }
`;

const StyledVideo = styled.video`
  height: 100vh;
  width: 100vw;
  @media screen and (max-width: 767px) {
    height: 100vh;
    width: 100vw;
  }
`;

const StyledTitleDiv = styled.div`
  justify-content: center;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
`;

const StyledVideotwo = styled.video`
  height: 100vh;
  width: 100vw;
  @media screen and (max-width: 767px) {
    height: 70vh;
    width: 100vw;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />

      <div className="containervideothree">
        <StyledVideo
          autoPlay
          loop
          muted
          playsInline
          className="background-clip"
        >
          <source
            src="https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/dessert+video+2.mp4"
            type="video/mp4"
          />
        </StyledVideo>
        <div className="content">
          <div className="">
            <Title>The Ai You can trust</Title>
            <Pwords>
              {" "}
              Cartel Ai can talk , read Pdf or any file you input , she can open
              websites with voice recognition, you can gist with her and she
              says the best joke,
            </Pwords>
            <Pwords>
              She can solve maths equation if you send her the pics, So she is a
              chat and speak bot
            </Pwords>
            <Pwords>
              Use the sign up / login button to have access to the bot for free
            </Pwords>
          </div>
        </div>
        <div className="flex justify-center font-extrabold ">
          <PathButton
            className="homebutton not-only:flex items-center justify-center px-4 py-2 rounded"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </PathButton>
          <PathButton
            className="homebutton flex items-center justify-center px-4 py-2 rounded"
            onClick={() => navigate("/login")}
          >
            Login
          </PathButton>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
