import Image from "next/image";

export default function Skill() {
  return (
    <section className="py-12">
      <div className="flex flex-col gap-5">
        <div className="relative md:w-[595px] w-fit ">
          <h2 className="md:text-[56px]  z-50 text-[26px] md:text-left font-glock tracking-wide font-bold text-secondary">
            🎯Specialized Skills
          </h2>
          <div className="absolute flex items-center -right-8 -top-3 md:right-2">
            <Image
              src="/svg/new.svg"
              loading="lazy"
              className=" md:w-auto"
              width={32}
              height={32}
              alt="projects vickyadrii"
            />
            {/* <span className="rotate-[35deg] md:mt-5 mt-4 md:-ml-1 -ml-[1px] md:text-base text-xs">
              😜
            </span> */}
          </div>
        </div>
        <p className="xl:text-xl font-poppins md:text-base text-sm xl:leading-9 text-medium xl:max-w-[38rem] text-foregroundDark">
          I am someone who enjoys seeking challenges. Here are a few skills that
          I have developed and honed.
        </p>
      </div>
    </section>
  );
}
