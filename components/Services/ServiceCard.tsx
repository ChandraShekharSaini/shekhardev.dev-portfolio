"use client";
import React, { ReactNode } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};

const ServiceCard = ({ service }: Props) => {
  return (
    <Tilt className="shadow-2xl p-6  rounded-lg bg-[#814ced] grid place-content-center h-[250px]">
      <Image src={service.icon} alt="image" height={50} width={50} />
      <h1 className="mt-4 text-lg font-bold text-gray-100">{service.title}</h1>
      <p className="mt-3 text-sm text-white text-opacity-80">
        {service.description}
      </p>
    </Tilt>
  );
};

export default ServiceCard;
