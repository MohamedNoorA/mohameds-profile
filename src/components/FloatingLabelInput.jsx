import React, { useState } from 'react';

const FloatingLabelInput = ({ label, type, name, required, isTextArea, rows }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value !== '');
  };
  const handleChange = (e) => {
    setHasValue(e.target.value !== '');
  };

  const labelClass = `absolute left-4 transition-all duration-200 ease-in-out 
    ${isFocused || hasValue ? 'top-2 text-xs' : 'top-1/2 -translate-y-1/2 text-base'}
    ${isFocused ? 'text-primary-green' : 'text-text-color-light dark:text-text-color-dark'}
  `;

  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green dark:focus:ring-primary-green transition duration-200 pt-6";

  return (
    <div className="relative">
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          required={required}
          className={inputClass}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          required={required}
          className={inputClass}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default FloatingLabelInput;
