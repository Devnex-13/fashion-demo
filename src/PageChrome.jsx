import React, { useState } from "react";
import {
  ArrowRight,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
} from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiPinterest,
  SiYoutube,
} from "react-icons/si";
import { Link } from "react-router-dom";

export function PageHeader({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="page-nav">
      <Link className="page-logo" to="/" aria-label="ALYRA Couture home">
        ALYRA
        <small>COUTURE</small>
      </Link>
      <button
        className="page-menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-controls="page-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav
        className={`page-nav-links${menuOpen ? " is-open" : ""}`}
        id="page-navigation"
        aria-label="Main navigation"
      >
        <Link
          className={activePage === "home" ? "active" : ""}
          to="/"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          className={activePage === "collections" ? "active" : ""}
          to="/collections"
          onClick={closeMenu}
        >
          Collections
        </Link>
        <Link to="/#story" onClick={closeMenu}>
          Our Story
        </Link>
        <Link
          className={activePage === "atelier" ? "active" : ""}
          to="/contact#atelier"
          onClick={closeMenu}
        >
          Atelier
        </Link>
        <Link
          className={activePage === "contact" ? "active" : ""}
          to="/contact"
          onClick={closeMenu}
        >
          Contact
        </Link>
      </nav>
      <div className="page-nav-actions">
        <button type="button" aria-label="Search">
          <Search aria-hidden="true" />
        </button>
        <button type="button" aria-label="Account">
          <UserRound aria-hidden="true" />
        </button>
        <Link
          className={`page-cart-link${activePage === "cart" ? " active" : ""}`}
          to="/cart"
          aria-label="Shopping bag"
          aria-current={activePage === "cart" ? "page" : undefined}
        >
          <ShoppingBag aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}

export function PageFooter() {
  const [notice, setNotice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotice("Thank you for joining ALYRA.");
    event.currentTarget.reset();
  };

  return (
    <footer className="page-footer">
      <div className="page-footer-top">
        <div className="page-newsletter">
          <h2>JOIN OUR WORLD</h2>
          <p>
            Be the first to know about new collections,
            <br />
            exclusive invites, and special offers.
          </p>
          <form className="page-email" onSubmit={handleSubmit}>
            <label className="visually-hidden" htmlFor="newsletter-email">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your Email Address"
              required
            />
            <button type="submit" aria-label="Join the newsletter">
              <ArrowRight aria-hidden="true" />
            </button>
          </form>
          {notice && (
            <p className="page-form-notice" role="status">
              {notice}
            </p>
          )}
        </div>
        <div className="page-footer-brand">
          <Link className="page-logo" to="/" aria-label="ALYRA Couture home">
            ALYRA
            <small>COUTURE</small>
          </Link>
          <p>FASHION · ART · TIMELESS BEAUTY</p>
          <div className="page-footer-flourish" aria-hidden="true" />
          <div className="page-social" aria-label="Social links">
            <a href="https://instagram.com" aria-label="Instagram">
              <SiInstagram aria-hidden="true" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <SiFacebook aria-hidden="true" />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <SiYoutube aria-hidden="true" />
            </a>
            <a href="https://pinterest.com" aria-label="Pinterest">
              <SiPinterest aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="page-footer-bottom">
        <nav aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/#story">Our Story</Link>
          <Link to="/contact#atelier">Atelier</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <span>© 2026 ALYRA COUTURE. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  );
}
