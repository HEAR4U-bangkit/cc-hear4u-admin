import Image from "next/image";
import React from "react";

export default function FeatureCard({ img, title, description }) {
  return (
    <React.Fragment>
      <div className="flex flex-col bg-white border-2 border-gray rounded-xl md:flex-row md:max-w-xl">
        <Image
          className="object-cover w-full h-48 rounded-t-xl md:h-46 md:w-40 md:rounded-none md:rounded-s-xl"
          src={img}
          alt="feature"
          width={220}
          height={280}
        />
        <div className="flex flex-col p-6 leading-normal text-start">
          <h5 className="text-2xl font-bold tracking-tight text-black">
            {title}
          </h5>
          <p className="mt-2 font-normal text-body">{description}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
