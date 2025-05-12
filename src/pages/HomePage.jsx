import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import "../components/VideoBackground.css";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  @media screen and (max-width: 767px) {
  }
`;

const Title = styled.h1`
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
    font-size: 1rem;
  }

  @media screen and (min-width: 767px) {
    font-size: 1.5rem;
  }

  /* nest hub tv screen */
  @media screen and (min-width: 1023px) {
    font-size: 1.5rem;
  }
`;
const PathButton = styled.button`
  border: 0;

  border-radius: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  background-color: #0e0e10;
  color: #ffc107;
  padding: 10px;
  font-size: 3vh;
  height: 80px;
  width: 200px;
  margin: 10px;

  @media screen and (max-width: 768px) {
    font-size: 2vh;
    height: 40px;
    width: 90px;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <StyledDiv className="containervideo">
        <video autoPlay loop muted playsInline className="background-clip">
          <source
            src="https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/liquid+ink+cut+video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="content">
          <h1 className="heading-top font-extrabold">Cartel Ai</h1>
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
            className="flex items-center justify-center px-4 py-2 rounded"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </PathButton>
          <PathButton
            className="flex items-center justify-center px-4 py-2 rounded"
            onClick={() => navigate("/login")}
          >
            Login
          </PathButton>
        </div>
      </StyledDiv>
    </div>
  );
};

export default HomePage;
