// const Home = () => {
//   return (
//     <main>
//       {/* Hero Section */}
//       <section
//         className="
//         min-h-screen
//         bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874')]
//         bg-cover
//         bg-center
//         relative
//         flex
//         items-center
//         justify-center
//         px-6
//       "
//       >
//         <div className="absolute inset-0 bg-black/60"></div>

//         <div className="relative z-10 max-w-4xl text-center">
//           <p className="text-[#C8A96B] uppercase tracking-[5px] text-sm md:text-base">
//             Premium Wellness Experience
//           </p>

//           <h1
//             className="
//             text-white
//             text-4xl
//             sm:text-5xl
//             md:text-6xl
//             lg:text-7xl
//             font-bold
//             mt-4
//             leading-tight
//           "
//           >
//             Relax.
//             <br />
//             Refresh.
//             <br />
//             Rejuvenate.
//           </h1>

//           <p
//             className="
//             text-gray-300
//             mt-6
//             text-base
//             md:text-lg
//             max-w-2xl
//             mx-auto
//           "
//           >
//             Experience premium wellness treatments designed
//             to relax your body, refresh your mind, and
//             rejuvenate your soul.
//           </p>

//           <div
//             className="
//             flex
//             flex-col
//             sm:flex-row
//             gap-4
//             justify-center
//             mt-8
//           "
//           >
//             <button
//               className="
//               bg-[#C8A96B]
//               text-black
//               px-8
//               py-3
//               rounded-full
//               font-semibold
//               hover:scale-105
//               transition
//             "
//             >
//               Book Appointment
//             </button>

//             <button
//               className="
//               border
//               border-white
//               text-white
//               px-8
//               py-3
//               rounded-full
//               hover:bg-white
//               hover:text-black
//               transition
//             "
//             >
//               Explore Services
//             </button>
//           </div>

//           <div
//             className="
//             mt-12
//             flex
//             flex-wrap
//             justify-center
//             gap-6
//             text-white
//           "
//           >
//             <div className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
//               ⭐ 1000+ Happy Clients
//             </div>

//             <div className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
//               ⭐ Premium Experience
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Home;

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import spahero from "../assets/spahero-img.jpg";
import spabodymassageone from "../assets/spabody-massage-img1.jpg";

const Home = () => {
  return (
    <main className="bg-[#0B0B0B] text-white overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${spahero})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[6px] text-[#C8A96B] text-sm md:text-base mb-6">
            Escape • Unwind • Indulge
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight font-bold">
            Relax.
            <br />
            Refresh.
            <br />
            Rejuvenate.
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 mt-8 text-base md:text-lg">
            Experience premium wellness treatments designed to
            relax your body, refresh your mind and rejuvenate
            your soul.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link to={"/book-appointment"}>
              <button className="bg-[#C8A96B] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition cursor-pointer">
                Book Appointment
              </button>
            </Link>

            <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition flex items-center justify-center gap-2">
              Explore Services
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="absolute bottom-0 left-0 w-full px-4 pb-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Premium Services",
              "Expert Therapists",
              "Luxury Ambience",
              "Holistic Wellness",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center"
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
              className="rounded-3xl w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
              About TGMC SPA
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Destination for Wellness & Beauty
            </h2>

            <p className="text-gray-400 leading-8">
              At TGMC SPA, we believe self-care is essential
              for a balanced lifestyle. Our experienced
              professionals provide personalized wellness and
              beauty treatments in a luxurious and relaxing
              environment.
            </p>

            <button className="mt-8 bg-[#C8A96B] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;