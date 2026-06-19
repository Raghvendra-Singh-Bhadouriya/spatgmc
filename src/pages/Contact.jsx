import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import spaheroimg from "../assets/spahero-img.jpg";
import { useReducer } from "react";

const initialState = {
  fullname:"",
  email:"",
  phone:"",
  message:"",
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


const Contact = () => {
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
      TGMC SPA - New Customer Inquiry

      Name: ${state.fullname}
      Email: ${state.email}
      Phone: ${state.phone}

      Message: ${state.message}
      `;

      const spaPhoneNumber = "919009566222";

      const whatsappUrl = `https://wa.me/${spaPhoneNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappUrl, "_blank")

      dispatch({ type: "RESET" })
  }

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${spaheroimg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-4">
          <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
            Contact Us
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            We'd Love To
            <br />
            Hear From You
          </h1>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 text-center">
            <Phone className="mx-auto text-[#C8A96B] mb-4" size={35} />
            <h3 className="text-xl font-semibold mb-2">
              Call Us
            </h3>
            <p className="text-gray-400">
              +91 90095 66222
            </p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 text-center">
            <Mail className="mx-auto text-[#C8A96B] mb-4" size={35} />
            <h3 className="text-xl font-semibold mb-2">
              Email Us
            </h3>
            <p className="text-gray-400">
              spatgmc@gmail.com
            </p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 text-center">
            <MapPin className="mx-auto text-[#C8A96B] mb-4" size={35} />
            <h3 className="text-xl font-semibold mb-2">
              Location
            </h3>
            <p className="text-gray-400">
              Rajendra Nagar, Indore Madhya Pradesh 452012
            </p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 text-center">
            <Clock className="mx-auto text-[#C8A96B] mb-4" size={35} />
            <h3 className="text-xl font-semibold mb-2">
              Working Hours
            </h3>
            <p className="text-gray-400">
              11 AM - 11 PM
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-8">
            <p className="uppercase tracking-[5px] text-[#C8A96B] mb-3">
              Get In Touch
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Send Us A Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="fullname"
                value={state.fullname}
                onChange={handleChange}
                required
                placeholder="Full Name *"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#C8A96B]"
              />

              <input
                type="email"
                name="email"
                value={state.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#C8A96B]"
              />

              <input
                type="tel"
                name="phone"
                value={state.phone}
                onChange={handleChange}
                placeholder="Phone Number *"
                required
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#C8A96B]"
              />

              <textarea
                name="message"
                value={state.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#C8A96B]"
              />

              <button
                type="submit"
                className="w-full bg-[#C8A96B] text-black py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-8">
            <p className="uppercase tracking-[5px] text-[#C8A96B] mb-3">
              TGMC SPA
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Connect
            </h2>

            <p className="text-gray-400 leading-8 mb-8">
              We are here to help you relax, refresh and
              rejuvenate. Reach out to us for appointments,
              service information, or any questions regarding
              our spa treatments.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-[#C8A96B] font-semibold">
                  Address
                </h3>
                <p className="text-gray-400">
                  The Grand Courtyard Maan,
                  4-5 AB Road, Opposite Tower Gulkand,
                  Near IPS College, Rajendra Nagar,
                  Indore, Madhya Pradesh 452012, India
                </p>
              </div>

              <div>
                <h3 className="text-[#C8A96B] font-semibold">
                  Phone
                </h3>
                <p className="text-gray-400">
                  +91 90095 66222
                </p>
              </div>

              <div>
                <h3 className="text-[#C8A96B] font-semibold">
                  Email
                </h3>
                <p className="text-gray-400">
                  spatgmc@gmail.com
                </p>
              </div>

              <div>
                <h3 className="text-[#C8A96B] font-semibold">
                  Working Hours
                </h3>
                <p className="text-gray-400">
                  Monday - Sunday
                  <br />
                  11:00 AM - 11:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto overflow-hidden rounded-3xl border border-white/10">
          <iframe
            title="TGMC SPA Location"
            src="https://www.google.com/maps?q=The+Grand+Courtyard+Maan,+4-5+AB+Road,+Opposite+Tower+Gulkand,+Near+IPS+College,+Rajendra+Nagar,+Indore,+Madhya+Pradesh+452012&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;