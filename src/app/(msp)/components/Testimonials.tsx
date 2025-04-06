import Image, { StaticImageData } from "next/image";
import React from "react";
import { Container } from "./Container";

import userOneImg from "@/app/(msp)/img/user1.jpg";
import userTwoImg from "@/app/(msp)/img/user2.jpeg";
import userThreeImg from "@/app/(msp)/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full bg-gray-100 px-8 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-sm text-center leading-normal">
              <i>
                Dr. Awanish Kumar is working in the area of infection biology,
                drug targeting, and drug discovery. Dr. Awanish Kumar has served
                various national and international organizations with different
                academic/research capacities.
                <br />
                Associate Professor,
                <br />
                Department of Biotechnology,
                <br />
                NIT-Raipur
              </i>
            </p>

            <Avatar
              image={userOneImg}
              name="Awanish Kumar"
              title="awanik.bt@nitrr.ac.in"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between w-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-sm text-center leading-normal">
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

            <Avatar
              image={userTwoImg}
              name="Aditya Upadhyay"
              title="aditya.upadhyay1995@gmail.com"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-sm text-center leading-normal">
              <i>
                Deependra Singh is working under the guidance of Dr. Awanish
                Kumar and Aditya Upadhyay for Biofilm-Spec design and
                development.
                <br />
                B-Tech Student, <br />
                Department of Biotechnology, <br />
                NIT-Raipur
              </i>
            </p>

            <Avatar
              image={userThreeImg}
              name="Deependra Singh"
              title="26Singh.Deependra@gmail.com"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: StaticImageData; // ✅ Changed 'any' to 'StaticImageData'
  name: string;
  title: string;
}

function Avatar({ image, name, title }: AvatarProps) {
  return (
    <div className="flex justify-start mt-8 space-x-1">
      <div className="flex-shrink-0 overflow-hidden rounded-full">
        <Image
          src={image}
          width={70}
          height={70}
          alt={name}
          // placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{name}</div>
        <div className="text-gray-600 dark:text-gray-400">{title}</div>
      </div>
    </div>
  );
}

// ❌ Removed the unused Mark component to fix the error
