import { useState, useEffect } from "react";

export default function Carousel({ images, interval = 3000 }:
{
  images: string[],
  interval?: number
}
) {
  if (!Array.isArray(images) || images.length === 0) {
    return <p className="text-center text-gray-500">No images to display.</p>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };


  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [interval, images.length]);

  return (

      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-60 h-60 object-cover rounded-xl shadow-sm transition-all duration-500"
        loading="lazy"
      />



  );
}