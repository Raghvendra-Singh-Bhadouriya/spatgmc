import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import spahero from "../assets/spahero-img.jpg";
import spabodymassageone from "../assets/spabody-massage-img1.jpg";

const Home = () => {

  return (
    <main className="bg-[#0B0B0B] text-white overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${spahero})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center p-24">
          <p className="uppercase tracking-[6px] text-[#C8A96B] text-sm md:text-base mb-6">
            Escape • Unwind • Indulge
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            Relax.
            <br />
            Refresh.
            <br />
            Rejuvenate.
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 mt-6 text-base md:text-lg">
            Experience premium wellness treatments designed to
            relax your body, refresh your mind and rejuvenate
            your soul.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Link to={"/book-appointment"}>
              <button className="bg-[#C8A96B] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition cursor-pointer">
                Book Appointment
              </button>
            </Link>

            <Link to={"/services"}>
              <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition flex items-center justify-center gap-2">
                Explore Services
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="bottom-0 left-0 w-full px-4 pb-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Premium Services",
              "Expert Therapists",
              "Luxury Ambience",
              "Holistic Wellness",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center hover:border-[#C8A96B] hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={spabodymassageone}
              alt="Spa"
              className="rounded-3xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-all duration-700 shadow-2xl"
            />
          </div>

          <div>
            <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
              About TGMC SPA
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Destination for Wellness & Beauty
            </h2>

            <p className="text-gray-400 leading-8">
              At TGMC SPA, we believe self-care is essential for a balanced lifestyle.
              Our experienced professionals provide personalized wellness and beauty
              treatments in a luxurious and relaxing environment. We combine modern
              techniques with premium products to deliver exceptional results for every client.
            </p>

            <Link to={"/about"}>
              <button className="mt-8 bg-[#C8A96B] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;