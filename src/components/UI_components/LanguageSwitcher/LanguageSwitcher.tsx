import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { supportedLngs, LANGS } from '@/config/i18nConfig';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { lng } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const currentLang = LANGS.find((l) => l.code === lng) || LANGS[0];

  // 🔥 закриття при кліку поза компонентом
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // 🔥 прибираємо мову з URL
  const stripLangFromPath = (pathname: string) => {
    const regex = new RegExp(`^/(${supportedLngs.join('|')})`);
    return pathname.replace(regex, '') || '';
  };

  // 🔥 зміна мови
  const changeLanguage = (newLng: string) => {
    if (!lng || newLng === lng) {
      setOpen(false);
      return;
    }

    const cleanPath = stripLangFromPath(location.pathname);

    navigate(`/${newLng}${cleanPath}`);
    setOpen(false);
  };

  return (
    <div className="lang-dropdown" ref={ref}>
      {/* Кнопка */}
      <button className="lang-trigger" onClick={() => setOpen((prev) => !prev)}>
        <img
          src={currentLang.flag}
          alt={currentLang.label}
          className="lang-flag"
        />
        <span>{currentLang.code.toUpperCase()}</span>
      </button>

      {/* Меню */}
      {open && (
        <div className="lang-menu">
          {LANGS.map((lang) => (
            <button
              key={lang.code}
              className={`lang-item ${lang.code === lng ? 'active' : ''}`}
              onClick={() => changeLanguage(lang.code)}
            >
              <img src={lang.flag} alt={lang.label} className="lang-flag" />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
