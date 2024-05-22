import React, { useState } from 'react';

const useValidation = (initialValues) => {
  const [errors, setErrors] = useState({});

  const validateInput = (name, value) => {
    let newErrors = { ...errors };

    if (name === 'name') {
      newErrors[name] = value.trim() ? '' : 'Name is required';
    }

    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      newErrors[name] = value.trim() ? (emailPattern.test(value) ? '' : 'Invalid email format') : 'Email is required';
    }

    setErrors(newErrors);
  };


  return {
    errors
  };
};

export default useValidation;