'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export default function CompanyForm() {
  const t = useTranslations('contactPage.form');
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log('Company form data:', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-cream rounded-2xl border border-navy/8 p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gold">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-3">{t('successTitle')}</h3>
        <p className="text-navy/60 text-sm leading-relaxed mb-8">{t('successMessage')}</p>
        <button
          onClick={() => { setSubmitted(false); reset(); }}
          className="text-gold font-semibold text-sm hover:underline"
        >
          {t('sendAnother')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-cream rounded-2xl border border-navy/8 p-8 md:p-10">
      <h2 className="text-xl font-bold text-navy mb-8">{t('title')}</h2>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-navy/70 mb-2 uppercase tracking-wider">
            {t('name')} <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            placeholder={t('namePlaceholder')}
            className={`w-full px-4 py-3 rounded-lg border bg-white text-navy text-sm placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-shadow ${
              errors.name ? 'border-red-400' : 'border-navy/15'
            }`}
            {...register('name', { required: t('errors.nameRequired') })}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name.message}</p>}
        </div>

        {/* Company */}
        <div>
          <label className="block text-xs font-semibold text-navy/70 mb-2 uppercase tracking-wider">
            {t('company')}
          </label>
          <input
            type="text"
            placeholder={t('companyPlaceholder')}
            className="w-full px-4 py-3 rounded-lg border border-navy/15 bg-white text-navy text-sm placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-shadow"
            {...register('company')}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-navy/70 mb-2 uppercase tracking-wider">
            {t('email')} <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            placeholder={t('emailPlaceholder')}
            className={`w-full px-4 py-3 rounded-lg border bg-white text-navy text-sm placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-shadow ${
              errors.email ? 'border-red-400' : 'border-navy/15'
            }`}
            {...register('email', {
              required: t('errors.emailRequired'),
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t('errors.emailInvalid'),
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-navy/70 mb-2 uppercase tracking-wider">
            {t('phone')}
          </label>
          <input
            type="tel"
            placeholder={t('phonePlaceholder')}
            className="w-full px-4 py-3 rounded-lg border border-navy/15 bg-white text-navy text-sm placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-shadow"
            {...register('phone')}
          />
        </div>
      </div>

      {/* Message */}
      <div className="mb-8">
        <label className="block text-xs font-semibold text-navy/70 mb-2 uppercase tracking-wider">
          {t('message')} <span className="text-gold">*</span>
        </label>
        <textarea
          rows={5}
          placeholder={t('messagePlaceholder')}
          className={`w-full px-4 py-3 rounded-lg border bg-white text-navy text-sm placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-shadow resize-none ${
            errors.message ? 'border-red-400' : 'border-navy/15'
          }`}
          {...register('message', {
            required: t('errors.messageRequired'),
            minLength: { value: 10, message: t('errors.messageMin') },
          })}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-navy text-white font-semibold py-4 rounded-lg hover:bg-navy-light transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? t('submitting') : t('submit')}
      </button>
    </form>
  );
}
