// import { useState } from "react";
// import emailjs from "emailjs-com";
// import {
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaChevronRight,
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";

// import Logo from "../assets/IMG_0930.JPEG-removebg-preview.png";

// const SocialMedia = () => {
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     whatsapp: "",
//     instagram: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [done, setDone] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//     .send(
//       "service_xt46gay",
//       "template_9thc85p",
//       {
//         from_name: form.username,
//         from_email: form.email,
//         phone: form.phone,
//         whatsapp: form.whatsapp,
//         instagram: form.instagram,
//         to_email: "pratapguptaankit@gmail.com",
//         time: new Date().toLocaleString(), // optional
//       },
//       "BwHOkI9nxWbPhfSxz"
//     )

//       .then(
//         (result) => {
//           console.log(result.text);
//           setDone(true);
//           setForm({
//             username: "",
//             email: "",
//             phone: "",
//             whatsapp: "",
//             instagram: "",
//           });
//           setLoading(false);
//         },
//         (error) => {
//           console.log(error.text);
//           setLoading(false);
//         }
//       );
//   };

//   return (
//     <div>
//       <div className="min-h-screen bg-white dark:bg-[#0f172a]  text-white flex items-center justify-center ">
//         <form
//           onSubmit={sendEmail}
//           className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
//         >
//           <h2 className="text-2xl font-bold mb-6 text-center">Contact Form</h2>

//           <div className="mb-4">
//             <label className="block mb-1">Username</label>
//             <input
//               type="text"
//               name="username"
//               required
//               value={form.username}
//               onChange={handleChange}
//               className="w-full p-2 rounded bg-gray-700 text-white"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               required
//               value={form.email}
//               onChange={handleChange}
//               className="w-full p-2 rounded bg-gray-700 text-white"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1">Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               required
//               value={form.phone}
//               onChange={handleChange}
//               className="w-full p-2 rounded bg-gray-700 text-white"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1">WhatsApp Number</label>
//             <input
//               type="tel"
//               name="whatsapp"
//               required
//               value={form.whatsapp}
//               onChange={handleChange}
//               className="w-full p-2 rounded bg-gray-700 text-white"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block mb-1">Instagram Profile Link</label>
//             <input
//               type="url"
//               name="instagram"
//               required
//               value={form.instagram}
//               onChange={handleChange}
//               className="w-full p-2 rounded bg-gray-700 text-white"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
//           >
//             {loading ? "Sending..." : "Submit"}
//           </button>

//           {done && (
//             <p className="text-green-400 text-sm mt-4 text-center">
//               Message sent successfully!
//             </p>
//           )}
//         </form>
//       </div>

