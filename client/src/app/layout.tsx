import "./globals.css";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Dealer",
  description: "Lease a car",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="grid--container">
          <header className="flex items-center justify-between bg-white/60 shadow-gray-200 p-2">
            <div>
              <Image src={logo} alt="logo" priority />
            </div>
          </header>
          {children}
          <footer>
            <p className={`text-black text-center ${inter.className}`}>
              &copy; All rights reserved
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
