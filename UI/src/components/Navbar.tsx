import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff8f5]/90 backdrop-blur-md border-b border-[#f3e8e2] shadow-[0_1px_6px_rgba(40,20,10,0.03)]">
      <div className="h-16 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#c2410c] flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-white text-[18px]">
              school
            </span>
          </div>

          <span className="font-display text-[18px] font-bold text-[#1c1917] tracking-tight uppercase">
            CAREER GUIDE
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-4">
            <Link
              to="/"
              className={`transition-colors py-1 px-2 rounded-lg ${
                location.pathname === "/"
                  ? "text-[#c2410c] font-semibold"
                  : "text-[#59413a] hover:text-[#1c1917]"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`transition-colors py-1 px-2 rounded-lg ${
                location.pathname === "/about"
                  ? "text-[#c2410c] font-semibold"
                  : "text-[#59413a] hover:text-[#1c1917]"
              }`}
            >
              About
            </Link>
          </nav>

          {/* Profile Icon */}
          <div className="w-8 h-8 rounded-full bg-[#c2410c] flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-white text-[18px]">
              person
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;