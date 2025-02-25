import Image from "next/image";
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
          <div className="flex flex-col justify-between w-full  bg-gray-100 px-8 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-sm text-center leading-normal ">
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
        <div className="">
          <div className="flex flex-col justify-between w-full  bg-gray-100 px-8 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-sm text-center leading-normal ">
              <i>
                Aditya Upadhyay is working as a PhD scholar under the Dr.
                Awanish Kumar in the area of infection biology, drug targeting,
                and drug discovery.
                <br />
                PhD Scholar,
                <br />
                Department of Biotechnology,
                <br />
                NIT- Raipur
              </i>
            </p>

            <Avatar
              image={userTwoImg}
              name="Aditya Upadhyay"
              title="aditya.upadhyay1995@gmail"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-sm text-center leading-normal ">
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
              title=" 26Singh.Deependra@gmail"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
