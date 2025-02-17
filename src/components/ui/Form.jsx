"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';
import { Input } from './input';
import { Button } from './Button';
import googleIcon from '../../../public/images/google.svg';
import appleIcon from '../../../public/images/apple.svg';
import Link from 'next/link';
import { InputOTPPattern } from './InputOTPPattern';
import { CheckboxWithText } from './CheckboxWithText';







const Form = ({ step, onStepChange, titleClassName, subTitleClassName, labelClassName }) => {
  return (
    <div className="p-12 flex justify-center w-full flex-col">

      {/* Logo */}
      <div className="mb-8">
        <Image src={logo} alt="logo" width="100%" height="100%" />
      </div>

      {/* Step 1: Email Sign In */}
      {step === 1 && (
        <>
          <div className="mb-8">
            <h2 className={titleClassName}>Sign in or create an account</h2>
            <p className={subTitleClassName}>Enter your email below to create your account</p>
          </div>

          <div className="mb-8">
            <label className={labelClassName}>Email Address</label>
            <Input type="email" placeholder="Enter your email" />
          </div>

          <Button className="w-full mb-8">
            Continue
          </Button>

          <div className='relative text-center before:absolute before:left-0 before:top-1/2 before:w-full before:h-px before:bg-[#E4E4E4] mb-4'>
            <p className='text-[#B2B2B2] text-base text-normal relative inline-block bg-white px-4'>Or Login Using</p>
          </div>


          <div className='flex justify-center gap-4'>
            <Link href="#" className='bg-[#F9F9F9] p-3 rounded-xl'>
              <Image src={googleIcon} width={24} height={24} alt="googleIcon" />
            </Link>
            <Link href="#" className='bg-[#F9F9F9] p-3 rounded-xl'>
              <Image src={appleIcon} width={24} height={24} alt="appleIcon" />
            </Link>
          </div>

        </>
      )}

      {/* Step 2: Email Verification */}
      {step === 2 && (
        <>
          <div className="mb-8">
            <h2 className={titleClassName}>Let's confirm your email</h2>
            <p className={subTitleClassName}>
              To continue, enter the secure code we sent to
            </p>
            <p>
              <span className="font-medium">  xyz@mailinator.com.</span> Check junk mail if it's not in your inbox.
            </p>
          </div>

          <div className="mb-8">
            <label className='mb-4 inline-block font-semibold'>6-Digit Code</label>
            <InputOTPPattern />
          </div>

          <div className="mb-8">
            <div className='flex justify-between mb-3'>
              <div>
                <CheckboxWithText label="Keep me signed in" />
              </div>
              <div>
                <Link href="#" className='text-blue-500 underline'>Resend Code</Link>
              </div>
            </div>
            <p>
              This is for personal devices only. Don't check this on shared devices to keep your account secure.
            </p>
          </div>

          <Button className="w-full mb-8">
            Continue
          </Button>
          <div className=' text-center'>
            <Link href="#" className='text-blue-500 text-xl'>Enter Password Instead</Link>
          </div>
        </>
      )}

      {/* Step 3: Password Entry */}
      {step === 3 && (
        <>
          <div className="mb-8">
            <h2 className={titleClassName}>Enter your password</h2>
            <p className={subTitleClassName}>Email</p>
            <p className='font-medium'>xyz@mailinator.com</p>
          </div>

          <div className="mb-8">
            <label className={labelClassName}>Password</label>
            <Input type="password" placeholder="Enter your password" />
          </div>
          <div className="mb-8">
            <div className='mb-3'>
              <CheckboxWithText label="Keep me signed in" />
            </div>
            <p className='mb-5'>
              This is for personal devices only. Don't check this on shared devices to keep your account secure.
            </p>


            <Link href="#" className='text-blue-500 underline'>Forgot Password?</Link>

          </div>


          <Button className="w-full">
            Sign in
          </Button>
        </>
      )}

      {/* Step 4: Reset Password */}
      {step === 4 && (
        <>
          <div className="mb-8">
            <h2 className={titleClassName}>Reset your password</h2>
            <p className={subTitleClassName}>
            Enter your email, and we’ll send you a link to reset your password.
            </p>
          </div>

          <div className="mb-8">
            <label className={labelClassName}>Email Address</label>
            <Input type="email" placeholder="Johnsmith1001@gmail.com" />
          </div>
          <Button className="w-full">
            Send Reset Link
          </Button>
        </>
      )}
    </div>
  );
};

export default Form;
