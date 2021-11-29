import React from 'react';

const TextBox = ({ label, register, required }) => {
  return (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} />
    </>
  );
};



export default TextBox;