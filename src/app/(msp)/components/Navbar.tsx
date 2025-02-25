"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
// import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Publications", path: "/publications" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="w-full border-b-2 border-gray-100 dark:border-trueGray-700 py-1">
      <nav className="container relative flex flex-wrap items-center justify-between p-2 mx-auto lg:justify-between xl:px-4">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-xl font-medium text-blue-600 dark:text-gray-100">
            <span>
              <Image
                src="/img/logo.png"
                width="32"
                alt="N"
                height="32"
                className="w-8"
              />
            </span>
            <span>MicroSpec</span>
          </span>
        </Link>
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
        </div>

        {/* menu  */}
        <div className="hidden lg:flex lg:items-center">
          <ul className="items-start justify-end flex-1 pt-4 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-6 nav__item" key={index}>
                <Link
                  href={menu.path}
                  className="inline-block px-6 py-2 text-1xl font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-blue-700 focus:text-blue-600 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