//       <footer className="bg-[#0D0B1B] dark:bg-[#0f172a] text-white px-6 md:px-16 py-12 transition-colors duration-300">
//         <div className="grid md:grid-cols-4 gap-10 text-sm">
//           {/* Logo & Contact Info */}
//           <div className="space-y-4">
//             <img
//               src={Logo}
//               alt="Ommediagency  Logo"
//               className="w-32 brightness-125 dark:brightness-200"
//             />
//             <div className="border-t border-gray-700 pt-4 space-y-3">
//               <div className="flex items-center gap-2 text-orange-500">
//                 <FaMapMarkerAlt />
//                 <span className="text-white dark:text-gray-300">Lucknow</span>
//               </div>
//               <div className="flex items-center gap-2 text-orange-500">
//                 <FaEnvelope />
//                 <span className="text-white dark:text-gray-300">
//                   ommediabussiness@gmail.com
//                 </span>
//               </div>
//               <div className="flex items-center gap-2 text-orange-500">
//                 <FaPhoneAlt />
//                 <span className="text-white dark:text-gray-300">
//                   +91 7268066142
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Other Pages */}
//           <div>
//             <h4 className="font-semibold text-white dark:text-white mb-4">
//               Other Pages
//             </h4>
//             <ul className="space-y-2">
//               {[
//                 "Home",
//                 "About Us",
//                 "Services",
//                 "Projects",
//                 "Contact",
//                 "Blog",
//               ].map((item) => (
//                 <li
//                   key={item}
//                   className="flex items-center gap-2 text-gray-300 dark:text-gray-400 hover:text-orange-400 dark:hover:text-orange-400 cursor-pointer"
//                 >
//                   <FaChevronRight className="text-orange-500 text-xs" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold text-white dark:text-white mb-4">
//               Quick Links
//             </h4>
//             <ul className="space-y-2">
//               {[
//                 "Privacy Policy",
//                 "Term Of Service",
//                 "Disclaimer",
//                 "Credits",
//                 "FAQ",
//               ].map((item) => (
//                 <li
//                   key={item}
//                   className="flex items-center gap-2 text-gray-300 dark:text-gray-400 hover:text-orange-400 dark:hover:text-orange-400 cursor-pointer"
//                 >
//                   <FaChevronRight className="text-orange-500 text-xs" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter / Social */}
//           <div>
//             <h4 className="font-semibold text-white dark:text-white mb-4">
//               Newsletter
//             </h4>
//             <p className="text-gray-400 dark:text-gray-300 mb-4">
//               Get the latest news & updates
//             </p>
//             <div className="flex gap-3">
//               {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
//                 (Icon, idx) => (
//                   <a
//                     key={idx}
//                     href="https://www.instagram.com/ommediagency.in/?hl=en"
//                     className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 text-white dark:bg-orange-400 dark:hover:bg-orange-500 transition"
//                   >
//                     <Icon />
//                   </a>
//                 )
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Text */}
//         <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 dark:text-gray-500 text-xs">
//           <p>
//             Ommediagency Digital Marketing Agency Made With{" "}
//             <span className="text-pink-500">❤️</span> In 🇮🇳
//           </p>
//           <p className="mt-1">Copyright © 2024 All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default SocialMedia;


import { useState } from "react";
import emailjs from "emailjs-com";
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

import Logo from "../assets/IMG_0930.JPEG-removebg-preview.png";

const SocialMedia = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    whatsapp: "",
    instagram: "",
  });

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_xt46gay",
        "template_9thc85p",
        {
          from_name: form.username,
          from_email: form.email,
          phone: form.phone,
          whatsapp: form.whatsapp,
          instagram: form.instagram,
          to_email: "pratapguptaankit@gmail.com",
          time: new Date().toLocaleString(),
        },
        "BwHOkI9nxWbPhfSxz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setForm({
            username: "",
            email: "",
            phone: "",
            whatsapp: "",
            instagram: "",
          });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white px-6 py-12">
      {/* Form */}
      <form
        onSubmit={sendEmail}
        className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg w-full max-w-xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us ?? </h2>

        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            name="username"
            required
            value={form.username}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">WhatsApp Number</label>
          <input
            type="tel"
            name="whatsapp"
            required
            value={form.whatsapp}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1">Instagram Profile Link</label>
          <input
            type="url"
            name="instagram"
            required
            value={form.instagram}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        {done && (
          <p className="text-green-400 text-sm mt-4 text-center">
            Message sent successfully!
          </p>
        )}
      </form>

      {/* Footer */}
      <footer className="bg-[#0D0B1B] dark:bg-[#0f172a] text-white px-6 md:px-16 py-12 transition-colors duration-300 mt-16">
        <div className="grid md:grid-cols-4 gap-10 text-sm">
          {/* Logo & Contact Info */}
          <div className="space-y-4">
            <img
              src={Logo}
              alt="Ommediagency Logo"
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
              {["Home", "About Us", "Services", "Projects", "Contact", "Blog"].map((item) => (
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
              {["Privacy Policy", "Term Of Service", "Disclaimer", "Credits", "FAQ"].map((item) => (
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
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <a
                  key={idx}
                  href="https://www.instagram.com/ommediagency.in/?hl=en"
                  className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 text-white dark:bg-orange-400 dark:hover:bg-orange-500 transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 dark:text-gray-500 text-xs">
          <p>
            Ommediagency Digital Marketing Agency Made With{" "}
            <span className="text-pink-500">❤️</span> In 🇮🇳
          </p>
          <p className="mt-1">Copyright © 2024 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SocialMedia;
