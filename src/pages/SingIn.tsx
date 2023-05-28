import React from 'react';
import { SignInUp } from '../components/signInUp/SignInUp';

function SingIn() {
  return (
    <div className="flex justify-center h-screen">
      <SignInUp type={false} />
    </div>
  );
}

export default SingIn;
