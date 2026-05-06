import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interests: [],
    message: ""
  });

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <section className="bg-[#1a0b2e] min-h-screen text-white pb-20">
      {/* Hero Header */}
      <div className="relative py-24 px-6 overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-500 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="text-yellow-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Have questions about a course? Or want to book a free demo session? 
            Our team is here to help you navigate your career path.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        {/* Contact Information Cards */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all"></div>
            
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-yellow-500 rounded-full"></span>
              Reach Out
            </h2>
            
            <div className="space-y-8">
              {[
                { icon: <FaMapMarkerAlt />, label: "Address", value: "Binge Learning, Power House Road, Ratlam – 457001 (M.P.), India" },
                { icon: <FaPhoneAlt />, label: "Phone", value: "+91 87074 93336" },
                { icon: <FaEnvelope />, label: "Email", value: "info@bingelearning.in" },
                { icon: <FaGlobe />, label: "Website", value: "https://bingelearning.in/", isLink: true }
              ].map((item, index) => (
                <div key={index} className="flex gap-5 items-start group/item">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover/item:border-yellow-500/50 group-hover/item:bg-yellow-500/10 group-hover/item:text-yellow-500 transition-all duration-300">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-black mb-1">{item.label}</p>
                    {item.isLink ? (
                      <a href={item.value} target="_blank" rel="noreferrer" className="text-base text-gray-200 hover:text-yellow-500 transition-colors break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base text-gray-200 leading-snug">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-[2rem] bg-gradient-to-br from-yellow-500 to-amber-600 text-[#1a0b2e] shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
               <FaGlobe className="text-8xl" />
            </div>
            <h3 className="text-xl font-black mb-2 uppercase tracking-wider">Demystifying Engineering</h3>
            <p className="font-medium opacity-90 leading-relaxed text-sm">
              Connect with us to understand how we can help you transition from student to professional.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8">
          <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-[80px]"></div>
            
            <h2 className="text-3xl font-bold mb-10 relative z-10">Send a <span className="text-yellow-500">Quick Message</span></h2>
            
            <form className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Alex Johnson"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-yellow-500/50 focus:bg-white/[0.08] transition-all placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-yellow-500/50 focus:bg-white/[0.08] transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-1">Phone Number</label>
                <input
                  type="number"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-yellow-500/50 focus:bg-white/[0.08] transition-all placeholder:text-gray-600 appearance-none"
                />
              </div>

              <div className="space-y-4">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-1">What are you interested in?</label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "CAD (CATIA, AutoCAD, Inventor)",
                    "CAE (Ansys, LS-DYNA, Hypermesh)",
                    "Graphic Design (Creative Suite)",
                    "Robotics/Physics Specialization"
                  ].map((interest) => (
                    <div 
                      key={interest} 
                      onClick={() => handleInterestChange(interest)}
                      className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                        formData.interests.includes(interest) 
                          ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-500' 
                          : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/[0.08] hover:border-white/20'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all ${
                        formData.interests.includes(interest) ? 'bg-yellow-500 border-yellow-500' : 'border-gray-600 bg-transparent'
                      }`}>
                        {formData.interests.includes(interest) && <span className="text-[#1a0b2e] text-[10px] font-black">✓</span>}
                      </div>
                      <span className="text-xs font-bold">{interest}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-1">Your message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Share a bit about what you're looking for..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-yellow-500/50 focus:bg-white/[0.08] transition-all placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-yellow-500 text-[#1a0b2e] font-black rounded-2xl hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:-translate-y-1 active:scale-95 transition-all duration-300 shadow-xl text-lg uppercase tracking-widest"
              >
                Launch Conversation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
