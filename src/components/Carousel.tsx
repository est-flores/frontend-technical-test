"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const slides = [
  {
    image: '/images/slide1.jpg',
    title: 'Experience the Beauty of Nature',
    subtitle: 'Discover scenic trails, breathtaking views, and hidden gems in the wilderness',
  },
  {
    image: '/images/slide2.jpg',
    title: 'Discover Amazing Places',
    subtitle: 'Enjoy thrilling adventures like hiking, camping, kayaking, and wildlife spotting',
  },
  {
    image: '/images/slide3.jpg',
    title: 'Adventure Awaits',
    subtitle: 'Unplug and unwind in forests, mountains, and rivers while reconnecting with nature',
  },
  {
    image: '/images/slide4.jpg',
    title: 'Embrace the Unkown',
    subtitle: 'Embark on exciting journeys, challenge yourself, and create unforgettable memories',
  },
]

const Carousel = ({ autoSlide = true, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (autoSlide) {
      slideIntervalRef.current = setInterval(nextSlide, autoSlideInterval)
      return () => {
        if (slideIntervalRef.current) clearInterval(slideIntervalRef.current)
      }
    }
  }, [autoSlide, autoSlideInterval])

  return (
    <div className="relative w-full mx-auto overflow-hidden flex-grow">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="relative min-w-full flex-shrink-0" style={{ height: 700 }}>
            <Image src={slide.image} alt={`Slide ${index}`} fill style={{ objectFit: 'cover' }} className="brightness-75" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black  to-transparent text-white text-center">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl ">{slide.title}</h2>
              <p className="mt-4 text-lg leading-8 text-gray-300 pb-10">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-35 hover:bg-opacity-100 text-slate-700 p-1 rounded-full shadow-md transition duration-300">
      <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2em"
      width="2em"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
    </svg>
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-35 hover:bg-opacity-100 text-slate-700 p-1 rounded-full shadow-md transition duration-300">
      <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2em"
      width="2em"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
    </svg>
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div key={index} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'} transition duration-300`}></div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
