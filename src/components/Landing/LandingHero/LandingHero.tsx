import { ArrowRight, MousePointer2, Sparkles } from 'lucide-react';
import styles from './LandingHero.module.css';

const LandingHero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__wrapper}>
          {/* LEFT */}
          <div className={styles.hero__content}>
            <div className={styles.hero__badge}>
              <Sparkles size={16} />
              Modern Landing Pages
            </div>

            <h1 className={styles.hero__title}>
              Landing Pages
              <span> That Convert</span>
              <br />
              Visitors Into Clients
            </h1>

            <p className={styles.hero__description}>
              Modern, fast and conversion-focused landing pages designed for
              businesses, services and Google Ads campaigns.
            </p>

            <div className={styles.hero__features}>
              <div>• Single indexed page</div>
              <div>• 5–8 strategic sections</div>
              <div>• Mobile-first design</div>
              <div>• Google Ads ready</div>
            </div>

            <div className={styles.hero__actions}>
              <button className={styles.hero__primaryBtn}>
                Free Consultation
                <ArrowRight size={18} />
              </button>

              <button className={styles.hero__secondaryBtn}>
                <MousePointer2 size={18} />
                View Demo
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.hero__previewWrapper}>
            <div className={styles.hero__glow}></div>

            <div className={styles.preview}>
              {/* Browser */}
              <div className={styles.preview__top}>
                <div className={styles.preview__dots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className={styles.preview__url}>codevixstudio.com</div>
              </div>

              {/* Content */}
              <div className={styles.preview__content}>
                <div className={styles.preview__navbar}>
                  <span>Logo</span>

                  <div className={styles.preview__navLinks}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>

                <div className={styles.preview__hero}>
                  <div className={styles.preview__heroText}></div>
                  <div className={styles.preview__heroTextSmall}></div>

                  <div className={styles.preview__buttons}>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className={styles.preview__section}>
                  <div className={styles.preview__sectionTitle}></div>

                  <div className={styles.preview__cards}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>

                <div className={styles.preview__section}>
                  <div className={styles.preview__sectionTitle}></div>

                  <div className={styles.preview__reviews}>
                    <div></div>
                    <div></div>
                  </div>
                </div>

                <div className={styles.preview__contact}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
