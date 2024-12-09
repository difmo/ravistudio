import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    // { id: 2, name: "About", path: "/about" },
    // { id: 3, name: "Services", path: "/services" },
    // { id: 4, name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold">MyWebsite</div>
        <nav>
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
