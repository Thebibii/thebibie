import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="z-50 flex justify-center mt-6">
      <ul
        className={`items-center flex gap-4  text-xs md:text-sm lg:text-lg font-poppins sm:gap-8 md:gap-10 xl:gap-11 lg:px-20 py-5 transition-all duration-200  `}
      >
        <Link
          href="#"
          className="text-foreground font-medium  cursor-pointer hover:text-[#2d6e77]"
        >
          Profile
        </Link>
        <Link
          href="#about"
          className="text-foreground font-medium cursor-pointer hover:text-[#2d6e77]"
        >
          About
        </Link>
        <Link
          href="#experience"
          className="text-foreground font-medium cursor-pointer hover:text-[#2d6e77]"
        >
          Experience
        </Link>
        <Link
          href="#project"
          className="text-foreground font-medium cursor-pointer hover:text-[#2d6e77]"
        >
          Project
        </Link>
      </ul>
    </nav>
  );
}
