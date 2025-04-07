"use client";
import Link from "next/link";
import Image from "next/image";
import ThemeChanger from "./DarkSwitch";

export const Navbar = () => {
  const navigation = [
    { name: "Home", path: "/" },
    { name: "BPA_Search", path: "/blast" },
    { name: "MicroSpec", path: "/microspec" },
    { name: "Publications", path: "/publications" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="w-full border-b-2 shadow-md border-gray-100 dark:border-trueGray-800 py-1">
      <nav className="container relative flex flex-wrap items-center justify-between p-2 mx-auto lg:justify-between xl:px-4">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-xl font-medium text-green-700 dark:text-green-700">
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
        <ThemeChanger />

        {/* menu  */}
        <div className="hidden lg:flex lg:items-center">
          <ul className="items-start justify flex-1 pt-4 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-6 nav__item" key={index}>
                <Link
                  href={menu.path}
                  className="inline-block px-4 py-2 text-sm font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-green-700 focus:text-green-600 focus:bg-green-100 focus:outline-none dark:focus:bg-gray-800"
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
