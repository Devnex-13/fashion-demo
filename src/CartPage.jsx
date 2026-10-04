import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageFooter, PageHeader } from "./PageChrome.jsx";

const startingItems = [
  {
    id: "noir-elan",
    price: 2850,
    quantity: 1,
    category: "Evening Couture",
    name: "Noir Élan Gown",
    description:
      "A dramatic evening silhouette with sculpted lines and an effortless couture presence.",
    size: "EU 38",
    color: "Obsidian Black",
    image:
      "https://images.unsplash.com/photo-1570984429335-39f89baffcca?auto=format&fit=crop&w=900&q=85",
    alt: "Black couture evening gown",
  },
  {
    id: "ivory-lumiere",
    price: 4200,
    quantity: 1,
    category: "Bridal Couture",
    name: "Ivory Lumière",
    description:
      "An ethereal bridal expression created for a timeless and unforgettable entrance.",
    size: "EU 36",
    color: "Soft Ivory",
    image:
      "https://images.unsplash.com/photo-1705351509417-ce65fdc29461?auto=format&fit=crop&w=900&q=85",
    alt: "Bridal couture gown",
  },
  {
    id: "maison-rouge",
    price: 3150,
    quantity: 1,
    category: "Signature Collection",
    name: "Maison Rouge",
    description:
      "Intricate ornamentation and a rich silhouette inspired by the artistry of couture.",
    size: "EU 40",
    color: "Garnet",
    image:
      "https://images.unsplash.com/photo-1760043971543-e4930d2e2513?auto=format&fit=crop&w=900&q=85",
    alt: "Ornate couture evening dress",
  },
];

const formatPrice = (amount) => `₹${amount.toLocaleString("en-IN")}`;

function CartPage() {
  const [items, setItems] = useState(startingItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoMessage, setPromoMessage] = useState("");
  const [checkoutMessage, setCheckoutMessage] = useState("");

  useEffect(() => {
    document.title = "ALYRA Couture — Shopping Bag";
  }, []);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  const changeQuantity = (id, change) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const applyPromo = (event) => {
    event.preventDefault();
    setPromoMessage(
      promoCode.trim()
        ? `Promotion code "${promoCode.trim()}" will be validated at checkout.`
        : "Please enter a promotion code.",
    );
  };

  return (
    <div className="content-page cart-page">
      <PageHeader activePage="cart" />
      <section className="cart-page-head">
        <p className="cart-kicker">YOUR CURATED SELECTION</p>
        <h1>YOUR SHOPPING BAG</h1>
        <p className="cart-head-description">
          Each ALYRA creation is made to be experienced. Review your selection
          before beginning your private purchase journey.
        </p>
      </section>

      <main className="cart-wrap">
        <div className="cart-top">
          <h2>SELECTED PIECES</h2>
          <p className="cart-count">{itemCount} PIECES</p>
        </div>
        <div className="cart-layout">
          <section
            className="cart-items"
            aria-label="Items in your shopping bag"
          >
            {items.length > 0 ? (
              items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.alt} />
                  </div>
                  <div className="cart-item-info">
                    <p className="cart-item-category">{item.category}</p>
                    <h3>{item.name}</h3>
                    <p className="cart-item-description">{item.description}</p>
                    <dl className="cart-item-details">
                      <div>
                        <dt>Size</dt>
                        <dd>{item.size}</dd>
                      </div>
                      <div>
                        <dt>Colour</dt>
                        <dd>{item.color}</dd>
                      </div>
                    </dl>
                    <div
                      className="cart-quantity"
                      aria-label={`Quantity for ${item.name}`}
                    >
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${item.name}`}
                        onClick={() => changeQuantity(item.id, -1)}
                      >
                        −
                      </button>
                      <span aria-live="polite">{item.quantity}</span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${item.name}`}
                        onClick={() => changeQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="cart-remove"
                      type="button"
                      onClick={() => removeItem(item.id)}
                    >
                      REMOVE
                    </button>
                  </div>
                  <p className="cart-item-price">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </article>
              ))
            ) : (
              <div className="cart-empty">
                <h3>YOUR BAG IS EMPTY</h3>
                <p>
                  Discover a piece created for your next extraordinary moment.
                </p>
                <Link to="/collections">CONTINUE SHOPPING</Link>
              </div>
            )}
          </section>

          <aside className="cart-summary">
            <p className="cart-summary-kicker">PRIVATE PURCHASE</p>
            <h2>ORDER SUMMARY</h2>
            <div className="cart-summary-line">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="cart-summary-line">
              <span>Couture Consultation</span>
              <span>Complimentary</span>
            </div>
            <div className="cart-summary-line">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="cart-summary-total">
              <span>Estimated Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <button
              className="cart-checkout"
              type="button"
              disabled={items.length === 0}
              onClick={() =>
                setCheckoutMessage("Checkout will be available soon.")
              }
            >
              PROCEED TO CHECKOUT <ArrowRight aria-hidden="true" />
            </button>
            {checkoutMessage && (
              <p className="cart-feedback" role="status">
                {checkoutMessage}
              </p>
            )}
            <Link className="cart-continue" to="/collections">
              CONTINUE SHOPPING
            </Link>
            <form className="cart-promo" onSubmit={applyPromo}>
              <label className="visually-hidden" htmlFor="cart-promo-code">
                Promotion code
              </label>
              <input
                id="cart-promo-code"
                value={promoCode}
                onChange={(event) => setPromoCode(event.target.value)}
                placeholder="Promotion Code"
              />
              <button type="submit">APPLY</button>
            </form>
            {promoMessage && (
              <p className="cart-feedback" role="status">
                {promoMessage}
              </p>
            )}
            <p className="cart-secure">
              PRIVATE &amp; SECURE PURCHASE
              <br />
              Your payment and personal details are protected throughout the
              checkout process.
            </p>
          </aside>
        </div>
      </main>

      <section className="cart-editorial">
        <div className="cart-editorial-copy">
          <p className="cart-kicker">CONTINUE YOUR JOURNEY</p>
          <h2>
            DISCOVER
            <br />
            THE COLLECTIONS
          </h2>
          <p>
            Explore evening couture, bridal creations, signature pieces and new
            arrivals curated for the ALYRA woman.
          </p>
          <Link to="/collections">
            EXPLORE COLLECTIONS <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
      <PageFooter />
    </div>
  );
}

export default CartPage;
