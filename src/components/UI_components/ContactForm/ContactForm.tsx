import { components } from 'react-select';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import CreatableSelect from 'react-select/creatable';
import type { OptionProps } from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRef, useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import './ContactForm.css';
import { useTranslation } from 'react-i18next';
import type { StylesConfig, SelectInstance } from 'react-select';

// ✅ імпортуй актуальні послуги (i18nKey всередині
import { webServiceData } from '@/data/serviceData';

type FormData = {
  name: string;
  phone: string;
  email?: string;
  service: string;
  message?: string;
};

type Option = { value: string; label: string };

/** Спільні стилі select */
const selectStyles: StylesConfig<Option, false> = {
  control: (base, state) => ({
    ...base,
    borderRadius: 10,
    borderColor: state.isFocused ? '#7fb0ff' : '#c9d7ee',
    boxShadow: state.isFocused ? '0 0 0 3px rgba(0,123,255,.18)' : 'none',
    '&:hover': {
      borderColor: state.isFocused ? '#7fb0ff' : '#b9cbe9',
    },
    backgroundColor: '#fbfdff',
    minHeight: 46,
  }),

  placeholder: (base) => ({
    ...base,
    color: '#7a8aa1',
  }),

  menu: (base) => ({
    ...base,
    zIndex: 5,
    borderRadius: 10,
  }),
};

/** Компонент рядка опції (показує курсив для "custom") */
const OptionRow =
  (customValue: string) => (props: OptionProps<Option, false>) => {
    const isCustom = props.data.value === customValue;
    return (
      <components.Option {...props}>
        {isCustom ? (
          <span style={{ fontStyle: 'italic' }}>✎ {props.data.label}</span>
        ) : (
          props.data.label
        )}
      </components.Option>
    );
  };

/** Пошук опції за значенням (value === тексту) */
const toOption = (options: Option[], val?: string): Option | null =>
  val
    ? (options.find((o) => o.value === val) ?? { value: val, label: val })
    : null;

/** Фабрика схеми валідації (щоб мати тексти з i18n) */
type TFunction = (key: string, options?: Record<string, unknown>) => string;

const makeSchema = (t: TFunction) =>
  yup.object().shape({
    name: yup
      .string()
      .max(50, t('homePage.contactForm.fields.name.max'))
      .required(t('homePage.contactForm.fields.name.required')),
    phone: yup
      .string()
      .required(t('homePage.contactForm.fields.phone.required')),
    email: yup
      .string()
      .email(t('homePage.contactForm.fields.email.invalid'))
      .optional(),
    service: yup
      .string()
      .max(100, t('homePage.contactForm.fields.service.max'))
      .required(t('homePage.contactForm.fields.service.required')),
    message: yup
      .string()
      .max(500, t('homePage.contactForm.fields.message.max'))
      .optional(),
  });

/* ===========================
 * Основна секція з заголовком і формою
 * =========================== */
