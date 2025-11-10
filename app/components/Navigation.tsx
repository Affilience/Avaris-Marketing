'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className="relative bg-gradient-to-b from-forest to-forest/95 backdrop-blur-md text-fence sticky top-0 z-50 shadow-2xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Top accent border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ash to-transparent"></div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ash/40 to-transparent"></div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-ash/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-ash/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-24">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative group"
          >
            <Link href="/" className="relative flex items-center gap-3">
              {/* Custom Avaris Logo */}
              <motion.div
                className="relative w-14 h-14 flex items-center justify-center"
                whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-ash/30 via-light/20 to-ash/30 rounded-2xl rotate-45"></div>
                <svg className="w-10 h-10 relative z-10" viewBox="0 0 100 100" fill="none">
                  {/* Stylized "A" with modern geometric design */}
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F0EFEB" />
                      <stop offset="50%" stopColor="#D4D4D4" />
                      <stop offset="100%" stopColor="#F0EFEB" />
                    </linearGradient>
                  </defs>
                  {/* Outer triangular shape forming "A" */}
                  <path d="M50 15 L80 75 L70 75 L50 35 L30 75 L20 75 Z" fill="url(#logoGradient)" opacity="0.9"/>
                  {/* Inner accent line */}
                  <path d="M35 60 L65 60" stroke="#F0EFEB" strokeWidth="4" strokeLinecap="round"/>
                  {/* Geometric accent dots */}
                  <circle cx="50" cy="20" r="3" fill="#D4D4D4"/>
                  <circle cx="25" cy="72" r="2.5" fill="#B7B7A4"/>
                  <circle cx="75" cy="72" r="2.5" fill="#B7B7A4"/>
                </svg>
              </motion.div>

              {/* Brand name with gradient */}
              <div className="relative">
                <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-fence via-light to-fence bg-clip-text text-transparent relative z-10">
                  Avaris Marketing
                </span>
                <motion.div
                  className="absolute -left-3 -right-3 -top-2 -bottom-2 bg-gradient-to-r from-ash/10 via-light/5 to-ash/10 rounded-xl -z-10 border border-ash/20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Subtle glow effect on hover */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-ash/20 to-light/20 rounded-xl blur-md -z-20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </Link>
          </motion.div>

          <div className="hidden md:flex space-x-2 relative">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-6 py-3 group"
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span className={`relative z-10 transition-colors text-lg font-medium ${
                  pathname === link.href
                    ? 'text-fence'
                    : 'text-ash hover:text-fence'
                }`}>
                  {link.label}
                </span>
                {(hoveredLink === link.href || pathname === link.href) && (
                  <motion.div
                    layoutId={hoveredLink === link.href ? "hover" : "active"}
                    className={`absolute inset-0 rounded-lg ${
                      pathname === link.href
                        ? 'bg-gradient-to-br from-fence/15 to-fence/5 border border-fence/20'
                        : 'bg-gradient-to-br from-ash/15 to-ash/5'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                {/* Bottom accent for active link */}
                {pathname === link.href && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-light to-transparent"
                    initial={{ opacity: 0, x: '-50%' }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <button className="md:hidden text-fence">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
