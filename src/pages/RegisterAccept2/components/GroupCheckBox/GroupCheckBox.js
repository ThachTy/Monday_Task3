import React from "react";
import "./GroupCheckBox.scss";
import CheckBox from "../../../../components/Checkbox/CheckBox";

function GroupCheckBox({ list, message, heading, group, handleChange }) {
  return (
    <>
      <h3 className="heading">{heading}</h3>
      <p className="message mb-[1rem]">{message}</p>
      <div className="group__tag">
        {list.map((item, index) => {
          return (
            <CheckBox
              key={item.value + index}
              id={item.value}
              name={group}
              value={item.value}
              handleChange={handleChange}
            >
              {item.label}
            </CheckBox>
          );
        })}
      </div>
    </>
  );
}

export default GroupCheckBox;
