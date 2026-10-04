import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageFooter, PageHeader } from "./PageChrome.jsx";

const categoryTiles = [
  {
    title: (
      <>
        Evening
        <br />
        Couture
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1779282618089-440f8d031ca7?auto=format&fit=crop&w=1300&q=85",
    alt: "Evening couture",
  },
  {
    title: (
      <>
        Bridal
        <br />
        Couture
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1705351509417-ce65fdc29461?auto=format&fit=crop&w=1300&q=85",
    alt: "Bridal couture",
  },
  {
    title: (
      <>
        Couture
        <br />
        Suits
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1568251188392-ae32f898cb3b?auto=format&fit=crop&w=1300&q=85",
    alt: "Couture suits",
  },
  {
    title: (
      <>
        Signature
        <br />
        Collection
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1760043971543-e4930d2e2513?auto=format&fit=crop&w=1300&q=85",
    alt: "Signature collection",
  },
];

const filters = [
  ["all", "All"],
  ["evening", "Evening"],
  ["bridal", "Bridal"],
  ["suits", "Couture Suits"],
  ["signature", "Signature"],
  ["new", "New Arrivals"],
];

const collectionItems = [
  {
    category: "evening",
    title: "Evening Couture",
    image:
      "https://images.unsplash.com/photo-1779282618089-440f8d031ca7?auto=format&fit=crop&w=1200&q=85",
    alt: "Black evening couture dress",
  },
  {
    category: "signature",
    title: "Signature Collection",
    image:
      "https://images.unsplash.com/photo-1779207383725-782e19122137?auto=format&fit=crop&w=1200&q=85",
    alt: "Signature black couture look",
  },
  {
    category: "bridal",
    title: "Bridal Couture",
    image:
      "https://images.unsplash.com/photo-1705351509417-ce65fdc29461?auto=format&fit=crop&w=1200&q=85",
    alt: "Bridal couture",
  },
  {
    category: "evening",
    title: "Evening Couture",
    image:
      "https://images.unsplash.com/photo-1570984429335-39f89baffcca?auto=format&fit=crop&w=1200&q=85",
    alt: "Black and gold evening fashion",
  },
  {
    category: "bridal",
    title: "Bridal Couture",
    image:
      "https://images.unsplash.com/photo-1705351509417-ce65fdc29461?auto=format&fit=crop&w=1200&q=85",
    alt: "Bridal couture gown",
  },
  {
    category: "suits",
    title: "Couture Suits",
    image:
      "https://images.unsplash.com/photo-1568251188392-ae32f898cb3b?auto=format&fit=crop&w=1200&q=85",
    alt: "Couture suit editorial",
  },
  {
    category: "evening",
    title: "Evening Couture",
    image:
      "https://images.unsplash.com/photo-1760043971543-e4930d2e2513?auto=format&fit=crop&w=1200&q=85",
    alt: "Ornate evening couture",
  },
  {
    category: "new",
    title: "New Arrivals",
    image:
      "https://images.unsplash.com/photo-1775510110570-ba88af9ab956?auto=format&fit=crop&w=1200&q=85",
    alt: "New arrivals editorial",
  },
];

function CollectionsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  useEffect(() => {
    document.title = "ALYRA Couture — The Collections";
  }, []);
  const visibleItems = collectionItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter,
  );

  return (
    <div className="content-page collections-page">
      <PageHeader activePage="collections" />
      <main>
        <section className="collections-hero">
          <div className="collections-hero-media">
            <img
              src="https://images.unsplash.com/photo-1570984429335-39f89baffcca?auto=format&fit=crop&w=2400&q=88"
              alt="Luxury black fashion editorial"
            />
          </div>
          <div className="collections-hero-copy">
            <p className="collections-eyebrow">CURATED COUTURE</p>
            <h1>
              THE
              <br />
              COLLECTIONS
            </h1>
            <div className="collections-rule" />
            <p>
              Extraordinary designs for extraordinary moments. Discover our
              couture collections crafted for every chapter of your story.
            </p>
            <a className="collections-button" href="#all-collections">
              <span>EXPLORE COLLECTIONS</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          className="collections-categories"
          aria-label="Collection categories"
        >
          {categoryTiles.map((category) => (
            <article className="collections-category" key={category.alt}>
              <img src={category.image} alt={category.alt} />
              <div className="collections-category-copy">
                <h2>{category.title}</h2>
                <a href="#all-collections">
                  VIEW COLLECTION <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="collection-world" id="all-collections">
          <div className="collection-world-head">
            <div>
              <p className="collection-world-kicker">EXPLORE OUR WORLD</p>
              <h2>ALL COLLECTIONS</h2>
            </div>
            <div className="collection-filters" aria-label="Filter collections">
              {filters.map(([value, label]) => (
                <button
                  className={activeFilter === value ? "active" : ""}
                  type="button"
                  aria-pressed={activeFilter === value}
                  key={value}
                  onClick={() => setActiveFilter(value)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="collection-product-grid">
            {visibleItems.map((item, index) => (
              <article
                className="collection-product"
                key={`${item.title}-${index}`}
              >
                <div className="collection-product-media">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </div>
                <p>{item.title}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="collections-signature">
          <img
            src="https://images.unsplash.com/photo-1705351509417-ce65fdc29461?auto=format&fit=crop&w=2400&q=88"
            alt="Signature couture editorial"
            loading="lazy"
          />
          <div className="collections-signature-copy">
            <p className="collections-eyebrow">SIGNATURE COLLECTION</p>
            <h2>
              SIGNATURE
              <br />
              COLLECTION
            </h2>
            <div className="collections-rule" />
            <p>
              Masterpieces that blend modern sophistication with timeless
              artistry.
            </p>
            <a className="collections-button" href="#all-collections">
              <span>EXPLORE SIGNATURE</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="collections-atelier">
          <div className="collections-atelier-image">
            <img
              src="https://images.unsplash.com/photo-1760043971543-e4930d2e2513?auto=format&fit=crop&w=1800&q=85"
              alt="Couture fashion detail"
              loading="lazy"
            />
          </div>
          <div className="collections-atelier-copy">
            <p className="collection-world-kicker">ARTISTRY IN EVERY DETAIL</p>
            <h2>OUR ATELIER</h2>
            <div className="collections-rule" />
            <p>
              From the finest fabrics to intricate handwork, every detail is a
              celebration of artistry and dedication.
            </p>
            <a
              className="collections-button collections-button-dark"
              href="/contact#atelier"
            >
              <span>BEHIND THE COLLECTIONS</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}

export default CollectionsPage;
