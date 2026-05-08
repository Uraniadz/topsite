import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

import styles from './Portfolio.module.css';

const projects = [
  {
    id: 1,
    category: 'E-commerce',
    title: 'Pet Food Online Store',
    description:
      'Modern ecommerce platform with authentication, online payments, delivery integrations and custom admin dashboard.',

    image:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1600&auto=format&fit=crop',

    stack: ['React', 'Node.js', 'MongoDB', 'BLIK'],
  },

  {
    id: 2,
    category: 'Business Website',
    title: 'Cleaning Company Website',
    description:
      'SEO-focused multi-page company website designed for lead generation and local visibility.',

    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',

    stack: ['React', 'TypeScript', 'i18next'],
  },

  {
    id: 3,
    category: 'Corporate Website',
    title: 'Lawyer Services Platform',
    description:
      'Professional multilingual website for legal services with modern responsive layout.',

    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop',

    stack: ['React', 'Framer Motion'],
  },

  {
    id: 4,
    category: 'Landing Page',
    title: 'Interior Cleaning Service',
    description:
      'Modern landing page with smooth animations and conversion-focused sections.',

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
      duration: 0.6,
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
      duration: 0.6,
      ease: 'easeInOut',
    },
  },

  exit: {
    opacity: 0,
    x: -120,

    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
          <span className={styles.portfolio__badge}>Portfolio</span>

          <h2 className={styles.portfolio__title}>
            Selected Projects & Case Studies
          </h2>

          <p className={styles.portfolio__description}>
            A showcase of modern websites and web applications focused on
            performance, user experience, and scalable architecture.
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
                  {activeProject.category}
                </span>

                <h3 className={styles.showcase__title}>
                  {activeProject.title}
                </h3>

                <p className={styles.showcase__text}>
                  {activeProject.description}
                </p>

                <div className={styles.showcase__stack}>
                  {activeProject.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className={styles.showcase__actions}>
                  <button className={styles.primaryBtn}>
                    View Case Study
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
                  alt={activeProject.title}
                  className={styles.showcase__image}
                />
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
