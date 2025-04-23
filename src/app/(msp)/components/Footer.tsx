import Image from "next/image";
import React from "react";
import { Container } from "./Container";

export function Footer() {
  return (
    <div className="border-t-2  border-gray-100 dark:border-trueGray-800 py-1">
      <Container>
        <div className="flex flex-col md:flex-row items-start justify-between max-w-screen-xl mx-4">
          {/* Left side: Logo  + Text */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 text-xl font-medium text-green-700 dark:text-green-700">
              <Image
                src="/img/logo.png"
                alt="N"
                width="32"
                height="32"
                className="w-8"
              />
              <span>Biofilm Vision</span>
            </div>

            <div className="max-w-md text-gray-700 dark:text-gray-300 text-xs mt-2">
              Biofilm Vision is a service which provides various tools like
              Machine learning powered image analysis for bacteria biofilms
              growth kinetics.
            </div>
          </div>

          {/* Right side: Copyright */}
          <div className="text-xs text-gray-700 dark:text-gray-300 mt-2 md:mt-0">
            Copyright © {new Date().getFullYear()}. Made by{" "}
            <a>Foundingene Corporation</a>
          </div>
        </div>
      </Container>
    </div>
  );
}
