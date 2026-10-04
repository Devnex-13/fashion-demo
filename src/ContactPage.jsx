import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageFooter, PageHeader } from "./PageChrome.jsx";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    document.title = "ALYRA Couture — Contact";
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="content-page contact-page">
      <PageHeader activePage="contact" />
      <main>
        <section className="contact-hero">
          <img
            className="contact-hero-image"
            src="https://images.unsplash.com/photo-1777628530456-bb93d3a03faf?auto=format&fit=crop&w=2400&q=88"
            alt="Luxury boutique interior"
          />
          <div className="contact-hero-copy">
            <p className="contact-kicker">BEGIN YOUR JOURNEY</p>
            <h1>
              CONTACT
              <br />
              ALYRA
            </h1>
            <div className="contact-rule" />
            <p>
              For private appointments, bespoke commissions, collection
              enquiries, or simply to discover more about the world of ALYRA
              Couture.
            </p>
          </div>
          <span className="contact-hero-number" aria-hidden="true">
            01
          </span>
        </section>

        <section className="contact-main">
          <div className="contact-intro">
            <p className="contact-kicker">WE WOULD LOVE TO HEAR FROM YOU</p>
            <h2>
              LET'S CREATE SOMETHING TIMELESS
            </h2>
            <p>
              Whether you are looking for a signature evening gown, a bespoke
              bridal creation, or a private couture experience, our team is here
              to assist you.
            </p>
          </div>

          <div className="contact-layout">
            <section aria-labelledby="enquiry-title">
              <h3 className="contact-subtitle" id="enquiry-title">
                SEND AN ENQUIRY
              </h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-field">
                  <label htmlFor="first-name">FIRST NAME</label>
                  <input
                    id="first-name"
                    name="firstName"
                    autoComplete="given-name"
                    required
                    placeholder="Your first name"
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="last-name">LAST NAME</label>
                  <input
                    id="last-name"
                    name="lastName"
                    autoComplete="family-name"
                    required
                    placeholder="Your last name"
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Your email address"
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="phone">PHONE NUMBER</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="contact-field full">
                  <label htmlFor="enquiry-type">ENQUIRY TYPE</label>
                  <select
                    id="enquiry-type"
                    name="enquiryType"
                    defaultValue="Private Appointment"
                  >
                    <option>Private Appointment</option>
                    <option>Collection Enquiry</option>
                    <option>Bespoke Couture</option>
                    <option>Bridal Couture</option>
                    <option>Press &amp; Collaboration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="contact-field full">
                  <label htmlFor="message">YOUR MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we may assist you"
                  />
                </div>
                <div className="contact-field full contact-submit-row">
                  <button className="contact-submit" type="submit">
                    SEND ENQUIRY <ArrowRight aria-hidden="true" />
                  </button>
                  {submitted && (
                    <p className="contact-form-notice" role="status">
                      Thank you. This preview form is not connected to an inbox
                      yet.
                    </p>
                  )}
                </div>
              </form>
            </section>

            <aside className="contact-info">
              <h3 className="contact-subtitle">VISIT ALYRA</h3>
              <div className="contact-info-block">
                <h4>PRIVATE ATELIER</h4>
                <p>
                  By appointment only
                  <br />
                  ALYRA Couture Atelier
                  <br />
                  New Delhi, India
                </p>
              </div>
              <div className="contact-info-block">
                <h4>EMAIL</h4>
                <p>
                  <a href="mailto:hello@alyracouture.com">
                    hello@alyracouture.com
                  </a>
                </p>
              </div>
              <div className="contact-info-block">
                <h4>TELEPHONE</h4>
                <p>
                  <a href="tel:+911100000000">+91 11 0000 0000</a>
                </p>
              </div>
              <div className="contact-hours">
                <p>
                  <span>Monday — Friday</span>
                  <span>10:00 — 19:00</span>
                </p>
                <p>
                  <span>Saturday</span>
                  <span>11:00 — 17:00</span>
                </p>
                <p>
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="contact-atelier" id="atelier">
          <div className="contact-atelier-image">
            <img
              src="https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=1800&q=85"
              alt="Elegant architectural interior"
              loading="lazy"
            />
          </div>
          <div className="contact-atelier-copy">
            <p className="contact-kicker">THE ALYRA EXPERIENCE</p>
            <h2>
              VISIT
              <br />
              OUR ATELIER
            </h2>
            <p>
              Step into an intimate world of couture, craftsmanship and timeless
              elegance. Private consultations are available by appointment.
            </p>
            <a
              className="contact-map-link"
              href="https://maps.google.com/?q=ALYRA+Couture+Atelier+New+Delhi"
              target="_blank"
              rel="noreferrer"
            >
              GET DIRECTIONS <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}

export default ContactPage;
