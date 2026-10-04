import React, { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { PageFooter, PageHeader } from "./PageChrome.jsx";
import storyImage from "../fashion_images/image_2.png";
import triptychImage from "../fashion_images/image_11.png";
import eveningDressImage from "../fashion_images/image_6.png";
import signatureImage from "../fashion_images/image_5.png";
import inspirationImage from "../fashion_images/Image_7.png";

const firstSequence = Object.entries(
  import.meta.glob("/1_Hero-page-video-frame/1_000-300_frames/*.jpg", {
    eager: true,
    import: "default",
    query: "?url",
  }),
)
  .sort(([first], [second]) => first.localeCompare(second))
  .map(([, url]) => url);

const secondSequence = Object.entries(
  import.meta.glob("/1_Hero-page-video-frame/2_301-600_frames/*.jpg", {
    eager: true,
    import: "default",
    query: "?url",
  }),
)
  .sort(([first], [second]) => first.localeCompare(second))
  .map(([, url]) => url);

const frames = [...firstSequence, ...secondSequence];

function App() {
  const trackRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    document.title = "ALYRA Couture — Home";
    const canvas = canvasRef.current;
    const track = trackRef.current;
    const context = canvas.getContext("2d", { alpha: false });
    const imageCache = new Map();
    let currentIndex = -1;
    let lastIndex = 0;
    let animationFrame = 0;

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * pixelRatio);
      canvas.height = Math.round(window.innerHeight * pixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      if (currentIndex >= 0) drawFrame(imageCache.get(currentIndex));
    };

    const drawFrame = (image) => {
      if (!image?.complete || !image.naturalWidth) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const scale = Math.max(
        viewportWidth / image.naturalWidth,
        viewportHeight / image.naturalHeight,
      );
      const width = image.naturalWidth * scale;
      const height = image.naturalHeight * scale;

      context.clearRect(0, 0, viewportWidth, viewportHeight);
      context.drawImage(
        image,
        (viewportWidth - width) / 2,
        (viewportHeight - height) / 2,
        width,
        height,
      );
    };

    const trimCache = (centerIndex) => {
      if (imageCache.size <= 16) return;

      for (const [index, image] of imageCache) {
        if (imageCache.size <= 12) break;
        if (Math.abs(index - centerIndex) > 4 && image.complete) {
          imageCache.delete(index);
        }
      }
    };

    const loadFrame = (index) => {
      if (index < 0 || index >= frames.length) return;
      if (imageCache.has(index)) return;

      const image = new Image();
      image.decoding = "async";
      image.onload = () => {
        if (index === currentIndex) drawFrame(image);
        trimCache(currentIndex);
      };
      imageCache.set(index, image);
      image.src = frames[index];
    };

    const syncFrameToScroll = () => {
      animationFrame = 0;
      const scrollableDistance = track.offsetHeight - window.innerHeight;
      const progress =
        scrollableDistance > 0
          ? Math.min(
              1,
              Math.max(
                0,
                -track.getBoundingClientRect().top / scrollableDistance,
              ),
            )
          : 0;
      const nextIndex = Math.round(progress * (frames.length - 1));

      if (nextIndex !== currentIndex) {
        const direction = nextIndex >= lastIndex ? 1 : -1;
        currentIndex = nextIndex;
        lastIndex = nextIndex;
        loadFrame(currentIndex);
        loadFrame(currentIndex + direction);
        drawFrame(imageCache.get(currentIndex));
        trimCache(currentIndex);
      }
    };

    const scheduleFrameSync = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(syncFrameToScroll);
      }
    };

    resizeCanvas();
    scheduleFrameSync();
    window.addEventListener("scroll", scheduleFrameSync, { passive: true });
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleFrameSync);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <main className="experience" id="home" ref={trackRef}>
        <div className="runway-stage">
          <canvas
            ref={canvasRef}
            className="runway-frame"
            role="img"
            aria-label="A fashion runway film that moves with scrolling"
          />
          <div className="stage-shade" aria-hidden="true" />
          <PageHeader />
          <section className="hero-copy" aria-labelledby="hero-title">
            <p className="hero-eyebrow">A NEW ERA OF</p>
            <h1 id="hero-title">FASHION</h1>
            <p className="hero-script">Elegance</p>
            <p className="hero-description">
              Where timeless artistry meets
              <br />
              modern sophistication,
              <br />
              Discover couture crafted for your
              <br />
              most extraordinary moments.
            </p>
            <a className="hero-cta" href="/collections">
              <span>EXPLORE COLLECTIONS</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </section>
          <aside
            className="side-caption"
            aria-label="Couture fashion lifestyle"
          >
            <span>COUTURE</span>
            <span>FASHION</span>
            <span>LIFESTYLE</span>
          </aside>
          <div className="frame-markers" aria-hidden="true">
            <span className="is-active">01</span>
            <span>02</span>
            <span>03</span>
          </div>
          <div className="scroll-cue" aria-hidden="true">
            <ArrowDown />
          </div>
        </div>
      </main>
      <section
        className="story-banner"
        id="story"
        aria-labelledby="story-title"
        style={{ backgroundImage: `url(${storyImage})` }}
      >
        <div className="story-copy">
          <p className="story-eyebrow">CRAFTED FOR ICONS</p>
          <h2 id="story-title">
            <span className="story-heading-small">THE ART OF</span>
            <span className="story-heading-main">ELEGANCE</span>
          </h2>
          <p className="story-description">
            Every piece tells a story — of passion, precision, and timeless
            beauty. Our couture is designed for women who define their own
            story.
          </p>
          <a className="story-cta" href="#story">
            <span>DISCOVER OUR STORY</span>
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
      <section
        className="collection-grid"
        id="collections"
        aria-label="Signature collections"
      >
        <article className="collection-card">
          <img
            className="collection-image collection-image-evening"
            src={eveningDressImage}
            alt="Gold evening gown"
          />
          <div className="collection-copy">
            <h2>
              EVENING
              <br />
              GOWNS
            </h2>
            <a className="collection-cta" href="/collections">
              <span>EXPLORE</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </article>
        <article className="collection-card">
          <img
            className="collection-image collection-image-suit"
            src={triptychImage}
            alt="Black couture suit"
          />
          <div className="collection-copy">
            <h2>
              COUTURE
              <br />
              SUITS
            </h2>
            <a className="collection-cta" href="/collections">
              <span>EXPLORE</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </article>
        <article className="collection-card">
          <img
            className="collection-image collection-image-bridal"
            src={triptychImage}
            alt="Ivory bridal couture gown"
          />
          <div className="collection-copy">
            <h2>
              BRIDAL
              <br />
              COUTURE
            </h2>
            <a className="collection-cta" href="/collections">
              <span>EXPLORE</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </article>
      </section>
      <section
        className="signature-banner"
        aria-labelledby="signature-title"
        style={{ backgroundImage: `url(${signatureImage})` }}
      >
        <div className="signature-copy">
          <p className="signature-eyebrow">SIGNATURE</p>
          <h2 id="signature-title">COLLECTION</h2>
          <p className="signature-description">
            Masterpieces designed to make
            <br />
            every moment unforgettable.
          </p>
          <a className="signature-cta" href="/collections">
            <span>VIEW COLLECTION</span>
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
      <section
        className="inspiration-banner"
        aria-labelledby="inspiration-banner-title"
      >
        <img
          className="inspiration-banner-image"
          src={inspirationImage}
          alt="A villa among hills at sunset"
        />
        <div className="inspiration-banner-copy">
          <p className="inspiration-banner-eyebrow">A WORLD OF</p>
          <h2 id="inspiration-banner-title">INSPIRATION</h2>
          <p className="inspiration-banner-description">
            Timeless locations. Breathtaking moments,
            <br />
            Our designs draw inspiration from the world's
            <br />
            most beautiful places, bringing luxury and
            <br />
            elegance to life.
          </p>
          <a href="/contact#atelier">
            <span>EXPLORE MORE</span>
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
      <PageFooter />
    </>
  );
}

export default App;
