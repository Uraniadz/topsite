import {
  BadgeCheck,
  Smartphone,
  Zap,
  TrendingUp,
  Megaphone,
  Rocket,
} from 'lucide-react';

import styles from './LandingAbout.module.css';

const features = [
  {
    icon: <Megaphone size={24} />,
    title: 'Google Ads',
    description: 'Perfect destination for advertising campaigns.',
  },

  {
    icon: <TrendingUp size={24} />,
    title: 'Lead Generation',
    description: 'Designed to turn visitors into potential clients.',
  },

  {
    icon: <Smartphone size={24} />,
    title: 'Mobile First',
    description: 'Optimized for smartphones and tablets.',
  },

  {
    icon: <Zap size={24} />,
    title: 'Fast Loading',
    description: 'Lightweight structure with excellent performance.',
  },
];

const LandingAbout = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.about__wrapper}>
          <div className={styles.about__content}>
            <span className={styles.about__badge}>
              <BadgeCheck size={16} />
              About Landing Pages
            </span>

            <h2 className={styles.about__title}>What Is a Landing Page?</h2>

            <p className={styles.about__description}>
              A landing page is a single-page website designed to guide visitors
              toward one specific goal. Whether you want more inquiries,
              bookings, leads, or sales, every section is strategically built to
              encourage action.
            </p>

            <p className={styles.about__description}>
              Unlike traditional multi-page websites, landing pages remove
              distractions and focus attention on what matters most — converting
              visitors into customers.
            </p>

            <div className={styles.about__stats}>
              <div className={styles.stat}>
                <strong>5–8</strong>
                <span>Strategic Sections</span>
              </div>

              <div className={styles.stat}>
                <strong>1</strong>
                <span>Focused Goal</span>
              </div>

              <div className={styles.stat}>
                <strong>100%</strong>
                <span>Mobile Responsive</span>
              </div>
            </div>
          </div>

          <div className={styles.about__visual}>
            <div className={styles.visualCardLarge}>
              <Rocket size={28} />

              <h3>Built for Conversions</h3>

              <p>
                Every section has a purpose and helps visitors move toward
                contacting your business.
              </p>
            </div>

            <div className={styles.visualGrid}>
              {features.map((item) => (
                <div key={item.title} className={styles.visualCard}>
                  {item.icon}

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingAbout;
