import Image from "next/image";
import { Container } from "./Container";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-3xl mb-8">
            <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-green-700">
              AI-Driven Biofilm Image Analytics
            </h1>
            <p className="py-5 text-md leading-normal text-gray-900 lg:text-md xl:text-md dark:text-gray-300">
              Biofilm Vision is a service which provides various Machine
              learning powered analytical tools for bacteria biofilms growth
              kinetics, along with the tools plateform also features several
              publications on the topic bacterial biofilm. Currently tools are
              limited to Salmonella Typhi bacteria but MicroSpec aims to extend
              the tools to various other bacterial and fungi types.
            </p>

            <div className="flex flex-col items-start space-y-8 mt-8 sm:space-x-8 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/blast"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-green-600 rounded-md"
              >
                BPA_Search
              </Link>
              <Link
                href="/microspec"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-green-600 rounded-md"
              >
                Biofilm Vision
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src="/img/mol3.png"
              width="516"
              height="617"
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </>
  );
};
