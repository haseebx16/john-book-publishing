'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Lazy load slick carousel
const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function Portfolio() {
  const [isClient, setIsClient] = useState(false);
  const [sliderLoaded, setSliderLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Load slick CSS after component mounts
    import('slick-carousel/slick/slick.css');
    import('slick-carousel/slick/slick-theme.css').then(() => {
      setSliderLoaded(true);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const books = [
    { id: 1, src: '/01.png', title: "Doubles Domination: The Best of the Best" },
    { id: 2, src: '/02.png', title: "The Silmarillion" },
    { id: 3, src: '/03.png', title: "Reminders of Him" },
    { id: 4, src: '/04.png', title: "Hunting Adeline" },
    { id: 5, src: '/05.png', title: "Eyes Of The Storm" },
    { id: 6, src: '/06.png', title: "The Nightingale" },
    { id: 7, src: '/07.png', title: "Ugly Love" },
    { id: 8, src: '/08.png', title: "The Inmate" },
    { id: 9, src: '/09.png', title: "Hooked" },
    { id: 10, src: '/10.png', title: "The Academy Saga IV" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-12">
        <h2 className="text-5xl font-oswald text-center md:mb-12 text-orange-500">
          OUR PORTFOLIO<span className="text-black">.</span>
        </h2>
        
        <div className="relative px-8">
          {isClient && sliderLoaded ? (
            <Slider {...settings}>
              {books.map((book) => (
              <div key={book.id} className="px-4">
                <div className="relative md:h-[500px] h-[300px]  w-full group">
                  <Image
                    src={book.src}
                    alt={book.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay with title */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 hidden md:flex">
                    <h3 className="text-white text-2xl font-oswald text-center">
                      {book.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
            </Slider>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {books.slice(0, 3).map((book) => (
                <div key={book.id} className="relative md:h-[500px] h-[300px] w-full">
                  <Image
                    src={book.src}
                    alt={book.title}
                    fill
                    className="object-contain"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
