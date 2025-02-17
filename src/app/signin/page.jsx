"use client"; // 👈 Add this at the top

import React, { useState } from 'react';
import FormBanner from '@/components/ui/FormBanner';
import bannerSrc from '../../../public/images/signupBanner.jpg';
import Form from '@/components/ui/Form';

const Page = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className="flex rounded-2xl items-center justify-center flex-wrap shadow-shadow-one">
          
          {/* Left Side - Banner */}
          <div className="w-full md:w-1/2">
            <FormBanner
              bannerSrc={bannerSrc}
              formHeight={630}
              formWidth="100%"
              formImgClassName="rounded-l-2xl"
              title="Roomstayer"
              textClassName="absolute top-0 left-0 right-0 flex-col flex items-center justify-center w-full text-center h-full gap-4 px-8"
              titleClassName="text-custom-32 text-blue-500 font-bold"
              spanTextClassName="text-2xl block text-white font-medium"
              spanText="Welcome to"
              subtitleClassName="block text-white text-medium"
              subtitle="Sign in to manage your bookings, explore exclusive deals, and enjoy a seamless stay experience."
            />
          </div>

          {/* Right Side - Dynamic Form */}
          <div className="w-full md:w-1/2">
            <Form 
              step={step} 
              onStepChange={setStep} 
              titleClassName="text-custom-32 text-black font-semibold"
              subTitleClassName="text-sm"
              labelClassName="text-sm mb-1 inline-block"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;
