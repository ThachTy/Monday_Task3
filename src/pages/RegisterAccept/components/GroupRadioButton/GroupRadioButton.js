import React from "react";
import "./GroupRadioButton.scss";
import RadioButton from "../../../../components/RadioButton/RadioButton";

function GroupRadioButton({ list, message, heading, group, handleChange }) {
  return (
    <>
      <h3 className="heading">{heading}</h3>
      <p className="message mb-[1rem]">{message}</p>
      <div className="group__tag">
        {list.map((item, index) => {
          return (
            <RadioButton
              key={item.value + index}
              id={item.value}
              name={group}
              value={item.value}
              handleChange={handleChange}
            >
              {item.label}
            </RadioButton>
          );
        })}
      </div>
    </>
  );
}

export default GroupRadioButton;
