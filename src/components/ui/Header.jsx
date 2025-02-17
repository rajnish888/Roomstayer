"use client";

import React, { useState } from 'react';
import Image from 'next/image'
import logo from '../../../public/images/logo.svg'
import user from '../../../public/images/user.svg'
import { Button } from "@/components/ui/Button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import CurrencyDropdown from './currency-dropdown';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      <header className="bg-white py-6 sticky top-0 w-full z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="">
                <Image src={logo} alt='logo' />
              </a>
            </div>
            <div className="hidden md:flex space-x-4">
              <CurrencyDropdown />
              <a href="#" className="text-black font-semibold text-lg py-2 px-3">Trip Board</a>
              <a href="#" className="text-black font-semibold text-lg py-2 px-3">List Your Property</a>
              <a href="#" className="text-black font-semibold text-lg py-2 px-3">My Trip</a>
              <a href="#" className="text-black font-semibold text-lg py-2 px-3">Help</a>
              <Button size="sm" variant="add" className="ms-4"><Image src={user} alt='user' width={24} height={24} /> Sign In</Button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleDrawer} className="text-gray-900 hover:text-indigo-600 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleDrawer}></div>
          <div className="relative bg-white w-64 p-4 shadow-lg">
            <button onClick={toggleDrawer} className="absolute top-4 right-4 text-gray-900 hover:text-indigo-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="mt-8">


              <a href="#" className="block px-4 py-2 text-gray-900 hover:text-indigo-600">Home</a>
              <a href="#" className="block px-4 py-2 text-gray-900 hover:text-indigo-600">About</a>
              <a href="#" className="block px-4 py-2 text-gray-900 hover:text-indigo-600">Services</a>
              <a href="#" className="block px-4 py-2 text-gray-900 hover:text-indigo-600">Contact</a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
