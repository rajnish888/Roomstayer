import React from 'react'
import Image from 'next/image'
import bannerImg from '../../../public/images/banner.jpg'
import locationIcon from '../../../public/images/location.svg'
import dateIcon from '../../../public/images/date-range.svg'
import userIcon from '../../../public/images/user-rounded.svg'
import searchIcon from '../../../public/images/search.svg'
import { Input } from './input'
import { Button } from './Button'

const Banner = () => {
  return (
    <div className="relative w-full px-4 md:px-10">
      {/* Image Container */}

      <div className="relative ">
        <Image
       
          src={bannerImg}
          alt="banner-img"
          className="w-full h-auto rounded-[20px] object-cover"
          layout="responsive"
          priority
          objectFit="cover" 
        />

        <div className="absolute top-1/2  left-1/2 max-w-6xl w-full mx-auto -translate-x-1/2 -translate-y-1/2 text-white ">
          <div className='mb-16'>
            <h1 className='text-5xl mb-3 max-w-lg'>Millions of experiences.
              One simple search.</h1>
            <p className='uppercase'>Find what makes you happy anytime, anywhere</p>
          </div>

          <div className="p-4 rounded-t-full rounded-b-full items-center flex gap-4 bg-white">
            <div className='flex flex-1  border border-blue-200 bg-blue-50 py-2 px-4 rounded-t-full rounded-b-full'>
              <Image src={locationIcon} width={24} height={24} alt='icons' />
              <Input type="text" placeholder="Where to ?" className={`bg-transparent border-0 h-8 p-2  text-base font-medium placeholder:text-black focus-visible:ring-transparent`}  />
            </div>
            <div className='flex flex-1  border py-2 px-4 border-blue-200 bg-blue-50  rounded-t-full rounded-b-full'>
              <Image src={dateIcon}  width={24} height={24} alt='icons'  />
              <Input type="text" placeholder="Choose Dates" className={`bg-transparent border-0 h-8 p-2  text-base font-medium placeholder:text-black focus-visible:ring-transparent`}  />
            </div>
            <div className='flex flex-1  border py-2 px-4 border-blue-200 bg-blue-50 rounded-t-full rounded-b-full'>
              <Image src={userIcon}  width={24} height={24} alt='icons' />
              <Input type="text" placeholder="Travelers" className={`bg-transparent border-0 h-8 p-2  text-base font-medium placeholder:text-black focus-visible:ring-transparent`}  />

            </div>
            <Button className='w-12 h-12 p-0 bg-blue-500 rounded-full items-center justify-center flex'>
              <Image src={searchIcon}  width={24} height={24} alt='icons' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
