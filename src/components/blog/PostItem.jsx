import { toast, Slide } from "react-toastify";

const PostItem = ({ title, image, alt, description }) => {
  const handleClick = (e) => {
    e.preventDefault();
    toast.warning("Sorry, the page you are looking for is under construction", {
      position: "bottom-center",
      autoClose: 3500,
    });
  };

  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
      <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-md dark:bg-slate-800">
        <img
          src={image}
          alt={alt}
          className="h-56 w-full object-cover object-center"
        />
        <div className="px-6 py-8">
          <h3>
            <a
              href="#"
              onClick={handleClick}
              className="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white"
            >
              {title}
            </a>
          </h3>
          <p className="mb-6 text-base font-medium text-secondary">
            {description}
          </p>
          <a
            href="#"
            onClick={handleClick}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
