import styles from './WhyChooseUs.module.css';

import { Rocket, Layers3, Search, Smartphone, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Rocket size={28} />,
    title: 'Fast Delivery',
    description:
      'Efficient workflow and clean development process focused on launching projects quickly without compromising quality.',
    large: true,
  },

  {
    icon: <Layers3 size={28} />,
    title: 'Modern Technologies',
    description:
      'Built with React, TypeScript, scalable architecture, and modern frontend standards for long-term growth.',
    large: true,
  },

  {
    icon: <Search size={24} />,
    title: 'SEO Optimized',
    description: 'Structured with performance and search visibility in mind.',
  },

  {
    icon: <Smartphone size={24} />,
    title: 'Mobile First',
    description:
      'Perfect experience across desktop, tablet, and mobile devices.',
  },

  {
    icon: <ShieldCheck size={24} />,
    title: 'Long-Term Support',
    description: 'Ongoing updates, maintenance, and improvements after launch.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.blurTop} />
      <div className={styles.blurBottom} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>WHY CHOOSE US</span>

          <h2 className={styles.title}>
            Modern websites focused on performance, design, and business growth.
          </h2>

          <p className={styles.subtitle}>
            We create scalable digital experiences with clean code, responsive
            design, and strong attention to usability and details.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((item, index) => (
            <article
              key={index}
              className={`${styles.card} ${item.large ? styles.cardLarge : ''}`}
            >
              <div className={styles.cardGlow} />

              <div className={styles.icon}>{item.icon}</div>

              <h3 className={styles.cardTitle}>{item.title}</h3>

              <p className={styles.cardDescription}>{item.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>&lt; 2s</span>

            <span className={styles.statText}>Optimized Load Time</span>
          </div>

          <div className={styles.stat}>
            <span className={styles.statNumber}>100%</span>

            <span className={styles.statText}>Responsive Design</span>
          </div>

          <div className={styles.stat}>
            <span className={styles.statNumber}>SEO</span>

            <span className={styles.statText}>Ready Structure</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
