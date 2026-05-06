import { Link } from "react-router-dom";
import { FaPlay, FaGraduationCap, FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden py-24 mb-10">
      {/* Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-yellow-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text and CTAs */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-[0.2em]">
            <FaStar className="animate-pulse" /> The Standard of Engineering Education
          </div>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-black leading-[1.1] text-white">
            Transform Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200">
              An Industry Pro
            </span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
            Master Technical Software from Aerospace to Graphic Design. Our specialized tracks bridge the gap between classroom theory and real-world engineering excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pt-4">
            <Link 
              to="/courses"
              className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-5 rounded-[1.2rem] font-black text-lg transition-all shadow-[0_10px_30px_rgba(234,179,8,0.3)] transform hover:-translate-y-1 active:scale-95"
            >
              Explore Paths <FaGraduationCap className="text-2xl" />
            </Link>

            <button className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-5 rounded-[1.2rem] font-bold text-lg transition-all backdrop-blur-md transform hover:-translate-y-1 active:scale-95">
              Watch Demo <FaPlay className="text-sm" />
            </button>
          </div>

        </div>

        {/* Right Side: High-Impact Visual */}
        <div className="relative flex justify-center items-center">
            {/* Main Glass Card */}
            <div className="relative w-full aspect-square max-w-[550px] bg-gradient-to-br from-white/10 to-transparent rounded-[3rem] border border-white/20 p-2 shadow-2xl backdrop-blur-3xl overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#3b82f6]/20 to-[#4b136f]/40 transition-opacity group-hover:opacity-80" />
               
               <div className="relative h-full w-full rounded-[2.8rem] bg-[#1a0b2e]/60 flex items-center justify-center overflow-hidden">
                  {/* Inner Content - Mock Dashboard/Visual */}
                  <div className="animate-float flex flex-col items-center">
                      <div className="w-40 h-40 rounded-full bg-yellow-500/20 blur-3xl absolute animate-pulse"></div>
                      <div className="relative z-10 w-24 h-24 rounded-3xl bg-gradient-to-br from-yellow-500 to-yellow-300 flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-700">
                          <FaGraduationCap className="text-black text-5xl" />
                      </div>
                      <p className="relative z-10 mt-8 text-white/40 font-mono tracking-widest uppercase text-xs">Certified Excellence</p>
                  </div>

                  {/* Floating Badges */}
                  <div className="absolute top-12 right-12 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-xs font-black tracking-widest animate-bounce-slow">
                     LIVE PROJECTS
                  </div>
                  <div className="absolute bottom-12 left-12 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-xs font-black tracking-widest animate-bounce-slow" style={{ animationDelay: '1s' }}>
                     24/7 SUPPORT
                  </div>
               </div>
            </div>

            {/* Accent Orbs */}
            <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 bg-purple-600/30 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute -z-10 -bottom-20 -left-20 w-64 h-64 bg-yellow-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
