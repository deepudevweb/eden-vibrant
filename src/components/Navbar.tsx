
// import { cn } from "@/lib/utils";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import Button from "./Button";
// import Navlogo from "../assets/images/eden-vibrant.jpg"

// interface NavbarProps {
//   logo?: string;
// }

// const Navbar = ({ logo }: NavbarProps) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Properties", path: "/properties" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         isScrolled
//           ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
//           : "bg-transparent py-5"
//       )}
//     >
//       <div className="container-sm flex items-center justify-between">
//         <img className="header-logo" src={Logo} alt="" />
//         <NavLink to="/" className="flex items-center" onClick={closeMenu}>
//           {logo ? (
//             <img src={logo} alt="Eden" className="h-12" />
//           ) : (
//             <h1 className="text-2xl md:text-3xl font-serif font-medium text-eden-darkGreen">
//               Eden<span className="text-eden-gold">.</span>
//             </h1>
//           )}
//         </NavLink>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-8">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 cn(
//                   "text-sm font-medium transition-colors hover:text-eden-gold",
//                   isActive
//                     ? "text-eden-gold relative after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-eden-gold"
//                     : "text-foreground/80"
//                 )
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//           <Button size="sm">Book a Visit</Button>
//         </nav>

//         {/* Mobile Navigation Toggle */}
//         <button
//           className="p-2 rounded-md md:hidden text-eden-green focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div
//         className={cn(
//           "fixed inset-0 bg-white z-40 flex flex-col pt-24 pb-8 px-6 md:hidden transition-transform duration-300 ease-in-out",
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         )}
//       >
//         <nav className="flex flex-col space-y-6">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 cn(
//                   "text-lg font-medium py-2 transition-colors",
//                   isActive
//                     ? "text-eden-gold border-b-2 border-eden-gold"
//                     : "text-foreground/80"
//                 )
//               }
//               onClick={closeMenu}
//             >
//               {item.name}
//             </NavLink>
//           ))}
//           <Button className="mt-4 w-full">Book a Visit</Button>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Navlogo from "../assets/images/eden-vibrant.jpg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Properties", path: "/properties" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm py-4">
      <div className="container-sm flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center" onClick={closeMenu}>
          <img src={Navlogo} alt="Eden" className="h-10 w-auto header-logo" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-eden-gold",
                  isActive
                    ? "text-eden-gold relative after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-eden-gold"
                    : "text-foreground/80"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Button size="sm">Book a Visit</Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="p-2 rounded-md md:hidden text-eden-green focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col pt-24 pb-8 px-6 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className="absolute top-6 right-6 text-eden-green"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <nav className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-lg font-medium py-2 transition-colors",
                  isActive
                    ? "text-eden-gold border-b-2 border-eden-gold"
                    : "text-foreground/80"
                )
              }
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
          <Button className="mt-4 w-full">Book a Visit</Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
