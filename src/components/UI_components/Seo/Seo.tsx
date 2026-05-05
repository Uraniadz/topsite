import { Title, Meta, Link as HeadLink } from 'react-head';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CONTACTS } from '@/config/contact';
import { localeMap, supportedLngs } from '@/config/i18nConfig';

interface SeoProps {
  title: string;
  description: string;
  image?: string;
}

export default function Seo({ title, description, image }: SeoProps) {
  const location = useLocation();
  const { i18n } = useTranslation();

  const lang = i18n.resolvedLanguage || 'en';

  const path = decodeURIComponent(location.pathname);

  const canonicalUrl = `https://${CONTACTS.domain}${path}`;
  const ogImage = image || `https://${CONTACTS.domain}/og-image.png`;

  const locale = localeMap[lang] || 'en_US';
  const cleanPath = path.replace(
    new RegExp(`^\\/(${supportedLngs.join('|')})`),
    '',
  );
  return (
    <>
      {/* BASIC SEO */}
      <Title>{title}</Title>
      <Meta name="description" content={description} />
      <HeadLink rel="canonical" href={canonicalUrl} />

      {/* HREFLANG */}
      {supportedLngs.map((lng) => (
        <HeadLink
          key={lng}
          rel="alternate"
          hrefLang={lng}
          href={`https://${CONTACTS.domain}/${lng}${cleanPath}`}
        />
      ))}

      {/* DEFAULT */}
      <HeadLink
        rel="alternate"
        hrefLang="x-default"
        href={`https://${CONTACTS.domain}/en${cleanPath}`}
      />

      {/* OPEN GRAPH */}
      <Meta property="og:site_name" content={CONTACTS.companyName} />
      <Meta property="og:locale" content={locale} />
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content={canonicalUrl} />
      <Meta property="og:image" content={ogImage} />

      {/* TWITTER */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={description} />
      <Meta name="twitter:image" content={ogImage} />
    </>
  );
}
