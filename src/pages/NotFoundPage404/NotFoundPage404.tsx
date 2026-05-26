import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './NotFoundPage404.css';

export default function NotFoundPage404() {
  const { t } = useTranslation('common');

  return (
    <main className="nf" aria-labelledby="nf-title">
      <section
        className="nf__card"
        role="group"
        aria-label={t('notFound.groupAria')}
      >
        <p className="nf__badge" aria-hidden="true">
          {t('notFound.badge')}
        </p>

        <h1 id="nf-title" className="nf__title">
          {t('notFound.title')}
        </h1>

        <p className="nf__text">{t('notFound.text')}</p>

        <div className="nf__actions">
          <Link
            to="/"
            className="nf__btn"
            aria-label={t('notFound.buttonAria')}
          >
            {t('notFound.button')}
          </Link>
        </div>

        <p className="nf__hint">
          {t('notFound.hint')}{' '}
          <span className="nf__code">{t('notFound.code')}</span>
        </p>
      </section>
    </main>
  );
}
