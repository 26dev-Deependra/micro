import Image from "next/image";
import PublicationList from "./publicationList";
import { SectionTitle } from "@/app/(msp)/components/SectionTitle";

export default function Publications() {
  return (
    <div className=" h-full bg-white dark:bg-trueGray-900 p-2 gap-6 space-x-14">
      <SectionTitle preTitle="Publications" title="">
        Publications page features all the valuable work done by Dr.Awanish
        Kumar and Aditya Upadhyay on the subjects related to the antibiotic
        resistance due to the bacterial biofilm formations and related works.
        <i>
          (Publications are concerned with mainly Salmonella Typhi bacteria)
        </i>
        .
      </SectionTitle>
      <div className="flex flex-col lg:flex-row max-w-auto w-full bg-white dark:bg-trueGray-900 p-6 gap-14">
        {/* Left Section - Publications List */}
        <PublicationList />

        {/* Vertical Divider */}

        {/* Right Section - Publication Images */}
        <div className="flex-1 flex flex-col items-center p-6 gap-6 bg-white dark:bg-trueGray-900">
          <Image
            src="/img/pub.png"
            alt="Publication 1"
            width={200}
            height={200}
            className=""
          />
          <Image
            src="/img/pub2.png"
            alt="Publication 2"
            width={200}
            height={200}
            className=""
          />
          <Image
            src="/img/pub3.png"
            alt="Publication 3"
            width={200}
            height={200}
            className=""
          />
        </div>
      </div>
    </div>
  );
}
