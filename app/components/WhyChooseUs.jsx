import { FaBook, FaUserSecret, FaEdit, FaBookOpen, FaBullhorn, FaGlobe, FaPaintBrush, FaDrawPolygon, FaPrint, FaVideo, FaHeadphones } from 'react-icons/fa';

export default function WhyChooseUs() {
  const genres = [
    {
      title: "Mystery",
      icon: FaBook
    },
    {
      title: "Horror",
      icon: FaUserSecret
    },
    {
      title: "Romance",
      icon: FaEdit
    },
    {
      title: "Children's Books",
      icon: FaBookOpen
    },
    {
      title: "Fantasy",
      icon: FaBullhorn
    },
    {
      title: "How-To Guides",
      icon: FaGlobe
    },
    {
      title: "Drama",
      icon: FaPaintBrush
    },
    {
      title: "Crime",
      icon: FaDrawPolygon
    },
    {
      title: "Biography",
      icon: FaPrint
    },
    {
      title: "Health",
      icon: FaVideo
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with whitish gradient and huge blurred orange spots */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-orange-50"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-orange-400 rounded-full blur-3xl opacity-15"></div>
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[900px] h-[900px] bg-orange-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] bg-orange-400 rounded-full blur-3xl opacity-15"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-oswald font-bold mb-8">
            <span className="text-gray-800">Genres Mirroring Your Infinite </span>
            <span className="text-orange-500">Creative Potential</span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Amazon Publishing offers a wide range of genres. Feel secure knowing that your work will find the ideal publication venue thanks to our knowledge of various literary forms.
          </p>
        </div>

        {/* Genres Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {genres.map((genre, index) => {
            const IconComponent = genre.icon;
            return (
              <div
                key={index}
                className="border border-orange-500 rounded-lg p-6 text-center group hover:border-orange-400 transition-all duration-300 cursor-pointer bg-white/50 backdrop-blur-sm hover:bg-white/80"
              >
                <div className="flex justify-center mb-4">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute w-12 h-12 bg-orange-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <IconComponent className="w-8 h-8 text-gray-800 relative z-10" />
                  </div>
                </div>
                <h3 className="font-oswald font-semibold text-lg text-gray-800">
                  {genre.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
