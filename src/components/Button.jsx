import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, target, onClick, children, px, white }) => {
  //Setup default css className
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = "relative z-10";

  //Method to render a button
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  //Method to render a link
  const renderLink = () => (
    <a href={href} className={classes} target={target ? "_blank" : undefined}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton(); //Render a link or a button based on whether we have an href or not
};

export default Button;
