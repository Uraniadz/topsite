import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import {
  ArrowRight,
  Bot,
  Code2,
  Megaphone,
  Rocket,
  ShieldCheck,
} from 'lucide-react';

import googleads from '@/assets/icons/adwords.png';

import teamHero from '@/assets/images/about/foto-we-about.webp';
import myFoto from '@/assets/images/about/my-foto-about.webp';
import myWife from '@/assets/images/about/wife-foto-about.webp';

import styles from './AboutPage.module.css';
import Seo from '@/components/UI_components/Seo/Seo';
import { CONTACTS } from '@/config/contact';

const AboutPage = () => {
  const { t } = useTranslation('about');

  const features = [
    {
      icon: <Code2 size={26} strokeWidth={2} />,
      title: t('features.items.development.title'),
      description: t('features.items.development.description'),
    },

    {
      icon: <Megaphone size={26} strokeWidth={2} />,
      title: t('features.items.ads.title'),
      description: t('features.items.ads.description'),
    },

    {
      icon: <Bot size={26} strokeWidth={2} />,
      title: t('features.items.ai.title'),
      description: t('features.items.ai.description'),
    },

    {
      icon: <ShieldCheck size={26} strokeWidth={2} />,
      title: t('features.items.support.title'),
      description: t('features.items.support.description'),
    },
  ];

  return (
    <>
      <Seo
        title={t('seo.title', { company: CONTACTS.companyName })}
        description={t('seo.description', { company: CONTACTS.companyName })}
      />
      <main className={styles.about}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.hero__imageWrapper}>
              <img
                src={teamHero}
                alt="Codevix Studio Team"
                className={styles.hero__image}
              />

              {/* LEFT CARD */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className={`${styles.floatingCard} ${styles.leftCard}`}
              >
                <div className={styles.cardIcon}>{'</>'}</div>

                <h3>{t('hero.leftCard.title')}</h3>

                <div className={styles.cardLine}></div>

                <ul>
                  <li>{t('hero.leftCard.items.react')}</li>
                  <li>{t('hero.leftCard.items.node')}</li>
                  <li>{t('hero.leftCard.items.mongo')}</li>
                  <li>{t('hero.leftCard.items.seo')}</li>
                </ul>
              </motion.div>

              {/* RIGHT CARD */}

              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className={`${styles.floatingCard} ${styles.rightCard}`}
              >
                <div className={styles.googleIcon}>
                  <img src={googleads} alt="Google Ads" />
                </div>

                <h3>{t('hero.rightCard.title')}</h3>

                <div className={styles.cardLine}></div>

                <ul>
                  <li>{t('hero.rightCard.items.campaigns')}</li>
                  <li>{t('hero.rightCard.items.keywords')}</li>
                  <li>{t('hero.rightCard.items.optimization')}</li>
                  <li>{t('hero.rightCard.items.analytics')}</li>
                </ul>
              </motion.div>

              {/* CENTER BRAND */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className={styles.heroBrand}
              >
                <span>{'</>'}</span>

                <h2>Codevix Studio</h2>

                <p>{t('hero.brand')}</p>
              </motion.div>
            </div>
          </div>

          <div className={styles.blurOne}></div>
          <div className={styles.blurTwo}></div>
        </section>

        <section className={styles.features}>
          <div className="container">
            <div className={styles.sectionTop}>
              <span className={styles.sectionBadge}>{t('features.badge')}</span>

              <h2>{t('features.title')}</h2>
            </div>

            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className={styles.feature}
                >
                  <div className={styles.featureIcon}>{feature.icon}</div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.team}>
          <div className="container">
            <div className={styles.sectionTop}>
              <span className={styles.sectionBadge}>{t('team.badge')}</span>

              <h2>{t('team.title')}</h2>
            </div>

            <div className={styles.teamGrid}>
              {/* YURII */}

              <motion.article
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={styles.member}
              >
                <div className={styles.memberImageWrapper}>
                  <img
                    src={myFoto}
                    alt="Yurii"
                    className={styles.memberImage}
                  />
                </div>

                <div className={styles.memberContent}>
                  <h3>{t('team.yurii.name')}</h3>

                  <span>{t('team.yurii.role')}</span>

                  <p>{t('team.yurii.description')}</p>

                  <div className={styles.memberTags}>
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Node.js</span>
                    <span>SEO</span>
                  </div>
                </div>
              </motion.article>

              {/* AI */}

              <motion.article
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`${styles.member} ${styles.aiMember}`}
              >
                <div className={styles.aiVisual}>
                  <div className={styles.aiGlow}></div>

                  <div className={styles.aiGrid}></div>

                  <div className={styles.aiIcon}>✦</div>
                </div>

                <div className={styles.aiContent}>
                  <h3>{t('team.ai.title')}</h3>

                  <span>{t('team.ai.subtitle')}</span>

                  <p>{t('team.ai.description')}</p>

                  <div className={styles.memberTags}>
                    <span>AI Design</span>
                    <span>Automation</span>
                    <span>UX/UI</span>
                  </div>
                </div>
              </motion.article>

              {/* YULIIA */}

              <motion.article
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={styles.member}
              >
                <div className={styles.memberImageWrapper}>
                  <img
                    src={myWife}
                    alt="Yuliia"
                    className={styles.memberImage}
                  />
                </div>

                <div className={styles.memberContent}>
                  <h3>{t('team.yuliia.name')}</h3>

                  <span>{t('team.yuliia.role')}</span>

                  <p>{t('team.yuliia.description')}</p>

                  <div className={styles.memberTags}>
                    <span>Google Ads</span>
                    <span>Analytics</span>
                    <span>Strategy</span>
                    <span>Optimization</span>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaBox}>
              <Rocket size={38} />

              <h2>{t('cta.title')}</h2>

              <p>{t('cta.description')}</p>

              <button className={styles.primaryBtn}>
                {t('cta.button')}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
