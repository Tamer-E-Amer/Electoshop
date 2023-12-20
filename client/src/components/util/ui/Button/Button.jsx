import React from "react";

const Button = ({ title, icon, onClickHandler, style }) => {
  return (
    <>
      <button className={`${style}`} onClick={onClickHandler}>
        {icon}
        <span>{title}</span>
      </button>
    </>
  );
};

export default Button;
