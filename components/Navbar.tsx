import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const baseLinkClass =
    "text-sm font-medium transition-colors hover:text-primary";

  const activeClass = "text-primary font-semibold";

  const heroLink = (hash: string) =>
    isHome ? hash : `/${hash}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow
">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-auto items-center justify-center">
              <img
                src="assets/vsd-logo.png"
                alt="VSD Logo"
                className="brand-logo w-auto object-contain brightness-110 drop-shadow-[0_0_8px_rgba(19,236,236,0.5)]"
              />
            </div>
          </NavLink>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8">
            {/* ABOUT */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${baseLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              About
            </NavLink>

            {/* SKILLS (scroll on home) */}
            <a
              href={heroLink("#skills")}
              className={baseLinkClass}
            >
              Skills
            </a>

            {/* WORK */}
            <NavLink
              to="/works"
              className={({ isActive }) =>
                `${baseLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              Projects
            </NavLink>

            {/* CONTACT (scroll on home) */}
            <a
              href={heroLink("#contact")}
              className={baseLinkClass}
            >
              Contact
            </a>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <a
              href="/Vishnu_SDarsan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 rounded-lg border border-gray-200 dark:border-border-dark px-4 py-2 text-sm font-bold transition-colors hover:border-primary hover:text-primary bg-transparent"
            >
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span>CV</span>
            </a>


            <button className="md:hidden text-slate-900 dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
