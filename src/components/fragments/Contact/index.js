export default function Contact() {
  return (
    <div className="md:col-span-5 font-poppins">
      <div className="relative p-8 rounded-lg shadow-lg bg-white/40 dark:bg-dark-2 sm:p-12">
        <form>
          <div className="mb-6">
            <input
              required=""
              type="text"
              placeholder="Your Name"
              className="w-full rounded border border-stroke px-[14px] py-3 text-base text-[#272727] outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-white-6"
              name="user_name"
              fdprocessedid="njzzv"
            />
          </div>
          <div className="mb-6">
            <input
              required=""
              type="text"
              placeholder="Your Email"
              className="w-full rounded border border-stroke px-[14px] py-3 text-base text-[#272727] outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-white-6"
              name="user_email"
              fdprocessedid="s622lk"
            />
          </div>
          <div className="mb-6">
            <textarea
              required=""
              rows={6}
              placeholder="Your Message"
              name="message"
              className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-[#272727]] outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-white-6"
              defaultValue={""}
            />
          </div>
          {/* <div>
          <button
            className="relative inline-block group focus:outline-none focus:ring "
            type="submit"
            fdprocessedid="e77k7t"
          >
            <span className="bg-gray-800  absolute inset-0 translate-x-1.5 translate-y-1.5 transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
            <span className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-white uppercase border-2 border-current group-active:text-opacity-75">
              send message
            </span>
          </button>
        </div> */}
        </form>
        {/* <div>
        <span className="absolute -right-9 -top-10">
          <svg
            width={100}
            height={100}
            viewBox="0 0 100 100"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
              fill="#3056D3"
            />
          </svg>
        </span>
        <span className="absolute -right-10 top-[90px]">
          <Image
            src="/svg/dot.svg"
            alt="ellipse"
            width={34}
            height={134}
          />
        </span>
        <span className="absolute -bottom-7 -left-7">
          <svg
            width={107}
            height={134}
            viewBox="0 0 107 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="104.999"
              cy={132}
              r="1.66667"
              transform="rotate(180 104.999 132)"
              fill="#8FDCC2"
            />
            <circle
              cx="104.999"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 104.999 117.333)"
              fill="#8FDCC2"
            />
            <circle
              cx="104.999"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 104.999 102.667)"
              fill="#8FDCC2"
            />
            <circle
              cx="104.999"
              cy={88}
              r="1.66667"
              transform="rotate(180 104.999 88)"
              fill="#8FDCC2"
            />
            <circle
              cx="104.999"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 104.999 73.3333)"
              fill="#8FDCC2"
            />
            <circle
              cx="104.999"
              cy={45}
              r="1.66667"
              transform="rotate(180 104.999 45)"
              fill="#8FDCC2"
            />
            <circle
              cx="104.999"
              cy={16}
              r="1.66667"
              transform="rotate(180 104.999 16)"
              fill="#8FDCC2"
            />
            <circle
              cx="104.999"
              cy={59}
              r="1.66667"
              transform="rotate(180 104.999 59)"
              fill="#8FDCC2"
            />
            <circle
              cx="104.999"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 104.999 30.6666)"
              fill="#8FDCC2"
            />
            <circle
              cx="104.999"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 104.999 1.66665)"
              fill="#8FDCC2"
            />
            <circle
              cx="90.3333"
              cy={132}
              r="1.66667"
              transform="rotate(180 90.3333 132)"
              fill="#8FDCC2"
            />
            <circle
              cx="90.3333"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 90.3333 117.333)"
              fill="#8FDCC2"
            />
            <circle
              cx="90.3333"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 90.3333 102.667)"
              fill="#8FDCC2"
            />
            <circle
              cx="90.3333"
              cy={88}
              r="1.66667"
              transform="rotate(180 90.3333 88)"
              fill="#8FDCC2"
            />
            <circle
              cx="90.3333"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 90.3333 73.3333)"
              fill="#8FDCC2"
            />
            <circle
              cx="90.3333"
              cy={45}
              r="1.66667"
              transform="rotate(180 90.3333 45)"
              fill="#8FDCC2"
            />
            <circle
              cx="90.3333"
              cy={16}
              r="1.66667"
              transform="rotate(180 90.3333 16)"
              fill="#8FDCC2"
            />
            <circle
              cx="90.3333"
              cy={59}
              r="1.66667"
              transform="rotate(180 90.3333 59)"
              fill="#8FDCC2"
            />
            <circle
              cx="90.3333"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 90.3333 30.6666)"
              fill="#8FDCC2"
            />
            <circle
              cx="90.3333"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 90.3333 1.66665)"
              fill="#8FDCC2"
            />
            <circle
              cx="75.6654"
              cy={132}
              r="1.66667"
              transform="rotate(180 75.6654 132)"
              fill="#13C296"
            />
            <circle
              cx="31.9993"
              cy={132}
              r="1.66667"
              transform="rotate(180 31.9993 132)"
              fill="#13C296"
            />
            <circle
              cx="75.6654"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 75.6654 117.333)"
              fill="#13C296"
            />
            <circle
              cx="31.9993"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 31.9993 117.333)"
              fill="#13C296"
            />
            <circle
              cx="75.6654"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 75.6654 102.667)"
              fill="#13C296"
            />
            <circle
              cx="31.9993"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 31.9993 102.667)"
              fill="#13C296"
            />
            <circle
              cx="75.6654"
              cy={88}
              r="1.66667"
              transform="rotate(180 75.6654 88)"
              fill="#13C296"
            />
            <circle
              cx="31.9993"
              cy={88}
              r="1.66667"
              transform="rotate(180 31.9993 88)"
              fill="#13C296"
            />
            <circle
              cx="75.6654"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 75.6654 73.3333)"
              fill="#13C296"
            />
            <circle
              cx="31.9993"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 31.9993 73.3333)"
              fill="#13C296"
            />
            <circle
              cx="75.6654"
              cy={45}
              r="1.66667"
              transform="rotate(180 75.6654 45)"
              fill="#13C296"
            />
            <circle
              cx="31.9993"
              cy={45}
              r="1.66667"
              transform="rotate(180 31.9993 45)"
              fill="#13C296"
            />
            <circle
              cx="75.6654"
              cy={16}
              r="1.66667"
              transform="rotate(180 75.6654 16)"
              fill="#13C296"
            />
            <circle
              cx="31.9993"
              cy={16}
              r="1.66667"
              transform="rotate(180 31.9993 16)"
              fill="#13C296"
            />
            <circle
              cx="75.6654"
              cy={59}
              r="1.66667"
              transform="rotate(180 75.6654 59)"
              fill="#13C296"
            />
            <circle
              cx="31.9993"
              cy={59}
              r="1.66667"
              transform="rotate(180 31.9993 59)"
              fill="#13C296"
            />
            <circle
              cx="75.6654"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 75.6654 30.6666)"
              fill="#13C296"
            />
            <circle
              cx="31.9993"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 31.9993 30.6666)"
              fill="#13C296"
            />
            <circle
              cx="75.6654"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 75.6654 1.66665)"
              fill="#13C296"
            />
            <circle
              cx="31.9993"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 31.9993 1.66665)"
              fill="#13C296"
            />
            <circle
              cx="60.9993"
              cy={132}
              r="1.66667"
              transform="rotate(180 60.9993 132)"
              fill="#13C296"
            />
            <circle
              cx="17.3333"
              cy={132}
              r="1.66667"
              transform="rotate(180 17.3333 132)"
              fill="#13C296"
            />
            <circle
              cx="60.9993"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 60.9993 117.333)"
              fill="#13C296"
            />
            <circle
              cx="17.3333"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 17.3333 117.333)"
              fill="#13C296"
            />
            <circle
              cx="60.9993"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 60.9993 102.667)"
              fill="#13C296"
            />
            <circle
              cx="17.3333"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 17.3333 102.667)"
              fill="#13C296"
            />
            <circle
              cx="60.9993"
              cy={88}
              r="1.66667"
              transform="rotate(180 60.9993 88)"
              fill="#13C296"
            />
            <circle
              cx="17.3333"
              cy={88}
              r="1.66667"
              transform="rotate(180 17.3333 88)"
              fill="#13C296"
            />
            <circle
              cx="60.9993"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 60.9993 73.3333)"
              fill="#13C296"
            />
            <circle
              cx="17.3333"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 17.3333 73.3333)"
              fill="#13C296"
            />
            <circle
              cx="60.9993"
              cy={45}
              r="1.66667"
              transform="rotate(180 60.9993 45)"
              fill="#13C296"
            />
            <circle
              cx="17.3333"
              cy={45}
              r="1.66667"
              transform="rotate(180 17.3333 45)"
              fill="#13C296"
            />
            <circle
              cx="60.9993"
              cy={16}
              r="1.66667"
              transform="rotate(180 60.9993 16)"
              fill="#13C296"
            />
            <circle
              cx="17.3333"
              cy={16}
              r="1.66667"
              transform="rotate(180 17.3333 16)"
              fill="#13C296"
            />
            <circle
              cx="60.9993"
              cy={59}
              r="1.66667"
              transform="rotate(180 60.9993 59)"
              fill="#13C296"
            />
            <circle
              cx="17.3333"
              cy={59}
              r="1.66667"
              transform="rotate(180 17.3333 59)"
              fill="#13C296"
            />
            <circle
              cx="60.9993"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 60.9993 30.6666)"
              fill="#13C296"
            />
            <circle
              cx="17.3333"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 17.3333 30.6666)"
              fill="#13C296"
            />
            <circle
              cx="60.9993"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 60.9993 1.66665)"
              fill="#13C296"
            />
            <circle
              cx="17.3333"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 17.3333 1.66665)"
              fill="#13C296"
            />
            <circle
              cx="46.3333"
              cy={132}
              r="1.66667"
              transform="rotate(180 46.3333 132)"
              fill="#13C296"
            />
            <circle
              cx="2.66536"
              cy={132}
              r="1.66667"
              transform="rotate(180 2.66536 132)"
              fill="#13C296"
            />
            <circle
              cx="46.3333"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 46.3333 117.333)"
              fill="#13C296"
            />
            <circle
              cx="2.66536"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 2.66536 117.333)"
              fill="#13C296"
            />
            <circle
              cx="46.3333"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 46.3333 102.667)"
              fill="#13C296"
            />
            <circle
              cx="2.66536"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 2.66536 102.667)"
              fill="#13C296"
            />
            <circle
              cx="46.3333"
              cy={88}
              r="1.66667"
              transform="rotate(180 46.3333 88)"
              fill="#13C296"
            />
            <circle
              cx="2.66536"
              cy={88}
              r="1.66667"
              transform="rotate(180 2.66536 88)"
              fill="#13C296"
            />
            <circle
              cx="46.3333"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 46.3333 73.3333)"
              fill="#13C296"
            />
            <circle
              cx="2.66536"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 2.66536 73.3333)"
              fill="#13C296"
            />
            <circle
              cx="46.3333"
              cy={45}
              r="1.66667"
              transform="rotate(180 46.3333 45)"
              fill="#13C296"
            />
            <circle
              cx="2.66536"
              cy={45}
              r="1.66667"
              transform="rotate(180 2.66536 45)"
              fill="#13C296"
            />
            <circle
              cx="46.3333"
              cy={16}
              r="1.66667"
              transform="rotate(180 46.3333 16)"
              fill="#13C296"
            />
            <circle
              cx="2.66536"
              cy={16}
              r="1.66667"
              transform="rotate(180 2.66536 16)"
              fill="#13C296"
            />
            <circle
              cx="46.3333"
              cy={59}
              r="1.66667"
              transform="rotate(180 46.3333 59)"
              fill="#13C296"
            />
            <circle
              cx="2.66536"
              cy={59}
              r="1.66667"
              transform="rotate(180 2.66536 59)"
              fill="#13C296"
            />
            <circle
              cx="46.3333"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 46.3333 30.6666)"
              fill="#13C296"
            />
            <circle
              cx="2.66536"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 2.66536 30.6666)"
              fill="#13C296"
            />
            <circle
              cx="46.3333"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 46.3333 1.66665)"
              fill="#13C296"
            />
            <circle
              cx="2.66536"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 2.66536 1.66665)"
              fill="#13C296"
            />
          </svg>
        </span>
      </div> */}
      </div>
    </div>
  );
}
