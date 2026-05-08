import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

import styles from './Portfolio.module.css';

const projects = [
  {
    id: 1,
    category: 'E-commerce',
    title: 'Pet Food Online Store',
    description:
      'Modern ecommerce platform with product management, authentication, online payments and delivery integration.',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400&auto=format&fit=crop',
    stack: ['React', 'Node.js', 'MongoDB'],
    featured: true,
  },

  {
    id: 2,
    category: 'Business Website',
    title: 'Cleaning Company Website',
    description:
      'Multi-page website optimized for local SEO and lead generation.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop',
    stack: ['React', 'TypeScript'],
  },

  {
    id: 3,
    category: 'Landing Page',
    title: 'Interior Cleaning Service',
    description:
      'Responsive landing page focused on conversions and modern UX.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop',
    stack: ['React', 'CSS Modules'],
  },

  {
    id: 4,
    category: 'Corporate',
    title: 'Lawyer Website',
    description:
      'Professional website for legal services with multilingual support.',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop',
    stack: ['React', 'i18next'],
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (i: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: 'easeOut',
    },
  }),
};

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <div className="container">
        <motion.div
          className={styles.portfolio__top}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
        >
          <span className={styles.portfolio__badge}>Portfolio</span>

          <h2 className={styles.portfolio__title}>
            Selected Projects & Case Studies
          </h2>

          <p className={styles.portfolio__description}>
            A selection of websites and web applications crafted with focus on
            performance, scalability, and modern user experience.
          </p>
        </motion.div>

        <div className={styles.portfolio__grid}>
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`${styles.card} ${
                project.featured ? styles.card__featured : ''
              }`}
              variants={fadeUp}
              custom={index + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.card__imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.card__image}
                />

                <div className={styles.card__overlay}>
                  <button className={styles.card__button}>
                    View Project
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>

              <div className={styles.card__content}>
                <span className={styles.card__category}>
                  {project.category}
                </span>

                <h3 className={styles.card__title}>{project.title}</h3>

                <p className={styles.card__description}>
                  {project.description}
                </p>

                <div className={styles.card__footer}>
                  <div className={styles.card__stack}>
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <button className={styles.card__link}>
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
