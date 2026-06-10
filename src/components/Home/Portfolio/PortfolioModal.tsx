import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { X, ArrowLeft, ArrowRight } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

import styles from './PortfolioModal.module.css';

type Project = {
  id: number;
  key: string;
  stack: string[];
  image: string;
};

type PortfolioModalProps = {
  isOpen: boolean;

  onClose: () => void;

  project: Project | null;

  projects: Project[];

  activeIndex: number;

  nextProject: () => void;

  prevProject: () => void;
};

const PortfolioModal = ({
  isOpen,
  onClose,
  project,
  projects,
  activeIndex,
  nextProject,
  prevProject,
}: PortfolioModalProps) => {
  const { t } = useTranslation('home');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      }

      if (e.key === 'ArrowRight') {
        nextProject();
      }

      if (e.key === 'ArrowLeft') {
        prevProject();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, nextProject, prevProject]);

  if (!project) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div className={styles.modal__overlay} onClick={onClose} />

          <motion.div
            key={project.id}
            className={styles.modal__content}
            initial={{
              opacity: 0,
              x: 60,
              scale: 0.985,
              filter: 'blur(6px)',
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              x: -60,
              scale: 0.985,
              filter: 'blur(6px)',
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.modal__topbar}>
              <div className={styles.modal__navigation}>
                <button onClick={prevProject} className={styles.modal__navBtn}>
                  <ArrowLeft size={18} />
                </button>

                <span className={styles.modal__counter}>
                  0{activeIndex + 1} / 0{projects.length}
                </span>

                <button onClick={nextProject} className={styles.modal__navBtn}>
                  <ArrowRight size={18} />
                </button>
              </div>

              <button className={styles.modal__close} onClick={onClose}>
                <X size={22} />
              </button>
            </div>

            <div className={styles.modal__imageWrapper}>
              <img
                src={project.image}
                alt={t(`portfolio.projects.${project.key}.title`)}
                className={styles.modal__image}
              />
            </div>

            <div className={styles.modal__body}>
              <span className={styles.modal__category}>
                {t(`portfolio.projects.${project.key}.category`)}
              </span>

              <h2 className={styles.modal__title}>
                {t(`portfolio.projects.${project.key}.title`)}
              </h2>

              <p className={styles.modal__description}>
                {t(`portfolio.projects.${project.key}.description`)}
              </p>

              <div className={styles.modal__section}>
                <h3>{t('portfolio.modal.overviewTitle')}</h3>

                <p>{t('portfolio.modal.overviewText')}</p>
              </div>

              <div className={styles.modal__section}>
                <h3>{t('portfolio.modal.technologiesTitle')}</h3>

                <div className={styles.modal__stack}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className={styles.modal__section}>
                <h3>{t('portfolio.modal.galleryTitle')}</h3>

                <div className={styles.modal__gallery}>
                  <div className={styles.modal__galleryItem}>
                    <img
                      src={project.image}
                      alt={t(`portfolio.projects.${project.key}.title`)}
                    />
                  </div>

                  <div className={styles.modal__galleryItem}>
                    <img
                      src={project.image}
                      alt={t(`portfolio.projects.${project.key}.title`)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioModal;
