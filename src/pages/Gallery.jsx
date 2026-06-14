import { Eye } from "lucide-react";

const Gallery = () => {
const galleryImages = [
"https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800",
"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800",
"https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800",
"https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800",
"https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800",
"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800",
"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
"https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",
];

return ( <div className="bg-[#0B0B0B] text-white min-h-screen">
{/* Hero Section */}
<section
className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2000')",
}}
> <div className="absolute inset-0 bg-black/70"></div>

```
    <div className="relative z-10 text-center px-4">
      <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
        Our Gallery
      </p>

      <h1 className="text-4xl md:text-6xl font-bold">
        Explore Our
        <br />
        Luxury Experience
      </h1>
    </div>
  </section>

  {/* Intro */}
  <section className="max-w-4xl mx-auto text-center px-6 py-20">
    <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
      TGMC SPA
    </p>

    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Moments of Relaxation & Beauty
    </h2>

    <p className="text-gray-400 leading-8">
      Discover our premium spa treatments, luxurious interiors,
      wellness experiences, and the peaceful atmosphere that
      makes TGMC SPA a perfect destination for relaxation.
    </p>
  </section>

  {/* Gallery Grid */}
  <section className="max-w-7xl mx-auto px-6 pb-20">
    <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-3xl group"
        >
          <img
            src={image}
            alt={`Gallery ${index + 1}`}
            className="
              w-full
              rounded-3xl
              transition-all
              duration-500
              group-hover:scale-110
            "
          />

          <div
            className="
              absolute inset-0
              bg-black/60
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-300
              flex
              items-center
              justify-center
            "
          >
            <div className="bg-[#C8A96B] p-4 rounded-full">
              <Eye className="text-black" size={24} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Categories */}
  <section className="bg-[#111111] py-20">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
        Categories
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        What You'll Discover
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {[
          "Spa Treatments",
          "Wellness Sessions",
          "Beauty Services",
          "Premium Interiors",
          "Happy Clients",
        ].map((category) => (
          <div
            key={category}
            className="
              bg-[#0B0B0B]
              border
              border-white/10
              rounded-2xl
              p-6
              hover:border-[#C8A96B]
              transition
            "
          >
            <h3 className="font-semibold text-lg">
              {category}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="py-20 px-6">
    <div className="max-w-5xl mx-auto text-center bg-[#111111] border border-white/10 rounded-3xl p-10 md:p-16">
      <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
        Visit TGMC SPA
      </p>

      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Experience Luxury Like Never Before
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Book your appointment today and enjoy a relaxing,
        refreshing, and rejuvenating spa experience.
      </p>

      <button className="bg-[#C8A96B] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
        Book Appointment
      </button>
    </div>
  </section>
</div>
);
};

export default Gallery;
