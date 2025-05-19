import { Route, Routes, Navigate, NavLink } from "react-router-dom";
import styled from "styled-components";
import Center from "./Center";
import React, { useState } from "react";

const FooterWrapper = styled.footer`
  background-color: #0e0e10;
  color: #aaa;
  padding: 20px 0;
  width: 100%;
  text-align: center;
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const FooterLink = styled(NavLink)`
  color: #d9ecff;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    color: #fff;
  }
`;

const ContactUs = styled(NavLink)`
  color: #d9ecff;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    color: #fff;
  }
`;
const FooterText = styled.p`
  font-size: 12px;
  margin-top: 10px;
  color: #d9ecff;
`;

const ExternalLink = styled(NavLink)`
  color: #d9ecff;
  text-decoration: none;
  display: block;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
export default function Footer() {
  return (
    <FooterWrapper>
      <Center>
        <FooterNav>
          <FooterLink to="/homepage">Home</FooterLink>
        </FooterNav>
        <FooterText>
          © {new Date().getFullYear()} Cartel Ai. All rights reserved.
        </FooterText>
      </Center>
    </FooterWrapper>
  );
}
