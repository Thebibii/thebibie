"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex w-full py-12" id="about">
      <div className="grid grid-cols-1 place-items-center md:grid-cols-12 gap-y-16 lg:gap-y-0">
        <div className="flex flex-col order-2 w-full space-y-3 md:order-1 md:space-y-4 md:col-span-7">
          <div className="relative w-fit">
            <h2 className="text-4xl font-bold tracking-wide sm:text-5xl lg:text-6xl xl:text-7xl font-glock text-primary">
              About Me
            </h2>
            <motion.svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              className="absolute w-8 -top-4 -right-5 sm:w-9 md:-right-6 md:w-10 lg:w-11 xl:-top-3 lg:-right-6 lg:-top-3 -z-50"
              xmlns="http://www.w3.org/2000/svg"
              animate={{
                rotate: [0, 360, -180],
                transition: { duration: 2.5, repeat: Infinity },
              }}
            >
              <g clipPath="url(#clip0_34_271)">
                <path
                  d="M24.0074 24.0074C29.5126 39.8286 27.4198 47.901 25.0758 47.6379C22.8234 47.2728 20.3716 39.5403 24.0074 24.0074C7.90096 29.6249 -0.0798048 27.4301 0.468522 24.9738C1.02719 22.7111 8.77005 20.4529 24.0074 24.0074C18.7165 8.56305 20.5241 0.602966 22.7454 0.387204C24.9771 0.36505 27.6225 8.08722 24.0074 24.0074C38.494 18.9618 46.4334 20.3822 47.4133 22.3685C48.6074 24.7317 40.9163 27.958 24.0074 24.0074Z"
                  fill="#025A4E"
                />
              </g>
              <defs>
                <clipPath id="clip0_34_271">
                  <rect
                    width="34"
                    height="34"
                    fill="white"
                    transform="translate(22.7247) rotate(41.9417)"
                  />
                </clipPath>
              </defs>
            </motion.svg>
          </div>
          <div className="flex flex-col space-y-3 tracking-wide">
            <p className="text-xs font-medium leading-7 xl:text-lg sm:text-base font-poppins text-foreground">
              Hey there! Im Habibie. I embarked on my web development journey in
              2020, right at the onset of the pandemic. With ample time on my
              hands, I delved into web development through Facebook tutorials
              and immersed myself in a plethora of YouTube videos to delve
              deeper into the realm of backend development.
            </p>
            <p className="text-xs font-medium leading-7 xl:text-lg sm:text-base font-poppins text-foreground">
              There are a lot of things and technologies to learn in frontend
              development and I am motivated to learn as much as possible. I
              enjoy learning something new and getting feedback to make myself
              better and improve.
            </p>
          </div>
          <div>
            <button className="px-4 text-xs sm:text-base sm:px-8 py-2 rounded-full transition-all shadow-lg shadow-black/30 ring-2 ring-white/70 bg-[#233D4D] text-white border-[#54f3d8] border-b-[3px] font-poppins font-medium hover:ring-0 hover:shadow-none hover:brightness-110">
              Download CV
            </button>
          </div>
        </div>

        <div className="order-1 w-full md:w-fit md:order-2 md:ml-auto md:col-span-5">
          <div className="relative  min-w-fit min-h-[480px]  lg:min-w-[250px] md:min-w-[210px]  md:min-h-[350px] xl:min-w-[300px] xl:h-[400px] overflow-hidden border-2 border-white rounded-ss-[96px] rounded-se-[96px]  md:rounded-ss-full md:rounded-se-full grid justify-items-center md:items-end">
            <Image
              src="/habibie.jpg"
              layout="fill"
              alt="Picture of the author"
              className="object-cover w-full h-full bg-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
