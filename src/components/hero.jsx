import heroImg from "../assets/images/hero-img.png";

const Hero = () => {
  return (
    <section id="home" className="pt-36 dark:bg-dark">
      <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-indigo-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
        </svg>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Hello everyone 👋, I'm{" "}
              <span className="mt-1 mb-2 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">
                Amy Ramadhan
              </span>
            </h1>
            <h2 className="mb-4 text-lg font-medium text-secondary lg:text-2xl">
              Junior{" "}
              <span className="text-dark font-semibold dark:text-white">
                Web Developer
              </span>
            </h2>
            <p className="mb-10 font-medium leading-relaxed text-secondary">
              I have a strong passion for{" "}
              <span className="font-bold text-dark dark:text-white">
                front-end development
              </span>{" "}
              and continually want to deepen my understanding in this area.{" "}
            </p>

            <a
              href="#"
              className="rounded-xl bg-primary py-4 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700"
            >
              Contact Me
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:right-0 lg:mt-9">
              <img
                src={heroImg}
                alt="Amy Ramadhan"
                className="relative z-10 mx-auto max-w-full"
              />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:scale-125">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#6366F1"
                    d="M37.7,-60.6C44.5,-47,42.7,-30.1,48,-15.2C53.4,-0.3,65.9,12.6,64.9,22.8C63.9,32.9,49.3,40.4,36.2,44.4C23.2,48.5,11.6,49.1,-2,51.9C-15.6,54.6,-31.2,59.5,-37.7,53.3C-44.2,47.1,-41.7,29.9,-46.5,15.2C-51.2,0.4,-63.2,-12,-62,-21.6C-60.9,-31.1,-46.7,-37.9,-34.1,-49.6C-21.6,-61.3,-10.8,-78,2.3,-81.2C15.5,-84.5,30.9,-74.2,37.7,-60.6Z"
                    transform="translate(107 90) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
