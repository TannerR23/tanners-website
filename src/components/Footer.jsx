import Section from "./Section";

const Footer = () => {
  return (
    <Section className="!px-0 !py-10">
      <div
        className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 pointer-events-none lg:block xl:left-10 xl:right-10`}
      />
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col xs:mt-10">
        <p className="caption text-n-4 lg:block">{new Date().getFullYear()}.</p>
        <p className="caption text-n-4 lg:block">
          Thanks for viewing my website :)
        </p>
      </div>
    </Section>
  );
};

export default Footer;
