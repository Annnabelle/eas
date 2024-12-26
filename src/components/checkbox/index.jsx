import React, { useState } from "react";
import { RiCheckFill } from "react-icons/ri";
import "./styles.sass";

const Checkbox = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
    onChange(!checked); // Update parent component state
  };

  return (
    <div
      className={`checkbox ${checked ? "checked" : ""}`}
      onClick={toggleCheckbox}
    >
      {checked && <RiCheckFill />}
    </div>
  );
};

export default Checkbox;
