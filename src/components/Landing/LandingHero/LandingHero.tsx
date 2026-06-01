import {
  ArrowRight,
  CheckCircle2,
  MousePointer2,
  Sparkles,
} from 'lucide-react';

import styles from './LandingHero.module.css';
import landingFoto from '@/assets/images/landingPage/landing-foto.png';

const LandingHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__image}>
        <img src={landingFoto} alt="Business owner working on a laptop" />
      </div>

      <div className={styles.hero__overlay}></div>

      <div className="container">
        <div className={styles.hero__content}>
          <div className={styles.hero__mobileImage}>
            <img src={landingFoto} alt="Business owner working on a laptop" />
          </div>
          <div className={styles.hero__badge}>
            <Sparkles size={16} />
            Modern Landing Pages
          </div>

          <h1 className={styles.hero__title}>
            Landing Pages <br />
            <span>That Convert</span>
            <br />
            Visitors Into Clients
          </h1>

          <p className={styles.hero__description}>
            Modern, fast and conversion-focused landing pages designed for
            businesses, services and Google Ads campaigns.
          </p>

          <div className={styles.hero__features}>
            <div className={styles.hero__feature}>
              <CheckCircle2 size={18} />
              <span>Single indexed page</span>
            </div>

            <div className={styles.hero__feature}>
              <CheckCircle2 size={18} />
              <span>5–8 strategic sections</span>
            </div>

            <div className={styles.hero__feature}>
              <CheckCircle2 size={18} />
              <span>Mobile-first design</span>
            </div>

            <div className={styles.hero__feature}>
              <CheckCircle2 size={18} />
              <span>Google Ads ready</span>
            </div>
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
      </div>
    </section>
  );
};

export default LandingHero;
