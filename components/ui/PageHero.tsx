interface PageHeroProps {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
}

export default function PageHero({ badge, title, titleHighlight, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-navy pt-36 pb-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="container-max relative z-10 text-center">
        <div className="inline-flex items-center gap-2 border border-gold/30 rounded-full px-4 py-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="text-gold text-sm font-medium">{badge}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
          <br />
          <span className="text-gold">{titleHighlight}</span>
        </h1>
        <p className="text-white/50 max-w-xl mx-auto text-lg leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}
