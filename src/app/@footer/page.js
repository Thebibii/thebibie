import Image from "next/image";
import Spotify from "../../components/fragments/Spotify";
export default function Footer() {
  return (
    <footer className="flex">
      <div className="flex flex-col">
        {/* <div className="p-4 rounded-full bg-white/50 min-w-96 ">
          <Spotify />
        </div> */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="flex flex-col space-y-4 lg:space-y-8 md:col-span-7">
            <h1 className="text-3xl font-bold tracking-wide w-fit sm:text-5xl lg:text-6xl xl:text-7xl font-glock text-secondary">
              Can i be contacted?
            </h1>
            <div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 group">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="w-6 h-6 transition-all group-hover:text-amber-400 text-slate-200"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z" />
                  </svg>
                  <p className="transition-all text-slate-400 group-hover:text-amber-400 font-inter">
                    Bandar Lampung, Lampung, Indonesia
                  </p>
                </div>
                <div className="flex items-center gap-2 group">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="w-6 h-6 transition-all group-hover:text-amber-400 text-slate-200"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56zm-14.18 92.63-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26z" />
                  </svg>
                  <a
                    className="transition-all text-slate-400 group-hover:text-amber-400 font-inter"
                    href="mailto:dedekurnn@outlook.com"
                  >
                    dedekurnn@outlook.com
                  </a>
                </div>
                <div className="flex items-center gap-2 group">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="w-6 h-6 transition-all group-hover:text-amber-400 text-slate-200"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0 0 29.78 111L32 480l118.25-30.87a223.63 223.63 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
                    />
                  </svg>
                  <a
                    target="_blank"
                    className="transition-all text-slate-400 group-hover:text-amber-400 font-inter"
                    href="https://wa.me/6282291119544"
                  >
                    +62 822 9111 9544
                  </a>
                </div>
              </div>
              <div className="mt-12">
                <p className="text-base lg:text-xl font-drukwide text-slate-200">
                  Terima kasih telah mengunjungi situs web saya. Saya harap anda
                  senang 😄
                </p>
                <p className="mt-8 text-sm font-inter text-slate-400">
                  Credit: Font used Druk Wide Web by Berton Hasebe and Inter
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-8">
          <p className="text-sm font-inter text-slate-400">
            Copyright © 2024 - DedeKurnn
          </p>
          <div className="h-[1px] flex-grow bg-slate-400" />
        </div>
      </div>
    </footer>
  );
}
