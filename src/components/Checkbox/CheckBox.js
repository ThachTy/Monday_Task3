import React from "react";
import "./CheckBox.scss";

function CheckBox({ id, name, children, handleChange, value }) {
  return (
    <label className="checkbox" htmlFor={id}>
      <input
        id={id}
        name={name}
        value={value}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        className="radio"
        type="checkbox"
      />
      <span className="dot"></span>
      <span>{children}</span>
    </label>
  );
}

export default CheckBox;
