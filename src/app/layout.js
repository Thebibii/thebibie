import { Poppins } from "next/font/google";
import "./globals.css";
import BackToTop from "../components/fragments/back-to-top";
import Navbar from "../components/fragments/navbar";
import localFont from "next/font/local";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        id="home"
        className={`${glock.variable} ${poppins.variable} relative overflow-x-hidden lg:px-24 md:px-16 px-6 sm:px-16 xl:px-52 mx-auto bg-[#EDE7DE]`}
      >
        <Navbar />

        <main className="flex flex-col items-center justify-between min-h-screen ">
          {children}
        </main>
        <BackToTop />
        <div className="fixed top-0 left-0 h-screen w-screen -z-50 opacity-[.025] bg-blend-overlay bg-[url('/grid_pattern.svg')]"></div>
      </body>
    </html>
  );
}
