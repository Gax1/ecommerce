import { useState } from "react";

const Selectors = ({ options, setOption }) => {
  const [checked, setChecked] = useState(false);

  const onClick = (event) => {
    setChecked(!checked);
    setOption(event.target.value);
  };

  return options.map((option, index) => (
    <label
      htmlFor={option.code}
      className="select-option__label"
      key={option.code}
    >
      {option.name}
      <input
        key={option.name}
        type="checkbox"
        className="select-option__input"
        id={option.code}
        value={option.code}
        checked={index === 0 ? !checked : checked}
        onChange={onClick}
        data-testid="checkbox-input"
      />
    </label>
  ));
};

export default Selectors;
