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
          className="w-full h-56 object-cover object-center"
        />
        <div className="py-8 px-6">
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
            className="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
