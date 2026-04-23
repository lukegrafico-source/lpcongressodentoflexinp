import { createFileRoute } from "@tanstack/react-router";
import produtoImg from "@/assets/produto.png";
import logoVertical from "@/assets/logo-vertical.png";
import logoHorizontal from "@/assets/logo-horizontal.png";
import graficoCC from "@/assets/grafico-cc.png";
import graficoDA from "@/assets/grafico-da.png";
import bgTech from "@/assets/background.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "T CONNECT — Abutment Triplo | Dentoflex.inp" },
      {
        name: "description",
        content:
          "T CONNECT Abutment Triplo: a nova era da implantodontia. Engenharia avançada e precisão clínica para reabilitações complexas. Pré-lançamento Dentoflex.inp.",
      },
      { property: "og:title", content: "T CONNECT — Abutment Triplo | Dentoflex.inp" },
      {
        property: "og:description",
        content:
          "Pré-lançamento exclusivo. Engenharia avançada e precisão clínica na reabilitação de casos complexos.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.453 3.488z" />
  </svg>
);

const PhoneIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WHATSAPP_LINK = "https://wa.me/5511995898239";

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Persistent tech background */}
      <div
        className="fixed inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: `url(${bgTech})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      <div className="fixed inset-0 -z-10 grid-pattern opacity-30" />

      {/* NAV */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <img src={logoHorizontal} alt="Dentoflex.inp" className="h-7 w-auto md:h-8" />
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium backdrop-blur-md transition-all hover:border-primary/60 hover:bg-primary/10 hover:text-primary md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Fale com um especialista
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-6 pt-8 pb-24 lg:px-10 lg:pt-16 lg:pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-glow" />
              Pré-lançamento exclusivo
            </div>

            <h1 className="reveal reveal-delay-1 text-5xl font-extrabold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-gradient-cyan block">T CONNECT</span>
              <span className="text-gradient mt-2 block">Abutment Triplo</span>
            </h1>

            <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg font-light text-muted-foreground md:text-xl">
              A nova era da implantodontia
            </p>

            <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.65_0.14_220/0.6)] transition-all hover:shadow-[0_15px_60px_-10px_oklch(0.65_0.14_220/0.9)] hover:scale-[1.02]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Fale com um especialista
              </a>
              <a
                href="tel:+5511995898239"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-base font-medium backdrop-blur-md transition-all hover:border-primary/50 hover:bg-primary/10"
              >
                <WhatsAppIcon className="h-4 w-4 text-primary" />
                +55 (11) 99589-8239
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative lg:col-span-6">
            <div className="relative mx-auto aspect-square max-w-[560px]">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-primary/30 via-primary/5 to-transparent blur-3xl" style={{ background: "radial-gradient(circle, oklch(0.65 0.14 220 / 0.35), transparent 60%)" }} />
              <div className="absolute inset-8 rounded-full border border-primary/20" />
              <div className="absolute inset-16 rounded-full border border-primary/10" />
              <div className="absolute inset-24 rounded-full border border-primary/5" />

              {/* Tech corner marks */}
              <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-primary/60" />
              <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-primary/60" />
              <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-primary/60" />
              <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-primary/60" />

              <img
                src={produtoImg}
                alt="T CONNECT Abutment Triplo"
                className="float-slow relative z-10 h-full w-full object-contain drop-shadow-[0_20px_60px_oklch(0.65_0.14_220/0.5)]"
              />
            </div>
          </div>
        </div>

        <div className="tech-line mx-auto mt-20 max-w-7xl" />
      </section>

      {/* APRESENTAÇÃO */}
      <section className="relative px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Apresentação
          </span>
          <h2 className="mt-6 text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
            <span className="text-gradient">
              Uma solução que integra engenharia avançada e precisão clínica na reabilitação de casos complexos.
            </span>
          </h2>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            <div className="glass-strong rounded-2xl p-8 text-left">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Pré-lançamento exclusivo
              </div>
              <div className="mt-3 text-2xl font-bold">Dentoflex.inp</div>
            </div>
            <div className="glass-strong rounded-2xl p-8 text-left">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Visão
              </div>
              <div className="mt-3 text-2xl font-bold leading-snug text-gradient">
                Inovação que redefine as possibilidades na implantodontia.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Diferenciais
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Engenharia <span className="text-gradient-cyan">biomecânica</span> aplicada
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Paraboloide hiperbólico", d: "Alta rigidez e menos tensão" },
              { t: "3 coroas, 1 implante", d: "Múltiplas reabilitações" },
              { t: "Sem cantilever", d: "Melhor comportamento mecânico" },
              { t: "Sem soldas", d: "Menos riscos de distorções protéticas" },
            ].map((item, i) => (
              <div
                key={item.t}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-7 backdrop-blur-md transition-all hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_oklch(0.65_0.14_220/0.5)]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 font-mono text-xs text-primary/80">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-gradient">{item.t}</h3>
                  <div className="my-5 h-px w-10 bg-primary/40 transition-all group-hover:w-20" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTORIDADE CIENTÍFICA */}
      <section className="relative px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Autoridade Científica
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              <span className="text-gradient">Desempenho comprovado</span>
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              O T Connect foi avaliado por meio de análises por elementos finitos (FEA),
              simulando diferentes condições clínicas e cargas mastigatórias.
            </p>
          </div>

          {/* Dashboard-style charts */}
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              { src: graficoCC, label: "Análise FEA — CC", code: "FEA-001" },
              { src: graficoDA, label: "Análise FEA — DA", code: "FEA-002" },
            ].map((g) => (
              <div key={g.code} className="glass-strong relative overflow-hidden rounded-2xl p-6">
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary pulse-glow" />
                    <span className="text-sm font-semibold uppercase tracking-wider">{g.label}</span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{g.code}</span>
                </div>
                <div className="rounded-xl bg-white/95 p-4">
                  <img src={g.src} alt={g.label} className="h-auto w-full" />
                </div>
              </div>
            ))}
          </div>

          {/* Resultados */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              "Distribuição equilibrada de tensões no sistema",
              "Comportamento biomecânico estável em diferentes materiais",
              "Níveis de estresse dentro de limites clinicamente aceitáveis",
            ].map((r, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">{r}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-20 max-w-4xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Estudos clínicos demonstram baixa perda óssea marginal ao longo do tempo,
              condições peri-implantares estáveis e alta previsibilidade em reabilitações
              com múltiplas coroas sobre um único implante.
            </p>
            <div className="tech-line mx-auto mt-10 w-32" />
            <p className="mt-10 text-2xl font-semibold text-gradient-cyan md:text-3xl">
              Ciência aplicada e validada na prática clínica.
            </p>
          </div>

          {/* Artigos científicos */}
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <a
                key={n}
                href="#"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 backdrop-blur-md transition-all hover:border-primary/40"
              >
                <div className="aspect-[3/4] rounded-lg border border-white/10 bg-gradient-to-br from-navy-light/40 to-navy-deep/60 p-6 transition-transform group-hover:scale-[1.02]">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80">
                        Artigo Científico
                      </div>
                      <div className="mt-2 font-mono text-xs text-muted-foreground">
                        Paper 0{n}
                      </div>
                    </div>
                    <div>
                      <div className="mb-3 h-px w-full bg-gradient-to-r from-primary/60 to-transparent" />
                      <div className="text-xs uppercase tracking-wider text-foreground/70">
                        Dentoflex.inp · Research
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium">Acessar material</span>
                  <svg className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONEXÃO COM O EVENTO */}
      <section className="relative px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-10 md:p-16">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/15 blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/15 blur-[100px]" />

            <div className="relative grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Conexão com o evento
                </span>
                <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  <span className="text-gradient-cyan">O Sobrapi 2026</span>
                  <span className="text-gradient mt-2 block">marca este momento</span>
                </h2>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  O T Connect será apresentado ao público especializado durante o
                  <span className="font-semibold text-foreground"> 31º Congresso Brasileiro de Periodontia e Implantodontia.</span>
                </p>
              </div>

              <div className="space-y-5 lg:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                    Local
                  </div>
                  <div className="mt-3 text-xl font-bold">Minascentro</div>
                  <div className="text-sm text-muted-foreground">Belo Horizonte</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                    Data
                  </div>
                  <div className="mt-3 text-xl font-bold">30 de abril a 2 de maio</div>
                  <div className="text-sm text-muted-foreground">2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative px-6 py-24 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            <span className="text-gradient">Leve sua performance clínica</span>
            <span className="text-gradient-cyan mt-3 block">ao próximo nível</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Fale agora com um especialista
            <br className="hidden sm:block" />
            e descubra como integrar o T Connect à sua prática
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-10 py-5 text-lg font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.65_0.14_220/0.6)] transition-all hover:scale-[1.02] hover:shadow-[0_20px_60px_-10px_oklch(0.65_0.14_220/0.9)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <WhatsAppIcon className="h-5 w-5" />
              +55 (11) 99589-8239
            </a>
          </div>

          <div className="mt-24 flex flex-col items-center">
            <div className="tech-line mb-12 w-40" />
            <img src={logoVertical} alt="Dentoflex.inp" className="h-24 w-auto opacity-90 md:h-28" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/5 px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Dentoflex.inp · Todos os direitos reservados</div>
          <div className="font-mono uppercase tracking-[0.25em]">T CONNECT · Pré-lançamento</div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_10px_30px_-5px_oklch(0.65_0.14_220/0.6)] transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
