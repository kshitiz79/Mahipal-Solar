import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "How can I use animation to enhance my digital presence?",
    answer:
      "Animation enhances engagement, captures attention, and builds a stronger digital identity through dynamic storytelling.",
  },
  {
    id: 2,
    question: "I’m new to animation. Where should I start?",
    answer:
      "Start by identifying your goals. Explore different styles and consult animation professionals to guide your vision.",
  },
  {
    id: 3,
    question: "How long does an animation project take?",
    answer:
      "Project timelines vary, typically ranging from 2 to 8 weeks depending on complexity and scope.",
  },
  {
    id: 4,
    question: "What is your process for creating animations?",
    answer:
      "We start with concept development, move to storyboarding, design, animation, then final delivery with feedback loops.",
  },
];

const socialIcons = [
  {
    name: "Instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/vikramsolar_official/",
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    link: "https://www.linkedin.com/company/vikram-solar/?originalSubdomain=in",
  },
  {
    name: "Twitter",
    icon: faXTwitter,
    link: "https://x.com/ChanakyaUrban",
  },
];

export default function Contact() {
  const [openId, setOpenId] = useState(null);
  const toggleFAQ = (id) => setOpenId(openId === id ? null : id);

  return (
    <>
      {/* Hero / Form Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl text-black uppercase font-black drop-shadow-[1px_1px_0_black]">
            Your brand is unique, and so are our solutions.<br />Get in touch.
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-16 px-6 md:px-10 py-16">
          <div className="w-full md:w-1/2 bg-[#182d3b] rounded-2xl p-8 space-y-6 shadow-xl">
            <h3 className="text-white text-sm uppercase tracking-widest text-center">
              Send Us A Message
            </h3>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-md bg-white placeholder-gray-500 focus:outline-none" />
              <div className="flex flex-col md:flex-row gap-4">
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-md bg-white placeholder-gray-500 focus:outline-none" />
                <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-md bg-white placeholder-gray-500 focus:outline-none" />
              </div>
              <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-md bg-white placeholder-gray-500 focus:outline-none" />
              <textarea rows="4" placeholder="Your Message" className="w-full px-4 py-3 rounded-md bg-white placeholder-gray-500 focus:outline-none" />
              <button type="submit" className="w-full py-3 bg-black text-white rounded-md hover:bg-orange-500 transition">
                Submit
              </button>
            </form>
            <div className="text-center text-white text-sm space-y-1">
              <div className="uppercase tracking-widest">Direct Email</div>
              <div className="text-lg font-light">hello@urbanchanakya.in</div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {socialIcons.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg py-8 flex flex-col items-center justify-center hover:text-orange-500 transition"
                >
                  <FontAwesomeIcon icon={item.icon} className="text-2xl text-black" />
                  <span className="text-xs mt-2 uppercase tracking-wider">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl">
            <img src="/download.jpg" alt="Team" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-white px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-16">
          <h2 className="text-5xl font-black uppercase drop-shadow-[1px_1px_0_black]">FAQs</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={faq.id} className="border-b py-10 group cursor-pointer">
                <button
                  className="w-full flex justify-between items-start text-left"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className="flex gap-6 transition-transform duration-300 group-hover:translate-x-4">
                    <span className="text-gray-300 text-4xl font-medium">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-black text-4xl font-light">{faq.question}</span>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center border border-black rounded-full text-3xl font-light transition-transform duration-300 group-hover:scale-110">
                    {openId === faq.id ? "−" : "+"}
                  </div>
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      className="pl-[4.5rem] mt-4 text-gray-600 text-2xl"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
