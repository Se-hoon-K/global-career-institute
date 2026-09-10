import { useTranslations } from 'next-intl';
import PageIntro from '@/components/ui/PageIntro';
import ContactFormSection from '@/components/contact/ContactFormSection';

export default function ContactPage() {
  const t = useTranslations('contactPage');
  const contactItems = [
    { label: t('info.email'), value: t('info.emailValue'), href: `mailto:${t('info.emailValue')}` },
    { label: t('info.phone'), value: t('info.phoneValue'), href: `tel:${t('info.phoneValue').replace(/\s/g, '')}` },
    { label: t('info.address'), value: t('info.addressValue') },
    { label: t('info.hours'), value: t('info.hoursValue') },
  ];

  return (
    <>
      <PageIntro
        sectionLabel={t('hero.badge')}
        title={`${t('hero.title')} ${t('hero.titleHighlight')}`}
        summary={t('hero.subtitle')}
      />

      <section className="bg-white">
        <div className="container-max grid gap-14 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-xl font-bold text-navy">{t('info.title')}</h2>
            <dl className="mt-8 border-t border-navy/20">
              {contactItems.map((item) => (
                <div key={item.label} className="border-b border-navy/15 py-5">
                  <dt className="text-xs font-semibold tracking-[0.08em] text-gold-dark uppercase">{item.label}</dt>
                  <dd className="mt-2 text-sm leading-6 font-medium text-navy">
                    {item.href ? <a href={item.href} className="hover:underline">{item.value}</a> : item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ContactFormSection />
          </div>
        </div>
      </section>
    </>
  );
}
