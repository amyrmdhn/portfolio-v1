import heroImg from "../../assets/images/hero-img.png";

const ImageContent = () => {
  return (
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
  );
};

export default ImageContent;
