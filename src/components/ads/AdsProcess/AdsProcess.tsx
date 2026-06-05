import { useTranslation } from 'react-i18next';

import styles from './AdsProcess.module.css';

const AdsProcess = () => {
  const { t } = useTranslation('ads');

  const steps = [
    {
      number: t('process.steps.step1.number'),
      title: t('process.steps.step1.title'),
      description: t('process.steps.step1.description'),
    },

    {
      number: t('process.steps.step2.number'),
      title: t('process.steps.step2.title'),
      description: t('process.steps.step2.description'),
    },

    {
      number: t('process.steps.step3.number'),
      title: t('process.steps.step3.title'),
      description: t('process.steps.step3.description'),
    },

    {
      number: t('process.steps.step4.number'),
      title: t('process.steps.step4.title'),
      description: t('process.steps.step4.description'),
    },

    {
      number: t('process.steps.step5.number'),
      title: t('process.steps.step5.title'),
      description: t('process.steps.step5.description'),
    },
  ];

  return (
    <section className={styles.process}>
      <div className="container">
        <div className={styles.process__header}>
          <span className={styles.process__badge}>{t('process.badge')}</span>

          <h2 className={styles.process__title}>
            {t('process.title.line1')}
            <br />
            {t('process.title.line2')}
          </h2>

          <p className={styles.process__description}>
            {t('process.description')}
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={step.number} className={styles.timeline__item}>
              <div className={styles.timeline__number}>{step.number}</div>

              {index !== steps.length - 1 && (
                <div className={styles.timeline__line}></div>
              )}

              <div className={styles.timeline__content}>
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdsProcess;
