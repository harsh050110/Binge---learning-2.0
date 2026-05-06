import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Back to top button */}
        <div className="flex justify-start mb-12 pb-6 border-b border-gray-800">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-4 text-white font-bold hover:text-yellow-500 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-yellow-500 group-hover:bg-yellow-400 text-black flex items-center justify-center text-xl shadow-lg transition transform group-hover:-translate-y-1">
              ↑
            </div>
            <span className="text-sm uppercase tracking-widest">Back to top</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Career Paths */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Career Paths</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/courses" className="hover:text-yellow-500 transition">All Courses</Link></li>
              <li><Link to="/courses/cad" className="hover:text-yellow-500 transition">CAD Path</Link></li>
              <li><Link to="/courses/cae" className="hover:text-yellow-500 transition">FEA/CAE Path</Link></li>
              <li><Link to="/courses/graphics" className="hover:text-yellow-500 transition">Graphic Design</Link></li>
              <li><Link to="/courses/3d" className="hover:text-yellow-500 transition">3D & Rendering</Link></li>
              <li><Link to="/courses/physics" className="hover:text-yellow-500 transition">Physics of Design</Link></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/bl-studio" className="hover:text-yellow-500 transition">BL Studio</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500 transition">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-yellow-500 transition">Our Vision</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-yellow-500 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500 transition">Book a Demo</Link></li>
              <li><Link to="/privacy" className="hover:text-yellow-500 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-yellow-500 transition">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Social Media</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-yellow-500 transition">
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-yellow-500 transition">
                  <span className="font-bold">in</span> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-yellow-500 transition">
                  <FaYoutube /> YouTube
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-yellow-500 transition">
                  <FaFacebookF /> Facebook
                </a>
              </li>
              <li>
                <a href="https://discord.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-yellow-500 transition">
                  <FaDiscord /> Discord
                </a>
              </li>
              <li>
                <a href="https://wa.me/918707493336" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-yellow-500 transition">
                  <FaWhatsapp /> WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-gray-400 text-sm leading-relaxed max-w-3xl">
          <p className="mb-4">
            Binge Learning – Strategic learning and career-focused training helping students build real-world skills and professional confidence.
          </p>
          <p>
            © 2026 Binge Learning. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
