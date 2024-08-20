import LinkItem from "./LinkItem";

const tags = [
  { href: "#blog", name: "Mobile Development" },
  { href: "#blog", name: "Web Development" },
  { href: "#blog", name: "Game MMORPG" },
];

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Clients", href: "#clients" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = () => new Date().getFullYear();

  return (
    <footer className="bg-indigo-950 pt-24 pb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full px-4 font-medium text-slate-300 md:w-1/2">
            <h2 className="mb-5 text-4xl font-bold text-white">Amy Ramadhan</h2>
            <h3 className="mb-2 text-2xl font-bold">My Contact</h3>
            <p className="pb-6">amyramadhan99@gmail.com</p>
            <p>Jl. Kepahlawan No.99</p>
            <p>Bekasi, Jawa Barat</p>
            <p>Indonesia</p>
          </div>
          <div className="mb-12 w-full px-4 md:w-1/4">
            <h3 className="mb-5 text-xl font-semibold text-white">
              Navigation
            </h3>
            <ul className="text-slate-300">
              {navigation.map((nav) => (
                <LinkItem key={nav.name} {...nav} />
              ))}
            </ul>
          </div>
          <div className="mb-12 w-full px-4 md:w-1/4">
            <h3 className="mb-5 text-xl font-semibold text-white">Blog Tag</h3>
            <ul className="text-slate-300">
              {tags.map((tag) => (
                <LinkItem key={tag.name} {...tag} />
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full border-t border-slate-700 pt-10">
          <p className="text-center text-sm font-medium text-slate-500 pb-3">
            Build by{" "}
            <a href="#home" className="font-bold text-primary hover:text-indigo-300">
              Amy Ramadhan
            </a>{" "}
            using{" "}
            <a
              href="https://vitejs.dev/"
              target="_blank"
              className="font-bold text-sky-500 hover:text-sky-300"
            >
              VITE
            </a>
            ,{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              className="font-bold text-sky-500 hover:text-sky-300"
            >
              React
            </a>
            , &{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="font-bold text-sky-500 hover:text-sky-300"
            >
              TailwindCSS
            </a>
          </p>
          <p className="text-center text-xs text-slate-500">
            Copyright &copy; {currentYear()} Amy R. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
