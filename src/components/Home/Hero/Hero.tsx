import styles from './Hero.module.css';
import heroImage from '@/assets/images/hero/hero2.png';
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__content}>
          <div className={styles.hero__left}>
            <span className={styles.hero__badge}>
              Full Stack Web Development
            </span>

            <h1 className={styles.hero__title}>
              Modern websites for growing businesses
            </h1>

            <p className={styles.hero__text}>
              Landing pages, business websites and scalable e-commerce platforms
              built with React, TypeScript and Node.js.
            </p>

            <div className={styles.hero__actions}>
              <button className={styles.hero__primary}>Start Project</button>

              <button className={styles.hero__secondary}>View Services</button>
            </div>

            <div className={styles.hero__stats}>
              <div className={styles.hero__stat}>
                <strong>
                  <span className={styles.hero__statDot} />
                  React
                </strong>

                <span>Frontend</span>
              </div>

              <div className={styles.hero__stat}>
                <strong>
                  <span className={styles.hero__statDot} />
                  Node.js
                </strong>

                <span>Backend</span>
              </div>

              <div className={styles.hero__stat}>
                <strong>
                  <span className={styles.hero__statDot} />
                  SEO
                </strong>

                <span>Optimization</span>
              </div>
            </div>
          </div>

          <div className={styles.hero__right}>
            <div className={styles.hero__mockup}>
              <div className={styles.hero__window}>
                <div className={styles.hero__dots}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className={styles.hero__preview}>
                <img
                  src={heroImage}
                  alt="Modern website preview"
                  className={styles.hero__img}
                />
              </div>
            </div>

            <div className={styles.hero__floating}>Fast & Modern UI</div>

            <div className={styles.hero__floatingBottom}>Responsive Design</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
