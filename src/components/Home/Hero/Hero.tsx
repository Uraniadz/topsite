import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__content}>
          <div className={styles.hero__left}>
            <span className={styles.hero__badge}>Modern Web Development</span>

            <h1 className={styles.hero__title}>
              Websites that help your business grow
            </h1>

            <p className={styles.hero__text}>
              Modern landing pages, business websites and e-commerce solutions
              with scalable architecture.
            </p>

            <div className={styles.hero__actions}>
              <button>Get Started</button>
              <button>View Services</button>
            </div>
          </div>

          <div className={styles.hero__right}>IMAGE / MOCKUP</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
