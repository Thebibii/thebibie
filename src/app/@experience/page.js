export default function Experience() {
  return (
    <article
      id="experience-section"
      className="flex flex-col justify-center py-12 space-y-3 text-black "
    >
      <h2 className="text-4xl font-bold tracking-wide sm:text-5xl lg:text-6xl xl:text-7xl font-glock text-primary">
        Experience
      </h2>

      <div className="p-6 md:p-8 font-poppins transition-all duration-500 rounded-[35px] bg-white/50 ring-white ring-1 group shadow-lg shadow-black/30">
        <div className="flex items-start gap-2 transition-all duration-300 text-primary hover:cursor-pointer w-fit ">
          <h3 className="flex items-center gap-0.5 md:text-2xl text-[19px] font-semibold">
            <span>Telkom Indonesia</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="transition-transform duration-300 w-7 h-7 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
            </svg>
          </h3>
        </div>
        <div className="gap-4 mt-2 transition-all duration-300 group-hover:text-primary">
          <p className="text-sm font-medium text-foreground sm:text-base md:text-lg ">
            <span className="mr-2">2024</span> Front End Developer Intern -
            Bandung, Indonesia
          </p>
        </div>
        <div className="mt-4 ">
          <p className="text-xs leading-6 md:leading-7 sm:text-sm md:text-base font-poppins text-foreground">
            Membangun, styling, dan memelihara situs web Eventeer. Suatu sistem
            manajemen acara untuk komunitas dan perusahaan. Saya bekerja sama
            dengan tim lintas fungsi seperti back-end, devops, UI/UX, dan QA/SA
            untuk memastikan bahwa kami dapat membangun website berkualitas
            tinggi ke market. Saya juga membangun situs web dokumentasi Amoeba
            DNA Core Design System untuk penggunaan internal.
          </p>
        </div>
      </div>
    </article>
  );
}
