import React from 'react';
import './Radio.css';

const Radio = ({ pergunta, options, id, onChange, value, active }) => {
  if (active === false) return null;
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            id={id}
            checked={value === option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
