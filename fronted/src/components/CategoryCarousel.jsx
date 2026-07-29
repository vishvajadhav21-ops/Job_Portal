import React, { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
  "AI ML"
]

const CategoryCarousel = () => {

  const sliderRef = useRef(null)

  const nextSlide = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth"
    })
  }

  const prevSlide = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth"
    })
  }

  return (
    <div className="flex items-center justify-center gap-4 mt-10">

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="p-2 rounded-full border shadow hover:bg-gray-100"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Categories Container */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-scroll scroll-smooth w-[600px]"
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-6 py-2 border rounded-full bg-white shadow-sm hover:bg-gray-100 cursor-pointer"
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="p-2 rounded-full border shadow hover:bg-gray-100"
      >
        <ChevronRight size={20} />
      </button>

    </div>
  )
}

export default CategoryCarousel