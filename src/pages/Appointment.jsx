import { CalendarDays, Clock, User, Phone, Mail } from "lucide-react";
import spabodymassageimgtwo from "../assets/spabody-massage-img2.jpg";
import { useReducer } from "react";

const initialState = {
  fullname:"",
  phone:"",
  email:"",
  services:"",
  date:"",
  time:"",
  notes:"",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [ action.name ]: action.value
      }
      
    case "RESET":
      return initialState
  
    default:
      return state;
  }
}

const Appointment = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  function handleChange(e){
    dispatch({
      type: "SET_FIELD",
      name: e.target.name,
      value: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault();

    const message = `
      New Appointment Request

      Name: ${state.fullname}
      Phone: ${state.phone}
      Email: ${state.email}

      Services: ${state.services}

      Date: ${state.date}
      Time: ${state.time}

      Notes: ${state.notes}
      `;

      const spaPhoneNumber = "919009566222";

      const whatsappUrl = `https://wa.me/${spaPhoneNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappUrl, "_blank")

      dispatch({ type: "RESET" })
  }
  
return ( <div className="bg-[#0B0B0B] text-white min-h-screen">
{/* Hero Section */}
<section
className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
style={{
backgroundImage:
`url(${spabodymassageimgtwo})`,
}}
> <div className="absolute inset-0 bg-black/70"></div>

```
    <div className="relative z-10 text-center px-4">
      <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
        Book Appointment
      </p>

      <h1 className="text-4xl md:text-6xl font-bold">
        Schedule Your
        <br />
        Wellness Experience
      </h1>
    </div>
  </section>

  {/* Appointment Form */}
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="grid lg:grid-cols-2 gap-10">
      
      {/* Left Side */}
      <div className="bg-[#111111] border border-white/10 rounded-3xl p-8">
        <p className="uppercase tracking-[5px] text-[#C8A96B] mb-3">
          Appointment Form
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Book Your Session
        </h2>

        <form
        onSubmit={handleSubmit}
        className="space-y-5"
        >
          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-4 text-[#C8A96B]"
            />

            <input
              type="text"
              name="fullname"
              value={state.fullname}
              onChange={handleChange
              }
              placeholder="Full Name *"
              required
              className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-[#C8A96B]"
            />
          </div>

          <div className="relative">
            <Phone
              size={18}
              className="absolute left-4 top-4 text-[#C8A96B]"
            />

            <input
              type="tel"
              name="phone"
              value={state.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              required
              className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-[#C8A96B]"
            />
          </div>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-4 text-[#C8A96B]"
            />

            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="Email Address *"
              required
              className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-[#C8A96B]"
            />
          </div>

          <select 
          name="services"
          value={state.services}
          onChange={handleChange}
          required
          className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl py-4 px-4 outline-none focus:border-[#C8A96B]"
          >
            <option>Select Service</option>
            <option>Facial Treatment</option>
            <option>Body Spa</option>
            <option>Massage Therapy</option>
            <option>Hair Care & Styling</option>
            <option>Manicure & Pedicure</option>
            <option>Bridal Package</option>
          </select>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <CalendarDays
                size={18}
                className="absolute left-4 top-4 text-[#C8A96B]"
              />

              <input
                type="date"
                name="date"
                value={state.date}
                onChange={handleChange}
                required
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-[#C8A96B]"
              />
            </div>

            <div className="relative">
              <Clock
                size={18}
                className="absolute left-4 top-4 text-[#C8A96B]"
              />

              <input
                type="time"
                name="time"
                value={state.time}
                onChange={handleChange}
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-[#C8A96B]"
              />
            </div>
          </div>

          <textarea
            name="notes"
            value={state.notes}
            onChange={handleChange}
            rows="5"
            placeholder="Additional Notes (Ex-: I have sensitive skin., This is my first spa visit.)"
            className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#C8A96B]"
          />

          <button
            type="submit"
            className="w-full bg-[#C8A96B] text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
          >
            Confirm Appointment
          </button>
        </form>
      </div>

      {/* Right Side */}
      <div className="bg-[#111111] border border-white/10 rounded-3xl p-8">
        <p className="uppercase tracking-[5px] text-[#C8A96B] mb-3">
          Why Choose TGMC SPA
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Relax, Refresh &
          <br />
          Rejuvenate
        </h2>

        <p className="text-gray-400 leading-8 mb-8">
          Experience premium wellness treatments in a luxurious,
          peaceful environment designed to help you feel your best.
        </p>

        <div className="space-y-5">
          {[
            "Certified Professionals",
            "Premium Quality Products",
            "Luxury Ambience",
            "Personalized Treatments",
            "Easy Appointment Booking",
            "1000+ Happy Clients",
          ].map((item) => (
            <div
              key={item}
              className="bg-[#1A1A1A] border border-white/10 rounded-xl p-4"
            >
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#1A1A1A] rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-[#C8A96B] mb-3">
            Working Hours
          </h3>

          <p className="text-gray-400">
            Monday - Friday: 11:00 AM - 11:00 PM
          </p>

          <p className="text-gray-400">
            Saturday - Sunday: 11:00 AM - 11:00 PM
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* CTA Banner */}
  <section className="px-6 pb-20">
    <div className="max-w-6xl mx-auto bg-[#111111] border border-white/10 rounded-3xl p-10 text-center">
      <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
        Limited Time Offer
      </p>

      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Get 20% OFF On Your First Visit
      </h2>

      <p className="text-gray-400 mb-8">
        Book your first appointment today and enjoy exclusive
        wellness treatments at a special discounted price.
      </p>

      <button className="bg-[#C8A96B] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
        Claim Offer
      </button>
    </div>
  </section>
</div>
);
};

export default Appointment;
