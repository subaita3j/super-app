import React from 'react';
import RegisterBanner from '../components/RegisterImage/RegisterBanner';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <div style={{ display: 'flex' }}>
      <RegisterBanner />
      <RegisterForm />
    </div>
  );
};

export default Register;
