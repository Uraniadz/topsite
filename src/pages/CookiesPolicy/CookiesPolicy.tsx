import Seo from '@/components/UI_components/Seo/Seo';
import './CookiesPolicy.css';
import { CONTACTS } from '../../config/contact';
import { useTranslation } from 'react-i18next';

export default function CookiesPolicyPage() {
  const { t } = useTranslation('cookies');

  const typesList = t('cookiesPage.sections.types.items', {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <Seo
        title={t('seo.cookies.title', {
          company: CONTACTS.companyName,
          city: t('contacts.city'),
        })}
        description={t('seo.cookies.description', {
          company: CONTACTS.companyName,
          domain: CONTACTS.domain,
        })}
      />

      <main className="cookies" aria-labelledby="cookies-title">
        {/* HERO */}
        <header className="cookies-hero">
          <div className="cookies-container">
            <p className="eyebrow">
              {CONTACTS.companyName} — {t('contacts.city')}
            </p>

            <h1 id="cookies-title" className="cookies-h1">
              {t('cookiesPage.title')}
            </h1>

            <p className="cookies-meta">
              {t('cookiesPage.heroMeta')} {CONTACTS.domain}
            </p>
          </div>
        </header>

        <section className="cookies-content cookies-container">
          <ol className="cookies-list">
            {/* INTRO */}
            <li>
              <h2>{t('cookiesPage.sections.intro.title')}</h2>
              <p>
                {t('cookiesPage.sections.intro.text', {
                  domain: CONTACTS.domain,
                  company: CONTACTS.companyName,
                })}
              </p>
            </li>

            {/* WHAT ARE COOKIES */}
            <li>
              <h2>{t('cookiesPage.sections.whatAreCookies.title')}</h2>
              <p>{t('cookiesPage.sections.whatAreCookies.text')}</p>
            </li>

            {/* TYPES */}
            <li>
              <h2>{t('cookiesPage.sections.types.title')}</h2>
              <ul className="dash-list">
                {typesList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </li>

            {/* GA4 */}
            <li>
              <h2>{t('cookiesPage.sections.ga4.title')}</h2>
              <p>{t('cookiesPage.sections.ga4.text')}</p>
            </li>

            {/* GOOGLE ADS */}
            <li>
              <h2>{t('cookiesPage.sections.ads.title')}</h2>
              <p>{t('cookiesPage.sections.ads.text')}</p>
            </li>

            {/* CONSENT MODE */}
            <li>
              <h2>{t('cookiesPage.sections.consent.title')}</h2>
              <p>{t('cookiesPage.sections.consent.text')}</p>
            </li>

            {/* MANAGEMENT */}
            <li>
              <h2>{t('cookiesPage.sections.management.title')}</h2>
              <p>{t('cookiesPage.sections.management.text')}</p>
            </li>

            {/* CHANGES */}
            <li>
              <h2>{t('cookiesPage.sections.changes.title')}</h2>
              <p>
                {t('cookiesPage.sections.changes.text', {
                  domain: CONTACTS.domain,
                })}
              </p>
            </li>
          </ol>

          <p className="cookies-updated">
            {t('cookiesPage.updated')}:{' '}
            <time>{new Date().toLocaleDateString()}</time>
          </p>
        </section>
      </main>
    </>
  );
}
