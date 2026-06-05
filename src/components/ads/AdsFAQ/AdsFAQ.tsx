import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import styles from './AdsFAQ.module.css';

const AdsFAQ = () => {
  const { t } = useTranslation('ads');

  const faqRef = useRef<HTMLDivElement>(null);

  const faqItems = [
    {
      question: t('faq.items.item1.question'),
      answer: t('faq.items.item1.answer'),
    },

    {
      question: t('faq.items.item2.question'),
      answer: t('faq.items.item2.answer'),
    },

    {
      question: t('faq.items.item3.question'),
      answer: t('faq.items.item3.answer'),
    },

    {
      question: t('faq.items.item4.question'),
      answer: t('faq.items.item4.answer'),
    },

    {
      question: t('faq.items.item5.question'),
      answer: t('faq.items.item5.answer'),
    },

    {
      question: t('faq.items.item6.question'),
      answer: t('faq.items.item6.answer'),
    },
  ];

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
                    {openIndex === index ? '📊' : '💡'}
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

export default AdsFAQ;