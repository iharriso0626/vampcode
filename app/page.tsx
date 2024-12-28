"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Logo from "../Images/Logo.svg";

export default function Home() {
  // Track whether we're showing the big headings or the “Skills” panel
  const [showSkills, setShowSkills] = useState(false);
  // Track whether we're showing the "Contact Me" panel
  const [showContact, setShowContact] = useState(false);

  // Resets everything back to main page
  const goHome = () => {
    setShowSkills(false);
    setShowContact(false);
  };

  return (
    <>
    <div className="flex h-screen w-screen bg-[#0C0004] text-white overflow-hidden">
      {/* Mobile Message */}
      <div className="block md:hidden flex-col flex items-center justify-center w-full h-full text-center p-4">
        <p className="text-lg">
          Sorry, this website is not currently optimized for Mobile use, thank you!
        </p>
        <p>- Ian Harrison</p>
      </div>

      {/* Desktop Content */}
      <div className="hidden md:flex h-full w-full">
        {/* LEFT SECTION (Always visible, never moves) */}
        <div className="relative w-[35%] h-full px-8 py-12 overflow-hidden items-center justify-center">
          {/* Logo as a button to return to main page */}
          <Image
            src={Logo}
            alt="Logo"
            className="w-24 h-24 border-2 border-[#670A0D] rounded-xl cursor-pointer"
            onClick={goHome}
          />

          {/* Main info */}
          <h2 className="text-2xl mb-6 mt-[30%] ml-[20%] font-semibold uppercase tracking-wider">
            Ian Harrison
          </h2>
          <p className="text-lg ml-[20%]">
            Security Analyst and Developer
          </p>
          <p className="mt-2 text-lg leading-relaxed max-w-sm ml-[20%]">
            Creating, Monitoring, Testing, and Securing software in Birmingham, Alabama.
          </p>

          {/* Button SECTION */}
          <div>
            <button
              className="mt-4 ml-[20%] bg-[#670A0D] text-white py-2 px-4 rounded-lg"
              onClick={() => {
                setShowSkills(true);
                setShowContact(false);
              }}
            >
              Experience/Skills
            </button>

            <button
              className="mt-4 ml-[20%] bg-[#670A0D] text-white py-2 px-4 rounded-lg"
              onClick={() => {
                setShowContact(true);
                setShowSkills(false);
              }}
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT SECTION (Animated content) */}
        <div className="relative w-[65%] h-full flex items-center justify-center md:overflow-scroll lg:overflow-clip hide-scrollbar">
          <AnimatePresence mode="wait">
            {/* If NOT showing skills/contact, display big headings */}
            {!showSkills && !showContact && (
              <motion.div
                key="mainContent"
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              >
                <div className="text-left space-y-2">
                  <h1 className="text-[150px] md:text-[200px] leading-none font-light">
                    SECURITY
                  </h1>
                  <h1 className="text-[150px] md:text-[200px] leading-none font-light">
                    SOFTWARE
                  </h1>
                  <h1 className="text-[150px] md:text-[200px] leading-none font-light text-[#670A0D]">
                    SIMPLE
                  </h1>
                </div>
              </motion.div>
            )}

            {/* If showing SKILLS, slide in from the top */}
            {showSkills && !showContact && (
              <motion.div
                key="skillsContent"
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              >
                {/* --- SKILLS SECTION --- */}
                <div className="w-full h-full flex-col flex mt-20 px-8">
                  {/* Section Heading: bold */}
                  <h1 className="text-4xl font-bold mb-4">Skills</h1>

                  {/* Main UL for Skills: smaller spacing so it doesn't overflow */}
                  <ul className="list-[square] list-inside pl-6 space-y-4 marker:text-[#670A0D]">
                    {/* Programming Languages */}
                    <li className="text-xl leading-normal">
                      <span className="font-bold">Programming Languages:</span>
                      <ul className="list-disc list-inside pl-8 mt-2 space-y-1 marker:text-[#670A0D]">
                        <li className="font-normal">
                          Python <span className="text-gray-400">•</span> Java{" "}
                          <span className="text-gray-400">•</span> JavaScript{" "}
                          <span className="text-gray-400">•</span> HTML5{" "}
                          <span className="text-gray-400">•</span> Arduino{" "}
                          <span className="text-gray-400">•</span> React{" "}
                          <span className="text-gray-400">•</span> React Native{" "}
                          <span className="text-gray-400">•</span> TypeScript{" "}
                          <span className="text-gray-400">•</span> SQL{" "}
                          <span className="text-gray-400">•</span> Machine Language (LegV8){" "}
                          <span className="text-gray-400">•</span> Ruby{" "}
                          <span className="text-gray-400">•</span> Ruby on Rails{" "}
                          <span className="text-gray-400">•</span> Swift
                        </li>
                      </ul>
                    </li>

                    {/* Compliancy Experience */}
                    <li className="text-xl leading-normal">
                      <span className="font-bold">Compliancy Experience:</span>
                      <ul className="list-disc list-inside pl-8 mt-2 space-y-1 marker:text-[#670A0D]">
                        <li className="font-normal">
                          HIPAA <span className="text-gray-400">•</span> ISO-27001{" "}
                          <span className="text-gray-400">•</span> ISO-9001{" "}
                          <span className="text-gray-400">•</span> PCI-DSS{" "}
                          <span className="text-gray-400">•</span> CA Consumer Privacy Act{" "}
                          <span className="text-gray-400">•</span> FDA-21{" "}
                          <span className="text-gray-400">•</span> GDPR
                        </li>
                      </ul>
                    </li>

                    {/* Other Software */}
                    <li className="text-xl leading-normal">
                      <span className="font-bold">Other Software:</span>
                      <ul className="list-disc list-inside pl-8 mt-2 space-y-1 marker:text-[#670A0D]">
                        <li className="font-normal">
                          3D Modeling <span className="text-gray-400">•</span> TinkerCad{" "}
                          <span className="text-gray-400">•</span> Computer Programming{" "}
                          <span className="text-gray-400">•</span> Geospatial Processing and Map Design{" "}
                          <span className="text-gray-400">•</span> Database Management and Design
                        </li>
                      </ul>
                    </li>

                    {/* Amazon AWS */}
                    <li className="text-xl leading-normal">
                      <span className="font-bold">Amazon AWS:</span>
                      <ul className="list-disc list-inside pl-8 mt-2 space-y-1 marker:text-[#670A0D]">
                        <li className="font-normal">
                          3D Modeling <span className="text-gray-400">•</span> TinkerCad{" "}
                          <span className="text-gray-400">•</span> Computer Programming{" "}
                          <span className="text-gray-400">•</span> Geospatial Processing and Map Design{" "}
                          <span className="text-gray-400">•</span> Database Management and Design
                        </li>
                      </ul>
                    </li>

                    {/* Microsoft Defender */}
                    <li className="text-xl leading-normal">
                      <span className="font-bold">Microsoft Defender:</span>
                      <ul className="list-disc list-inside pl-8 mt-2 space-y-1 marker:text-[#670A0D]">
                        <li className="font-normal">
                          Microsoft Defender for Endpoint{" "}
                          <span className="text-gray-400">•</span> Microsoft Defender for Office 365{" "}
                          <span className="text-gray-400">•</span> Microsoft Defender for Identity
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <h1 className="my-8 w-full h-0.5 bg-[#670A0D]"></h1>

                  {/* --- CERTIFICATIONS SECTION --- */}
                  <h1 className="text-4xl font-bold mb-4">Certifications</h1>
                  <ul className="list-[square] list-inside pl-6 space-y-4 marker:text-[#670A0D]">
                    <li className="text-xl leading-normal">
                      <span className="font-bold">CompTIA:</span>
                      <ul className="list-disc list-inside pl-8 mt-2 space-y-1 marker:text-[#670A0D]">
                        <li className="font-normal">Security+</li>
                      </ul>
                    </li>
                    <li className="text-xl leading-normal">
                      <span className="font-bold">Amazon AWS (Official Courses):</span>
                      <ul className="list-disc list-inside pl-8 mt-2 space-y-1 marker:text-[#670A0D]">
                        <li className="font-normal">
                          Amazon AWS Cloud Foundations <span className="text-gray-400">•</span> Amazon AWS Security
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
            {/* If showing CONTACT, slide in from the top */}
            {showContact && !showSkills && (
              <motion.div
                key="contactContent"
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              >
                {/* --- CONTACT SECTION --- */}
                <div className="w-full h-full flex-col flex mt-20 px-8">
                  <h1 className="text-4xl mb-4">Contact Me</h1>
                  <p className="text-lg mb-8">
                    Please reach out if you have any questions about my work,
                    or to discuss potential opportunities.
                  </p>

                  {/* GitHub Link */}
                  <a
                    href="https://github.com/iharriso0626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                    aria-label="Visit my GitHub Profile"
                  >
                    <footer className="flex items-center justify-center space-x-4 bg-gray-800 p-16 mb-8 rounded-xl">
                      <FaGithub size={60} />
                    </footer>
                  </a>

                  {/* LinkedIn Link */}
                  <a
                    href="https://www.linkedin.com/in/ian-harrison-3774ab224/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                    aria-label="Visit my LinkedIn Page"
                  >
                    <footer className="flex items-center justify-center space-x-4 bg-[#0a66c2] p-16 mb-8 rounded-xl">
                      <FaLinkedin size={60} />
                    </footer>
                  </a>

                  {/* Email Link */}
                  
                  <a
                    href="mailto:iharrison0626@gmail.com"
                    className="text-xl hover:underline"
                    >
                      <footer className="flex items-center justify-center space-x-4 bg-[#3d3d3d] p-16 mb-8 rounded-xl">
                        <FaEnvelope size={60}/>
                     </footer>
                    </a>
               
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
    </>
  );
}

