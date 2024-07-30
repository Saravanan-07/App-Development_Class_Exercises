import React, { createContext, useState, useContext } from 'react';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const loginUser = (userData) => {
    setUser(userData);
    setAdmin(null);
  };

  const logoutUser = () => {
    setUser(null);
  };

  const loginAdmin = (adminData) => {
    setAdmin(adminData);
    setUser(null);
  };

  const logoutAdmin = () => {
    setAdmin(null);
  };

  const logout = () => {
    if (user) {
      logoutUser();
    }
    if (admin) {
      logoutAdmin();
    }
  };

  return (
    <AuthContext.Provider value={{ user, admin, loginUser, logout, loginAdmin, logoutAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};













// import React, { createContext, useState, useContext } from 'react';

// // Create context
// const AuthContext = createContext();

// // Provider component
// export const AuthProvider = ({ children }) => {
//   // State to manage user and admin authentication
//   const [user, setUser] = useState(null);
//   const [admin, setAdmin] = useState(null);

//   // Login function for user
//   const loginUser = (userData) => {
//     setUser(userData);
//     setAdmin(null); // Ensure admin is not logged in if a user logs in
//   };

//   // Logout function for user
//   const logoutUser = () => {
//     setUser(null);
//   };

//   // Login function for admin
//   const loginAdmin = (adminData) => {
//     setAdmin(adminData);
//     setUser(null); // Ensure user is not logged in if an admin logs in
//   };

//   // Logout function for admin
//   const logoutAdmin = () => {
//     setAdmin(null);
//   };

//   // Provide context values
//   return (
//     <AuthContext.Provider value={{ user, admin, loginUser, logoutUser, loginAdmin, logoutAdmin }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook for using auth context
// export const useAuth = () => {
//   return useContext(AuthContext);
// };