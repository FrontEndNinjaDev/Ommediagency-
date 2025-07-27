import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaChevronRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <footer className="bg-[#0D0B1B] dark:bg-[#0f172a] text-white px-6 md:px-16 py-12 transition-colors duration-300">
      <div className="grid md:grid-cols-4 gap-10 text-sm">
        {/* Logo & Contact Info */}
        <div className="space-y-4">
          <img
            src="/Ommediagency -logo.png"
            alt="Ommediagency  Logo"
            className="w-32 brightness-125 dark:brightness-200"
          />
          <div className="border-t border-gray-700 pt-4 space-y-3">
            <div className="flex items-center gap-2 text-orange-500">
              <FaMapMarkerAlt />
              <span className="text-white dark:text-gray-300">Lucknow</span>
            </div>
            <div className="flex items-center gap-2 text-orange-500">
              <FaEnvelope />
              <span className="text-white dark:text-gray-300">
                ommediabussiness@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2 text-orange-500">
              <FaPhoneAlt />
              <span className="text-white dark:text-gray-300">
                +91 7268066142
              </span>
            </div>
          </div>
        </div>

        {/* Other Pages */}
        <div>
          <h4 className="font-semibold text-white dark:text-white mb-4">
            Other Pages
          </h4>
          <ul className="space-y-2">
            {[
              "Home",
              "About Us",
              "Services",
              "Projects",
              "Contact",
              "Blog",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-gray-300 dark:text-gray-400 hover:text-orange-400 dark:hover:text-orange-400 cursor-pointer"
              >
                <FaChevronRight className="text-orange-500 text-xs" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white dark:text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              "Privacy Policy",
              "Term Of Service",
              "Disclaimer",
              "Credits",
              "FAQ",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-gray-300 dark:text-gray-400 hover:text-orange-400 dark:hover:text-orange-400 cursor-pointer"
              >
                <FaChevronRight className="text-orange-500 text-xs" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h4 className="font-semibold text-white dark:text-white mb-4">
            Newsletter
          </h4>
          <p className="text-gray-400 dark:text-gray-300 mb-4">
            Get the latest news & updates
          </p>
          <div className="flex gap-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 text-white dark:bg-orange-400 dark:hover:bg-orange-500 transition"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 dark:text-gray-500 text-xs">
        <p>
          Ommediagency Digital Marketing Agency Made With{" "}
          <span className="text-pink-500">❤️</span> In 🇮🇳
        </p>
        <p className="mt-1">Copyright © 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SocialMedia;
