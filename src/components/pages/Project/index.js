import { Badge } from "@/components/ui/badge";
import { GlobeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Project({ data }) {
  return (
    <section id="project" className="flex flex-col items-center w-full py-12">
      <h2 className="text-4xl font-bold tracking-wide w-fit sm:text-5xl lg:text-6xl xl:text-7xl font-glock text-primary-foreground">
        {data.title}
      </h2>

      <div className="grid mt-8 lg:grid-cols-2 md:gap-x-14 md:gap-y-8 gap-y-6 md:mt-14">
        {data.data.map((data) => (
          <div
            key={data.id}
            // href={data.link}
            aria-disabled="true"
            className="flex lg:justify-center flex-col lg:p-8 p-4 py-6 sm:py-8 sm:p-6 lg:space-y-8 font-poppins bg-card  drop-shadow-sm hover:drop-shadow-md hover:scale-[1.010] rounded-xl transition-all duration-150 ease-in hover:bg-cardHover"
          >
            <div className="order-2 mb-3 space-y-4 lg:mb-0 lg:order-1">
              <h1 className="text-2xl font-semibold md:text-3xl text-cardTitle">
                {data.title}
              </h1>
              <p className="text-xs leading-5 text-foreground sm:text-base">
                {data.description}
              </p>
            </div>
            <Link href={data.href}>
              <Image
                src={data.img}
                loading="lazy"
                width={550}
                height={300}
                alt="projects vickyadriia"
                className="self-center order-1 mb-6 rounded-lg lg:mb-0 lg:order-2 "
              />
            </Link>
            <div className="order-3 w-full ">
              <div className="flex gap-x-8">
                <h1 className="text-xs md:text-sm text-foreground whitespace-nowrap">
                  App Platform
                </h1>
                <div className="flex flex-col gap-y-2">
                  <div className="flex flex-wrap self-end gap-1">
                    {data.tech?.map((tech, _) => (
                      <Badge
                        key={_}
                        variant="outline"
                        className="border-ring/40 text-primary/85"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex">
                    {data.links?.map((item, _) => (
                      <Badge key={_} className="flex py-1 gap-x-2">
                        <GlobeIcon className="size-4" />
                        <Link href={item.href}>
                          <span>{item.type}</span>
                        </Link>
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
