import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

import styles from './ImagePreviewModal.module.css';

type Props = {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

const ImagePreviewModal = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: Props) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();

      if (e.key === 'ArrowRight') onNext();

      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.preview}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.preview__overlay} onClick={onClose} />

          <button className={styles.preview__close} onClick={onClose}>
            <X size={24} />
          </button>

          {images.length > 1 && (
            <>
              <button className={styles.preview__prev} onClick={onPrev}>
                <ArrowLeft size={24} />
              </button>

              <button className={styles.preview__next} onClick={onNext}>
                <ArrowRight size={24} />
              </button>
            </>
          )}

          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt=""
            className={styles.preview__image}
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          />

          <div className={styles.preview__counter}>
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImagePreviewModal;
