import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from './Button';

type FormFields = {
  email: string;
  password: string;
  name?: string;
};

export const SignInUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center self-center px-1 py-6 min-h-fit w-3/5 border rounded-md my-4 font-semibold"
      noValidate
    >
      {isSignUp && (
        <input
          type="text"
          id="name"
          placeholder="Ivan"
          className={errors.name ? 'm-2 rounded-md border-red-600' : 'm-2 rounded-md'}
          {...register('name', {
            required: true,
            pattern: { value: /[A-Z]{1}/, message: 'Your name should start with uppercase letter' },
          })}
        />
      )}{' '}
      {isSignUp && <p className="text-xs text-red-600 mx-2">{errors.name?.message}</p>}
      <input
        type="email"
        id="email"
        placeholder="example@ex.com"
        className={errors.email ? 'm-2 rounded-md border-red-600' : 'm-2 rounded-md'}
        {...register('email', {
          required: true,
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: ' Enter valid email',
          },
        })}
      />
      {<p className="text-xs text-red-600 mx-2">{errors.email?.message}</p>}
      <input
        type="password"
        id="password"
        placeholder="Password"
        className={errors.password ? 'm-2 rounded-md border-red-600' : 'm-2 rounded-md'}
        {...register('password', {
          required: true,
          pattern: {
            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
            message:
              'Your password should contain 1 uppercase letter, 1 lowercase letter, 1 digit, min length 8',
          },
        })}
      />
      {<p className="text-xs text-red-600 mx-2">{errors.password?.message}</p>}
      <Button type="submit" text={isSignUp ? 'Sign Up' : 'Sign In'}></Button>
      {!isSignUp ? (
        <p>
          Not registered yet?
          <Button type="button" text="Sign up" onClick={() => setIsSignUp(true)}></Button>
        </p>
      ) : (
        <p>
          I already have profile
          <Button type="button" text="Sign In" onClick={() => setIsSignUp(false)}></Button>
        </p>
      )}
    </form>
  );
};