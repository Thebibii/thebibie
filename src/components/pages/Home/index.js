const Home = ({ data }) => {
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
            <h2 className="text-[39.5px] flex flex-col items-center font-extrabold leading-none md:tracking-wide text-primary-foreground font-glock lg:text-[80px] xl:text-8xl md:text-[58px]">
              <span>{data.name}</span>
              <span className="tracking-wide">{data.profesi}</span>
            </h2>
          </div>
          <p className="px-5 text-sm font-medium leading-6 text-center md:px-0 md:max-w-xl md:text-base lg:text-xl text-foreground font-poppins">
            {data.text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
