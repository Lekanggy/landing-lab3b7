"use client"

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';


const cards = [
//   "https://www.tailwindtap.com/assets/components/vertical-carousel/canada_lake.jpg",
//   "https://www.tailwindtap.com/assets/components/vertical-carousel/jungle.jpg",
//   "https://www.tailwindtap.com/assets/components/vertical-carousel/mountainvalley.jpg",
//   "https://www.tailwindtap.com/assets/components/vertical-carousel/rainforest.jpg",
//   "https://www.tailwindtap.com/assets/components/vertical-carousel/sand_background.jpg",
//   "https://www.tailwindtap.com/assets/components/vertical-carousel/sunrise.jpg",
//   "https://www.tailwindtap.com/assets/components/vertical-carousel/waterfront.jpg",
{
    im: "/public/edit1.png",
    al: "edit1"
},
{
    im: "/public/edit2.png",
    al: "edit1"
}

];

const VerticalCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (scrollType: 'prev' | 'next'): void => {
    const container = containerRef.current;
    if (container) {
      if (scrollType === 'prev') {
        container.scrollTo({
          top: container.scrollTop - container.clientHeight,
          behavior: 'smooth',
        });
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else {
        container.scrollTo({
          top: container.scrollTop + container.clientHeight,
          behavior: 'smooth',
        });
        setCurrentIndex((prevIndex) =>
          Math.min(prevIndex + 1, cards.length - 1)
        );
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll('next');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <div
        ref={containerRef}
        className="h-[500px] overflow-y-scroll snap-y snap-mandatory no-scrollbar"
      >
        {cards.map((data, index) => (
          <section
            key={index}
            className={`h-[500px] max-w-[900px] snap-center transition-transform ${
              index === currentIndex ? '' : 'hidden'
            }`}
          >
            <Image
              src={data.im}
              className="bg-cover bg-no-repeat w-full h-full object-cover lg:max-h-[700px] sm:max-h-[500px] max-h-[400px]"
              alt={data.al}
              width={1000}
              height={500}
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default VerticalCarousel;
