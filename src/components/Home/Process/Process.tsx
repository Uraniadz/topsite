import { MessageCircle, PencilRuler, Code2, Rocket } from 'lucide-react';

import styles from './Process.module.css';

const processSteps = [
  {
    id: '01',
    icon: <MessageCircle size={28} strokeWidth={2} />,
    title: 'Discovery',
    description:
      'We learn about your business, goals, and project requirements to create the right strategy.',
  },

  {
    id: '02',
    icon: <PencilRuler size={28} strokeWidth={2} />,
    title: 'Strategy & Design',
    description:
      'We plan the structure, user experience, and visual direction tailored to your brand.',
  },

  {
    id: '03',
    icon: <Code2 size={28} strokeWidth={2} />,
    title: 'Development',
    description:
      'Clean, scalable, and modern development focused on performance and maintainability.',
  },

  {
    id: '04',
    icon: <Rocket size={28} strokeWidth={2} />,
    title: 'Launch & Support',
    description:
      'Testing, deployment, optimization, and ongoing support after the project goes live.',
  },
];

const Process = () => {
  return (
    <section className={styles.process}>
      <div className="container">
        <div className={styles.process__top}>
          <span>PROCESS</span>

          <h2>How We Turn Ideas Into Digital Products</h2>

          <p>
            Clear workflow focused on communication, speed, and high-quality
            development.
          </p>
        </div>

        <div className={styles.process__timeline}>
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
