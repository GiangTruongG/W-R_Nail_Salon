import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Empty space for layout balance */}
          <div className="w-10"></div>
          
          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <a href='/'>
              <div className="text-3xl playfair-display-medium font-bold main-text-color">
                W&R
              </div>
            </a>
          </div>
          
          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors main-text-color"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-transform duration-800 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-8 py-4">
          <ul className="space-y-6 flex flex-col items-center">
            <li>
              <Link
                to='/'
                className="text-2xl font-medium playfair-display-medium hover:text-blue-600 transition-colors block"
                onClick={() => setIsMenuOpen(false)}
              >
                Home Page
              </Link>
            </li>
            <li>
              <Link
                to='/pricelist'
                className="text-2xl font-medium playfair-display-medium hover:text-blue-600 transition-colors block"
                onClick={() => setIsMenuOpen(false)}
              >
                Price List
              </Link>
            </li>
            <li>
              <Link
                to='/newgel'
                className="text-2xl font-medium playfair-display-medium hover:text-blue-600 transition-colors block"
                onClick={() => setIsMenuOpen(false)}
              >
                New Gel
              </Link>
            </li>
            <li>
              <Link
                to='/booknow'
                className="text-2xl font-medium playfair-display-medium hover:text-blue-600 transition-colors block"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </li>
            <li>
              <Link
                to='/contactus'
                className="text-2xl font-medium playfair-display-medium hover:text-blue-600 transition-colors block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </>
  )
}

export default Header