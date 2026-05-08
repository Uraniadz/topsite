import { MessageCircle, PencilRuler, Code2, Rocket } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import styles from './Process.module.css';
import { useRef } from 'react';

const Process = () => {
  const { t } = useTranslation('home');

  const processSteps = [
    {
      id: '01',
      icon: <MessageCircle size={28} strokeWidth={2} />,
      title: t('process.steps.discovery.title'),
      description: t('process.steps.discovery.description'),
    },

    {
      id: '02',
      icon: <PencilRuler size={28} strokeWidth={2} />,
      title: t('process.steps.strategy.title'),
      description: t('process.steps.strategy.description'),
    },

    {
      id: '03',
      icon: <Code2 size={28} strokeWidth={2} />,
      title: t('process.steps.development.title'),
      description: t('process.steps.development.description'),
    },

    {
      id: '04',
      icon: <Rocket size={28} strokeWidth={2} />,
      title: t('process.steps.launch.title'),
      description: t('process.steps.launch.description'),
    },
  ];

  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className={styles.process}>
      <div className="container">
        <div className={styles.process__top}>
          <span>{t('process.badge')}</span>

          <h2>{t('process.title')}</h2>

          <p>{t('process.description')}</p>
        </div>

        <div ref={ref} className={styles.process__timeline}>
          <motion.div
            className={styles.process__line}
            style={{
              scaleY: lineScale,
            }}
          />

          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`${styles.process__card} ${
                index % 2 !== 0 ? styles.process__card_offset : ''
              }`}
            >
              <div className={styles.process__number}>{step.id}</div>

              <div className={styles.process__icon}>{step.icon}</div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
