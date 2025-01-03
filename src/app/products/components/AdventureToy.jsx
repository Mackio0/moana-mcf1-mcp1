'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import starFish from '../../../../public/assets/moana_products/starfish.png'
import ProductButton from './ProductButton'
import { handleDownload } from '../actions/dowloadfile'
import Link from 'next/link'


export default function AdventureToy({slides}) {
  const [currentSlide, setCurrentSlide] = useState(0)

 
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }
  const handleClick = (url) => {
    
    if (url) {
      window.open(url, '_blank'); // Opens the URL in a new tab
    } else {
      console.error('No valid URL returned from process function');
    }
  };
  return (
    <div className=" bg-white">
      <main className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12   gap-[40px] items-center">
          {/* Left side - Product Image */}
          <div className="relative aspect-[3/4] lg:col-span-5  rounded-lg overflow-hidden">
            <Image
              src={slides[currentSlide].image}
              alt="Moana Adventure Doll"
              fill
              className="object-contain  pr-4"
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6  col-span-1 lg:col-span-7 relative">
          <div className='flex flex-row justify-between items-center'>
          <h1 className="text-[#2B95B6] text-5xl md:text-6xl font-bold tracking-wide">
              MOANA TOYS
            </h1>
          <ProductButton icon={<ArrowRight size={20} />} filled={true} process={()=>handleClick('https://www.disneystore.com/')} children={'store'}/>
            
          </div>
            <img
                src={starFish.src}
                alt="Starfish decoration"
                width={40}
                height={40}
                className={`transform   absolute right-[48%] top-[10%]   transition-transform    duration-500 ease-linear`}
                style={{ transform: `rotate(${currentSlide * 90}deg)` }}
              />
            <div className="flex items-center space-x-4">
              <h2 className="text-[#5AACCC] text-3xl font-script">
                {slides[currentSlide].title}
              </h2>
              
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-8 h-8 text-[#2B95B6]" />
              </button>

              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-12 h-2 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-[#2B95B6]' : 'bg-gray-200'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-8 h-8 text-[#2B95B6]" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

