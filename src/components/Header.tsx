import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 md:px-12">
      <img src={logo} alt="dotEnvironment logo" className="w-16 h-16 object-contain ml-48" />
    </header>
  );
};

export default Header;
