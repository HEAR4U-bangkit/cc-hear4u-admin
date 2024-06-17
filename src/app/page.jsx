"use client";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";

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
    {
      img: "/images/features/dashboard.png",
      title: "Admin Dashboard",
      description:
        "Easily manage application content data like article and user",
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

  return (
    <React.Fragment>
      <main className="flex min-h-screen flex-col items-center w-full">
        {/* Header */}
        <div className="flex flex-row justify-between items-center w-full py-4 bg-white px-50 fixed top-0 z-9">
          <Image
            width={100}
            height={32}
            src={"/images/logo/logo.png"}
            alt="Logo"
            priority
          />
          <ul className="flex flex-row gap-14 font-medium text-body">
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
        </div>
        {/* Header */}
        <section
          id="hero"
          className="h-screen flex items-center w-full px-50 justify-between gap-24 bg-white"
        >
          <div className="gap-3 flex flex-col">
            <h1 className="text-black font-extrabold text-4xl leading-snug">
              Hear4U
            </h1>
            <h1 className="text-primary font-extrabold text-6xl leading-snug">
              Empowering Communication for the Hearing Impaired
            </h1>
            <h4 className="text-body font-medium text-2xl my-4">
              Visual sound recognition for improved social interactions and
              independence
            </h4>
            <Link href={"/#about"} className="w-fit mt-2">
              <button className="bg-primary px-8 py-3 rounded-full">
                Read more
              </button>
            </Link>
          </div>
          <Image
            width={600}
            height={32}
            src={"/images/illustration/hero.svg"}
            alt="Logo"
            priority
          />
        </section>
        {/* About */}
        <section
          id="about"
          className="bg-white w-full px-40 text-center py-34 flex justify-center flex-col gap-2"
        >
          <div className="flex w-full justify-center">
            <div className="border-2 border-gray rounded-lg w-fit px-7 py-1.5">
              <h2 className="text-primary font-bold text-lg">ABOUT</h2>
            </div>
          </div>
          <h4 className="text-black font-bold text-3xl mt-3">
            Find out more about our application
          </h4>
          <div className="flex justify-center mt-14 flex-col items-center text-center text-body text-lg">
            <p className="w-180">
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
            <p className="w-180">
              Our mission is to empower those who are hard of hearing to
              communicate more effectively and interact actively with their
              environment. By creating an intuitive and easy-to-use tool, Hear4U
              aims to enhance the quality of life and social skills of its
              users. With Hear4U, individuals can gain confidence and
              independence, enabling them to engage more fully in their daily
              activities and social interactions.
            </p>
            <br />
            <p className="w-180">
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
          className="bg-white w-full px-40 text-center py-14 flex justify-center flex-col gap-2 pb-30"
        >
          <div className="flex w-full justify-center">
            <div className="border-2 border-gray rounded-lg w-fit px-7 py-1.5">
              <h2 className="text-primary font-bold text-lg">FEATURES</h2>
            </div>
          </div>
          <h4 className="text-black font-bold text-3xl mt-3">
            Innovative Tools for Enhanced Social Engagement
          </h4>
          <div className="flex justify-center items-center mt-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-12 w-2/3">
              {cardData.map((data, i) => (
                <FeatureCard
                  title={data.title}
                  description={data.description}
                  img={data.img}
                  key={i}
                />
              ))}
            </div>
          </div>
        </section>
        {/* Teams */}
        <section
          id="teams"
          className="bg-white w-full px-40 text-center py-28 flex justify-center flex-col gap-2"
        >
          <div className="flex w-full justify-center">
            <div className="border-2 border-gray rounded-lg w-fit px-7 py-1.5">
              <h2 className="text-primary font-bold text-lg">TEAMS</h2>
            </div>
          </div>
          <h4 className="text-black font-bold text-3xl mt-3">
            Dedicated Students Committed to Improving Lives
          </h4>
          <div className="mx-auto w-full max-w-[1170px] mt-14">
            {/* <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-4 mt-8"> */}
            <div className="flex flex-row flex-wrap mt-14 gap-6 justify-center">
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
          className="bg-white w-full pt-50 pb-80 text-center flex justify-center flex-col gap-2"
        >
          <h4 className="text-black font-bold text-3xl mt-3">
            Download Hear4U now
          </h4>
          <h4 className="text-body font-normal text-xl mt-3">
            Support our colleagues so they can live better in the environment
          </h4>
          <div className="flex flex-row justify-center mt-8">
            <button className="px-6 bg-primary flex flex-row items-center gap-2 py-2.5 rounded-full">
              <IoLogoGooglePlaystore />
              Google Play
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
