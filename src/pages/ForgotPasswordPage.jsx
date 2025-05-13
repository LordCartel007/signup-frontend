import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { Mail, ArrowLeft, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "@/components/Input";
import styled from "styled-components";

import Header from "../components/Header.jsx";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { isLoading, forgotPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };

  const StyledDiv = styled.div`
    width: 100vw;
    height: 100vh;
  `;

  return (
    <>
      <Header />
      <StyledDiv className="containervideo">
        <video autoPlay loop muted playsInline className="background-clip">
          <source
            src="https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/satisfactory+desserts+video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md center w-full bg-transparent  
   rounded-2xl shadow-xl overflow-hidden 
    "
          >
            <div className="p-8 ">
              <h2
                className="text-3xl font-bold mt-20 text-center 
      bg-gradient-to-r from-green-400 to-emerald-500
      text-transparent bg-clip-text"
              >
                Forgot Password
              </h2>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <p className="text-gray-300 mb-6 text-center">
                    Enter your email address and we will send you a link to
                    reset your password.
                  </p>
                  <Input
                    icon={Mail}
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-green-500
             to-emerald-600 text-white font-bold rounded-lg
             shadow-lg hover:from-green-600 hover:to-emerald-700 
             focus:outline-none focus:ring-2 focus:ring-green-500
             focus:ring-offset-gray-900 transition duration-200

             "
                    type="submit"
                  >
                    {isLoading ? (
                      <Loader
                        className="size-6
               animate-spin mx-auto"
                      />
                    ) : (
                      "Send Reset Link"
                    )}
                  </motion.button>
                </form>
              ) : (
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-16 h-16 bg-green-500 rounded-full
            flex items-center justify-center mx-auto mb-4
            "
                  >
                    <Mail className="w-8 h-8 text-white" />
                  </motion.div>
                  <p className="text-gray-300 mb-6">
                    If an account exists for {email}, you will recieve a
                    password reset link shortly
                  </p>
                </div>
              )}
              <div
                className="px-8 py-4 bg-gray-900 bg-opacity-50
        flex justify-center rounded-2xl
     "
              >
                <Link
                  to={"/login"}
                  className="text-sm text-green-400
        hover:underline flex items-center
        "
                >
                  <ArrowLeft className="w-4 h-4 mr-2 " />
                  Back to Login
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </StyledDiv>
    </>
  );
};

export default ForgotPasswordPage;
