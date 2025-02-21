import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Leaf, Users, Package, Award, Image as GalleryIcon, Mail, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Define the type for each navigation item
interface NavItem {
  path: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>; // Type for Lucide icons
}

const navItems: NavItem[] = [
  { path: "/", label: "Home", icon: Leaf },
  { path: "/about", label: "About Us", icon: Users },
  { path: "/products", label: "Products", icon: Package },
  { path: "/certifications", label: "Certifications", icon: Award },
  { path: "/gallery", label: "Gallery", icon: GalleryIcon },
  { path: "/contact", label: "Contact", icon: Mail },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-gradient-to-r from-green-600 to-teal-600 shadow-lg"
          : "bg-gradient-to-r from-green-700 to-teal-700"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span
              className={`text-white text-2xl font-bold tracking-tight transform transition-transform duration-300 hover:scale-105 ${
                isScrolled ? "text-shadow-sm" : ""
              }`}
            >
              ~VARAHI ECO GREEN
            </span>
          </div>

          {/* Desktop Menu */}
          {isMobile ? (
            <button
              onClick={toggleMenu}
              className="text-white hover:text-teal-200 transition-colors p-2 rounded-full hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7 transform transition-transform duration-200 hover:rotate-90" />
              ) : (
                <Menu className="h-7 w-7 transform transition-transform duration-200 hover:scale-110" />
              )}
            </button>
          ) : (
            <div className="flex space-x-10">
              {navItems.map(({ path, label, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }: { isActive: boolean }) =>
                    `flex items-center space-x-2 text-white font-medium tracking-wide transition-all duration-300 relative group ${
                      isActive ? "text-teal-200" : "hover:text-teal-200"
                    }`
                  }
                >
                  <Icon className="h-5 w-5 transform transition-transform duration-200 group-hover:scale-110" />
                  <span>{label}</span>
                  <span
                    className={`absolute bottom-[-4px] left-0 h-0.5 bg-teal-300 transition-all duration-300 ${
                      location.pathname === path ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && (
          <div
            className={`${
              isMenuOpen
                ? "max-h-screen opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-4"
            } overflow-hidden bg-green-600/95 backdrop-blur-md shadow-xl rounded-b-lg transition-all duration-500 ease-in-out`}
          >
            <div className="py-6 px-4 space-y-5">
              {navItems.map(({ path, label, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }: { isActive: boolean }) =>
                    `flex items-center space-x-3 p-3 text-white font-medium rounded-lg transition-all duration-300 hover:bg-teal-700/50 ${
                      isActive ? "bg-teal-700 text-teal-100" : ""
                    }`
                  }
                >
                  <Icon className="h-5 w-5 transform transition-transform duration-200 hover:scale-110" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;