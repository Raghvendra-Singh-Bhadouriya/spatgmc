import { CheckCircle } from "lucide-react";
import spaheroimg from "../assets/spahero-img.jpg";

const About = () => {
const highlights = [
"Certified Professionals",
"Premium Quality Products",
"Hygienic Environment",
"Personalized Treatments",
"Relaxing Ambience",
"Customer Satisfaction",
];

return ( <div className="bg-[#0B0B0B] text-white min-h-screen">
{/* Hero Banner */}
<section
className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
style={{
backgroundImage:
`url(${spaheroimg})`,
}}
> <div className="absolute inset-0 bg-black/70" />

```
    <div className="relative z-10 text-center px-4">
      <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
        About Us
      </p>

      <h1 className="text-4xl md:text-6xl font-bold">
        Your Destination for
        <br />
        Wellness & Beauty
      </h1>
    </div>
  </section>

  {/* About Content */}
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div>
        <img
          src={spaheroimg}
          alt="Spa"
          className="rounded-3xl w-full h-[500px] object-cover"
        />
      </div>

      {/* Content */}
      <div>
        <p className="text-[#C8A96B] uppercase tracking-[5px] mb-4">
          Welcome To TGMC SPA
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Relax, Refresh &
          <br />
          Rejuvenate Yourself
        </h2>

        <p className="text-gray-400 leading-8 mb-8">
          At TGMC SPA, we believe self-care is essential for a
          balanced lifestyle. Our experienced professionals
          provide personalized wellness and beauty treatments in
          a luxurious and relaxing environment.

          We combine modern techniques with premium products to
          deliver exceptional results and unforgettable spa
          experiences for every client.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <CheckCircle
                size={20}
                className="text-[#C8A96B]"
              />

              <span className="text-gray-300">
                {item}
              </span>
            </div>
          ))}
        </div>

        <button className="mt-10 bg-[#C8A96B] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
          Book Appointment
        </button>
      </div>
    </div>
  </section>

  {/* Stats Section */}
  <section className="bg-[#111111] py-16">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <h3 className="text-4xl font-bold text-[#C8A96B]">
          1000+
        </h3>
        <p className="text-gray-400 mt-2">
          Happy Clients
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-[#C8A96B]">
          10+
        </h3>
        <p className="text-gray-400 mt-2">
          Expert Therapists
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-[#C8A96B]">
          15+
        </h3>
        <p className="text-gray-400 mt-2">
          Premium Services
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-[#C8A96B]">
          5★
        </h3>
        <p className="text-gray-400 mt-2">
          Client Rating
        </p>
      </div>
    </div>
  </section>

  {/* Mission & Vision */}
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-[#111111] p-8 rounded-3xl border border-white/10">
        <h3 className="text-3xl font-bold mb-4 text-[#C8A96B]">
          Our Mission
        </h3>

        <p className="text-gray-400 leading-8">
          To provide exceptional wellness and beauty services
          that help our clients feel confident, refreshed,
          relaxed, and rejuvenated.
        </p>
      </div>

      <div className="bg-[#111111] p-8 rounded-3xl border border-white/10">
        <h3 className="text-3xl font-bold mb-4 text-[#C8A96B]">
          Our Vision
        </h3>

        <p className="text-gray-400 leading-8">
          To become the most trusted wellness and beauty
          destination by delivering luxury experiences and
          personalized care.
        </p>
      </div>
    </div>
  </section>
</div>


);
};

export default About;
