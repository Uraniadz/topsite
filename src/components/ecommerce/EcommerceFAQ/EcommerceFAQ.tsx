import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import styles from './EcommerceFAQ.module.css';

const EcommerceFAQ = () => {
  const { t } = useTranslation('ecommerce');

  const faqRef = useRef<HTMLDivElement>(null);

  const faqItems = Array.from({ length: 6 }, (_, index) => ({
    question: t(`faq.items.item${index + 1}.question`),
    answer: t(`faq.items.item${index + 1}.answer`),
  }));

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (faqRef.current && !faqRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <section className={styles.faq}>
      <div className="container">
        <div className={styles.faq__top}>
          <span>{t('faq.badge')}</span>

          <h2>{t('faq.title')}</h2>

          <p>{t('faq.description')}</p>
        </div>

        <div className={styles.faq__list} ref={faqRef}>
          {faqItems.map((item, index) => (
            <article
              key={item.question}
              className={`${styles.faqItem} ${
                openIndex === index ? styles.active : ''
              }`}
            >
              <button
                className={styles.faqItem__button}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(index);
                }}
              >
                <div className={styles.faqItem__left}>
                  <span className={styles.faqItem__icon}>
                    {openIndex === index ? '✨' : '💡'}
                  </span>

                  <span>{item.question}</span>
                </div>

                <ChevronDown size={20} />
              </button>

              <div className={styles.faqItem__content}>
                <p>{item.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceFAQ;
