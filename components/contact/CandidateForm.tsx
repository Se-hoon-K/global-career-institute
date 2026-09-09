// Dependencies: npm install pdfjs-dist mammoth
'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

type FormData = {
  name: string;
  email: string;
  phone: string;
  positionOfInterest: string;
  message: string;
  resume: FileList;
};

async function extractResumeText(file: File): Promise<string> {
  // For PDFs: use pdfjs-dist
  if (file.type === 'application/pdf') {
    const pdfjsLib = await import('pdfjs-dist');
    pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let text = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text +=
        content.items
          .map((item: unknown) =>
            item && typeof item === 'object' && 'str' in item
              ? (item as { str: string }).str
              : ''
          )
          .join(' ') + '\n';
    }
    return text;
  }
  // For DOC/DOCX: use mammoth
  if (
    file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
    file.type === 'application/msword'
  ) {
    const mammoth = await import('mammoth');
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value;
  }
  return '';
}

function parseResumeText(text: string) {
  const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  const phoneMatch = text.match(/(\+?[\d\s\-().]{10,})/);
  // Name: first non-empty line that's not an email/phone and is 2-4 words
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  const nameLine = lines.find(
    (line) =>
      line.split(' ').length >= 2 &&
      line.split(' ').length <= 4 &&
      !line.includes('@') &&
      !/\d{4,}/.test(line)
  );
  return {
    email: emailMatch?.[0] || '',
    phone: phoneMatch?.[0]?.trim() || '',
    name: nameLine || '',
  };
}

export default function CandidateForm() {
  const t = useTranslations('contactPage.candidateForm');
  const tForm = useTranslations('contactPage.form');
  const [submitted, setSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    try {
      const text = await extractResumeText(file);
      const parsed = parseResumeText(text);
      if (parsed.name && !watch('name')) setValue('name', parsed.name, { shouldValidate: false });
      if (parsed.email && !watch('email')) setValue('email', parsed.email, { shouldValidate: false });
      if (parsed.phone && !watch('phone')) setValue('phone', parsed.phone, { shouldValidate: false });
    } catch {
      // Silently fail — auto-fill is a nice-to-have
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setValue('resume', undefined as unknown as FileList);
  };

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    // TODO: POST to API route with FormData (including resume file)
    console.log('Candidate form data:', data, selectedFile);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-cream rounded-2xl border border-navy/8 p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-gold"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-3">{t('successTitle')}</h3>
        <p className="text-navy/60 text-sm leading-relaxed mb-8">{t('successMessage')}</p>
        <button
          onClick={() => {
            setSubmitted(false);
            setSelectedFile(null);
            reset();
          }}
          className="text-gold font-semibold text-sm hover:underline"
        >
          {t('sendAnother')}
        </button>
      </div>
    );
  }

  const {
    ref: resumeRegisterRef,
    onChange: resumeRegisterOnChange,
    ...resumeRest
  } = register('resume', {
    validate: {
      fileType: (files) => {
        if (!files?.length) return true;
        const allowed = [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ];
        return allowed.includes(files[0].type) || t('errors.resumeType');
      },
      fileSize: (files) => {
        if (!files?.length) return true;
        return files[0].size <= 5 * 1024 * 1024 || t('errors.resumeSize');
      },
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-cream rounded-2xl border border-navy/8 p-8 md:p-10">
      <h2 className="text-xl font-bold text-navy mb-8">{t('title')}</h2>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-navy/70 mb-2">
            {tForm('name')} <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            placeholder={tForm('namePlaceholder')}
            className={`w-full px-4 py-3 rounded-lg border bg-white text-navy text-sm placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-shadow ${
              errors.name ? 'border-red-400' : 'border-navy/15'
            }`}
            {...register('name', { required: t('errors.nameRequired') })}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-navy/70 mb-2">
            {tForm('email')} <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            placeholder={tForm('emailPlaceholder')}
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
          <label className="block text-xs font-semibold text-navy/70 mb-2">
            {tForm('phone')}
          </label>
          <input
            type="tel"
            placeholder={tForm('phonePlaceholder')}
            className="w-full px-4 py-3 rounded-lg border border-navy/15 bg-white text-navy text-sm placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-shadow"
            {...register('phone')}
          />
        </div>

        {/* Position of Interest */}
        <div>
          <label className="block text-xs font-semibold text-navy/70 mb-2">
            {t('positionOfInterest')}
          </label>
          <input
            type="text"
            placeholder={t('positionPlaceholder')}
            className="w-full px-4 py-3 rounded-lg border border-navy/15 bg-white text-navy text-sm placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-shadow"
            {...register('positionOfInterest')}
          />
        </div>
      </div>

      {/* Message */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-navy/70 mb-2">
          {tForm('message')} <span className="text-gold">*</span>
        </label>
        <textarea
          rows={4}
          placeholder={tForm('messagePlaceholder')}
          className={`w-full px-4 py-3 rounded-lg border bg-white text-navy text-sm placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-shadow resize-none ${
            errors.message ? 'border-red-400' : 'border-navy/15'
          }`}
          {...register('message', {
            required: t('errors.messageRequired'),
            minLength: { value: 10, message: t('errors.messageMin') },
          })}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>
        )}
      </div>

      {/* Resume Upload */}
      <div className="mb-8">
        <label className="block text-xs font-semibold text-navy/70 mb-2">
          {t('resume')}
        </label>
        <p className="text-navy/40 text-xs mb-3">{t('resumeHint')}</p>

        {/* Hidden file input wired to react-hook-form + custom onChange */}
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="sr-only"
          ref={(el) => {
            resumeRegisterRef(el);
            (fileInputRef as React.MutableRefObject<HTMLInputElement | null>).current = el;
          }}
          onChange={(e) => {
            resumeRegisterOnChange(e);
            handleFileChange(e);
          }}
          {...resumeRest}
        />

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="px-5 py-2.5 rounded-lg border border-navy/20 bg-white text-navy text-sm font-medium hover:border-navy/40 transition-colors shrink-0"
          >
            {t('resumeButton')}
          </button>

          {selectedFile ? (
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-navy text-sm truncate">{selectedFile.name}</span>
              <button
                type="button"
                onClick={handleRemoveFile}
                className="shrink-0 w-5 h-5 rounded-full bg-navy/10 hover:bg-navy/20 flex items-center justify-center transition-colors"
                aria-label="Remove file"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          ) : (
            <span className="text-navy/30 text-sm">{t('resumeNoFile')}</span>
          )}
        </div>

        {errors.resume && (
          <p className="text-red-500 text-xs mt-1.5">
            {errors.resume.message as string}
          </p>
        )}
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
