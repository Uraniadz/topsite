import Select from 'react-select';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import './ContactForm.css';
import { useTranslation } from 'react-i18next';
import type { StylesConfig } from 'react-select';
import { webServiceData } from '@/data/serviceData';

type Option = { value: string; label: string };

const selectStyles: StylesConfig<Option, false> = {
  control: (base, state) => ({
    ...base,
    borderRadius: 10,
    borderColor: state.isFocused ? '#7fb0ff' : '#c9d7ee',
    boxShadow: state.isFocused ? '0 0 0 3px rgba(0,123,255,.18)' : 'none',
    backgroundColor: '#fbfdff',
    minHeight: 46,
  }),
};

const toOption = (options: Option[], val?: string): Option | null =>
  val
    ? (options.find((o) => o.value === val) ?? { value: val, label: val })
    : null;

const ContactForm = () => {
  const { t } = useTranslation('common');

  const schema = z.object({
    name: z.string().trim().min(1).max(50),
    phone: z.string().trim().min(1),
    email: z
      .string()
      .trim()
      .optional()
      .refine((val) => !val || z.string().email().safeParse(val).success),
    service: z.string().trim().min(1).max(100),
    message: z.string().trim().max(500).optional(),
  });

  type FormData = z.infer<typeof schema>;

  const { register, handleSubmit, control, formState, reset } =
    useForm<FormData>({
      resolver: zodResolver(schema),
    });

  const { errors, isSubmitting } = formState;

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const SERVICE_OPTIONS: Option[] = webServiceData.map((s) => {
    const label = t(s.i18nKey);
    return { value: label, label };
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setErrorMsg('Server error');
      }
    } catch {
      setErrorMsg('Network error');
    }
  };

  return (
    <section className="cf cf--modal">
      <div className="cf__wrap">
        <div className="cf__form">
          {/* HEADER ВНУТРІ */}
          <div className="cf__head">
            <h2 className="cf__title">{t('contactForm.title')}</h2>
            <p className="cf__subtitle">{t('contactForm.subtitle')}</p>

            <ul className="cf__chips">
              <li>
                <BiCheck /> {t('contactForm.chips.1')}
              </li>
              <li>
                <BiCheck /> {t('contactForm.chips.2')}
              </li>
              <li>
                <BiCheck /> {t('contactForm.chips.3')}
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="cf__row">
              <div className="cf__group">
                <label className="cf__label--required">
                  {t('contactForm.fields.name.label')}
                </label>
                <input {...register('name')} />
                {errors.name && (
                  <p className="cf__error">{errors.name.message}</p>
                )}
              </div>

              <div className="cf__group">
                <label className="cf__label--required">
                  {t('contactForm.fields.phone.label')}
                </label>
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country="pl"
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
            </div>

            <div className="cf__row">
              <div className="cf__group">
                <label>{t('contactForm.fields.email.label')}</label>
                <input {...register('email')} />
              </div>

              <div className="cf__group">
                <label className="cf__label--required">
                  {t('contactForm.fields.service.label')}
                </label>
                <Controller
                  control={control}
                  name="service"
                  render={({ field }) => (
                    <Select
                      className="react-select-container"
                      classNamePrefix="rs"
                      styles={selectStyles}
                      options={SERVICE_OPTIONS}
                      value={toOption(SERVICE_OPTIONS, field.value)}
                      placeholder={t('contactForm.fields.service.placeholder')}
                      onChange={(opt) => {
                        field.onChange((opt as Option | null)?.value ?? '');
                      }}
                    />
                  )}
                />
              </div>
            </div>

            <div className="cf__group">
              <label>{t('contactForm.fields.message.label')}</label>
              <textarea {...register('message')} />
            </div>

            <button disabled={isSubmitting} type="submit" className="cf__btn">
              {t('contactForm.submit.send')}
              <FaArrowRight />
            </button>

            {submitted && <p className="cf__success">OK</p>}
            {errorMsg && <p className="cf__error">{errorMsg}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
