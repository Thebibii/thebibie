import Image from "next/image";

export default function Skill() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold  text-[#8FDCC2]">My Skills</h1>
      <div className="grid w-2/3 grid-cols-1 gap-y-14">
        <div>
          <h1 className="text-3xl text-white font-acorn">Front End</h1>
          <div className="grid grid-cols-3 mt-5 md:grid md:grid-cols-4 xl:grid-cols-5 gap-y-5">
            <section className="flex items-center justify-center">
              <button
                href="/"
                className="group flex justify-center p-2 rounded-md drop-shadow-xl   text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <Image
                  alt="HTML"
                  loading="lazy"
                  width={80}
                  height={80}
                  decoding="async"
                  data-nimg={1}
                  className="max-w-[60px] xl:mx-w-[80px]"
                  src="/svg/icons/html5.svg"
                  style={{ color: "transparent" }}
                />
                <span className="absolute duration-700 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:text-white font-acorn group-hover:text-sm group-hover:-translate-y-5">
                  HTML
                </span>
              </button>
            </section>
            <section className="flex items-center justify-center">
              <button
                href="/"
                className="group flex justify-center p-2 rounded-md drop-shadow-xl   text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <Image
                  alt="CSS"
                  loading="lazy"
                  width={80}
                  height={80}
                  decoding="async"
                  data-nimg={1}
                  className="max-w-[60px] xl:mx-w-[80px]"
                  src="/svg/icons/css3.svg"
                  style={{ color: "transparent" }}
                />
                <span className="absolute duration-700 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:text-white font-acorn group-hover:text-sm group-hover:-translate-y-5">
                  CSS
                </span>
              </button>
            </section>
            {/* <section className="flex items-center justify-center">
              <button
                href="/"
                className="group flex justify-center p-2 rounded-md drop-shadow-xl   text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <img
                  alt="Java Script"
                  loading="lazy"
                  width={80}
                  height={80}
                  decoding="async"
                  data-nimg={1}
                  className="max-w-[60px] xl:mx-w-[80px]"
                  src="/assets/js-icon.svg"
                  style={{ color: "transparent" }}
                />
                <span className="absolute duration-700 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:text-white font-acorn group-hover:text-sm group-hover:-translate-y-5">
                  Java Script
                </span>
              </button>
            </section>
            <section className="flex items-center justify-center">
              <button
                href="/"
                className="group flex justify-center p-2 rounded-md drop-shadow-xl   text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <img
                  alt="Next-js"
                  loading="lazy"
                  width={80}
                  height={80}
                  decoding="async"
                  data-nimg={1}
                  className="max-w-[60px] xl:mx-w-[80px]"
                  src="/assets/nextjs-icon.svg"
                  style={{ color: "transparent" }}
                />
                <span className="absolute duration-700 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:text-white font-acorn group-hover:text-sm group-hover:-translate-y-5">
                  Next-js
                </span>
              </button>
            </section>
            <section className="flex items-center justify-center">
              <button
                href="/"
                className="group flex justify-center p-2 rounded-md drop-shadow-xl   text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <img
                  alt="Tailwindcss"
                  loading="lazy"
                  width={80}
                  height={80}
                  decoding="async"
                  data-nimg={1}
                  className="max-w-[60px] xl:mx-w-[80px]"
                  src="/assets/tailwindcss-icon.svg"
                  style={{ color: "transparent" }}
                />
                <span className="absolute duration-700 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:text-white font-acorn group-hover:text-sm group-hover:-translate-y-5">
                  Tailwindcss
                </span>
              </button>
            </section>
            <section className="flex items-center justify-center">
              <button
                href="/"
                className="group flex justify-center p-2 rounded-md drop-shadow-xl   text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <img
                  alt="React-js"
                  loading="lazy"
                  width={80}
                  height={80}
                  decoding="async"
                  data-nimg={1}
                  className="max-w-[60px] xl:mx-w-[80px]"
                  src="/assets/react-icon.svg"
                  style={{ color: "transparent" }}
                />
                <span className="absolute duration-700 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:text-white font-acorn group-hover:text-sm group-hover:-translate-y-5">
                  React-js
                </span>
              </button>
            </section>
            <section className="flex items-center justify-center">
              <button
                href="/"
                className="group flex justify-center p-2 rounded-md drop-shadow-xl   text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <img
                  alt="Alpine-js"
                  loading="lazy"
                  width={80}
                  height={80}
                  decoding="async"
                  data-nimg={1}
                  className="max-w-[60px] xl:mx-w-[80px]"
                  src="/assets/alpinejs-icon.svg"
                  style={{ color: "transparent" }}
                />
                <span className="absolute duration-700 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:text-white font-acorn group-hover:text-sm group-hover:-translate-y-5">
                  Alpine-js
                </span>
              </button>
            </section>
            <section className="flex items-center justify-center">
              <button
                href="/"
                className="group flex justify-center p-2 rounded-md drop-shadow-xl   text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <img
                  alt="Bootstrap"
                  loading="lazy"
                  width={80}
                  height={80}
                  decoding="async"
                  data-nimg={1}
                  className="max-w-[60px] xl:mx-w-[80px]"
                  src="/assets/bootstrap-icon.svg"
                  style={{ color: "transparent" }}
                />
                <span className="absolute duration-700 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:text-white font-acorn group-hover:text-sm group-hover:-translate-y-5">
                  Bootstrap
                </span>
              </button>
            </section>
            <section className="flex items-center justify-center">
              <button
                href="/"
                className="group flex justify-center p-2 rounded-md drop-shadow-xl   text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <img
                  alt="Sass"
                  loading="lazy"
                  width={80}
                  height={80}
                  decoding="async"
                  data-nimg={1}
                  className="max-w-[60px] xl:mx-w-[80px]"
                  src="/assets/sass-icon.svg"
                  style={{ color: "transparent" }}
                />
                <span className="absolute duration-700 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:text-white font-acorn group-hover:text-sm group-hover:-translate-y-5">
                  Sass
                </span>
              </button>
            </section>
            <section className="flex items-center justify-center">
              <button
                href="/"
                className="group flex justify-center p-2 rounded-md drop-shadow-xl   text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <img
                  alt="Jquery"
                  loading="lazy"
                  width={80}
                  height={80}
                  decoding="async"
                  data-nimg={1}
                  className="max-w-[60px] xl:mx-w-[80px]"
                  src="/assets/jquery-icon.svg"
                  style={{ color: "transparent" }}
                />
                <span className="absolute duration-700 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:text-white font-acorn group-hover:text-sm group-hover:-translate-y-5">
                  Jquery
                </span>
              </button>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
}
