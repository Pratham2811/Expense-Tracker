import React from 'react';

const AuthLayout = ({ children }) => {
  return (
   
    <div className="bg-slate-900 min-h-screen flex items-center justify-center p-4">
    
      <div className="bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-md">
      
        <h2 className="text-3xl font-bold text-slate-200 mb-6 text-center">Finance Tracker</h2>
        
       
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;