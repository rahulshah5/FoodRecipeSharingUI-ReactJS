// AuthService.js
import axios from "./axios";
import React, { useState, useEffect } from 'react';



class AuthService {
  
 
  
  async register(full_name,email,gender,password,password2,country) {
    const response = await axios.post("register/", {
      full_name,
      email,
      gender,
      password,
      password2,
      country,
    });
    return response.data;
  }

  // Login an existing user
  async login(email, password) {
    console.log(axios.defaults.headers.delete)
    const response = await axios.post("login/", {
      email,
      password,
    });
    let resData=response.data
    if (response.data) {
      console.log("user logged in "+ resData.token.access)
      localStorage.setItem("user", JSON.stringify(response.data.token.access));
      
    }
    return response.data;
  }

  async profile() {
    const userToken = localStorage.getItem("user"); 

    if (!userToken) {
      console.error("User token not found.");
      return { error: "User token not found" };
    }
  
    try {
      const response = await axios.get("profile/", {
        headers: {
          Authorization: `Bearer ${userToken.replace(/"/g,"")}`, 
        }
      },[]);
      const ud=response.data
      return ud;
    } catch (error) {
      console.error("Profile request error:", error);
      return ("cannot access data")
    }
  }

  // Logout the current user
  logout() {
    localStorage.removeItem("user");
    // Reloads the current page
    window.location.reload();

  }

  // Get the current user
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
