import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import styles from './EcommerceProcess.module.css';

const EcommerceProcess = () => {
  const { t } = useTranslation('ecommerce');

  const steps = [
    t('process.steps.step1', { returnObjects: true }),
    t('process.steps.step2', { returnObjects: true }),
    t('process.steps.step3', { returnObjects: true }),
    t('process.steps.step4', { returnObjects: true }),
  ] as {
    number: string;
    title: string;
    description: string;
  }[];

  return (
    <section className={styles.process}>
      <div className="container">
        <div className={styles.process__header}>
          <span className={styles.process__badge}>{t('process.badge')}</span>

          <h2 className={styles.process__title}>
            {t('process.title.line1')}
            <br />
            <span>{t('process.title.line2')}</span>
          </h2>

          <p className={styles.process__description}>
            {t('process.description')}
          </p>
        </div>

        <div className={styles.process__timeline}>
          {steps.map((step, index) => (
            <div key={step.number} className={styles.process__card}>
              <div className={styles.process__number}>{step.number}</div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              {index !== steps.length - 1 && (
                <div className={styles.process__arrow}>
                  <ArrowRight size={22} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceProcess;
