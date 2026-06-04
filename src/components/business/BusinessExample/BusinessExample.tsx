import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Megaphone, TrendingUp, Expand, X } from 'lucide-react';

import styles from './BusinessExamples.module.css';

import lawHome from '@/assets/images/businessPage/law/business-law-home.png';
import lawAbout from '@/assets/images/businessPage/law/business-law-about.png';
import lawServices from '@/assets/images/businessPage/law/business-law-services.png';
import lawReviews from '@/assets/images/businessPage/law/business-law-reviews.png';
import lawBlog from '@/assets/images/businessPage/law/business-law-blog.png';
import lawContact from '@/assets/images/businessPage/law/business-law-contact.png';

const BusinessExamples = () => {
  const { t } = useTranslation('business');

  const pages = [
    {
      key: 'home',
      title: t('examples.pages.home'),
      image: lawHome,
    },

    {
      key: 'about',
      title: t('examples.pages.about'),
      image: lawAbout,
    },

    {
      key: 'services',
      title: t('examples.pages.services'),
      image: lawServices,
    },

    {
      key: 'reviews',
      title: t('examples.pages.reviews'),
      image: lawReviews,
    },

    {
      key: 'blog',
      title: t('examples.pages.blog'),
      image: lawBlog,
    },

    {
      key: 'contact',
      title: t('examples.pages.contact'),
      image: lawContact,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="demo" className={styles.examples}>
      <div className="container">
        <div className={styles.examples__wrapper}>
          <div className={styles.examples__content}>
            <span className={styles.examples__badge}>
              {t('examples.badge')}
            </span>

            <h2 className={styles.examples__title}>
              {t('examples.title.line1')}
              <br />
              {t('examples.title.line2')}
            </h2>

            <p className={styles.examples__description}>
              {t('examples.description')}
            </p>

            <div className={styles.examples__features}>
              <div>
                <Search size={18} />
                {t('examples.features.seo')}
              </div>

              <div>
                <Megaphone size={18} />
                {t('examples.features.ads')}
              </div>

              <div>
                <TrendingUp size={18} />
                {t('examples.features.growth')}
              </div>
            </div>

            <div className={styles.examples__tabs}>
              {pages.map((page, index) => (
                <button
                  key={page.key}
                  onClick={() => setCurrentPage(index)}
                  className={
                    currentPage === index
                      ? styles.examples__tabActive
                      : styles.examples__tab
                  }
                >
                  {page.title}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.examples__preview}>
            <div className={styles.previewCard} onClick={() => setIsOpen(true)}>
              <img
                src={pages[currentPage].image}
                alt={pages[currentPage].title}
              />

              <button className={styles.expandBtn}>
                <Expand size={18} />
              </button>

              <div className={styles.previewInfo}>
                <h3>{pages[currentPage].title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={styles.modal} onClick={() => setIsOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setIsOpen(false)}
            >
              <X size={22} />
            </button>

            <img
              src={pages[currentPage].image}
              alt={pages[currentPage].title}
            />

            <div className={styles.modalFooter}>
              <h3>{pages[currentPage].title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BusinessExamples;
