import React, { useState } from 'react';

const InputField = ({ id, label, type, placeholder, value, onChange, inputClass, inputdivclass, required, disabled }) => {
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue); // Call the onChange function passed from parent component

    // Perform validation based on input type
    switch (type) {
      case 'email':
        if (!isValidEmail(inputValue)) {
          setError('Please enter a valid email address');
        } else {
          setError('');
        }
        break;
      case 'name':
        if (!isValidName(inputValue)) {
          setError('Please enter a valid name');
        } else {
          setError('');
        }
        break;
      case 'tel':
        if (!isValidMobileNumber(inputValue)) {
          setError('Please enter a valid mobile number');
        } else {
          setError('');
        }
        break;
      default:
        // For other input types, check for empty input if required
        if (required && inputValue.trim() === '') {
          setError('Input cannot be empty');
        } else {
          setError('');
        }
    }
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to validate name format (allow letters, spaces, and hyphens)
  const isValidName = (name) => {
    const nameRegex = /^[a-zA-Z\s-]+$/;
    return nameRegex.test(name);
  };

  // Function to validate mobile number format (allow digits and optional +)
  const isValidMobileNumber = (mobileNumber) => {
    const mobileRegex = /^[0-9+]+$/;
    return mobileRegex.test(mobileNumber);
  };

  return (
    <div className={`flex flex-col lg:max-w-[300px] lg:min-w-[250px] ${inputdivclass}`}>
      <label htmlFor={id} className="mb-1 text-md font-bold text-gray-700">{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        className={`p-2 rounded-md text-gray-600 text-md border border-gray-300 shadow-md placeholder:text-gray-500 placeholder:mx-2 focus:outline-blue-400 ${inputClass}`}
        required={required ? true : false}
        disabled={disabled ? true : false}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputField;
