import { ClipboardList, LayoutTemplate, Code2, TrendingUp } from 'lucide-react';

import { useTranslation } from 'react-i18next';

import styles from './BusinessProcess.module.css';

const BusinessProcess = () => {
  const { t } = useTranslation('business');

  const steps = [
    {
      id: '01',
      icon: <ClipboardList size={30} />,
      label: t('process.steps.discovery.label'),
      title: t('process.steps.discovery.title'),
      description: t('process.steps.discovery.description'),
    },

    {
      id: '02',
      icon: <LayoutTemplate size={30} />,
      label: t('process.steps.design.label'),
      title: t('process.steps.design.title'),
      description: t('process.steps.design.description'),
    },

    {
      id: '03',
      icon: <Code2 size={30} />,
      label: t('process.steps.development.label'),
      title: t('process.steps.development.title'),
      description: t('process.steps.development.description'),
    },

    {
      id: '04',
      icon: <TrendingUp size={30} />,
      label: t('process.steps.launch.label'),
      title: t('process.steps.launch.title'),
      description: t('process.steps.launch.description'),
    },
  ];

  return (
    <section className={styles.process}>
      <div className="container">
        <div className={styles.process__top}>
          <span>{t('process.badge')}</span>

          <h2>{t('process.title')}</h2>

          <p>{t('process.description')}</p>
        </div>

        <div className={styles.process__grid}>
          {steps.map((step) => (
            <article key={step.id} className={styles.processCard}>
              <div className={styles.processCard__number}>{step.id}</div>

              <div className={styles.processCard__icon}>{step.icon}</div>

              <span className={styles.processCard__label}>{step.label}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessProcess;
