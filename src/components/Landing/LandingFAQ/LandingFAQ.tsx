import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import styles from './LandingFAQ.module.css';

const faqItems = [
  {
    question: 'How long does it take to build a landing page?',
    answer:
      'Most landing pages are completed within 1–2 weeks, depending on the project scope, content availability, and required integrations.',
  },

  {
    question: 'Will the landing page work on mobile devices?',
    answer:
      'Yes. Every landing page is fully responsive and optimized for smartphones, tablets, and desktop devices.',
  },

  {
    question: 'Can you create a multilingual landing page?',
    answer:
      'Absolutely. We can build landing pages in multiple languages and provide language switching functionality.',
  },

  {
    question: 'Do you help with Google Ads?',
    answer:
      'Yes. We can prepare the landing page for advertising campaigns, configure analytics, conversion tracking, and assist with Google Ads setup.',
  },

  {
    question: 'Is SEO included?',
    answer:
      'Basic SEO optimization is included in every project, including proper page structure, metadata, performance optimization, and mobile usability.',
  },

  {
    question: 'Can the landing page be expanded later?',
    answer:
      'Yes. A landing page can later be expanded into a full business website with additional pages and functionality.',
  },
];

const LandingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faq}>
      <div className="container">
        <div className={styles.faq__top}>
          <span>FAQ</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Answers to the most common questions about landing pages,
            development process, SEO, and Google Ads.
          </p>
        </div>

        <div className={styles.faq__list}>
          {faqItems.map((item, index) => (
            <article
              key={item.question}
              className={`${styles.faqItem} ${
                openIndex === index ? styles.active : ''
              }`}
            >
              <button
                className={styles.faqItem__button}
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>

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

export default LandingFAQ;
