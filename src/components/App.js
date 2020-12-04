import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
   
     <div id="main">
      <h1 data-ns-test="project-name"> Tic Tac Toe </h1>
      <p data-ns-test="project-description">
        this is a two player game in which players have moves one by one and
        they will be having either X or O . when three consicutive boxes will
        match horizontally or vertically or diagonally , that player wins first{" "}
      </p>
    </div>
   
  );
};
export default App;
