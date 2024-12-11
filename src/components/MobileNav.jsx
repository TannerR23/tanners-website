import logo from "../../public/logo.svg"

export const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[50.375rem] aspect-square border border-n-2/50 rounded-full -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 w-[40.125rem] aspect-square border border-n-2/25 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[30.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
      <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
    </>
  );
};

const MobileNav = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.01]">
      <img
          className="w-full h-full translate-x-2"
          src={logo}
          width={600}
          height={930}
          alt="Background"
        />
      </div>

      <Rings />

      <SideLines />
    </div>
  );
};

export default MobileNav;
