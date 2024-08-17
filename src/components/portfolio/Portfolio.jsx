import PortfolioItem from "./PortfolioItem";

const projects = [
  {
    title: "Omnifood - Never cook again",
    description:
      "A landing page project for a restaurant-based company offering top-tier meal delivery services. Discover how Omnifood simplifies your life by providing delicious, chef-crafted meals delivered straight to your door, so you never have to cook again.",
    image: "/src/assets/images/projects/omnifood.png",
    alt: "Screenshot of Omnifood Landing Page",
  },
  {
    title: "Omnifood - Never cook again",
    description:
      "A landing page project for a restaurant-based company offering top-tier meal delivery services. Discover how Omnifood simplifies your life by providing delicious, chef-crafted meals delivered straight to your door, so you never have to cook again.",
    image: "/src/assets/images/projects/omnifood.png",
    alt: "Screenshot of Omnifood Landing Page",
  },
  {
    title: "Omnifood - Never cook again",
    description:
      "A landing page project for a restaurant-based company offering top-tier meal delivery services. Discover how Omnifood simplifies your life by providing delicious, chef-crafted meals delivered straight to your door, so you never have to cook again.",
    image: "/src/assets/images/projects/omnifood.png",
    alt: "Screenshot of Omnifood Landing Page",
  },
  {
    title: "Omnifood - Never cook again",
    description:
      "A landing page project for a restaurant-based company offering top-tier meal delivery services. Discover how Omnifood simplifies your life by providing delicious, chef-crafted meals delivered straight to your door, so you never have to cook again.",
    image: "/src/assets/images/projects/omnifood.png",
    alt: "Screenshot of Omnifood Landing Page",
  },
  {
    title: "Omnifood - Never cook again",
    description:
      "A landing page project for a restaurant-based company offering top-tier meal delivery services. Discover how Omnifood simplifies your life by providing delicious, chef-crafted meals delivered straight to your door, so you never have to cook again.",
    image: "/src/assets/images/projects/omnifood.png",
    alt: "Screenshot of Omnifood Landing Page",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-indigo-50 pt-36 pb-16 dark:bg-slate-800"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-base font-semibold text-primary uppercase">
              Portfolio
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
              My Projects
            </h2>
            <p className="text-md font-medium text-secondary md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              iure corrupti repellat cumque vel voluptatem assumenda esse
              cupiditate est repudiandae.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          {projects.map((project, index) => (
            <PortfolioItem key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
