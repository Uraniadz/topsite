import { useRef } from 'react';
import styles from './InteractivePreview.module.css';

const InteractivePreview = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className={styles.preview}>
      <div className="container">
        <div className={styles.preview__top}>
          <span>Interactive Preview</span>

          <h2>Experience a Real Landing Page</h2>

          <p>
            Explore how visitors navigate through a landing page and discover
            how each section guides them toward taking action.
          </p>
        </div>

        <div className={styles.browser}>
          <div className={styles.browser__header}>
            <div className={styles.browser__dots}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.browser__url}>yourbusiness.com</div>
          </div>

          <div className={styles.browser__content}>
            <div className={styles.demoNavbar}>
              <div className={styles.demoLogo}>LOGO</div>

              <nav>
                <button onClick={() => scrollToSection(homeRef)}>Home</button>

                <button onClick={() => scrollToSection(aboutRef)}>About</button>

                <button onClick={() => scrollToSection(servicesRef)}>
                  Services
                </button>

                <button onClick={() => scrollToSection(contactRef)}>
                  Contact
                </button>
              </nav>
            </div>

            <div className={styles.demoContent}>
              {/* HOME */}
              <section ref={homeRef} className={styles.demoSection}>
                <div className={styles.heroBlock}>
                  <div className={styles.heroText}></div>

                  <div className={styles.heroTextSmall}></div>

                  <div className={styles.heroButtons}>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </section>

              {/* ABOUT */}
              <section ref={aboutRef} className={styles.demoSection}>
                <h3>About Us</h3>

                <div className={styles.aboutGrid}>
                  <div></div>
                  <div></div>
                </div>
              </section>

              {/* SERVICES */}
              <section ref={servicesRef} className={styles.demoSection}>
                <h3>Our Services</h3>

                <div className={styles.serviceGrid}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </section>

              {/* CONTACT */}
              <section ref={contactRef} className={styles.demoSection}>
                <div className={styles.contactBlock}>
                  <h3>Ready to Start?</h3>

                  <div className={styles.contactForm}>
                    <div></div>
                    <div></div>
                    <div></div>

                    <button>Contact Us</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractivePreview;
