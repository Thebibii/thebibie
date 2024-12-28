import { ArrowUpCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.3) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href="#home"
      className={`fixed z-40 ${
        isVisible ? "flex" : "hidden"
      } bottom-8 right-8 scroll-smooth`}
    >
      <div className="w-10 h-10 p-1 transition-all duration-200 border bg-white/70 hover:bg-white backdrop-blur-sm drop-shadow-sm hover:drop-shadow-md rounded-xl">
        <ArrowUpCircle className="size-full" />
      </div>
    </Link>
  );
}
