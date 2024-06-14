"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const slides = [
  {
    image: '/images/slide1.jpg',
    text: 'Slide 1 Text',
  },
  {
    image: '/images/slide2.jpg',
    text: 'Slide 2 Text',
  },
  {
    image: '/images/slide3.jpg',
    text: 'Slide 3 Text',
  },
  {
    image: '/images/slide4.jpg',
    text: 'Slide 4 Text',
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
    <div className="relative w-full max-w-lg mx-auto mt-10 overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="relative min-w-full flex-shrink-0" style={{ height: '500px' }}>
            <Image src={slide.image} alt={`Slide ${index}`} fill style={{ objectFit: 'cover' }} />
            <p className="absolute bottom-4 left-4 text-white text-lg bg-black bg-opacity-50 p-2 rounded">{slide.text}</p>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        ◀
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        ▶
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div key={index} className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}></div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
