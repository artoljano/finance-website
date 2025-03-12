import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, BarChart2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BarChart2 className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">FinanceGuard</span>
            </div>
            <p className="text-gray-400">
              Zgjidhje financiare eksperte për rritjen dhe suksesin e biznesit tuaj.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Lidhje të Shpejta</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-500 transition-colors">
                  Kryefaqja
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-500 transition-colors">
                  Rreth Nesh
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500 transition-colors">
                  Kontakti
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Shërbimet</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Shërbime Tatimore
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Kontabilitet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Planifikim Financiar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Konsulencë Biznesi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Informacion Kontakti</h3>
            <ul className="space-y-2">
              <li>Rruga e Durrësit, Nr. 123</li>
              <li>Tiranë, Shqipëri</li>
              <li>Tel: (355) 69 123 4567</li>
              <li>Email: kontakt@financeguard.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} FinanceGuard. Të gjitha të drejtat e rezervuara.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-blue-500 transition-colors">
                Politika e Privatësisë
              </a>
              <a href="#" className="text-sm hover:text-blue-500 transition-colors">
                Kushtet e Shërbimit
              </a>
              <a href="#" className="text-sm hover:text-blue-500 transition-colors">
                Politika e Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;