import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes, FaBars, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { logo } from '../img';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    }
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
    setOpenDropdown(null);
  }, []);

  const toggleDropdown = useCallback((index) => {
    setOpenDropdown(prev => (prev === index ? null : index));
  }, []);

  const navLinks = [
    {
      to: '/',
      text: 'Bosh sahifa',
      children: [
        { to: '/asosiy', text: 'Asosiy ma`lumotlar' },
        { to: '/parent', text: 'Ota-onalar sahifasi' },
        { to: '/maktab_korsatkichlari', text: 'Maktab ko`rsatkichlari' },
        { to: '/savol_javob', text: 'Savol bering - javob beramiz' },
      ],
    },
    {
      text: 'Me’yoriy-huquqiy hujjatlar',
      children: [
        { to: '/konstitutsiya', text: 'O‘zbekiston Respublikasi Konstitutsiyasi' },
        { to: '/kodeks', text: 'O‘zbekiston Respublikasi Kodekslari va Qonunlari' },
        { to: '/vazir', text: 'O‘zbekiston Respublikasi Vazirlar Mahkamasining qarorlari' },
        { to: '/prezident_farmonlari', text: 'O‘zbekiston Respublikasi Prezidentining farmonlari va qarorlari' },
        { to: '/vazir_buyruqlari', text: 'O‘zbekiston Respublikasi Madaniyat vazirining buyruqlari' },
        { to: '/adliya_hujjatlar', text: 'O‘zbekiston Respublikasi Adliya vazirligidan ro‘yxatdan o‘tgan hujjatlar' },
      ],
    },
    {
    text: 'BMSM to`risida ma`lumotlar',
    children: [
      { to: '/rahbariyat', text: 'Maktab rahbariyati' },
      { to: '/xodimlar', text: 'Maktab pedagog xodimlari' },
      { to: '/hujjatlar', text: 'Hujjatlar' },
      { to: '/lokal_hujjatlar', text: 'Lokal hujjatlar' },
      { to: '/bmsm_xodimlari', text: 'BMSM xodimlarining odob-axloq qoidalari' },
      { to: '/malaka_tavsiflari', text: 'Malaka tavsiflari' },
      { to: '/oquvchilar_xavfsizligi', text: 'Oquvchilar xavfsizligi' },
      { to: '/mehnat_muxofazasi', text: 'Mehnat muhofazasi' },
      { to: '/korrupsiya', text: 'Korrupsiyaga qarshi kurashish' },
    ],
  },
  {
    text: 'O`quv jarayonlari',
    children: [
      { to: '/oquvjarayonlari_hujjatlar', text: 'Hujjatlar' },
      { to: '/oquv_dasturlari', text: 'O`quv dasturlari' },
      { to: '/tanlovlar', text: 'Tanlovlar, festivallar' },
      { to: '/bmsm_pedagogik_kengash', text: 'BMSM pedagogik kengashi' },
    ],
  },
  ];

  const isActiveLink = (linkTo) => {
    if (linkTo === '/' && location.pathname === '/') return true;
    if (linkTo !== '/' && location.pathname.startsWith(linkTo)) return true;
    return false;
  };

  const renderDesktopNavLinks = () =>
    navLinks.map((link, index) => {
      const hasChildren = link.children && link.children.length > 0;
      const isActive = link.to && isActiveLink(link.to);

      if (hasChildren) {
        return (
          <div key={index} className="relative group">
            <div
              className={`cursor-pointer px-3 xl:px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm xl:text-base flex items-center space-x-1 ${
                isActive
                  ? 'text-sky-700 bg-sky-50'
                  : 'text-sky-900 hover:text-sky-700 hover:bg-sky-50'
              }`}
            >
              <span>{link.text}</span>
              <FaChevronDown className="text-xs transition-transform group-hover:rotate-180" />
            </div>
            <div className="absolute left-0 top-full mt-2 min-w-[200px] bg-white shadow-xl rounded-lg border border-sky-100 z-[99999]
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-300 ease-out transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2">
                {link.children.map((child, i) => (
                  <Link
                    key={i}
                    to={child.to}
                    className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                      isActiveLink(child.to)
                        ? 'text-sky-700 bg-sky-50 border-r-2 border-sky-700'
                        : 'text-gray-700 hover:text-sky-700 hover:bg-sky-50'
                    }`}
                  >
                    {child.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );
      }

      return (
        <Link
          key={index}
          to={link.to}
          className={`px-3 xl:px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm xl:text-base ${
            isActive
              ? 'text-sky-700 bg-sky-50'
              : 'text-sky-900 hover:text-sky-700 hover:bg-sky-50'
          }`}
        >
          {link.text}
        </Link>
      );
    });

  const renderMobileNavLinks = () =>
    navLinks.map((link, index) => {
      const hasChildren = link.children && link.children.length > 0;
      const isActive = link.to && isActiveLink(link.to);
      const isDropdownOpen = openDropdown === index;

      if (hasChildren) {
        return (
          <div key={index} className="border-b border-sky-700/20">
            <div
              className={`flex items-center justify-between px-4 py-4 cursor-pointer transition-colors duration-200 ${
                isActive ? 'text-sky-200 bg-sky-700/20' : 'text-white hover:text-sky-200 hover:bg-sky-700/10'
              }`}
              onClick={() => toggleDropdown(index)}
            >
              <span className="font-medium">{link.text}</span>
              {isDropdownOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="bg-sky-700/10">
                {link.children.map((child, i) => (
                  <Link
                    key={i}
                    to={child.to}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setOpenDropdown(null);
                    }}
                    className={`block px-8 py-3 text-sm transition-colors duration-200 ${
                      isActiveLink(child.to)
                        ? 'text-sky-200 bg-sky-700/20 border-l-2 border-sky-200'
                        : 'text-gray-200 hover:text-white hover:bg-sky-700/20'
                    }`}
                  >
                    {child.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );
      }

      return (
        <div key={index} className="border-b border-sky-700/20">
          <Link
            to={link.to}
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-4 font-medium transition-colors duration-200 ${
              isActive
                ? 'text-sky-200 bg-sky-700/20 border-l-2 border-sky-200'
                : 'text-white hover:text-sky-200 hover:bg-sky-700/10'
            }`}
          >
            {link.text}
          </Link>
        </div>
      );
    });

  return (
    <div className="sticky top-0 left-0 right-0 w-full z-40" ref={menuRef}>
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 relative">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-auto sm:h-12 lg:h-14 transition-all duration-300 hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-gradient-to-r from-sky-50 to-blue-50 rounded-full px-6 py-2 border border-sky-200 transition-all duration-300">
              {renderDesktopNavLinks()}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-sky-900 hover:text-sky-700 hover:bg-sky-50 transition-colors duration-200"
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            className={`lg:hidden absolute left-0 right-0 w-full overflow-hidden transition-all duration-500 ease-in-out bg-gradient-to-b from-sky-900 to-sky-800 shadow-lg ${
              isMenuOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
            style={{ zIndex: 9998 }}
          >
            {renderMobileNavLinks()}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
