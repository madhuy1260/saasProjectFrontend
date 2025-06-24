import React from "react";

const HomeComponent = () => {
  return (
    <div>
      {" "}
      <div class="topnav">
        <a class="active" href="#home">
          Home
        </a>
        <a href="/Dashboard">Dashboard</a>
        <a href="/loginPage">Login </a>
        <a href="/RegisterPage">Register</a>
      </div>
    </div>
  );
};

export default HomeComponent;
