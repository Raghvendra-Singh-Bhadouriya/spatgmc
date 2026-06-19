import { Sparkles, Crown, HeartHandshake, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const Packages = () => {
  const benefits = [
    {
      icon: <Sparkles size={40} />,
      title: "Personalized Treatments",
      desc: "Customized wellness experiences designed according to your needs.",
    },
    {
      icon: <Crown size={40} />,
      title: "Luxury Experience",
      desc: "Premium ambiance and expert care for complete relaxation.",
    },
    {
      icon: <HeartHandshake size={40} />,
      title: "Professional Therapists",
      desc: "Experienced specialists dedicated to your wellness journey.",
    },
    {
      icon: <Gift size={40} />,
      title: "Special Offers",
      desc: "Seasonal offers and exclusive benefits for our clients.",
    },
  ];

  return (
    <main className="bg-[#0B0B0B] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
            Exclusive Packages
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Wellness Packages
          </h1>

          <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
            We are currently designing premium spa packages to provide you with
            the ultimate relaxation and wellness experience.
          </p>
        </div>
      </section>

      {/* Coming Soon Card */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Personalized Packages Coming Soon
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto leading-8">
              At TGMC SPA, we believe every client deserves a unique experience.
              Our upcoming wellness packages will combine massage therapies,
              facials, body spa treatments, and beauty services tailored to your
              preferences.
            </p>

            <Link to="/book-appointment">
              <button className="mt-10 bg-[#C8A96B] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition cursor-pointer">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[5px] text-[#C8A96B]">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Experience Luxury & Wellness
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-white/10 rounded-3xl p-8 text-center hover:border-[#C8A96B] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-[#C8A96B] flex justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto bg-[#111111] rounded-3xl border border-white/10 p-10 md:p-16 text-center">
          <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
            Membership
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium Membership Plans Coming Soon
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto leading-8">
            Enjoy priority appointments, exclusive discounts, and personalized
            wellness programs with our upcoming membership plans.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#C8A96B] to-[#A8864F] rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready To Relax?
          </h2>

          <p className="text-black/80 max-w-2xl mx-auto text-lg">
            Schedule your wellness session today and experience premium care at
            TGMC SPA.
          </p>

          <Link to="/book-appointment">
            <button className="mt-8 bg-black text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition cursor-pointer">
              Book Appointment
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Packages;