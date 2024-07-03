import Image from "next/image";

export default function Project() {
  return (
    <div className="flex flex-col items-center w-full py-12">
      <h2 className="text-4xl font-bold tracking-wide w-fit sm:text-5xl lg:text-6xl xl:text-7xl font-glock text-primary">
        My Projects
      </h2>

      {/* <div className="flex flex-col gap-4 overflow-hidden text-sm transition-all duration-500 rounded-lg bg-card lg:w-2/3 lg:flex-row font-inter group text-slate-400 hover:bg-slate-950 hover:shadow-md hover:bg-opacity-50">
        <div className="w-full lg:w-2/5">
          <Image
            loading="lazy"
            width={446}
            height={314}
            decoding="async"
            src="/img/project/masalahgw.png"
          />
        </div>
        <div className="w-full lg:w-3/5">
          <a target="_blank" href="https://eventeer.id">
            <h4 className="mb-2 text-base font-semibold group-hover:text-amber-400 text-primary">
              Eventeer - Community Management Dashboard
            </h4>
          </a>
          <p>
            Eventeer adalah dasbor manajemen komunitas yang membantu Anda
            mengelola acara komunitas, anggota, dan lainnya.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="px-2 py-1 text-xs transition-all duration-300 rounded-full bg-opacity-70 text-amber-500 bg-amber-900 hover:bg-amber-800">
              Next.js
            </div>
            <div className="px-2 py-1 text-xs transition-all duration-300 rounded-full bg-opacity-70 text-amber-500 bg-amber-900 hover:bg-amber-800">
              Bootstrap
            </div>
            <div className="px-2 py-1 text-xs transition-all duration-300 rounded-full bg-opacity-70 text-amber-500 bg-amber-900 hover:bg-amber-800">
              SCSS
            </div>
            <div className="px-2 py-1 text-xs transition-all duration-300 rounded-full bg-opacity-70 text-amber-500 bg-amber-900 hover:bg-amber-800">
              Javascript
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-end gap-4 text-sm transition-all duration-500 lg:w-2/3 lg:flex-row font-inter group text-slate-400 hover:bg-slate-950 hover:shadow-md hover:bg-opacity-50">
        <div className="w-full lg:w-3/5">
          <a target="_blank" href="https://eventeer.id">
            <h4 className="mb-2 text-base font-semibold group-hover:text-amber-400 text-slate-200">
              Eventeer - Community Management Dashboard
            </h4>
          </a>
          <p>
            Eventeer adalah dasbor manajemen komunitas yang membantu Anda
            mengelola acara komunitas, anggota, dan lainnya.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="px-2 py-1 text-xs transition-all duration-300 rounded-full bg-opacity-70 text-amber-500 bg-amber-900 hover:bg-amber-800">
              Next.js
            </div>
            <div className="px-2 py-1 text-xs transition-all duration-300 rounded-full bg-opacity-70 text-amber-500 bg-amber-900 hover:bg-amber-800">
              Bootstrap
            </div>
            <div className="px-2 py-1 text-xs transition-all duration-300 rounded-full bg-opacity-70 text-amber-500 bg-amber-900 hover:bg-amber-800">
              SCSS
            </div>
            <div className="px-2 py-1 text-xs transition-all duration-300 rounded-full bg-opacity-70 text-amber-500 bg-amber-900 hover:bg-amber-800">
              Javascript
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5"></div>
      </div> */}
      <div className="grid mt-8 lg:grid-cols-2 md:gap-x-14 md:gap-y-8 gap-y-6 md:mt-14">
        <a
          href="https://desa.kembalikedesa.id/?code=720701"
          aria-disabled="true"
          className="flex lg:justify-center flex-col lg:p-8 p-4 py-6 sm:py-8 sm:p-6  lg:space-y-8 font-poppins bg-card  drop-shadow-sm hover:drop-shadow-md hover:scale-[1.010] cursor-pointer rounded-xl transition-all duration-150 ease-in hover:bg-cardHover"
        >
          <div className="order-2 mb-3 space-y-4 lg:mb-0 lg:order-1">
            <h1 className="text-2xl font-semibold md:text-3xl text-cardTitle">
              Masalah Gw
            </h1>
            <p className="text-xs leading-5 text-foreground sm:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              doloribus eveniet dicta exercitationem magnam voluptatum deleniti
              numquam ab architecto facilis.
            </p>
          </div>

          <Image
            src="/img/project/masalahgw.png"
            loading="lazy"
            width={550}
            height={300}
            alt="projects vickyadrii"
            className="self-center order-1 mb-6 rounded-lg lg:mb-0 lg:order-2 "
          />
          <div className="flex flex-col gap-2.5 order-3 items-start">
            <div className="flex items-center gap-1">
              <p className="text-xs md:text-base text-foreground">
                App Platform •
              </p>
              <div className="flex items-center gap-2 md:gap-4"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
