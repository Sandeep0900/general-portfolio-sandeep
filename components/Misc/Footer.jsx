"use client";

import { MapPin } from "lucide-react";
import { India, Pune, Maharashtra } from "@/public";
import Image from "next/image";
import { socialLinks } from "@/constants/footerData";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MENU_LINKS } from "@/constants/footerData";
import { useGlobalState } from "@/hooks/useGlobalState";

const menuWrapperAnim = {
  open: {
    scale: 1,
    rotateY: 0,
    translateZ: 0,
    transition: {
      type: "spring",
      bounce: 0.36,
    },
  },
  close: {
    scale: 0,
    rotateY: -80,
    translateZ: -350,
    transition: {
      rotateY: { delay: 0.3, type: "spring", mass: 0.2 },
      duration: 0.3,
      delay: 0.1,
    },
  },
};

const FooterButton = ({ isOpen, toggleOpen }) => {
  return (
    <button
      onClick={toggleOpen}
      className={`relative z-20 rounded-full p-4 transition-all duration-300 transform w-16 h-16 flex items-center justify-center bg-purple-500 hover:bg-purple-600`}
      aria-label="Toggle social links"
    >
      <svg
        viewBox="0 0 100 100"
        className={`absolute inset-0 w-full h-full ${
          isOpen ? "" : "animate-rotate"
        }`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="circlePath"
            d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          />
        </defs>
        <text
          className="text-sm font-bold text-white"
          fill="currentColor"
          dy="5"
        >
          <textPath xlinkHref="#circlePath" textLength="250" startOffset="0">
            Connect • Connect • Connect • Connect •
          </textPath>
        </text>
      </svg>
    </button>
  );
};

const SocialLink = ({ link, icon, label, index, isOpen }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const offsetX = (index + 1) * -65;

  const handleMouseEnter = () => {
    setIsGlitching(true);
    setIsHovered(true);
    setTimeout(() => {
      setIsGlitching(false);
    }, 500);
  };

  const handleMouseLeave = () => {
    setIsGlitching(false);
    setIsHovered(false);
  };

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`absolute w-12 h-12 flex items-center justify-center
        rounded-full transition-all duration-500
        ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[60px]"}
      `}
      style={{
        transform: isOpen ? `translateX(${offsetX}px)` : "translateX(0px)",
        transitionDelay: `${index * 100}ms`,
      }}
      aria-label={label}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={`relative text-xl transition-all duration-300 ${
          isGlitching
            ? "text-white"
            : isHovered
            ? "text-purple-500"
            : "text-white"
        }`}
      >
        {icon}
      </span>
      {isGlitching && (
        <>
          <span className="absolute inset-0 flex items-center justify-center text-xl text-cyan-400 animate-glitch-cyan pointer-events-none">
            {icon}
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-xl text-pink-400 animate-glitch-pink pointer-events-none">
            {icon}
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-xl text-purple-200 animate-glitch-yellow pointer-events-none">
            {icon}
          </span>
        </>
      )}
    </Link>
  );
};

const MenuLink = ({
  index,
  name,
  hoverPageNo,
  onHoverStart,
  onHoverEnd,
  onTap,
}) => {
  const isHovered = hoverPageNo === index;
  const { currentSection } = useGlobalState();

  return (
    <motion.li
      className="w-full h-full flex flex-row flex-wrap content-center justify-center cursor-pointer relative"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onClick={onTap}
    >
      {isHovered && (
        <>
          <motion.div
            className="w-1/4 h-28 bg-purple-400 absolute bottom-[1px] blur-2xl"
            layoutId="selectedBack"
          />
          <motion.div
            className="w-1/3 h-1 rounded-xl bg-purple-400/50 absolute bottom-0"
            layoutId="selectedFront"
          />
        </>
      )}
      <span
        className={`w-full h-full ${
          currentSection === name ? "font-semibold" : ""
        } flex justify-center items-center no-underline text-clamp text-[#c1d3c5] transition-colors delay-200 z-10`}
      >
        {name}
      </span>
    </motion.li>
  );
};

