import Spotify from "../../fragments/spotify";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex flex-col py-6 gap-y-36">
      <div className="flex flex-col justify-between sm:flex-row gap-y-20 sm:gap-y-0">
        <div className="flex flex-col items-center sm:items-start gap-y-4">
          <h1 className="hidden text-sm md:text-base font-poppins text-foregroundDark sm:block">
            Copyright © 2024 - Habibie Bayezid Wildan
          </h1>
          <Spotify />
        </div>
        <div className="flex gap-x-20">
          <div className="flex flex-col gap-y-4 font-poppins">
            <h1 className="font-medium text-secondary">Elsewhere</h1>
            <ul className="flex flex-col text-sm sm:text-base gap-y-3 text-foregroundDark">
              <li>
                <Link href="https://github.com/Thebibii">Github</Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/habibie-bayezid-wildan/">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/habibie-bayezid-wildan/">
                  CV
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-4 font-poppins">
            <h1 className="font-medium text-secondary">Contact</h1>
            <ul className="flex flex-col text-sm sm:text-base gap-y-3 text-foregroundDark">
              <li>
                <Link href="https://wa.me/6282291119544">WhatsApp</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/the_bibiee">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="h-[1px] flex-grow bg-foregroundDark" />
        <p className="text-[10px] sm:text-xs font-poppins text-foregroundDark">
          Credit: Font used Glocks and Poppins
        </p>
      </div>
    </footer>
  );
}
