import React from 'react';
import { NavLink } from 'react-router-dom';
import { BarChart2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <BarChart2 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">FinanceGuard</span>
            </NavLink>
          </div>
          <div className="flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >
              Kryefaqja
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >
              Rreth Nesh
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >
              Kontakti
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;