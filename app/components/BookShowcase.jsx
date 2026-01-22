import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

export default function BookShowcase() {
  const leftColumnServices = [
    'Amazon Publishing',
    'Book Cover Design',
    'Book Illustration',
    'Book Publishing',
    'Ebook Writing',
    'Proofreading Services'
  ];

  const rightColumnServices = [
    'Author Website',
    'Book Editing',
    'Book Marketing',
    'Book Writing',
    'Ghost Writing'
  ];

  return (
    <section className="py-20 bg-orange-500 relative overflow-hidden">
      {/* Abstract curved patterns in the background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-white/30 rounded-full blur-3xl"></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path d="M0,400 Q300,200 600,350 T1200,400" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
          <path d="M0,500 Q400,300 800,450 T1200,500" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
          <path d="M0,600 Q200,400 600,550 T1200,600" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative w-full flex items-center justify-center">
            <Image
              src="/man-1.png"
              alt="Person with book"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-oswald text-white font-bold mb-6">
              Why Amazon Publishing is the Ideal Choice for Every Writer?
            </h2>
            
            <p className="text-white mb-8 leading-relaxed">
              Amazon Publishing offers complete control over your book's pricing and earnings, ensuring you keep a significant portion of your royalties. With global reach, your work can be discovered by millions of readers worldwide. Our expert team provides professional book cover design, marketing expertise to boost visibility, and creative control throughout the publishing process. Join our network of successful authors who have transformed their writing dreams into bestselling realities.
            </p>

            {/* Services List in Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Left Column Services */}
              <div className="space-y-3">
                {leftColumnServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FaCheck className="text-white flex-shrink-0 text-lg" />
                    <span className="text-white font-medium">{service}</span>
                  </div>
                ))}
              </div>

              {/* Right Column Services */}
              <div className="space-y-3">
                {rightColumnServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FaCheck className="text-white flex-shrink-0 text-lg" />
                    <span className="text-white font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="flex justify-end">
              <button className="bg-black text-white px-8 py-4 font-oswald text-lg hover:bg-gray-800 transition-colors duration-300">
                Looking For A Book Writer?
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
