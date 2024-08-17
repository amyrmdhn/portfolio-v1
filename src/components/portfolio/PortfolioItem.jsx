const PortfolioItem = ({ title, description, image, alt }) => {
  return (
    <div className="mb-12 p-4 md:w-1/2">
      <div className="overflow-hidden rounded-md shadow-md">
        <img
          src={image}
          alt={alt}
          className="w-full"
        />
      </div>
      <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
        {title}
      </h3>
      <p className="text-base font-medium text-secondary">{description}</p>
    </div>
  );
};

export default PortfolioItem;
