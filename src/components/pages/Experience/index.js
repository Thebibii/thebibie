import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Experience({ data }) {
  return (
    <section
      id="experience"
      className="flex flex-col justify-center py-12 space-y-8 text-black "
    >
      <h2 className="text-4xl font-bold tracking-wide sm:text-5xl lg:text-6xl xl:text-7xl font-glock text-primary-foreground">
        {data.title}
      </h2>
      <div className="flex flex-col space-y-8">
        {data.data.map((data) => (
          <div
            key={data.id}
            className="p-6 md:p-8 font-poppins transition-all duration-500 rounded-[35px] bg-white/50 ring-white ring-1 group shadow-lg shadow-black/30"
          >
            <div className="flex items-start gap-2 transition-all duration-300 text-primary-foreground hover:cursor-pointer w-fit ">
              <Link
                href={data.link}
                className="flex items-center gap-0.5 md:text-2xl text-[19px] font-semibold"
              >
                <span>{data.work}</span>
                <ArrowUpRight className="transition-transform duration-300 w-7 h-7 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
            <div className="gap-4 mt-2 transition-all duration-300 group-hover:text-primary-foreground">
              <p className="text-sm font-medium text-foreground sm:text-base md:text-lg ">
                <span className="mr-2">{data.time}</span> {data.position} -{" "}
                {data.location}
              </p>
            </div>
            <div className="mt-4 ">
              <p className="text-xs leading-6 md:leading-7 sm:text-sm md:text-base font-poppins text-foreground">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
