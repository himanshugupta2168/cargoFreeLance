import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegBell } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adinkra Cargo Movers",
  description: "Logistics worldwide solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-16 w-full flex items-center gap-4 px-8 py-2">
          <img
            src="/Adinkra_Cargo_Movers.png"
            alt="Adinkra Cargo Movers"
            width={150}
            height={100}
            className="h-8"
          />
          <div className="flex-1 justify-between flex items-center pl-24">
            <RxHamburgerMenu className="text-[#3f8de3] text-xl" />
            <div className="flex gap-4">
              <FaRegBell className="text-2xl" />
              <FaUserCircle className="text-2xl" />
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
