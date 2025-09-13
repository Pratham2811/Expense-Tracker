import React from 'react'
import { useState } from 'react'
import Input from "../../components/Input/Input.jsx"
import AuthLayout from '../../components/layout/Authlayout'
import { Link } from 'react-router-dom'
const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setError("");
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if(!formData.fullname){
        setError("Enter Your Full Name")
        return
    }
     if(!formData.email){
        setError("Enter Valid Email")
        return
    }
     if(!formData.password){
        setError("Enter Your Password")
        return
    }
    console.log("Signup submitted with:", formData);
  };

  return (
    <AuthLayout>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-200">Sign Up</h3>
        <p className="text-slate-400">Create an account to get started.</p>
      </div>
      
      <form onSubmit={handleSignup} className="space-y-6">
        <Input
          type="text"
          label="Full Name"
          placeholder="Narendra Modi"
          value={formData.fullname}
          inputChange={handleChange}
          name="fullname"
        />
        <Input
          type="text"
          label="Email Address"
          placeholder="any@example.com"
          value={formData.email}
          inputChange={handleChange}
          name="email"
        />

        <Input
          type="password"
          label="Password"
          placeholder="Create your password"
          value={formData.password}
          inputChange={handleChange}
          name="password"
        />

        <p className="text-red-400 text-sm text-center">{error}</p>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg
                     transition-colors duration-200 shadow-md transform hover:scale-105"
        >
          Sign Up
        </button>
      </form>
      
      <div className="text-center mt-4">
        <p className="text-slate-400 text-sm">
          Already have an account?
          <Link to="/sign-in"
           
            className="text-indigo-400 hover:text-indigo-300 font-medium ml-1 transition-colors cursor-pointer"
          >
            Log In
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignUp;