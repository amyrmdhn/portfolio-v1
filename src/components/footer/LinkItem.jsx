const LinkItem = ({ href, name }) => {
  return (
    <li>
      <a href={href} className="mb-3 inline-block text-base hover:text-primary">
        {name}
      </a>
    </li>
  );
};

export default LinkItem;
