import React from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "@/store/authStore";
import { formatDate } from "@/utils/date";
import Header from "../components/Header";
import styled from "styled-components";
import "../components/VideoBackground.css";

const StyledDiv = styled.div`
  @media screen and (max-width: 767px) {
  }
`;

const DashboardPage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    logout();
  };

  const handleLink = async () => {
    window.location.href = "https://cartel-chat-bot.vercel.app/";
  };
  if (user && !user.isVerified) {
    return (
      <div className="text-center text-red-400 mt-20 text-xl font-semibold">
        Your email is not verified. Please check your inbox to verify.
      </div>
    );
  }
  return (
    <>
      <Header />
      <StyledDiv className="containervideo">
        <video autoPlay loop muted playsInline className="background-clip">
          <source
            src="https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/liquid+ink+cut+video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="content">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full mx-auto
    mt-10 p-8 
    backdrop-filter  rounded-xl
    shadow-2xl border border-gray-800
    "
          >
            <h2
              className="text-3xl font-bold mb-6 text-center 
    bg-gradient-to-r from-green-400 to-emerald-600
    text-transparent bg-clip-text"
            >
              Dashboard
            </h2>
            <div className="space-y-6">
              <motion.div
                className="p-4 bg-gray-800 bg-opacity-50 rounded-lg
    border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3
                  className="text-xl font-semibold text-green-400
    mb-3"
                >
                  Profile Information
                </h3>
                <p className="text-gray-300"> Name: {user.name}</p>
                <p className="text-gray-300"> Email: {user.email}</p>
              </motion.div>
              <motion.div
                className="p-4 bg-gray-800 bg-opacity-50
        rounded-lg border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3
                  className="text-xl font-semibold 
        text-green-400 mb-3"
                >
                  Account Activity
                </h3>
                <p className="text-gray-300">
                  <span className="font-bold"> Joined: </span>
                  {new Date(user.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-gray-300">
                  <span className="font-bold"> Last Login: </span>
                  {formatDate(user.lastLogin)}
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-4"
            >
              <motion.button
                className=" max-w-md w-full py-3 px-4 bg-gradient-to-r from-green-500
       to-emerald-600 text-white  rounded-lg shadow-lg
       hover:from-green-600 hover:to-emerald-700
       focus:outline-none focus:ring-2 focus:ring-green-500
       focus:ring-offset-2 focus:ring-offset-gray-900 font-extrabold 
       "
                onClick={handleLink}
              >
                <h1> Visit Ai</h1>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="button w-full py-3 px-4 bg-gradient-to-r from-green-500
       to-emerald-600 text-white font-bold rounded-lg shadow-lg
       hover:from-green-600 hover:to-emerald-700
       focus:outline-none focus:ring-2 focus:ring-green-500
       focus:ring-offset-2 focus:ring-offset-gray-900 mt-3
       "
              >
                Logout
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </StyledDiv>
    </>
  );
};

export default DashboardPage;
