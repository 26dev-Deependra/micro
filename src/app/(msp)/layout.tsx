import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "../globals.css";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biofilm Vision",
  description: "Foundingene products",
  icons: {
    icon: "/img/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div className="max-w-[1200px] mx-auto px-2 lg:px-8">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
