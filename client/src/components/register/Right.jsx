import React, { useState } from "react";
import LogoIndex from "../../images/logo/logo.svg";
import "../index.css";
import { Link, Navigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { BiShow } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";
import axios from "axios";

function Right() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [errorTerms, setErrorTerms] = useState("");
  const [errorRegister, setErrorRegister] = useState("");
  const [infoRegister, setInfoRegister] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const abrirNovaAba = (rota) => {
    const url = `${window.location.origin}${rota}`;
    window.open(url, '_blank');
  };

  const handleCheckboxChange = () => {
    setTerms(!terms); // Inverte o valor atual do estado isChecked
    setErrorTermsr(""); // Limpa a mensagem de erro quando o checkbox é alterado
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      if (!terms) {
        setErrorTerms("You must agree to the terms"); // Define a mensagem de erro se o checkbox não estiver marcado
        return;
      }
      await axios.post("/register", {
        email,
        password,
        terms,
      });
      setRedirect(true);
      setInfoRegister(
        "Registration successful! Please check your email to confirm your account."
      );
    } catch (e) {
      setErrorRegister("Registration failed. Please try again later");
      return;
    }
  }

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="w-[45%]">
      <Link to="/">
        <IoCloseSharp className="absolute text-[45px] top-5 right-5 text-[#2144e1] cursor-pointer" />
      </Link>
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={LogoIndex} className="h-[40px] mt-8 ml-8" alt="" />
        <div className="mt-10 w-[50%]">
          <h2 className="text-[26px] font-bold nunito-font">Register</h2>
          <p className="nunito-font text-[14px] mt-4 text-gray-500">
            Sign in with your data that you entered during your registration.
          </p>
          <form className="mt-4" onSubmit={registerUser}>
            <label
              className="nunito-font text-[14px] text-gray-500"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="w-full block outline-none border-[1px] border-gray-300 rounded-md h-[40px] p-2 text-[#2144e1] font-bold nunito-font mt-1 mb-2 placeholder:font-normal"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <label
              className="nunito-font text-[14px] text-gray-500"
              htmlFor="Password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="w-full block outline-none border-[1px] border-gray-300 rounded-md	h-[40px] p-2 text-[#2144e1] font-bold nunito-font mt-1 placeholder:font-normal mb-4"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute bottom-[10px] right-2 cursor-pointer"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <GrFormViewHide className="text-[#2144e1] text-[20px]" />
                ) : (
                  <BiShow className="text-[#2144e1] text-[20px]" />
                )}
              </span>
            </div>
            <div className="flex mt-6">
              <input
                type="checkbox"
                checked={terms}
                onChange={handleCheckboxChange}
              />
              <p className="ml-2 nunito-font text-gray-500 text-[14px] font-medium">
                Agree with{" "}
                <Link onClick={() => abrirNovaAba('/terms')} className="text-[#2144e1] text-[15px] font-bold">
                  Terms & Conditions
                </Link>
              </p>
            </div>
            {errorTerms && <div style={{ color: "red" }}>{errorTerms}</div>}{" "}
            {errorRegister && (
              <div style={{ color: "red" }}>{errorRegister}</div>
            )}{" "}
            {infoRegister && (
              <div style={{ color: "green" }}>{infoRegister}</div>
            )}{" "}
            <button
              to={"/login"}
              className="w-full h-[40px] bg-[#2144e1] mt-5 text-white nunito-font rounded-md"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Right;
