"use client";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import Link from "next/link";
import React, { useState } from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Home() {
  const cardData = [
    {
      img: "/images/features/main.jpg",
      title: "Sound Recognition",
      description: "Detects sounds that are around the users",
    },
    {
      img: "/images/features/speech-to-text.png",
      title: "Speech To Text",
      description:
        "Helping others to communicate easily with people with hearing disabilities",
    },
    {
      img: "/images/features/deaf-article.jpg",
      title: "Article",
      description: "Contains articles with inspirational stories",
    },
  ];

  const teamItems = [
    {
      img: "/images/features/main.jpg",
      name: "Riyan Daifullah",
      position: "Mobile Development",
    },
    {
      img: "/images/features/speech-to-text.png",
      name: "Aldi Murad R.",
      position: "Mobile Development",
    },
    {
      img: "/images/features/main.jpg",
      name: "Aiza Fuji Sari",
      position: "Cloud Computing",
    },
    {
      img: "/images/features/main.jpg",
      name: "Riski Dafa S.",
      position: "Cloud Computing",
    },
    {
      img: "/images/features/main.jpg",
      name: "Rakha Hanif M.",
      position: "Machine Learning",
    },
    {
      img: "/images/features/main.jpg",
      name: "M. Akram Fais",
      position: "Machine Learning",
    },
    {
      img: "/images/features/main.jpg",
      name: "Khairul Abdi",
      position: "Machine Learning",
    },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const title = "Empowering Communication for the Hearing Impaired".split(" ");
  const subTitle =
    "Visual sound recognition for improved social interactions and independence".split(
      " "
    );

  return (
    <React.Fragment>
      <main className="flex min-h-screen flex-col items-center w-full">
        {/* Header */}
        <div className="flex flex-row justify-between items-center w-full py-4 bg-white px-5 md:px-20 lg:px-50 fixed top-0 left-0 z-9">
          <Link href={"/#hero"}>
            <img
              width={70}
              height={32}
              src={"/images/logo/logo.png"}
              alt="Logo"
            />
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={isNavOpen}
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <ul className="flex-row gap-14 font-medium text-body text-sm hidden md:flex">
            <li>
              <Link href={"/#about"}>About</Link>
            </li>
            <li>
              <Link href={"/#features"}>Features</Link>
            </li>
            <li>
              <Link href={"/#teams"}>Teams</Link>
            </li>
            <li>
              <Link href={"/#download"}>Download</Link>
            </li>
          </ul>
          {isNavOpen && (
            <div className="absolute top-14 left-0 w-full bg-white border-t border-gray-200 md:hidden">
              <ul className="flex flex-col p-4 space-y-2 font-medium text-body text-sm">
                <li>
                  <Link href={"/#about"} onClick={handleToggle}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href={"/#features"} onClick={handleToggle}>
                    Features
                  </Link>
                </li>
                <li>
                  <Link href={"/#teams"} onClick={handleToggle}>
                    Teams
                  </Link>
                </li>
                <li>
                  <Link href={"/#download"} onClick={handleToggle}>
                    Download
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Hero */}
        <section
          id="hero"
          className="h-screen flex justify-center items-center w-full px-5 md:px-20 lg:px-50 md:justify-between gap-4 lg:gap-24 bg-white flex-col md:flex-row-reverse"
        >
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center w-5/6"
          >
            <img
              src="/images/illustration/hero.svg"
              alt="Logo"
              className="w-full h-auto max-w-6xl min-w-70"
            />
          </motion.div>
          <div className="gap-3 flex flex-col">
            <h1 className="text-primary font-extrabold lg:text-5xl leading-snug text-3xl lg:leading-snug">
              {title.map((text, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {text}{" "}
                </motion.span>
              ))}
            </h1>
            <h4 className="text-body font-medium lg:text-base my-4 text-sm">
              {subTitle.map((text, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {text}{" "}
                </motion.span>
              ))}
            </h4>
            <Link href={"/#about"} className="w-fit mt-2">
              <motion.button
                initial={{ opacity: 0, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-primary px-6 py-2 rounded-full text-sm"
              >
                Read more
              </motion.button>
            </Link>
          </div>
        </section>
        {/* About */}
        <section
          id="about"
          className="bg-white w-full px-5 md:px-20 lg:px-50 text-center py-34 flex justify-center flex-col gap-2"
        >
          <div className="flex w-full justify-center">
            <div className="border-2 border-gray rounded-lg w-fit px-5 py-1.5">
              <h2 className="text-primary font-bold text-sm">ABOUT</h2>
            </div>
          </div>
          <h4 className="text-black font-bold text-2xl mt-3">
            Find out more about our application
          </h4>
          <div className="flex justify-center mt-14 flex-col items-center text-center text-body text-sm leading-relaxed">
            <p className="md:w-180 w-70">
              At Hear4U, we are dedicated to enhancing the lives of individuals
              with hearing disabilities who face challenges in identifying and
              responding to environmental sounds. Recognizing that hearing aids
              can be costly and may not fully address every user's needs, we
              developed Hear4U to bridge this gap. Our innovative app captures
              sounds through a microphone and presents speech recognition
              results visually on the user’s screen. This allows users to better
              understand and react to the sounds around them, significantly
              improving their social interactions and daily activities.
            </p>
            <br />
            <p className="md:w-180 w-70">
              Our mission is to empower those who are hard of hearing to
              communicate more effectively and interact actively with their
              environment. By creating an intuitive and easy-to-use tool, Hear4U
              aims to enhance the quality of life and social skills of its
              users. With Hear4U, individuals can gain confidence and
              independence, enabling them to engage more fully in their daily
              activities and social interactions.
            </p>
            <br />
            <p className="md:w-180 w-70">
              Through our research, we address key questions such as developing
              a tool that detects sound types easily and accurately, ensuring
              the app’s accessibility and usability for a wide range of people
              with hearing disabilities, and evaluating how well Hear4U supports
              individuals in their everyday lives. Our goal is to create a more
              inclusive world where everyone can participate and communicate
              effortlessly.
            </p>
          </div>
        </section>
        {/* Features */}
        <section
          id="features"
          className="bg-white w-full px-5 md:px-20 lg:px-50 text-center py-34 flex justify-center flex-col gap-2"
        >
          <div className="flex w-full justify-center">
            <div className="border-2 border-gray rounded-lg w-fit px-5 py-1.5">
              <h2 className="text-primary font-bold text-sm">FEATURES</h2>
            </div>
          </div>
          <h4 className="text-black font-bold text-2xl mt-3">
            Innovative Tools for Enhanced Social Engagement
          </h4>
          <div className="flex justify-center items-center mt-14 flex-wrap flex-row gap-6">
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-12 w-2/3"> */}
            {cardData.map((data, i) => (
              <FeatureCard
                title={data.title}
                description={data.description}
                img={data.img}
                key={i}
              />
            ))}
            {/* </div> */}
          </div>
        </section>
        {/* Teams */}
        <section
          id="teams"
          className="bg-white w-full px-5 md:px-20 lg:px-50 text-center py-34 flex justify-center flex-col gap-2"
        >
          <div className="flex w-full justify-center">
            <div className="border-2 border-gray rounded-lg w-fit px-5 py-1.5">
              <h2 className="text-primary font-bold text-sm">TEAMS</h2>
            </div>
          </div>
          <h4 className="text-black font-bold text-2xl mt-3">
            Dedicated Students Committed to Improving Lives
          </h4>
          <div className="mx-auto w-full max-w-[1170px] mt-14">
            {/* <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-4 mt-8"> */}
            <div className="flex flex-row flex-wrap gap-6 justify-center">
              {teamItems.map((data, i) => (
                <TeamCard
                  name={data.name}
                  position={data.position}
                  img={data.img}
                  key={i}
                />
              ))}
            </div>
          </div>
        </section>
        {/* Download */}
        <section
          id="download"
          className="bg-white w-full px-5 pt-50 pb-80 text-center flex justify-center flex-col gap-2"
        >
          <h4 className="text-black font-bold text-2xl md:text-3xl mt-3">
            Download Hear4U now
          </h4>
          <h4 className="text-body font-normal text-sm md:text-xl mt-3">
            Support our colleagues so they can live better in the environment
          </h4>
          <div className="flex flex-row justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="px-6 bg-primary flex flex-row items-center gap-2 py-2 rounded-full text-sm"
            >
              <IoLogoGooglePlaystore />
              Google Play
            </motion.button>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
