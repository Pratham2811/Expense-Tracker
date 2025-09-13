import React from "react";
import Authlayout from "../../components/layout/Authlayout";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
const navigate=useNavigate()
  // This unified handler correctly updates the state for each input field.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
 console.log("hii");
 
    if(!formData.email){
        setError("Enter valid Email")
        return
    }
     if(!formData.password){
        setError("Enter valid password")
        return
    }
    console.log("Login submitted with:", formData);

    //login api call
    
  };

  return (
    <Authlayout>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-200">Log In</h3>
        <p className="text-slate-400">Welcome back! Please enter your details.</p>
      </div>
      
      <form onSubmit={handleLogin} className="space-y-6">
        {/* Email Input */}
        <Input
          type="text"
          label="Email Address"
          placeholder="any@example.com"
          value={formData.email}
          inputChange={handleChange}
          name="email"
        />

        {/* Password Input */}
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={formData.password}
          inputChange={handleChange}
          name="password"
        />

        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg
                     transition-colors duration-200 shadow-md transform hover:scale-105"
        >
          Sign In
        </button>
      </form>

      <div className="text-center mt-4">
        <p className="text-slate-400 text-sm">
          Don't have an account?
          <button
            onClick={() => {navigate('/sign-up')}}
            className="text-indigo-400 hover:text-indigo-300 font-medium ml-1 transition-colors cursor-pointer"
          >
            Sign up
          </button>
        </p>
      </div>
    </Authlayout>
  );
};

export default Login;