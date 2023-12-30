import React from "react";
import "./GroupRadioButton.scss";
import RadioButton from "../../../../components/RadioButton/RadioButton";

function GroupRadioButton({ list, heading, group, handleChange }) {
  return (
    <>
      <h3 className="heading">{heading}</h3>
      {/*   */}
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
