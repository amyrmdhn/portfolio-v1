import PostItem from "./PostItem";

const posts = [
  {
    title: "Sakura Tree in Japan",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi consectetur commodi facere.",
    image: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    alt: "Sakura Tree",
  },
  {
    title: "Sakura Tree in Japan",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi consectetur commodi facere.",
    image: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    alt: "Sakura Tree",
  },
  {
    title: "Sakura Tree in Japan",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi consectetur commodi facere.",
    image: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    alt: "Sakura Tree",
  },
  {
    title: "Sakura Tree in Japan",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi consectetur commodi facere.",
    image: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    alt: "Sakura Tree",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="bg-slate-100 pb-32 pt-36 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-base font-semibold uppercase text-primary">
              Blog
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
              Newest Posts
            </h2>
            <p className="text-md font-medium text-secondary md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              numquam accusamus veritatis.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          {posts.map((post, index) => (
            <PostItem key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
