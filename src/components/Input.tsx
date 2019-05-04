import React from 'react';

const Input = ({ handleChange, value, type}: any) => {
  return(
    <input
      type={type}
      value={value}
      onChange={(event) => handleChange(event.target.value)}
    />
  )
}

export default Input;
