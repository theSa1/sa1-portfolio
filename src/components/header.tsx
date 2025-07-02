export const Header = () => {
  return (
    <header className="fixed top-5 left-0 right-0 z-50 w-full flex items-stretch justify-center gap-2 h-8 sm:h-10 sm:gap-4">
      <div className="h-full aspect-square rounded-full border border-primabg-primary-text backdrop-blur-md bg-white/5 shadow-2xl items-center justify-center font-bold text-2xl sm:text-3xl cursor-default hidden sm:flex">
        S
      </div>
      <nav className=" rounded-full border border-primabg-primary-text backdrop-blur-md p-1 space-x-2 bg-white/5 shadow-2xl h-full flex">
        <a
          href="#home"
          className="px-4 sm:px-5 h-full text-xs sm:text-base flex items-center hover:bg-primary-text hover:text-stone-950 transition-colors duration-300 rounded-full border border-primabg-primary-text bg-white/20"
        >
          Home
        </a>
        <a
          href="#about"
          className="px-4 sm:px-5 h-full text-xs sm:text-base flex items-center hover:bg-primary-text hover:text-stone-950 transition-colors duration-300 rounded-full"
        >
          About
        </a>
        <a
          href="#projects"
          className="px-4 sm:px-5 h-full text-xs sm:text-base flex items-center hover:bg-primary-text hover:text-stone-950 transition-colors duration-300 rounded-full"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="px-4 sm:px-5 h-full text-xs sm:text-base flex items-center hover:bg-primary-text hover:text-stone-950 transition-colors duration-300 rounded-full"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};
