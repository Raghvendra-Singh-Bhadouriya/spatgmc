import {
Sparkles,
Flower2,
Hand,
Scissors,
Gem,
Crown,
} from "lucide-react";
import { Link } from "react-router-dom"
import spaheroimg from "../assets/spahero-img.jpg";

const Services = () => {
const services = [
{
icon: <Sparkles size={40} />,
title: "Facial Treatments",
description:
"Deep cleansing and rejuvenating facials for healthy, glowing skin.",
},
{
icon: <Flower2 size={40} />,
title: "Body Spa",
description:
"Relaxing body treatments designed to reduce stress and improve wellness.",
},
{
icon: <Hand size={40} />,
title: "Massage Therapy",
description:
"Professional massage therapies that restore balance and relaxation.",
},
{
icon: <Scissors size={40} />,
title: "Hair Care & Styling",
description:
"Premium hair treatments and styling services for all hair types.",
},
{
icon: <Gem size={40} />,
title: "Manicure & Pedicure",
description:
"Complete nail care treatments for beautiful hands and feet.",
},
{
icon: <Crown size={40} />,
title: "Bridal Packages",
description:
"Customized beauty solutions for weddings and special occasions.",
},
];

return ( <div className="bg-[#0B0B0B] text-white min-h-screen">
{/* Hero Section */}
<section
className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
style={{
backgroundImage:
`url(${spaheroimg})`,
}}
> <div className="absolute inset-0 bg-black/70"></div>

```
    <div className="relative z-10 text-center px-4">
      <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
        Our Services
      </p>

      <h1 className="text-4xl md:text-6xl font-bold">
        Treat Yourself To
        <br />
        The Care You Deserve
      </h1>
    </div>
  </section>

  {/* Services Grid */}
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="text-center mb-16">
      <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
        Premium Treatments
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        Our Luxury Services
      </h2>
    </div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div
          key={index}
          className="
            bg-[#111111]
            border border-white/10
            rounded-3xl
            p-8
            hover:border-[#C8A96B]
            hover:-translate-y-2
            transition-all
            duration-300
          "
        >
          <div className="text-[#C8A96B] mb-6">
            {service.icon}
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            {service.title}
          </h3>

          <p className="text-gray-400 leading-7">
            {service.description}
          </p>

          <button className="mt-6 text-[#C8A96B] font-medium hover:underline">
            Learn More →
          </button>
        </div>
      ))}
    </div>
  </section>

  {/* Why Our Services */}
  <section className="bg-[#111111] py-20">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
        Why Choose Us
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        Experience The Difference
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {[
          "Experienced Professionals",
          "Premium Spa Products",
          "Personalized Treatments",
          "Luxury Environment",
        ].map((item) => (
          <div
            key={item}
            className="bg-[#0B0B0B] p-6 rounded-2xl border border-white/10"
          >
            <h3 className="text-lg font-semibold text-[#C8A96B]">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="py-20 px-6">
    <div className="max-w-5xl mx-auto text-center bg-[#111111] rounded-3xl border border-white/10 p-10 md:p-16">
      <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
        Book Your Session
      </p>

      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Ready To Relax & Rejuvenate?
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Discover our premium wellness treatments and
        experience complete relaxation with our expert team.
      </p>

      <Link to={"/book-appointment"}>
        <button className="bg-[#C8A96B] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition cursor-pointer">
          Book Appointment
        </button>
      </Link>
    </div>
  </section>
</div>
);
};

export default Services;
