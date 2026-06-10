import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

import PortfolioModal from './PortfolioModal';

import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

import styles from './Portfolio.module.css';

const projects = [
  {
    id: 1,
    key: 'project1',

    image:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1600&auto=format&fit=crop',

    stack: ['React', 'Node.js', 'MongoDB', 'BLIK'],
  },

  {
    id: 2,
    key: 'project2',

    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',

    stack: ['React', 'TypeScript', 'i18next'],
  },

  {
    id: 3,
    key: 'project3',

    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop',

    stack: ['React', 'Framer Motion'],
  },

  {
    id: 4,
    key: 'project4',

    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop',

    stack: ['React', 'CSS Modules'],
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

const slideVariants: Variants = {
  initial: {
    opacity: 0,
    x: 120,
  },

  animate: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },

  exit: {
    opacity: 0,
    x: -120,

    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const Portfolio = () => {
  const { t } = useTranslation('home');

  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeProject = projects[activeIndex];

  const nextProject = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className={styles.portfolio}>
      <div className="container">
        <motion.div
          className={styles.portfolio__top}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className={styles.portfolio__badge}>
            {t('portfolio.badge')}
          </span>

          <h2 className={styles.portfolio__title}>{t('portfolio.title')}</h2>

          <p className={styles.portfolio__description}>
            {t('portfolio.description')}
          </p>
        </motion.div>

        <div className={styles.showcase}>
          <AnimatePresence mode="wait">
            <motion.article
              key={activeProject.id}
              className={styles.showcase__card}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className={styles.showcase__content}>
                <span className={styles.showcase__category}>
                  {t(`portfolio.projects.${activeProject.key}.category`)}
                </span>

                <h3 className={styles.showcase__title}>
                  {t(`portfolio.projects.${activeProject.key}.title`)}
                </h3>

                <p className={styles.showcase__text}>
                  {t(`portfolio.projects.${activeProject.key}.description`)}
                </p>

                <div className={styles.showcase__stack}>
                  {activeProject.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className={styles.showcase__actions}>
                  <button
                    className={styles.primaryBtn}
                    onClick={() => setIsModalOpen(true)}
                  >
                    {t('portfolio.viewCaseStudy')}

                    <ArrowUpRight size={18} />
                  </button>

                  <div className={styles.navigation}>
                    <button onClick={prevProject} className={styles.navBtn}>
                      <ArrowLeft size={20} />
                    </button>

                    <span className={styles.navigation__count}>
                      0{activeIndex + 1} / 0{projects.length}
                    </span>

                    <button onClick={nextProject} className={styles.navBtn}>
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.showcase__imageWrapper}>
                <img
                  src={activeProject.image}
                  alt={t(`portfolio.projects.${activeProject.key}.title`)}
                  className={styles.showcase__image}
                />
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>

      <PortfolioModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={activeProject}
        projects={projects}
        activeIndex={activeIndex}
        nextProject={nextProject}
        prevProject={prevProject}
      />
    </section>
  );
};

export default Portfolio;