const NavigationMenu = ({ isOpen }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [hoverPage, setHoverPage] = useState(0);
  const { setCurrentSection } = useGlobalState();

  const handleHoverStart = (index) => {
    setHoverPage(index);
  };

  const handleHoverEnd = () => {
    setHoverPage(currentPage);
  };

  const handleSelectPage = (index) => {
    setCurrentPage(index);
    setHoverPage(index);
    const sectionName = MENU_LINKS[index]?.name;
    if (sectionName) setCurrentSection(sectionName);
  };

  return (
    <section className="absolute -top-2 left-0 right-0 flex flex-row items-center z-[9] md:flex-col md:gap-3">
      <div className="relative bottom-5 flex perspective-[500px] flex-col items-center w-full md:bottom-0">
        <motion.div
          variants={menuWrapperAnim}
          className="relative w-[35vw] max-md:w-[85vw]"
          initial="close"
          animate={isOpen ? "open" : "close"}
        >
          <div className="relative w-full">
            <div
              className="bg-[rgba(128,0,128,0.08)] backdrop-blur-3xl h-[3.8vw] w-full md:h-[9.5vw] relative"
              style={{
                maskImage: 'url("/images/mask2.png")',
                maskRepeat: "no-repeat",
                maskSize: "100%",
                maskPosition: "center",
                WebkitMaskImage: 'url("/images/mask2.png")',
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "100%",
                WebkitMaskPosition: "center",
              }}
            >
              <div
                className="absolute inset-0 bg-[rgba(200,155,242,0.3)] backdrop-blur-3xl"
                style={{
                  maskImage: 'url("/images/mask.png")',
                  maskRepeat: "no-repeat",
                  maskSize: "100%",
                  maskPosition: "center",
                  WebkitMaskImage: 'url("/images/mask.png")',
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "100%",
                  WebkitMaskPosition: "center",
                }}
              />

              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: 'url("/images/dots.png")',
                  backgroundSize: "65px",
                }}
              />

              <ul className="list-none flex flex-row w-full h-full absolute px-8 m-0 items-center z-[2]">
                {MENU_LINKS.map((item, i) => (
                  <MenuLink
                    key={i}
                    index={i}
                    name={item.name}
                    navLink={item.link}
                    hoverPageNo={hoverPage}
                    onHoverStart={() => handleHoverStart(i)}
                    onHoverEnd={handleHoverEnd}
                    onTap={() => handleSelectPage(i)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      triggerAnimation();
    }, 1400);

    const intervalId = setInterval(() => {
      triggerAnimation();
    }, 4000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(intervalId);
    };
  }, []);

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div className="relative">
      <button
        className="opacity-0 group cursor-pointer relative z-20"
        style={{
          animation: "slideUp 1s ease-out forwards",
          animationDelay: "1.4s",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-1 rotate-45">
            {[1, 2, 3, 4].map((blockNum) => (
              <div
                key={blockNum}
                className={`
                  ${
                    blockNum === 4
                      ? "w-1.5 h-1.5 bg-purple-500 rounded-[.1rem]"
                      : "w-2.5 h-2.5 bg-white rounded-[.2rem]"
                  }
                  ${isAnimating ? `animate-block-${blockNum}` : ""}
                  ${hover ? `hover-block-${blockNum}` : ""}
                  transition-transform duration-300
                `}
                style={{
                  animation:
                    isAnimating || hover
                      ? `block${blockNum}Animation 1s linear infinite`
                      : "none",
                }}
              />
            ))}
          </div>
        </div>
      </button>

      <NavigationMenu isOpen={isOpen} />
    </div>
  );
};

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute w-full flex flex-col justify-center items-center bottom-5 text-white font-montserrat px-24 py-8 max-sm:py-12 z-50">
      <NavigationBar />

      <div
        className="w-full flex justify-between items-center opacity-0"
        style={{
          animation: "slideUp 1s ease-out forwards",
          animationDelay: "1.8s",
        }}
      >
        <div className="flex items-center font-light">
          <MapPin className="mr-2 text-lg" />
          <div className="text-base sm:text-lg flex items-baseline gap-x-1.5">
            Located in{" "}
            <span className="relative font-bold text-purple-500 hover:bg-none">
              Pune,
              <Image
                className="h-14 w-auto absolute inset-0 z-10 opacity-0 -top-3 transition-opacity hover:opacity-100"
                src={Pune}
                alt="pune"
              />
            </span>
             <span className="relative font-bold text-purple-500 hover:bg-none">
               Maharashtra,
              <Image
                className="h-14 w-auto absolute inset-0 z-10 opacity-0 -top-3 transition-opacity hover:opacity-100"
                src={Maharashtra}
                alt="Maharashtra"
              />
            </span>
            <span className="relative font-bold text-purple-500 hover:bg-none">
               India
              <Image
                className="h-14 w-auto absolute inset-0 z-10 opacity-0 -top-3 transition-opacity hover:opacity-100"
                src={India}
                alt="India"
              />
            </span>
          </div>
        </div>

        <div className="relative isolate flex justify-center items-center">
          <FooterButton isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
          <div className="absolute inset-0 flex items-center justify-center">
            {socialLinks.map((link, index) => (
              <SocialLink
                key={link.label}
                {...link}
                index={index}
                isOpen={isOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
