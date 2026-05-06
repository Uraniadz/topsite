import Seo from '@/components/UI_components/Seo/Seo';
import '../CookiesPolicy/CookiesPolicy.css'; // той самий стиль
import { CONTACTS } from '../../config/contact';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicyPage() {
  const { t } = useTranslation('privacy');

  const dataList = t('privacyPage.sections.data.list', {
    returnObjects: true,
  }) as string[];
  const purposesList = t('privacyPage.sections.purposes.list', {
    returnObjects: true,
  }) as string[];
  const legalList = t('privacyPage.sections.legal.list', {
    returnObjects: true,
  }) as string[];
  const retentionList = t('privacyPage.sections.retention.list', {
    returnObjects: true,
  }) as string[];
  const rightsList = t('privacyPage.sections.rights.list', {
    returnObjects: true,
  }) as string[];
  const cookiesList = t('privacyPage.sections.cookies.list', {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <Seo
        title={t('privacyPage.seo.title', { company: CONTACTS.companyName })}
        description={t('privacyPage.seo.description', {
          company: CONTACTS.companyName,
          domain: CONTACTS.domain,
        })}
      />

      <main className="cookies" aria-labelledby="privacy-title">
        <header className="cookies-hero">
          <div className="cookies-container">
            <p className="eyebrow">{CONTACTS.companyName}</p>

            <h1 id="privacy-title" className="cookies-h1">
              {t('privacyPage.title')}
            </h1>

            <p className="cookies-meta">
              {t('privacyPage.heroMeta')} {CONTACTS.domain}
            </p>
          </div>
        </header>

        <section className="cookies-content cookies-container">
          <ol className="cookies-list">
            <li>
              <h2>{t('privacyPage.sections.admin.title')}</h2>
              <p>
                {t('privacyPage.sections.admin.text', {
                  company: CONTACTS.companyName,
                })}
              </p>
            </li>

            <li>
              <h2>{t('privacyPage.sections.data.title')}</h2>
              <ul className="dash-list">
                {dataList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </li>

            <li>
              <h2>{t('privacyPage.sections.purposes.title')}</h2>
              <ul className="dash-list">
                {purposesList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </li>

            <li>
              <h2>{t('privacyPage.sections.legal.title')}</h2>
              <p>{t('privacyPage.sections.legal.intro')}</p>
              <ul className="dash-list">
                {legalList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </li>

            <li>
              <h2>{t('privacyPage.sections.sharing.title')}</h2>
              <p>{t('privacyPage.sections.sharing.text')}</p>
            </li>

            <li>
              <h2>{t('privacyPage.sections.retention.title')}</h2>
              <ul className="dash-list">
                {retentionList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </li>

            <li>
              <h2>{t('privacyPage.sections.rights.title')}</h2>
              <ul className="dash-list">
                {rightsList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </li>

            <li>
              <h2>{t('privacyPage.sections.cookies.title')}</h2>
              <p>
                {t('privacyPage.sections.cookies.intro', {
                  domain: CONTACTS.domain,
                })}
              </p>
              <ul className="dash-list">
                {cookiesList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p>{t('privacyPage.sections.cookies.footer')}</p>
            </li>

            <li>
              <h2>{t('privacyPage.sections.changes.title')}</h2>
              <p>
                {t('privacyPage.sections.changes.text', {
                  domain: CONTACTS.domain,
                })}
              </p>
            </li>
          </ol>

          <p className="cookies-updated">
            {t('privacyPage.updated')}:{' '}
            <time>{new Date().toLocaleDateString()}</time>
          </p>
        </section>
      </main>
    </>
  );
}
