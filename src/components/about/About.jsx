import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import SocialLink from "./SocialLink";

const navigation = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61558823872991",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    href: "#",
    icon: FaTwitter,
  },
  {
    name: "GitHub",
    href: "#",
    icon: FaGithub,
  },
];

const About = () => {
  return (
    <section id="about" className="pb-32 pt-36 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="mb-10 w-full px-4 lg:w-1/2">
            <h4 className="mb-3 text-base font-bold uppercase text-primary">
              Tentang Saya
            </h4>
            <h2 className="mb-5 max-w-md text-3xl font-bold text-dark dark:text-white lg:text-4xl">
              Building digital products and experience
            </h2>
            <p className="max-w-xl text-base font-medium text-secondary lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ullam cumque dolor. Rerum ipsam modi minima.
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white lg:pt-10 lg:text-3xl">
              Let's connect
            </h3>
            <p className="mb-6 max-w-xl text-base font-medium text-secondary lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quos, hic animi quasi ipsum exercitationem ipsam incidunt
              voluptatem.
            </p>
            <div className="flex items-center">
              {navigation.map((link) => (
                <SocialLink key={link.name} {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
