import Image, { StaticImageData } from "next/image";
import React from "react";
import { Container } from "./Container";

import userOneImg from "../../../../public/img/user1.jpg";
import userTwoImg from "../../../../public/img/user2.jpg";
import userThreeImg from "../../../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full bg-gray-100 px-8 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userOneImg}
              name="Awanish Kumar"
              email="awanik.bt@nitrr.ac.in"
            />
            <br />
            <p className="text-sm mt-2 text-center leading-normal">
              <i>
                Dr. Awanish Kumar is working in the area of infection biology,
                drug targeting, and drug discovery. Dr. Awanish Kumar has served
                various national and international organizations.
                <br />
                Associate Professor,
                <br />
                Department of Biotechnology,
                <br />
                NIT-Raipur
              </i>
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between w-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userTwoImg}
              name="Aditya Upadhyay"
              email="aditya.upadhyay1995@gmail.com"
            />
            <p className="text-sm mt-2 text-center leading-normal">
              <i>
                Aditya Upadhyay is working as a PhD scholar under Dr. Awanish
                Kumar in the area of infection biology, drug targeting, and drug
                discovery.
                <br />
                PhD Scholar,
                <br />
                Department of Biotechnology,
                <br />
                NIT-Raipur
              </i>
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between w-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userThreeImg}
              name="Deependra Singh"
              email="26Singh.Deependra@gmail.com"
            />
            <p className="text-sm mt-2 text-center leading-normal">
              <i>
                Deependra Singh is working under the guidance of Dr. Awanish
                Kumar and Aditya Upadhyay for the MicroSpec concept and it's
                design and development.
                <br />
                B-Tech Student, <br />
                Department of Biotechnology, <br />
                NIT-Raipur
              </i>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: StaticImageData; // ✅ Changed 'any' to 'StaticImageData'
  name: string;
  email: string;
}

function Avatar({ image, name, email }: AvatarProps) {
  return (
    <div className="flex flex-col items-center mt-2 space-y-2">
      <div className=" overflow-hidden rounded-full">
        <Image
          src={image}
          width={120}
          height={120}
          alt={name}
          className="object-cover"
        />
      </div>
      <div className="text-center">
        <div className="text-lg font-medium">{name}</div>
        <div className="text-gray-600 dark:text-gray-400 text-sm">{email}</div>
      </div>
    </div>
  );
}
