import React from 'react'
import ButtonLink from '../common/ButtonLink'
import Heading from '../common/Heading'
import Text from '../common/Text'

import { FaStar } from 'react-icons/fa'

const Hero = () => {
  const rating = 4.9;
  const stars = Array(5).fill(0);

  return (
    <div className="
    default-container 
    flex flex-col items-center gap-y-8 text-center 
    mt-[200px]">

      {/* Star Rating */}
        <div className="flex items-center border rounded-full px-4 py-2 border-gray-200 bg-white/50 backdrop-blur-sm shadow-sm">
            <div className="flex items-center">
            {stars.map((_, index) => (
                <FaStar
                key={index}
                className={`w-3 h-3 ${
                    index < Math.floor(rating)
                    ? 'text-yellow-400'
                    : index < rating
                    ? 'text-gradient-to-r from-yellow-400 to-gray-300'
                    : 'text-gray-300'
                }`}
                />
            ))}
            <span className="ml-2 text-sm font-medium text-gray-700">{rating}</span>
            </div>
            <div className="mx-3 h-4 w-[1px] bg-gray-200"></div>
            <span className="text-sm text-gray-600">
            10,000+ Users
            </span>
        </div>

      <Heading>The Youth Job Listing Platform</Heading>

      <Text className="max-w-[750px]">
        Are you a youth-led organization looking to streamline your job listing process? Or maybe you're a 
        high school student looking to find extracurricular opportunities? Either way, Mira is your solution.
      </Text>

      <ButtonLink href="/get-started">
        Get Started Now
      </ButtonLink>
      
      <img
          src="/temporary.jpg"
          className="rounded-2xl shadow-xl w-full mt-[100px] h-[800px]"
      />
    </div>
  )
};

export default Hero;