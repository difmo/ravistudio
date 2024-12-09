import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/Ravilogohd.png'; // Import the logo image
const Header = () => {
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Blog", path: "/blog" },
  ];

  const photographySections = [
    { name: "Wedding", path: "/photography/wedding" },
    { name: "Pre-Wedding", path: "/photography/pre-wedding" },
    { name: "Post-Wedding", path: "/photography/post-wedding" },
    { name: "Fashion", path: "/photography/fashion" },
    { name: "Birthday", path: "/photography/birthday" },
    { name: "Kitty Party", path: "/photography/kittyparty" },
    { name: "Maternity", path: "/photography/maternity" },
  ];

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="font-bold">
          <Link to="/" className="hover:text-gray-300 transition duration-300">
            <img 
              src={logo} 
              alt="MyWebsite Logo" 
              className="h-10" // Adjust the height of your logo as needed
            />
          </Link>
        </div>

        {/* Navbar Links */}
        <nav className="flex items-center space-x-6">
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

            {/* Photography Dropdown */}
            <li className="relative group">
              <Link
                to="/photography"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Photography
              </Link>
              <div className="absolute left-0 hidden mt-2 space-y-2 bg-black text-white p-4 rounded-lg group-hover:block">
                {photographySections.map((section, index) => (
                  <Link
                    key={index}
                    to={section.path}
                    className="block hover:text-gray-300 transition duration-500"
                  >
                    {section.name}
                  </Link>
                ))}
              </div>
            </li>
          </ul>

          {/* "Book Us" Button */}
          <Link
            to="/contact"
            className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Book Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
