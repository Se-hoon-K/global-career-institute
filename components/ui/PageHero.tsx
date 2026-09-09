interface PageHeroProps {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
}

export default function PageHero({ badge, title, titleHighlight, subtitle }: PageHeroProps) {
  return (
    <section className="bg-navy pt-36 pb-24">
      <div className="container-max text-center">
        <p className="text-gold text-sm font-semibold mb-4">{badge}</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
          <br />
          {titleHighlight}
        </h1>
        <p className="text-white/60 max-w-xl mx-auto text-lg leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}
