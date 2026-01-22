import Image from 'next/image';

export default function HomeAbout() {
  const testimonials = [
    {
      quote: "Amazon Publishing transformed my manuscript into a masterpiece. Their attention to detail and professional approach exceeded my expectations.",
      name: "Austin Max",
      avatar: "https://picsum.photos/seed/austin-max/200/200"
    },
    {
      quote: "The professionals from Amazon Publishing guided me through every step of the process. Their expertise and dedication to my book's success was truly remarkable.",
      name: "Mark Daniel",
      avatar: "https://picsum.photos/seed/mark-daniel/200/200"
    },
    {
      quote: "Amazon Publishing helped my book stand out in a crowded market. Their marketing strategies and design work made all the difference.",
      name: "Samantha Joseph",
      avatar: "https://picsum.photos/seed/samantha-joseph/200/200"
    },
    {
      quote: "A shoutout to George and his team for helping me create a well-thought-out memoir. Their professionalism and creativity are unmatched.",
      name: "John Sumner",
      avatar: "https://picsum.photos/seed/john-sumner/200/200"
    },
    {
      quote: "As a brand-new writer, Amazon Publishing's support was invaluable. They made the entire publishing journey smooth and enjoyable.",
      name: "Mitchelle Smith",
      avatar: "https://picsum.photos/seed/mitchelle-smith/200/200"
    },
    {
      quote: "Amazon Publishing is the best! I learned so much about writing compelling content, and they helped me achieve my publishing goals.",
      name: "David Wilson",
      avatar: "https://picsum.photos/seed/david-wilson/200/200"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with whitish gradient and huge blurred orange spots */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-orange-50"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-400 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-orange-500 rounded-full blur-3xl opacity-25"></div>
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[900px] h-[900px] bg-orange-400 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] bg-orange-500 rounded-full blur-3xl opacity-25"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Heading and Description */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald text-orange-500 font-bold mb-6">
              Explore Testimonials from Our Satisfied Clients
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Don't take our word for it. Let the testimonials from our clients speak to the impact we've had on writers worldwide.
            </p>
          </div>

          {/* Right Column - Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-oswald font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
