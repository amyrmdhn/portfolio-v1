const TextContent = () => {
  return (
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
  );
};

export default TextContent;
