import { useState } from "react";
import SelectorsStyled from "./SelectorsStyled";

const Selectors = ({ options, setOption }) => {
  const [checked, setChecked] = useState(false);

  const onClick = (event) => {
    setChecked(!checked);
    setOption(event.target.value);
  };

  return (
    <SelectorsStyled key={options[0].code}>
      {options.map((option, index) => (
        <div className="selectors__container" key={option.code}>
          <input
            type="checkbox"
            className="select-option__input"
            id={option.code}
            value={option.code}
            checked={index === 0 ? !checked : checked}
            onChange={onClick}
            data-testid="checkbox-input"
          />
          <label htmlFor={option.code} className="select-option__label">
            {option.name}
          </label>
        </div>
      ))}
    </SelectorsStyled>
  );
};

export default Selectors;
