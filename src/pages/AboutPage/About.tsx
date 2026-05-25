import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Code2,
  Megaphone,
  Rocket,
  ShieldCheck,
} from 'lucide-react';
import googleads from '@/assets/icons/adwords.png';
import teamHero from '@/assets/images/about/team-hero.png';
import myFoto from '@/assets/images/about/myFoto.png';
import myWife from '@/assets/images/about/myWife2.png';

import styles from './AboutPage.module.css';

const features = [
  {
    icon: <Code2 size={26} strokeWidth={2} />,
    title: 'Modern Development',
    description:
      'Fast modern websites built with scalable technologies and performance-focused architecture.',
  },

  {
    icon: <Megaphone size={26} strokeWidth={2} />,
    title: 'Google Ads',
    description:
      'Campaigns focused on visibility, qualified traffic, and real business growth.',
  },

  {
    icon: <Bot size={26} strokeWidth={2} />,
    title: 'AI-Assisted Workflows',
    description:
      'Modern AI tools helping us speed up workflows and improve project efficiency.',
  },

  {
    icon: <ShieldCheck size={26} strokeWidth={2} />,
    title: 'Long-Term Support',
    description:
      'Continuous website updates and improvements for clients working with us.',
  },
];

const AboutPage = () => {
  return (
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

              <h3>Full Stack Developer & SEO</h3>

              <div className={styles.cardLine}></div>

              <ul>
                <li>React / TypeScript</li>
                <li>Node.js / Express</li>
                <li>MongoDB</li>
                <li>SEO & Performance</li>
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

              <h3>Google Ads Specialist</h3>

              <div className={styles.cardLine}></div>

              <ul>
                <li>Google Ads Campaigns</li>
                <li>Keyword Research</li>
                <li>Conversion Optimization</li>
                <li>Analytics & Strategy</li>
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

              <p>WE BUILD. WE PROMOTE. WE GROW.</p>
            </motion.div>
          </div>
        </div>

        <div className={styles.blurOne}></div>
        <div className={styles.blurTwo}></div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <div className={styles.sectionTop}>
            <span className={styles.sectionBadge}>WHAT WE DO</span>

            <h2>Complete digital solutions for modern businesses</h2>
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
            <span className={styles.sectionBadge}>MEET THE TEAM</span>

            <h2>People behind Codevix Studio</h2>
          </div>

          <div className={styles.teamGrid}>
            <motion.article
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.member}
            >
              <div className={styles.memberImageWrapper}>
                <img src={myFoto} alt="Yurii" className={styles.memberImage} />
              </div>

              <div className={styles.memberContent}>
                <h3>Yurii</h3>

                <span>Full Stack Developer & SEO</span>

                <p>
                  Building modern scalable websites with clean architecture,
                  performance optimization, and strong SEO foundations.
                </p>

                <div className={styles.memberTags}>
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Node.js</span>
                  <span>SEO</span>
                </div>
              </div>
            </motion.article>
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
                <h3>AI-Powered Solutions</h3>

                <span>Smart workflows & design assistance</span>

                <p>
                  We use modern AI tools for faster prototyping, UI/UX concept
                  generation, content assistance, SEO support, automation, and
                  workflow optimization.
                </p>

                <div className={styles.memberTags}>
                  <span>AI Design</span>
                  <span>Automation</span>
                  <span>SEO</span>
                  <span>UX/UI</span>
                </div>
              </div>
            </motion.article>
            <motion.article
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={styles.member}
            >
              <div className={styles.memberImageWrapper}>
                <img src={myWife} alt="Oksana" className={styles.memberImage} />
              </div>

              <div className={styles.memberContent}>
                <h3>Oksana</h3>

                <span>Google Ads Specialist</span>

                <p>
                  Helping businesses grow through Google Ads campaigns,
                  analytics, optimization, and digital marketing strategies.
                </p>

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

            <h2>Ready to grow your business online?</h2>

            <p>
              We combine development, advertising, and modern technologies to
              help businesses launch faster and grow more effectively online.
            </p>

            <button className={styles.primaryBtn}>
              Start Your Project
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
