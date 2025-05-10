import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useAuthStore } from "@/store/authStore";
import "../components/VideoBackground.css";
import styled from "styled-components";
import "../components/VideoBackground.css";
import axios from "axios";
const StyledDiv = styled.div`
  @media screen and (max-width: 767px) {
  }
`;

const EmailVerificationPage = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const { error, user, isLoading, verifyEmail } = useAuthStore();

  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => {
        setResendCooldown(resendCooldown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handleChange = (index, value) => {
    const newCode = [...code];

    //Handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);
      //focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      //move focus to the next input field if the value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    try {
      await verifyEmail(verificationCode);

      toast.success("Email verified successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  //auto submit when all fields are filled
  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);

  //verification code resend
  const [canResend, setCanResend] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setCanResend(true), 30000); // Enable after 60 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleResend = async () => {
    try {
      await axios.post(
        `${"https://signup-auth-backend.vercel.app/api/auth"}/resend-verification`,
        {
          email: user.email,
        }
      );
      console.log("Resending to email:", user.email);
      toast.success("Verification email resent!");
      setCanResend(false);
      setTimeout(() => setCanResend(true), 60000);
    } catch (error) {
      console.error("Resend failed:", error);
      toast.error(
        error?.response?.data?.message ||
          error.message ||
          "Failed to resend email"
      );
    }
  };

  return (
    <StyledDiv className="containervideo">
      <video autoPlay loop muted playsInline className="background-clip">
        <source
          src="https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/liquid+ink+cut+video.mp4"
          type="video/mp4"
        />
      </video>
      <div className="content">
        <div
          className="center mt-35 p-4 max-w-md w-full 
 rounded-2xl
  overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
  rounded-2xl shadow-2xl p-8 w-full max-w-md"
          >
            <h2
              className="text-3xl font-bold mb-6 text-center bg-gradient-to-r
  from-green-400 to-emerald-500 text-transparent bg-clip-text
  "
            >
              Verify Your Email
            </h2>
            <p className="text-center text-gray-300 mb-6">
              Enter the 6-digit code sent to your email address.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-between">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength="6"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-10 h-12 text-center text-2xl font-bold
          bg-gray-700 text-white border-2 border-gray-rounded-lg
          focus:border-green-500 focus:outline-none
          "
                  />
                ))}
              </div>
              {error && (
                <p className="text-red-500 font-semibold mt-2"> {error}</p>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isLoading || code.some((digit) => !digit)}
                className="w-full bg-gradient-to-r from-green-500
            to-emerald-600
            text-white font-bold py-3 px-4 rounded-lg 
            shadow-lg hover:from-green-600 hover:to-emerald-700
            focus:outline-none focus:ring-2 focus:ring-green-500
            focus:ring-opacity-50 disabled:opacity-50"
              >
                {isLoading ? "Verifying..." : "Verify Email"}
              </motion.button>
            </form>
            {canResend ? (
              <button
                onClick={handleResend}
                className="text-green-400 underline mt-4"
              >
                Resend verification email
              </button>
            ) : (
              <p className="text-gray-400 mt-4">
                You can resend in 30 seconds...
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default EmailVerificationPage;
