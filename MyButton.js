import React, { useState } from "react";
import DropDown from "./DropDown";

function MyButton({ name, handleClick }) {
  const buttonClicked = (event) => {
    handleClick();
  };

  return <button onClick={buttonClicked}>{name}</button>;
}
export default MyButton;
