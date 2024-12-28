import Image from "next/image";
import Link from "next/link";

import Badge from "../../fragments/badge";

export default function Project({ data }) {
  return (
    <section id="project" className="flex flex-col items-center w-full py-12">
      <h2 className="text-4xl font-bold tracking-wide w-fit sm:text-5xl lg:text-6xl xl:text-7xl font-glock text-primary">
        {data.title}
      </h2>

      <div className="grid mt-8 lg:grid-cols-2 md:gap-x-14 md:gap-y-8 gap-y-6 md:mt-14">
        {data.data.map((data) => (
          <Link
            key={data.id}
            href={data.link}
            aria-disabled="true"
            className="flex lg:justify-center flex-col lg:p-8 p-4 py-6 sm:py-8 sm:p-6  lg:space-y-8 font-poppins bg-card  drop-shadow-sm hover:drop-shadow-md hover:scale-[1.010] cursor-pointer rounded-xl transition-all duration-150 ease-in hover:bg-cardHover"
          >
            <div className="order-2 mb-3 space-y-4 lg:mb-0 lg:order-1">
              <h1 className="text-2xl font-semibold md:text-3xl text-cardTitle">
                {data.title}
              </h1>
              <p className="text-xs leading-5 text-foreground sm:text-base">
                {data.description}
              </p>
            </div>

            <Image
              src={data.img}
              loading="lazy"
              width={550}
              height={300}
              alt="projects vickyadriia"
              className="self-center order-1 mb-6 rounded-lg lg:mb-0 lg:order-2 "
            />
            <div className="order-3 w-full ">
              <div className="flex gap-x-8">
                <h1 className="text-xs md:text-sm text-foreground whitespace-nowrap">
                  App Platform
                </h1>
                <div className="flex flex-wrap self-end gap-1">
                  {data.tech?.map((tech, _) => (
                    <Badge key={_}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
