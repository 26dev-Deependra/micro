import Image from "next/image";
import React from "react";
import { Container } from "./Container";

export function Footer() {
  return (
    <div className="border-t border-gray-100 dark:border-trueGray-700 py-1">
      <Container>
        <div className="flex flex-col md:flex-row items-start justify-between max-w-screen-xl mx-4">
          {/* Left side: Logo + Text */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 text-xl font-medium text-blue-600 dark:text-gray-100">
              <Image
                src="/img/QyronQor.jpg"
                alt="N"
                width="32"
                height="32"
                className="w-8"
              />
              <span>MicroSpec</span>
            </div>

            <div className="max-w-md text-gray-500 dark:text-gray-400 text-xs mt-2">
              MicroSpec is a service which aims to provide various Machine
              learning powered image analytical tools for bacteria biofilms
              growth kinetics,
            </div>
          </div>

          {/* Right side: Copyright */}
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
            Copyright © {new Date().getFullYear()}. Made by <a>MicroSpec</a>
          </div>
        </div>
      </Container>
    </div>
  );
}
