import React from 'react'
import { useState } from 'react'


const Input = ({ value, placeholder, label, type, inputChange, name }) => {
  const [showPassword, setShowpassword] = useState(false);

  const handletoggle = () => {
    setShowpassword(!showPassword);
  };

  return (
    <div className='mb-4'>
      <label htmlFor={name} className='text-slate-200 font-medium mb-1 block'>{label}</label>
      <div className='relative flex items-center'>
        <input
          id={name}
          name={name}
          type={type === 'password' ? showPassword ? "text" : "password" : type}
          placeholder={placeholder}
          value={value}
          onChange={inputChange}
          className='bg-slate-700 text-slate-200 border border-slate-600 rounded-lg w-full p-3 pr-10
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200'
        />
        {type === 'password' && (
          <div
            className='absolute right-3 cursor-pointer text-slate-400 hover:text-slate-200 transition-colors'
            onClick={handletoggle}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.88 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.172.264C13.41 9.332 11.65 10.5 8 10.5s-3.64-.168-4.828-1.457A13 13 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.359 11.238C15.06 9.763 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457L13.359 11.238zm3.601-6.008a10.926 10.926 0 0 1-1.213-1.597l.775-.775A12 12 0 0 0 16 8s-3 5.5-8 5.5a7.029 7.029 0 0 1-2.79-.588l.77-.77a6.996 6.996 0 0 0 2.864.12l-.546-.546zm-6.009.756-.708-.708A2.5 2.5 0 0 0 5.5 5.5v2.36l-1.493 1.494zM12.44 10.52L10.94 9.022a2.5 2.5 0 0 0-3.328-3.328l-.708-.708A3.5 3.5 0 0 1 8 4.5c.912 0 1.637.247 2.272.766l.708-.708A4.5 4.5 0 0 0 8 3.5 4.5 4.5 0 0 0 3.5 8a4.5 4.5 0 0 0 2.44 4.162l.708-.708A3.5 3.5 0 0 1 8 11.5c1.192 0 2.246-.484 2.942-1.267L12.44 10.52zm-8.775-4.15a.5.5 0 0 1 .708-.708l.707.708a.5.5 0 0 1-.708.707z" />
                <path d="m10.854 12.854-.708-.708a.5.5 0 0 1 .708-.708l.707.708zM12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-.26-1.74a.5.5 0 0 0-.708-.708A2.5 2.5 0 0 1 8 5.5a2.5 2.5 0 0 1-2.5 2.5c-.707 0-1.282-.367-1.611-.861a.5.5 0 1 0-.882.47a3.5 3.5 0 0 0 4.99 3.498l.708-.707a.5.5 0 0 0-.708-.708l-.707.708a2.5 2.5 0 0 1-3.498-3.498l.708-.707z" />
              </svg>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input