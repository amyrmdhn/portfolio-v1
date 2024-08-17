import ClientItem from "./ClientItem";

const clients = [
  {
    alt: "OmniFood Logo",
    logo: "/src/assets/images/clients/omnifood-logo.svg",
    href: "https://omnifood.dev",
  },
  {
    alt: "OmniFood Logo",
    logo: "/src/assets/images/clients/omnifood-logo.svg",
    href: "https://omnifood.dev",
  },
  {
    alt: "OmniFood Logo",
    logo: "/src/assets/images/clients/omnifood-logo.svg",
    href: "https://omnifood.dev",
  },
  {
    alt: "OmniFood Logo",
    logo: "/src/assets/images/clients/omnifood-logo.svg",
    href: "https://omnifood.dev",
  },
  {
    alt: "OmniFood Logo",
    logo: "/src/assets/images/clients/omnifood-logo.svg",
    href: "https://omnifood.dev",
  },
];

const FeaturedIn = () => {
  return (
    <section id="clients" className="bg-white pt-36 pb-32 dark:bg-slate-300">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center">
            <h4 className="mb-2 text-base font-semibold text-primary uppercase">
              Clients
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-dark sm:text-4xl lg:text-5xl">
              Who Has Collaborated
            </h2>
            <p className="text-md font-medium text-secondary md:text-lg md:max-w-2xl md:mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              perspiciatis numquam aspernatur suscipit consequuntur consectetur?
            </p>
          </div>
        </div>

        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            {clients.map((client, index) => (
              <ClientItem key={index} {...client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