const ContactForm = () => {
  const { t } = useTranslation();

  // Будуємо опції сервісів з i18n
  const SERVICE_OPTIONS: Option[] = webServiceData.map((s) => {
    const label = t(s.i18nKey);
    return { value: label, label };
  });

  const CUSTOM_VALUE = '__custom__';
  const CUSTOM_OPTION: Option = {
    value: CUSTOM_VALUE,
    label: t('homePage.contactForm.fields.service.custom'),
  };
  const OPTIONS_WITH_CUSTOM: Option[] = [...SERVICE_OPTIONS, CUSTOM_OPTION];

  const schema = makeSchema(t);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(
      schema,
    ) as unknown as import('react-hook-form').Resolver<FormData>,
  });

  const selectRef = useRef<SelectInstance<Option, false> | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [serviceInput, setServiceInput] = useState('');

  const onSubmit = async (data: FormData) => {
    setErrorMsg('');
    try {
      const res = await fetch('/mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
        setServiceInput('');
        setTimeout(() => setSubmitted(false), 4000);
      } else setErrorMsg(t('homePage.contactForm.submit.error.server'));
    } catch {
      setErrorMsg(t('homePage.contactForm.submit.error.network'));
    }
  };

  return (
    <section className="cf">
      <div className="cf__wrap">
        <header className="cf__head">
          <h2 className="cf__title">{t('homePage.contactForm.title')}</h2>
          <p className="cf__subtitle">{t('homePage.contactForm.subtitle')}</p>

          <ul className="cf__chips" aria-label="Jak to działa">
            <li>
              <BiCheck /> {t('homePage.contactForm.chips.1')}
            </li>
            <li>
              <BiCheck /> {t('homePage.contactForm.chips.2')}
            </li>
            <li>
              <BiCheck /> {t('homePage.contactForm.chips.3')}
            </li>
          </ul>
        </header>

        {/* форма */}
        <form onSubmit={handleSubmit(onSubmit)} className="cf__form" noValidate>
          <div className="cf__row">
            <div className="cf__group">
              <label htmlFor="name" className="cf__label--required">
                {t('homePage.contactForm.fields.name.label')}
              </label>
              <input
                id="name"
                type="text"
                maxLength={50}
                placeholder={t('homePage.contactForm.fields.name.placeholder')}
                {...register('name')}
              />
              {errors.name && (
                <p className="cf__error">{errors.name.message}</p>
              )}
            </div>

            <div className="cf__group">
              <label htmlFor="phone" className="cf__label--required">
                {t('homePage.contactForm.fields.phone.label')}
              </label>
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    country="pl"
                    preferredCountries={['pl']}
                    inputProps={{
                      name: 'phone',
                      id: 'phone',
                      required: true,
                      placeholder: t(
                        'homePage.contactForm.fields.phone.placeholder',
                      ),
                    }}
                    specialLabel=""
                    inputStyle={{ width: '100%' }}
                    onChange={(val) => field.onChange(val)}
                  />
                )}
              />
              {errors.phone && (
                <p className="cf__error">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="cf__row">
            <div className="cf__group">
              <label htmlFor="email">
                {t('homePage.contactForm.fields.email.label')}
              </label>
              <input
                id="email"
                type="email"
                placeholder={t('homePage.contactForm.fields.email.placeholder')}
                {...register('email')}
              />
              {errors.email && (
                <p className="cf__error">{errors.email.message}</p>
              )}
            </div>

            <div className="cf__group">
              <label className="cf__label--required">
                {t('homePage.contactForm.fields.service.label')}
              </label>
              <Controller
                control={control}
                name="service"
                render={({ field }) => (
                  <CreatableSelect
                    ref={selectRef}
                    className="react-select-container"
                    classNamePrefix="rs"
                    styles={selectStyles}
                    components={{ Option: OptionRow(CUSTOM_VALUE) }}
                    isClearable
                    options={OPTIONS_WITH_CUSTOM}
                    value={toOption(OPTIONS_WITH_CUSTOM, field.value)}
                    placeholder={t(
                      'homePage.contactForm.fields.service.placeholder',
                    )}
                    inputValue={serviceInput}
                    onInputChange={(val, meta) => {
                      if (meta.action === 'input-change')
                        setServiceInput(val.slice(0, 100));
                      else setServiceInput(val);
                    }}
                    formatCreateLabel={(input) =>
                      t('homePage.contactForm.fields.service.add', { input })
                    }
                    noOptionsMessage={() =>
                      t('homePage.contactForm.fields.service.noOptions')
                    }
                    onChange={(opt) => {
                      const val = (opt as Option | null)?.value ?? '';
                      if (val === CUSTOM_VALUE) {
                        field.onChange('');
                        setServiceInput('');
                        setTimeout(() => selectRef.current?.focus(), 0);
                        return;
                      }
                      field.onChange(val);
                      setServiceInput('');
                    }}
                    onCreateOption={(input) => {
                      const trimmed = input.slice(0, 100).trim();
                      if (!trimmed) return;
                      field.onChange(trimmed);
                      setServiceInput('');
                    }}
                    onBlur={() => {
                      const val = serviceInput.trim();
                      if (val && val.length > 0) {
                        const trimmed = val.slice(0, 100);
                        field.onChange(trimmed);
                        setServiceInput('');
                      }
                    }}
                  />
                )}
              />
              {errors.service && (
                <p className="cf__error">{errors.service.message}</p>
              )}
            </div>
          </div>

          <div className="cf__group">
            <label htmlFor="message">
              {t('homePage.contactForm.fields.message.label')}
            </label>
            <textarea
              id="message"
              placeholder={t('homePage.contactForm.fields.message.placeholder')}
              maxLength={500}
              {...register('message')}
            />
            {errors.message && (
              <p className="cf__error">{errors.message.message}</p>
            )}
          </div>

          <button type="submit" disabled={isSubmitting} className="cf__btn">
            {isSubmitting
              ? t('homePage.contactForm.submit.sending')
              : t('homePage.contactForm.submit.send')}
            <FaArrowRight />
          </button>

          {submitted && (
            <p className="cf__success">
              {t('homePage.contactForm.submit.success')}
            </p>
          )}
          {errorMsg && <p className="cf__error">❌ {errorMsg}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
