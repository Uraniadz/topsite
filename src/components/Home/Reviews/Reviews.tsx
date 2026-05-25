import { BadgeCheck, ExternalLink, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import styles from './Reviews.module.css';

type Review = {
  id: number;
  name: string;
  role: string;
  text: string;
  featured?: boolean;
  link: string;
};

const Reviews = () => {
  const { t } = useTranslation('home');

  const reviews = t('reviews.items', { returnObjects: true }) as Review[];

  return (
    <section className={styles.reviews}>
      <div className="container">
        <motion.div
          className={styles.reviews__top}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span>{t('reviews.badge')}</span>

          <h2>{t('reviews.title')}</h2>

          <p>{t('reviews.description')}</p>
        </motion.div>

        <div className={styles.reviews__grid}>
          {reviews.map((review, index: number) => (
            <motion.article
              key={review.id}
              className={`${styles.review} ${
                review.featured ? styles.review__featured : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className={styles.review__header}>
                <div className={styles.review__avatar}>
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3>{review.name}</h3>
                  <span>{review.role}</span>
                </div>
              </div>

              <div className={styles.review__stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p>{review.text}</p>

              <div className={styles.review__bottom}>
                <div className={styles.review__verified}>
                  <BadgeCheck size={16} />

                  <span className={styles.review__sourceDesktop}>
                    {t('reviews.verifiedDesktop')}
                  </span>

                  <span className={styles.review__sourceMobile}>
                    {t('reviews.verifiedMobile')}
                  </span>
                </div>

                <a
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Facebook reviews"
                  className={styles.review__link}
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
