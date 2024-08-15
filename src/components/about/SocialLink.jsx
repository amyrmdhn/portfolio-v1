const SocialLink = ({ name, href, icon: Icon }) => {
  return (
    <a
      key={name}
      href={href}
      target="_blank"
      className="mr-3 flex h-9 w-9 items-center justify-center
                rounded-full border border-slate-400 text-slate-400
                hover:border-primary hover:bg-primary hover:text-white"
    >
      <span className="sr-only">{name}</span>
      <Icon className="h-5 w-5" aria-hidden="true" />
    </a>
  );
};

export default SocialLink;
