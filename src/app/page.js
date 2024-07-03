"use client";
import { motion } from "framer-motion";
import { getData } from "../services/spotify";
import { useEffect, useState } from "react";

export default function Home() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getData("http://localhost:3000/api/spot");
  //     setData(response);
  //   };

  //   fetchData();
  // }, []);
  return (
    <section className="flex flex-col py-16 md:py-20 lg:py-32">
      <div
        className="relative flex flex-col items-center"
        style={{ opacity: 1, transform: "none" }}
      >
        {/* <motion.svg
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          className="absolute right-0 w-12 -top-5 h-w-12"
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
        <motion.svg
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          className="absolute bottom-28 -left-12 w-14 h-w-14 "
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
        </motion.svg> */}
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-col items-center space-y-1">
            <h2 className="text-[39.5px] flex flex-col items-center font-extrabold leading-none md:tracking-wide text-primary font-glock lg:text-[80px] xl:text-8xl md:text-[58px]">
              <span>Habìbíe Bayezid</span>
              <span className="tracking-wide">Web Developer</span>
            </h2>

            {/* <div className="relative">
              <h1 className="text-transparent md:tracking-wide leading-none font-glock bg-clip-text bg-gradient-to-r from-primary to-[#044b42] xl:text-[105px] lg:text-[86px] md:text-[62px] font-bold text-[39px]">
                Web Developer
              </h1>
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute right-0 top-2/3 h-8 w-2/3 fill-[#0c4160]"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
            </div> */}
          </div>
          <p className="px-5 text-sm font-medium leading-6 text-center md:px-0 md:max-w-xl md:text-base lg:text-xl text-foreground font-poppins">
            I enjoy creating experiences that are fast, accessible, and involve
            trying new things.
          </p>
        </div>
      </div>
    </section>
  );
}
