import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <img src={logo} alt="dotEnvironment logo" className="w-16 h-16 object-contain" />
      </div>
    </header>
  );
};

export default Header;
