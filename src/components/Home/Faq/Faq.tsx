import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import styles from './FAQ.module.css';

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const { t } = useTranslation('home');

  const faqItems = t('faq.items', {
    returnObjects: true,
  }) as Record<string, FaqItem>;

  const faqList = Object.values(faqItems);

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq} id="faq">
      <div className="container">
        <div className={styles.faq__top}>
          <span>{t('faq.badge')}</span>

          <h2>{t('faq.title')}</h2>

          <p>{t('faq.description')}</p>
        </div>

        <div className={styles.faq__list}>
          {faqList.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`${styles.faq__item} ${isOpen ? styles.active : ''}`}
              >
                <button
                  className={styles.faq__question}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{item.question}</span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown size={22} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className={styles.faq__answerWrapper}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                      }}
                    >
                      <div className={styles.faq__answer}>
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
