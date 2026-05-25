import {
  ArrowRight,
  MessageCircleMore,
  Send,
  MessageCircle,
} from 'lucide-react';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import styles from './Cta.module.css';

const messengers = [
  {
    id: 1,
    title: 'Telegram',
    icon: <Send size={16} />,
    link: 'https://t.me/yourtelegram',
    className: 'cta__telegram',
  },

  {
    id: 2,
    title: 'WhatsApp',
    icon: <MessageCircle size={16} />,
    link: 'https://wa.me/000000000',
    className: 'cta__whatsapp',
  },

  {
    id: 3,
    title: 'Messenger',
    icon: <MessageCircleMore size={16} />,
    link: 'https://m.me/yourpage',
    className: 'cta__messengerBottom',
  },
];

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.15,

    x: 0,
    y: 0,

    filter: 'blur(10px)',
  },

  visible: (position: { x: number; y: number; delay: number }) => ({
    opacity: 1,
    scale: 1,

    x: position.x,
    y: position.y,

    filter: 'blur(0px)',

    transition: {
      delay: position.delay,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),

  exit: {
    opacity: 0,
    scale: 0.15,

    x: 0,
    y: 0,

    filter: 'blur(10px)',

    transition: {
      duration: 0.22,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

const Cta = () => {
  const [opened, setOpened] = useState(false);

  return (
    <section className={styles.cta}>
      <div className="container">
        <motion.div
          className={styles.cta__wrapper}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.cta__glow} />

          <div className={styles.cta__content}>
            <span className={styles.cta__badge}>
              LET&apos;S BUILD SOMETHING GREAT
            </span>

            <h2>
              Ready to grow <br />
              your business online?
            </h2>

            <p>
              We create modern websites focused on performance, trust and
              long-term business growth.
            </p>

            <div className={styles.cta__actions}>
              <a href="#contact-form" className={styles.cta__primary}>
                Start Project
                <ArrowRight size={18} />
              </a>

              <div
                className={`${styles.cta__consultation} ${
                  opened ? styles.cta__consultationOpened : ''
                }`}
              >
                <motion.button
                  type="button"
                  onClick={() => setOpened((prev) => !prev)}
                  className={styles.cta__secondary}
                  whileTap={{ scale: 0.97 }}
                >
                  <AnimatePresence mode="wait">
                    {!opened ? (
                      <motion.div
                        key="consultation"
                        className={styles.cta__buttonContent}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <MessageCircleMore size={18} />

                        <span>Free Consultation</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="back"
                        className={styles.cta__buttonContent}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                      >
                        <motion.span
                          animate={{
                            rotate: [0, -8, 8, -8, 0],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2.4,
                          }}
                        >
                          😉
                        </motion.span>

                        <span>Close</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                <AnimatePresence>
                  {opened &&
                    messengers.map((item, index) => (
                      <motion.a
                        key={item.id}
                        custom={
                          index === 0
                            ? { x: 0, y: -82, delay: 0 }
                            : index === 1
                              ? { x: 150, y: 0, delay: 0.06 }
                              : { x: 0, y: 82, delay: 0.12 }
                        }
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.cta__messenger} ${
                          styles[item.className]
                        }`}
                      >
                        {item.icon}

                        <span>{item.title}</span>
                      </motion.a>
                    ))}
                </AnimatePresence>
              </div>
            </div>

            <div className={styles.cta__bottom}>
              <span>Response within 24 hours</span>

              <span className={styles.cta__dot} />

              <span>Poland & Ukraine</span>

              <span className={styles.cta__dot} />

              <span>Custom-built solutions</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
