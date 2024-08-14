import BackgroundPattern from "./BackgroundPattern";
import TextContent from "./TextContent";
import ImageContent from "./ImageContent";

const Hero = () => {
  return (
    <section id="home" className="pt-36 dark:bg-dark">
      <BackgroundPattern />
      <div className="container">
        <div className="flex flex-wrap">
          <TextContent />
          <ImageContent />
        </div>
      </div>
    </section>
  );
};

export default Hero;
