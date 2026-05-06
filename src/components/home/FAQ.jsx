import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  { question: "What exactly is Binge Learning?", answer: "Binge Learning is a premier Edtech platform specializing in high-end technical and creative software training, bridged with real-world industry projects." },
  { question: "Who are these courses for?", answer: "Our courses are specifically designed for engineering students (Mechanical, Aerospace, Robotics) and creative professionals looking to master specialized software tracks." },
  { question: "Are the classes live or recorded?", answer: "We primarily offer high-impact live interactive sessions to ensure direct mentorship, along with supplementary pre-recorded resources." },
  { question: "What happens if I don't understand something?", answer: "We have dedicated 24/7 technical support and specific doubt-solving sessions to ensure every student masters their chosen software." },
  { question: "Is special software required?", answer: "Yes, our training focuses on industry standard tools. We provide guidance on setting up all professional software needed for your specific career path." },
  { question: "Will I get a certificate when I finish?", answer: "Yes, every graduate receives an Industry-Recognized Professional Certificate along with a verifiable portfolio of their completed live projects." },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    if (openIdx === idx) setOpenIdx(null);
    else setOpenIdx(idx);
  };

  return (
    <section className="pt-8 pb-24 bg-[#1a0b2e] relative" id="faqs">
      {/* Background Orbs */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">

        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-black uppercase tracking-widest mb-4">
            Help Center
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            Common <span className="text-yellow-500">FAQs</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-medium">
            Still Have Questions?{" "}
            <a href="/contact" className="text-yellow-500 hover:text-yellow-400 transition-colors font-black underline underline-offset-4 decoration-1 shadow-2xl">
              Contact Us
            </a>
            , We are happy to help you.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`group relative border transition-all duration-500 rounded-2xl overflow-hidden ${
                  openIdx === idx 
                    ? "bg-white/10 border-yellow-500/50 shadow-[0_20px_50px_rgba(0,0,0,0.3)]" 
                    : "bg-white/5 border-white/5 hover:border-white/20"
              }`}
            >
              <button 
                onClick={() => toggle(idx)}
                className="w-full text-left px-8 py-6 flex justify-between items-center transition"
              >
                <span className={`font-bold text-lg md:text-xl transition-colors ${openIdx === idx ? "text-yellow-500" : "text-white"}`}>
                   {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 ${
                    openIdx === idx ? "bg-yellow-500 text-black rotate-180" : "bg-white/5 text-yellow-500"
                }`}>
                   {openIdx === idx ? <FaMinus size={12} /> : <FaPlus size={12} />}
                </div>
              </button>
              
              <div 
                className={`px-8 overflow-hidden transition-all duration-700 ease-in-out ${
                  openIdx === idx ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-4 border-t border-white/10">
                    <p className="text-gray-400 leading-relaxed text-base italic">
                    "{faq.answer}"
                    </p>
                </div>
              </div>

              {/* Individual Card Glow */}
              <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
