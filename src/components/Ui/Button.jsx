import React from "react";
import "./Button.css";

export const Button = (props) => {
  return (
    <div>
      <button
        style={{ marginRight: props.marginRight }}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

