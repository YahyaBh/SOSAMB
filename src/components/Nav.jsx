"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [isResponsive, setIsResponsive] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setIsResponsive(false);
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <nav>
      <div className="logo">
        <Link href="/"><img src="/logo.svg" alt="logo" /></Link>
      </div>

      <div className="links">
        <Link href="/">Acceuil</Link>
        <div
          className="services-dropdown"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button className="services-trigger" onClick={() => setServicesOpen(!servicesOpen)}>
            Nos Services <i className={servicesOpen ? "fa fa-chevron-up" : "fa fa-chevron-down"}></i>
          </button>
          {servicesOpen && (
            <div className="services-menu">
              <Link href="/services/transport-medicalise">Transport médicalisé</Link>
              <Link href="/services/intervention-urgence">Intervention d'urgence</Link>
              <Link href="/services/assistance-patients">Assistance aux patients</Link>
            </div>
          )}
        </div>
        <Link href="/faq">FAQ</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="call">
        <a href="tel:+2120752921397">Appeler Maintenant</a>
      </div>

      <button
        className="toggle"
        aria-label={isResponsive ? "Close menu" : "Open menu"}
        aria-expanded={isResponsive}
        aria-controls="mobile-menu"
        onClick={() => setIsResponsive(!isResponsive)}
      >
        <span className={isResponsive ? "hamburger active" : "hamburger"}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {isResponsive && (
        <div id="mobile-menu" className="dropdown">
          <Link href="/" onClick={() => setIsResponsive(false)}>Acceuil</Link>
          <div className="dropdown-group">
            <button
              className="services-trigger"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Nos Services
              <span className={mobileServicesOpen ? "arrow open" : "arrow"} aria-hidden="true"></span>
            </button>
            {mobileServicesOpen && (
              <>
                <Link href="/services/transport-medicalise" onClick={() => setIsResponsive(false)}>Transport médicalisé</Link>
                <Link href="/services/intervention-urgence" onClick={() => setIsResponsive(false)}>Intervention d'urgence</Link>
                <Link href="/services/assistance-patients" onClick={() => setIsResponsive(false)}>Assistance aux patients</Link>
              </>
            )}
          </div>
          <Link href="/faq" onClick={() => setIsResponsive(false)}>FAQ</Link>
          <Link href="/blogs" onClick={() => setIsResponsive(false)}>Blogs</Link>
          <Link href="/contact" onClick={() => setIsResponsive(false)}>Contact</Link>
          <a className="btn" href="tel:+2120752921397">Appeler Maintenant</a>
        </div>
      )}
    </nav>
  );
}


