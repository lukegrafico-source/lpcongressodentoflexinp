import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { useEffect, useState } from "react";
import produtoImg from "@/assets/produto.png";
import logoVertical from "@/assets/logo-vertical.png";
import logoHorizontal from "@/assets/logo-horizontal.png";
import graficoCC from "@/assets/grafico-cc.png";
import graficoDA from "@/assets/grafico-da.png";
import graficoMesh from "@/assets/grafico-mesh.png";
import logoSobrapi from "@/assets/logo-sobrapi.png";
import bgTech from "@/assets/background.png";
import minascentroImg from "@/assets/minascentro.png";
import paperBea from "@/assets/paper-bea.png";
import paperIjmir from "@/assets/paper-ijmir.png";
import paperPerio from "@/assets/paper-perio.png";
import { MapPin, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

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

const WHATSAPP_LINK = "https://wa.me/5511995898239";

const charts = [
  { src: graficoCC, label: "Análise FEA — CC", code: "FEA-001" },
  { src: graficoDA, label: "Análise FEA — DA", code: "FEA-002" },
  { src: graficoMesh, label: "Mesh Convergence — TA", code: "FEA-003" },
];

function ChartsCarousel() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % charts.length);
  const prev = () => setIndex((i) => (i - 1 + charts.length) % charts.length);

  useEffect(() => {
    const id = setInterval(next, 6500);
    return () => clearInterval(id);
  }, []);

  const current = charts[index];

  return (
    <div className="glass-strong relative overflow-hidden rounded-2xl p-5 md:p-6">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-primary pulse-glow" />
          <span className="text-sm font-semibold uppercase tracking-wider">{current.label}</span>
        </div>
        <span className="font-mono text-xs text-muted-foreground">{current.code}</span>
      </div>

      <div className="relative overflow-hidden rounded-xl bg-white/95">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {charts.map((c) => (
            <div key={c.code} className="min-w-full p-4">
              <img src={c.src} alt={c.label} className="mx-auto h-auto w-full object-contain" />
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-navy-deep/80 text-primary backdrop-blur transition hover:bg-navy-deep"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Próximo"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-navy-deep/80 text-primary backdrop-blur transition hover:bg-navy-deep"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {charts.map((c, i) => (
          <button
            key={c.code}
            aria-label={`Ir para ${c.label}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-primary" : "w-3 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

type Paper = { src: string; title: string; journal: string };

const papers: Paper[] = [
  { src: paperBea, title: "Biomedical Engineering Advances", journal: "Elsevier · ISSN 2667-0992" },
  { src: paperIjmir, title: "Biomechanical Evaluation of Triple Abutment System", journal: "IJMIR · 2026" },
  { src: paperPerio, title: "Innovative Double or Triple Dental Abutment-Implant", journal: "Perio Advances · 2024" },
];

function PaperCard({ p }: { p: Paper }) {
  return (
    <a
      href="#"
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-5 backdrop-blur-md transition-all hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_oklch(0.65_0.14_220/0.45)]"
    >
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white">
        <img
          src={p.src}
          alt={p.title}
          className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent opacity-60" />
      </div>
      <div className="mt-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80">
          Artigo Científico
        </div>
        <h3 className="mt-2 line-clamp-2 text-sm font-bold leading-snug text-foreground">
          {p.title}
        </h3>
        <div className="mt-1 text-xs text-muted-foreground">{p.journal}</div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-sm font-medium">Acessar material</span>
        <svg className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </a>
  );
}

function PapersCarousel() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % papers.length);
  const prev = () => setIndex((i) => (i - 1 + papers.length) % papers.length);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {papers.map((p) => (
            <div key={p.title} className="min-w-full px-1">
              <PaperCard p={p} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          onClick={prev}
          aria-label="Anterior"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-navy-deep/70 text-primary backdrop-blur transition hover:bg-navy-deep"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          {papers.map((p, i) => (
            <button
              key={p.title}
              aria-label={`Ir para ${p.title}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-primary" : "w-3 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Próximo"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-navy-deep/70 text-primary backdrop-blur transition hover:bg-navy-deep"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Persistent tech background */}
      <div
        className="fixed inset-0 -z-10 opacity-50"
        style={{
          backgroundImage: `url(${bgTech})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/75 to-background" />
      <div className="fixed inset-0 -z-10 grid-pattern opacity-25" />

      {/* Geometric reference background — diamonds + light shines */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-70"
        style={{
          backgroundImage: "url(/bg-geo.png)",
          backgroundSize: "120% auto",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "screen",
        }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="geo-diamond" style={{ top: "-6%", left: "-8%", width: "460px", height: "460px" }} />
        <div className="geo-diamond" style={{ top: "32%", right: "-12%", width: "560px", height: "560px" }} />
        <div className="geo-diamond" style={{ bottom: "-12%", left: "18%", width: "420px", height: "420px" }} />
        <div className="geo-diamond" style={{ top: "62%", left: "-6%", width: "320px", height: "320px" }} />
        <div className="geo-shine" style={{ top: "8%", left: "22%", height: "320px", transform: "rotate(35deg)" }} />
        <div className="geo-shine" style={{ top: "48%", right: "18%", height: "380px", transform: "rotate(35deg)" }} />
        <div className="geo-shine" style={{ bottom: "10%", left: "55%", height: "260px", transform: "rotate(35deg)" }} />
      </div>


      {/* NAV */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
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
      <section className="relative px-6 pt-6 pb-16 lg:px-10 lg:pt-12 lg:pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-glow" />
              Pré-lançamento exclusivo
            </div>

            <h1 className="reveal reveal-delay-1 text-5xl font-extrabold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-gradient-cyan block">T CONNECT</span>
              <span className="text-gradient mt-2 block">Abutment Triplo</span>
            </h1>

            <p className="reveal reveal-delay-2 mt-6 max-w-xl text-xl font-light text-muted-foreground md:text-2xl">
              A nova era da implantodontia
            </p>

            <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.65_0.14_220/0.6)] transition-all hover:scale-[1.02] hover:shadow-[0_15px_60px_-10px_oklch(0.65_0.14_220/0.9)]"
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
              <div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, oklch(0.65 0.14 220 / 0.35), transparent 60%)" }}
              />
              <div className="absolute inset-8 rounded-full border border-primary/20" />
              <div className="absolute inset-16 rounded-full border border-primary/10" />
              <div className="absolute inset-24 rounded-full border border-primary/5" />

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

        <div className="tech-line mx-auto mt-12 max-w-7xl" />
      </section>

      {/* APRESENTAÇÃO */}
      <section className="relative px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              <span className="text-gradient">
                Uma solução que integra engenharia avançada e precisão clínica na reabilitação de casos complexos.
              </span>
            </h2>
          </div>


          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Selo + logo */}
            <div className="lg:col-span-5">
              <div className="glass-strong relative overflow-hidden rounded-3xl p-10 text-center">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />

                {/* Selo */}
                <div className="relative mx-auto flex h-44 w-44 items-center justify-center md:h-52 md:w-52">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-3 rounded-full border border-primary/30" />
                  <div className="absolute inset-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur" />
                  <div className="relative text-center">
                    <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary/90">
                      Pré-lançamento
                    </div>
                    <div className="mt-1 text-2xl font-extrabold text-gradient-cyan md:text-3xl">
                      Exclusivo
                    </div>
                    <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-primary/80">
                      2026 · Edition
                    </div>
                  </div>
                </div>

                <div className="tech-line mx-auto mt-8 w-24" />
                <div className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Apresentado por
                </div>
                <img
                  src={logoHorizontal}
                  alt="Dentoflex.inp"
                  className="mx-auto mt-4 h-8 w-auto opacity-95 md:h-10"
                />
              </div>
            </div>

            {/* Visão + produto */}
            <div className="relative lg:col-span-7">
              <div className="glass rounded-3xl p-8 md:p-10">
                <div className="grid items-center gap-8 sm:grid-cols-5">
                  <div className="sm:col-span-2">
                    <div className="relative mx-auto aspect-square max-w-[220px]">
                      <div
                        className="absolute inset-0 rounded-full blur-2xl"
                        style={{ background: "radial-gradient(circle, oklch(0.65 0.14 220 / 0.4), transparent 65%)" }}
                      />
                      <img
                        src={produtoImg}
                        alt="T CONNECT Abutment Triplo"
                        className="float-slow relative z-10 h-full w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <h3 className="text-2xl font-bold leading-snug md:text-3xl">
                      <span className="text-gradient-cyan">Tecnologia que expande</span>{" "}
                      <span className="text-gradient">os horizontes clínicos da reabilitação oral.</span>
                    </h3>
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                      Engenharia de precisão pensada para entregar previsibilidade, estabilidade
                      e desempenho biomecânico em casos complexos.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
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
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-br from-primary/15 to-accent/10 text-primary transition-all group-hover:scale-110 group-hover:border-primary/60">
                      {/* Tooth/implant icon — same for all differentials */}
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 2.5c-2.8 0-5 1.6-5 4 0 1.4.5 2.4.9 3.5.5 1.4.7 2.7.6 4.1-.1 1.6-.4 3-.6 4.7-.2 1.6.4 2.7 1.5 2.7 1 0 1.4-.7 1.6-1.7l.5-2.7c.1-.7.5-1.1 1-1.1.4 0 .8.4 1 1.1l.5 2.7c.2 1 .6 1.7 1.6 1.7 1.1 0 1.7-1.1 1.5-2.7-.2-1.7-.5-3.1-.6-4.7-.1-1.4.1-2.7.6-4.1.4-1.1.9-2.1.9-3.5 0-2.4-2.2-4-5-4z"/>
                      </svg>
                    </div>
                    <div className="font-mono text-xs text-primary/70">0{i + 1}</div>
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
      <section className="relative px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              <span className="text-gradient">Desempenho comprovado</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              O T Connect foi avaliado por meio de análises por elementos finitos (FEA),
              simulando diferentes condições clínicas e cargas mastigatórias.
            </p>
          </div>


          {/* Carousel of charts */}
          <div className="mx-auto max-w-5xl">
            <ChartsCarousel />
          </div>

          {/* Resultados */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
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

          <div className="mx-auto mt-14 max-w-4xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Estudos clínicos demonstram baixa perda óssea marginal ao longo do tempo,
              condições peri-implantares estáveis e alta previsibilidade em reabilitações
              com múltiplas coroas sobre um único implante.
            </p>
            <div className="tech-line mx-auto mt-8 w-32" />
            <p className="mt-8 text-2xl font-semibold text-gradient-cyan md:text-3xl">
              Ciência aplicada e validada na prática clínica.
            </p>
          </div>

          {/* Artigos científicos */}
          {/* Desktop grid */}
          <div className="mt-14 hidden gap-6 md:grid md:grid-cols-3">
            {papers.map((p) => <PaperCard key={p.title} p={p} />)}
          </div>
          {/* Mobile carousel */}
          <div className="mt-10 md:hidden">
            <PapersCarousel />
          </div>

        </div>
      </section>

      {/* CONEXÃO COM O EVENTO */}
      <section className="relative px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-14">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/15 blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/15 blur-[100px]" />

            <div className="relative grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  <span className="text-gradient-cyan">O Sobrapi 2026</span>
                  <span className="text-gradient mt-2 block">marca este momento</span>
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  O T Connect será apresentado ao público especializado durante o
                  <span className="font-semibold text-foreground"> 31º Congresso Brasileiro de Periodontia e Implantodontia.</span>
                </p>

                {/* Sobrapi logo */}
                <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4">
                  <img src={logoSobrapi} alt="Sobrapi 2026" className="h-12 w-auto md:h-14" />
                  <div className="hidden h-10 w-px bg-white/10 sm:block" />
                  <div className="hidden text-xs uppercase tracking-[0.25em] text-muted-foreground sm:block">
                    Evento oficial
                  </div>
                </div>
              </div>

              <div className="space-y-5 lg:col-span-5">
                {/* Local card with Minascentro photo */}
                <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all hover:border-primary/40">
                  <div className="relative h-44 overflow-hidden md:h-52">
                    <img
                      src={minascentroImg}
                      alt="Minascentro — Belo Horizonte"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-md border border-white/15 bg-navy-deep/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-primary backdrop-blur">
                      Sede oficial
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-br from-primary/15 to-accent/10 text-primary transition-transform group-hover:scale-110">
                      <MapPin className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                        Local
                      </div>
                      <div className="mt-2 text-xl font-bold">Minascentro</div>
                      <div className="text-sm text-muted-foreground">Belo Horizonte</div>
                    </div>
                  </div>
                </div>

                <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:border-primary/40">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-br from-primary/15 to-accent/10 text-primary transition-transform group-hover:scale-110">
                    <CalendarDays className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                      Data
                    </div>
                    <div className="mt-2 text-xl font-bold">30 de abril a 2 de maio</div>
                    <div className="text-sm text-muted-foreground">2026</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative px-6 py-16 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            <span className="text-gradient">Leve sua performance clínica</span>
            <span className="text-gradient-cyan mt-3 block">ao próximo nível</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Fale agora com um especialista
            <br className="hidden sm:block" />
            e descubra como integrar o T Connect à sua prática
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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

          <div className="mt-16 flex flex-col items-center">
            <div className="tech-line mb-10 w-40" />
            <img src={logoVertical} alt="Dentoflex.inp" className="h-24 w-auto opacity-90 md:h-28" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/5 px-6 py-8 lg:px-10">
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
