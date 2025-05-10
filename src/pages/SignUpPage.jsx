import React, { useState } from "react";
import { motion } from "framer-motion";
import Input from "@/components/Input";
import { User, Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import PasswordStrengthMeter from "@/components/PasswordStrengthMeter";
import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import "../components/VideoBackground.css";

const StyledDiv = styled.div`
  @media screen and (max-width: 767px) {
  }
`;

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //destructuring from the auth store
  const { signup, error, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    //tryand catch block to handle errors
    try {
      await signup(email, password, name);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };

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
        <div className="content  ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" max-w-md center w-full bg-transparent  
   rounded-2xl shadow-xl overflow-hidden
   "
          >
            <div className="p-8">
              <h2
                className="text-3xl font-bold mb-6 text-center bg-gradient-to-r
        from-green-400 to-emerald-500 text-transparent bg-clip-text"
              >
                Create Account
              </h2>
              <form onSubmit={handleSignUp}>
                <Input
                  icon={User}
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <Input
                  icon={Mail}
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  icon={Lock}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/*showing error */}
                {error && (
                  <p className="text-red-500 font-semiBold mt-2">{error} </p>
                )}

                {/* Password strength meter */}

                <PasswordStrengthMeter password={password} />

                <motion.button
                  className="mt-5 w-full py-3 px-4 
          bg-gradient-to-r  from-green-500 to-emerald-600 text-white font-bold 
          rounded-lg  shadow-lg hover:from-green-600 hover:to-emerald-700
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
          focus:ring-offset-gray-900 transition duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader className="animate-spin mx-auto" size={24} />
                  ) : (
                    "Sign Up"
                  )}
                </motion.button>
              </form>
            </div>
            <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
              <p className="text-sm text-gray-400">
                Already have an account?{" "}
                <Link to={"/login"} className="text-green-400 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </StyledDiv>
    </>
  );
};

export default SignUpPage;
