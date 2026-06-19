import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto  text-center">
        {/* 404 */}
        <h1 className="my-12 text-[120px] sm:text-[160px] md:text-[220px] font-bold text-[#C8A96B]/20 leading-none select-none">
          404
        </h1>

        {/* Content */}
        <div className="-mt-8 sm:-mt-12">
          <p className="uppercase tracking-[6px] text-[#C8A96B] text-sm mb-4">
            Oops! Page Not Found
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            The Page You're Looking For Doesn't Exist
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 leading-8 text-base sm:text-lg">
            The page may have been moved, deleted, or the URL might be incorrect.
            Let's get you back to a place of relaxation and wellness.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
            <Link to="/">
              <button className="bg-[#C8A96B] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 cursor-pointer">
                Back To Home
              </button>
            </Link>

            <Link to="/book-appointment">
              <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300 flex items-center justify-center gap-2 cursor-pointer">
                <ArrowLeft size={18} />
                Book Appointment
              </button>
            </Link>
          </div>
        </div>

        {/* Decorative Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-20">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
            <h3 className="text-[#C8A96B] font-semibold mb-2">
              Premium Care
            </h3>
            <p className="text-gray-400 text-sm">
              Relax and rejuvenate with our luxurious wellness services.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
            <h3 className="text-[#C8A96B] font-semibold mb-2">
              Expert Therapists
            </h3>
            <p className="text-gray-400 text-sm">
              Experience world-class treatments from professionals.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
            <h3 className="text-[#C8A96B] font-semibold mb-2">
              Luxury Ambience
            </h3>
            <p className="text-gray-400 text-sm">
              Escape the stress and embrace peace and tranquility.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;