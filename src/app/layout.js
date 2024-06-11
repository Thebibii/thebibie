"use client";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/fragments/Navbar";
import BackToTop from "../components/fragments/BackToTop";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

const glock = localFont({
  src: [
    {
      path: "../../public/font/LT Glockenspiel Black.ttf",
      weight: "400",
    },
  ],
  variable: "--font-glock",
});

export default function RootLayout({
  children,
  about,
  footer,
  experience,
  project,
  skill,
}) {
  return (
    <html lang="en">
      <body
        className={`${glock.variable} ${poppins.variable} relative overflow-x-hidden lg:px-24 md:px-16 px-7 sm:px-16 xl:px-52 mx-auto bg-[#EDE7DE]`}
      >
        <Navbar />

        <main className="flex flex-col items-center justify-between min-h-screen ">
          {children}
          {about}
          {experience}
          {project}
          <div className="bg-[#233831] w-screen lg:px-28 md:px-16 p-6 xl:px-52">
            {skill}
            {footer}
          </div>
        </main>
        <BackToTop />
        <div className="fixed top-0 left-0 h-screen w-screen -z-50 opacity-[.025] bg-blend-overlay bg-[url('/grid_pattern.svg')]"></div>
      </body>
    </html>
  );
}
