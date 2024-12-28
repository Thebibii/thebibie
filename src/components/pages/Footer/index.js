import Spotify from "../../fragments/Spotify";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex flex-col py-6 gap-y-36" id="contact">
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-4">
          <h1 className="font-poppins text-foregroundDark">
            Copyright © 2024 - Habibie Bayezid Wildan
          </h1>
          <Spotify />
        </div>
        <div className="flex gap-x-20">
          <div className="flex flex-col gap-y-4 font-poppins">
            <h1 className="font-medium text-secondary">Elsewhere</h1>
            <div className="flex flex-col gap-y-3 text-foregroundDark">
              <Link href="https://github.com/Thebibii">Github</Link>
              <Link href="https://www.linkedin.com/in/habibie-bayezid-wildan/">
                LinkedIn
              </Link>
              <Link href="https://www.linkedin.com/in/habibie-bayezid-wildan/">
                CV
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 font-poppins">
            <h1 className="font-medium text-secondary">Contact</h1>
            <div className="flex flex-col gap-y-3 text-foregroundDark">
              <Link href="https://wa.me/6282291119544">WhatsApp</Link>
              <Link href="https://www.instagram.com/the_bibiee">Instagram</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="h-[1px] flex-grow bg-foregroundDark" />
        <p className="text-xs font-poppins text-foregroundDark">
          Credit: Font used Glocks and Poppins
        </p>
      </div>
      {/*    <div className="flex flex-col">
        <div className="px-4 py-2 rounded-full bg-white/50 w-fit">
          <Spotify />
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="flex flex-col space-y-4 lg:space-y-8 md:col-span-7">
            <h1 className="md:text-[56px]  text-[28px] font-bold tracking-wide w-fit  font-glock text-secondary">
              Can i be contacted?
            </h1>
            <div className="font-poppins">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 group">
                  <MapPin className="w-6 h-6 transition-all group-hover:text-amber-400 text-slate-200" />
                  <p className="text-sm transition-all sm:text-base text-slate-400 group-hover:text-amber-400 font-inter">
                    Lintau, Sumatera Barat, Indonesia
                  </p>
                </div>
                <div className="flex items-center gap-2 group">
                  <Mail className="w-6 h-6 transition-all group-hover:text-amber-400 text-slate-200" />
                  <a
                    className="text-sm transition-all sm:text-base text-slate-400 group-hover:text-amber-400 font-inter"
                    href="mailto:habibiesanji@gmail.com"
                  >
                    habibiesanji@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 group">
                  <Phone className="w-6 h-6 transition-all group-hover:text-amber-400 text-slate-200" />
                  <a
                    target="_blank"
                    className="text-sm transition-all sm:text-base text-slate-400 group-hover:text-amber-400 font-inter"
                    href="https://wa.me/6282291119544"
                  >
                    +62895341975182
                  </a>
                </div>
              </div>
              <div className="mt-12">
                <p className="text-sm sm:text-base lg:text-xl font-drukwide text-slate-200">
                  Terima kasih telah mengunjungi situs web saya. Saya harap anda
                  senang 😄
                </p>
                <p className="mt-8 text-xs sm:text-base font-inter text-slate-400">
                  Credit: Font used Glocks and Poppins Web by Sean Halpin
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-8 ">
          <p className="text-xs sm:text-base font-poppins text-foregroundDark">
            Copyright © 2024 - Habibie Bayezid Wildan
          </p>
          <div className="h-[1px] flex-grow bg-foregroundDark" />
        </div>
      </div> */}
    </footer>
  );
}
