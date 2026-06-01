import { MessageCircleMore, PencilRuler, Code2, Rocket } from 'lucide-react';

import styles from './LandingProcess.module.css';

const steps = [
  {
    id: '01',
    icon: <MessageCircleMore size={30} />,
    title: 'Discovery',
    description:
      'We learn about your business, audience, goals and the actions you want visitors to take.',
  },

  {
    id: '02',
    icon: <PencilRuler size={30} />,
    title: 'Structure & Design',
    description:
      'We create a conversion-focused structure and modern design tailored to your business.',
  },

  {
    id: '03',
    icon: <Code2 size={30} />,
    title: 'Development',
    description:
      'We build a fast, responsive landing page with forms, analytics and best practices.',
  },

  {
    id: '04',
    icon: <Rocket size={30} />,
    title: 'Launch & Growth',
    description:
      'After launch we can help with Google Ads, analytics and future improvements.',
  },
];

const LandingProcess = () => {
  return (
    <section className={styles.process}>
      <div className="container">
        <div className={styles.process__top}>
          <span>Our Process</span>

          <h2>From Idea to Launch</h2>

          <p>
            A simple and transparent process designed to deliver landing pages
            efficiently and without unnecessary complexity.
          </p>
        </div>

        <div className={styles.process__grid}>
          {steps.map((step) => (
            <article key={step.id} className={styles.processCard}>
              <div className={styles.processCard__number}>{step.id}</div>

              <div className={styles.processCard__icon}>{step.icon}</div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingProcess;
