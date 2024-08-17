const ClientItem = ({ logo, alt, href }) => {
  return (
    <a
      href={href}
      className="mx-4 max-w-[120px] py-4 opacity-80 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
    >
      <img src={logo} alt={alt} />
    </a>
  );
};

export default ClientItem;
