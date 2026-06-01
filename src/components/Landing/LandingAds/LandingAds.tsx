import {
  Target,
  Search,
  BarChart3,
  MousePointerClick,
  BadgeCheck,
} from 'lucide-react';

import styles from './LandingAds.module.css';

const features = [
  {
    icon: <Target size={24} />,
    title: 'Conversion Focused',
    description:
      'Every landing page is designed to maximize inquiries and leads.',
  },

  {
    icon: <Search size={24} />,
    title: 'Keyword Strategy',
    description:
      'Pages are structured around real search intent and user needs.',
  },

  {
    icon: <MousePointerClick size={24} />,
    title: 'Better Quality Score',
    description: 'Optimized landing pages can improve Google Ads performance.',
  },

  {
    icon: <BarChart3 size={24} />,
    title: 'Analytics & Tracking',
    description: 'Track conversions and understand how visitors interact.',
  },
];

const LandingAds = () => {
  return (
    <section className={styles.ads}>
      <div className="container">
        <div className={styles.ads__wrapper}>
          <div className={styles.ads__content}>
            <span className={styles.ads__badge}>Google Ads Ready</span>

            <h2 className={styles.ads__title}>
              More Than Just
              <br />a Landing Page
            </h2>

            <p className={styles.ads__description}>
              We don't just design beautiful landing pages. We create pages that
              are prepared to work with Google Ads campaigns and help generate
              real leads.
            </p>

            <p className={styles.ads__description}>
              By combining conversion-focused design, analytics, and advertising
              strategy, we help businesses get better results from their
              marketing investment.
            </p>

            <div className={styles.ads__stats}>
              <div>
                <strong>Google Ads</strong>
                <span>Campaign Ready</span>
              </div>

              <div>
                <strong>GA4</strong>
                <span>Analytics Setup</span>
              </div>

              <div>
                <strong>Tracking</strong>
                <span>Conversion Events</span>
              </div>
            </div>
          </div>

          <div className={styles.ads__cards}>
            {features.map((item) => (
              <article key={item.title} className={styles.card}>
                <div className={styles.card__icon}>{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}

            <div className={styles.resultCard}>
              <BadgeCheck size={32} />

              <h3>Complete Lead Generation System</h3>

              <p>
                Landing Page + Google Ads + Analytics + Conversion Tracking.
              </p>

              <div className={styles.resultCard__badge}>
                Recommended for businesses that want measurable growth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingAds;
