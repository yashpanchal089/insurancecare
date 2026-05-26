import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Shield, TrendingUp, PiggyBank, Landmark, Coins, GraduationCap, HeartPulse, Building2,
  Award, Users, Briefcase, CheckCircle2, Star, Quote, ArrowRight, Sparkles,
  ShieldCheck, Headphones, Lock, Zap, Phone, Mail, MapPin, Calculator, ExternalLink, X,
  Facebook, Instagram, Linkedin, Youtube,
} from "lucide-react";
import manishImg from "@/assets/founder.png";
import heroBg from "@/assets/hero-bg.jpg";
import certLivlong from "@/assets/cert-livlong.jpeg";
import certLic from "@/assets/cert-lic.jpeg";
import awardHalfCentury from "@/assets/award-half-century.jpeg";
import awardStar from "@/assets/award-star.jpeg";
import awardChampion from "@/assets/award-champion.jpeg";
import awardDedication from "@/assets/award-dedication.jpeg";
import awardCare from "@/assets/award-care.jpeg";
import awardLicTrophy from "@/assets/award-lic-trophy.jpeg";
import { Header } from "@/components/site/Header";
import { FloatingButtons } from "@/components/site/FloatingButtons";
import { Reveal, Counter } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "buyinsuranceplan — Manish R. Panchal | Insurance & Mutual Fund Advisor" },
      { name: "description", content: "Premium insurance and mutual fund advisory by Manish R. Panchal. Term plans, SIP, LIC, mediclaim, loans and personalized investment planning." },
      { property: "og:title", content: "buyinsuranceplan — Premium Financial Advisory" },
      { property: "og:description", content: "Secure your family & financial future with trusted advisory: SIP, mutual funds, LIC, mediclaim, loans and more." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

/* ------------------------------ HERO ------------------------------ */
function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden bg-gradient-hero">
      <img src={heroBg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-gold opacity-30 blur-3xl animate-float" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-navy opacity-20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-medium text-primary">
              <Sparkles className="w-3.5 h-3.5 text-accent" /> Trusted Financial Advisor · IRDAI & AMFI Registered
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight">
              Secure your family.<br />
              <span className="text-gradient-premium">Grow your wealth.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Personalised insurance, mutual funds, loans and tax planning — built around your goals by <strong className="text-foreground">Manish R. Panchal</strong>, with a decade of trusted advisory.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="group inline-flex items-center gap-2 bg-gradient-navy text-primary-foreground px-6 py-3.5 rounded-xl font-medium shadow-elegant hover:shadow-gold hover:-translate-y-0.5 transition-all">
                Get Free Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/calculators" className="inline-flex items-center gap-2 bg-white px-6 py-3.5 rounded-xl font-medium text-primary gold-border hover:shadow-gold transition-all">
                <Calculator className="w-4 h-4" /> Calculate Your Plan
              </a>
              <a href="tel:+918108801290" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-primary hover:bg-secondary transition-all">
                <Phone className="w-4 h-4" /> Contact Now
              </a>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { n: 2500, s: "+", l: "Happy Clients", icon: Users },
                { n: 1800, s: "+", l: "Claims Settled", icon: ShieldCheck },
                { n: 120, s: " Cr+", l: "Investments Managed", icon: TrendingUp },
                { n: 10, s: "+", l: "Years Experience", icon: Award },
              ].map((s, i) => (
                <div key={i} className="glass-card rounded-2xl p-4 hover-lift">
                  <s.icon className="w-5 h-5 text-accent mb-2" />
                  <div className="text-2xl font-bold text-primary font-display">
                    <Counter to={s.n} suffix={s.s} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="relative max-w-md mx-auto lg:ml-auto">
            <div className="absolute -inset-4 bg-gradient-gold rounded-[2rem] opacity-30 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden gold-border shadow-elegant">
              <img src={manishImg} alt="Manish R. Panchal — Financial Advisor" width={896} height={1152} className="w-full h-auto" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                <div className="text-xs uppercase tracking-[0.25em] text-gold-light">Founder</div>
                <div className="text-2xl font-display font-bold">Manish R. Panchal</div>
                <div className="text-sm opacity-90">Insurance & Investment Advisor</div>
              </div>
            </div>
            <div className="absolute -left-6 top-12 glass-card rounded-2xl px-4 py-3 shadow-elegant animate-float hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gradient-gold grid place-items-center"><Star className="w-4 h-4 text-white" fill="white" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Rated</div>
                  <div className="text-sm font-bold text-primary">4.9 / 5 · 800+ Reviews</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-6 bottom-24 glass-card rounded-2xl px-4 py-3 shadow-elegant animate-float hidden sm:block" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-8 h-8 text-accent" />
                <div>
                  <div className="text-xs text-muted-foreground">100% Claim</div>
                  <div className="text-sm font-bold text-primary">Settlement Support</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ ABOUT ------------------------------ */
const offers = [
  { icon: Shield, name: "Term Plans" },
  { icon: PiggyBank, name: "FD & RD" },
  { icon: HeartPulse, name: "LIC Policies" },
  { icon: Landmark, name: "All Bank Loans" },
  { icon: Coins, name: "Gold Loans" },
  { icon: GraduationCap, name: "Education Loans" },
  { icon: HeartPulse, name: "Cashless Mediclaim" },
  { icon: Building2, name: "Real Estate Investment" },
];
function About() {
  return (
    <section id="about" className="py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">What We Offer</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">We Offer You the <span className="text-gradient-premium">Best Services</span></h2>
            <p className="mt-4 text-muted-foreground">A complete suite of insurance, investment and lending solutions — tailored, transparent and trusted.</p>
          </div>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {offers.map((o, i) => (
            <Reveal key={o.name} delay={i * 60}>
              <div className="group relative rounded-2xl p-6 bg-white gold-border hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold grid place-items-center shadow-gold mb-4 group-hover:scale-110 transition-transform">
                  <o.icon className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-primary">{o.name}</div>
                <div className="text-xs text-muted-foreground mt-1">Premium advisory</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ WHY ME ------------------------------ */
const whyItems = [
  { icon: ShieldCheck, t: "Trusted Financial Advisor", d: "A decade of advising families and businesses with integrity-first guidance." },
  { icon: Briefcase, t: "Personalized Investment Planning", d: "Goal-based portfolios tuned to your risk appetite and life milestones." },
  { icon: Zap, t: "Fast Loan Assistance", d: "Pre-approved loan options across leading banks — paperwork handled for you." },
  { icon: CheckCircle2, t: "Claim Support", d: "End-to-end claim assistance so you focus on what matters most." },
  { icon: Headphones, t: "24×7 Customer Guidance", d: "Always-on support across WhatsApp, call and email." },
  { icon: Lock, t: "Secure & Transparent", d: "Zero hidden charges, full disclosure, your data stays protected." },
];
function Why() {
  return (
    <section id="why" className="py-14 lg:py-20 bg-gradient-to-b from-secondary/30 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">Why Choose Me</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Advisory you can <span className="text-gradient-premium">truly trust</span></h2>
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyItems.map((w, i) => (
            <Reveal key={w.t} delay={i * 80}>
              <div className="group relative rounded-3xl p-7 bg-white shadow-elegant hover-lift overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-navy grid place-items-center shadow-gold mb-5">
                    <w.icon className="w-7 h-7 text-gold-light" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{w.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ SERVICES ------------------------------ */
type Svc = { name: string; details: string };
const serviceGroups: { title: string; icon: any; color: string; items: Svc[] }[] = [
  { title: "Investment", icon: TrendingUp, color: "from-emerald-500/20 to-emerald-500/0",
    items: [
      { name: "SIP", details: "Systematic Investment Plans starting ₹500/month with goal-tracking." },
      { name: "Mutual Funds", details: "Curated equity, debt & hybrid funds across top AMCs." },
      { name: "SWP", details: "Systematic Withdrawal Plans for steady post-retirement income." },
      { name: "Bonds", details: "Government & corporate bonds for stable returns." },
      { name: "Fixed Return Plans", details: "Capital-protected plans with guaranteed maturity." },
    ]},
  { title: "Protection", icon: Shield, color: "from-blue-500/20 to-blue-500/0",
    items: [
      { name: "Term Plans", details: "High-cover, low-premium term insurance for financial security." },
      { name: "Loan EMI Protector", details: "Safeguard your EMIs against unforeseen events." },
    ]},
  { title: "Life Insurance", icon: HeartPulse, color: "from-rose-500/20 to-rose-500/0",
    items: [
      { name: "Savings Plans", details: "Long-term savings with life cover and bonuses." },
      { name: "RD", details: "Recurring Deposits with disciplined monthly savings." },
      { name: "FD", details: "Fixed Deposits across top banks at best rates." },
    ]},
  { title: "Mediclaim", icon: ShieldCheck, color: "from-cyan-500/20 to-cyan-500/0",
    items: [
      { name: "Comprehensive Mediclaim", details: "Cashless hospitalization across 10,000+ network hospitals." },
      { name: "Maternity Plans", details: "Coverage for maternity and newborn care." },
      { name: "Critical Illness", details: "Lump-sum payout on diagnosis of major illnesses." },
      { name: "Accidental Insurance", details: "Personal accident cover with disability benefits." },
      { name: "Income Replacement", details: "Monthly income protection in case of disability." },
    ]},
  { title: "General Insurance", icon: Building2, color: "from-amber-500/20 to-amber-500/0",
    items: [
      { name: "2/3/4 Wheeler Insurance", details: "Comprehensive motor insurance with cashless garages." },
      { name: "Building Insurance", details: "Protect your property against fire, flood and theft." },
      { name: "Machinery Insurance", details: "Cover for industrial machinery and breakdown." },
      { name: "Burglary Insurance", details: "Protection against theft and burglary." },
      { name: "Fire Insurance", details: "Asset protection from fire and allied perils." },
    ]},
  { title: "Loans", icon: Landmark, color: "from-violet-500/20 to-violet-500/0",
    items: [
      { name: "Home Loan", details: "Best rates from leading banks with quick approvals." },
      { name: "Business Loan", details: "Working capital and expansion loans for businesses." },
      { name: "Personal Loan", details: "Quick disbursal personal loans up to ₹50 lakhs." },
      { name: "Balance Transfer", details: "Lower your EMI with seamless balance transfer." },
      { name: "OD & CC", details: "Overdraft and cash credit facilities for businesses." },
      { name: "Education Loan", details: "Fund higher education in India & abroad." },
    ]},
];

function Services() {
  const [popup, setPopup] = useState<{ title: string; svc: Svc } | null>(null);
  return (
    <section id="services" className="py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">Our Services</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Solutions for every <span className="text-gradient-premium">financial milestone</span></h2>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 80}>
              <div className="group relative h-full rounded-3xl p-7 bg-white gold-border hover-lift overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${g.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-navy grid place-items-center shadow-elegant">
                      <g.icon className="w-6 h-6 text-gold-light" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{g.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {g.items.map(s => (
                      <li key={s.name}>
                        <button onClick={() => setPopup({ title: g.title, svc: s })} className="w-full text-left flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-secondary/60 transition-colors text-sm">
                          <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" />{s.name}</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {popup && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in" onClick={() => setPopup(null)}>
          <div onClick={e => e.stopPropagation()} className="relative w-full max-w-md rounded-3xl bg-white p-7 shadow-elegant gold-border animate-in zoom-in-95">
            <button onClick={() => setPopup(null)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary"><X className="w-4 h-4" /></button>
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">{popup.title}</div>
            <h3 className="mt-2 text-2xl font-bold text-primary">{popup.svc.name}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{popup.svc.details}</p>
            <a href="#contact" onClick={() => setPopup(null)} className="mt-6 inline-flex items-center gap-2 bg-gradient-navy text-primary-foreground px-5 py-3 rounded-xl text-sm font-medium shadow-elegant">
              Talk to Advisor <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

/* ------------------------------ AWARDS ------------------------------ */
const certificates = [
  { img: certLivlong, t: "Certificate of Appreciation", issuer: "Livlong Insurance", d: "Outstanding commitment & exemplary performance — Oct–Dec 2025." },
  { img: certLic, t: "Certificate of Appreciation", issuer: "LIC of India — Mumbai Div III", d: "Outstanding performance on LIC's 64th Anniversary." },
];
const awardItems = [
  { img: awardHalfCentury, t: "Half Shatakveer", issuer: "LIC of India", d: "Completing 50 policies in FY 2018–19." },
  { img: awardStar, t: "A Day With Anupam Kher — Qualifier", issuer: "LIC MDO III", d: "Honoured for FY 2018–19 performance." },
  { img: awardChampion, t: "Champion Trophy", issuer: "Religare Health Insurance", d: "Top performer recognition — Nov 2018." },
  { img: awardDedication, t: "Team Khote Sikke", issuer: "Religare Health Insurance", d: "Smart work & dedication to Health Planner profession." },
  { img: awardCare, t: "Saksham Contest — Grand Prize", issuer: "Care Health Insurance", d: "Winner, Bali edition (Dec '21 – Mar '22)." },
  { img: awardLicTrophy, t: "Vijeta Trophy", issuer: "LIC Mumbai Division III", d: "Recognition for consistent performance." },
];
function Awards() {
  return (
    <section id="awards" className="py-14 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-transparent to-gold-light/20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">Certificates</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Officially <span className="text-gradient-premium">recognised</span></h2>
            <p className="mt-4 text-muted-foreground">Authentic certificates of appreciation from India's leading insurers.</p>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {certificates.map((c, i) => (
            <Reveal key={c.t + i} delay={i * 100}>
              <div className="group relative rounded-3xl p-3 bg-white gold-border hover-lift overflow-hidden">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/40 to-white grid place-items-center p-4">
                  <img src={c.img} alt={`${c.t} — ${c.issuer}`} className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wider text-accent font-semibold">{c.issuer}</div>
                  <div className="mt-1 text-lg font-bold text-primary font-display">{c.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center max-w-2xl mx-auto mt-20">
            <div className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">Awards & Trophies</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">A legacy of <span className="text-gradient-premium">excellence</span></h2>
            <p className="mt-4 text-muted-foreground">Honoured by top insurance brands for consistent performance and dedication.</p>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awardItems.map((a, i) => (
            <Reveal key={a.t + i} delay={i * 70}>
              <div className="group relative rounded-3xl p-3 glass-card hover-lift overflow-hidden">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-secondary/40 to-white">
                  <img src={a.img} alt={`${a.t} — ${a.issuer}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-gradient-gold grid place-items-center shadow-gold opacity-90">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wider text-accent font-semibold">{a.issuer}</div>
                  <div className="mt-1 text-lg font-bold text-primary font-display">{a.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ TESTIMONIALS ------------------------------ */
const testimonials = [
  { n: "Rajesh Sharma", r: "Business Owner", q: "Manish helped me secure my family's future with the right term plan and a SIP portfolio that's beating my expectations." },
  { n: "Priya Mehta", r: "Doctor", q: "Cashless mediclaim was processed in hours during an emergency. Truly transparent and reliable advisor." },
  { n: "Anil Kapoor", r: "IT Professional", q: "From home loan to mutual funds, every step was guided personally. My go-to financial advisor for years now." },
  { n: "Sneha Patel", r: "Entrepreneur", q: "His investment planning gave me clarity. I sleep better knowing my retirement is on track." },
  { n: "Vikram Joshi", r: "Architect", q: "Honest, patient and incredibly knowledgeable. Manish redesigned our family's insurance and investment plan end-to-end." },
];

function TestimonialCard({ t }: { t: typeof testimonials[number] }) {
  return (
    <div className="shrink-0 w-[88vw] sm:w-[440px] lg:w-[460px] mx-3">
      <div className="h-full glass-card rounded-3xl p-7 shadow-elegant relative overflow-hidden">
        <Quote className="absolute -top-3 -left-3 w-20 h-20 text-accent/10" />
        <div className="relative">
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-4 h-4 text-accent" fill="currentColor" />)}
          </div>
          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed font-display">"{t.q}"</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-navy grid place-items-center text-gold-light font-bold">
              {t.n.split(" ").map(s => s[0]).join("")}
            </div>
            <div className="text-left">
              <div className="font-bold text-primary">{t.n}</div>
              <div className="text-xs text-muted-foreground">{t.r}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const loop = [...testimonials, ...testimonials];
  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">Testimonials</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Loved by <span className="text-gradient-premium">2,500+ families</span></h2>
            <p className="mt-4 text-muted-foreground">Real stories from clients who trust us with their financial future.</p>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee">
          {loop.map((t, k) => <TestimonialCard key={k} t={t} />)}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CTA + CONTACT ------------------------------ */
function Contact() {
  return (
    <section id="contact" className="py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-navy p-10 sm:p-14 text-center shadow-elegant">
            <div className="absolute inset-0 opacity-20 shimmer" />
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-gold opacity-30 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Secure Your Family & <span className="text-gradient-gold">Financial Future</span> Today
              </h2>
              <p className="mt-4 text-white/80 max-w-2xl mx-auto">A 15-minute call could change the next 30 years of your finances. Let's plan together.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href="tel:+918108801290" className="inline-flex items-center gap-2 bg-gradient-gold text-foreground px-6 py-3.5 rounded-xl font-semibold shadow-gold hover:-translate-y-0.5 transition-all">
                  <Phone className="w-4 h-4" /> Call 81088 01290
                </a>
                <a href="https://wa.me/918108801290" target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl font-semibold backdrop-blur transition-all">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="rounded-3xl p-8 bg-white shadow-elegant gold-border">
              <h3 className="text-2xl font-bold text-primary">Send a Message</h3>
              <p className="text-sm text-muted-foreground mt-1">We respond within a few hours.</p>
              <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll reach out shortly."); }}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border bg-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
                  <input required type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-xl border bg-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border bg-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent" />
                <select className="w-full px-4 py-3 rounded-xl border bg-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent">
                  <option>Service of Interest</option>
                  <option>Term Plan / LIC</option>
                  <option>Mutual Funds / SIP</option>
                  <option>Mediclaim</option>
                  <option>Loans</option>
                  <option>General Insurance</option>
                </select>
                <textarea rows={4} placeholder="Tell us about your goals…" className="w-full px-4 py-3 rounded-xl border bg-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent" />
                <button className="w-full bg-gradient-navy text-primary-foreground py-3.5 rounded-xl font-semibold shadow-elegant hover:shadow-gold transition-all">Request Free Consultation</button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6">
              <div className="rounded-3xl p-6 glass-card shadow-elegant">
                <h3 className="text-xl font-bold text-primary">Contact Details</h3>
                <div className="mt-4 space-y-4">
                  <a href="tel:+918108801290" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-gold grid place-items-center shadow-gold"><Phone className="w-5 h-5 text-white" /></div>
                    <div>
                      <div className="text-xs text-muted-foreground">Call us</div>
                      <div className="font-semibold text-primary group-hover:underline">+91 81088 01290</div>
                    </div>
                  </a>
                  <a href="mailto:contact@buyinsuranceplan.in" className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-navy grid place-items-center"><Mail className="w-5 h-5 text-gold-light" /></div>
                    <div>
                      <div className="text-xs text-muted-foreground">Email</div>
                      <div className="font-semibold text-primary">securelife128@gmail.com</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-gold grid place-items-center shadow-gold"><MapPin className="w-5 h-5 text-white" /></div>
                    <div>
                      <div className="text-xs text-muted-foreground">Office</div>
                      <div className="font-semibold text-primary">Mumbai, Maharashtra, India</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-elegant gold-border">
                <iframe title="Map" src="https://www.google.com/maps?q=Mumbai&output=embed" width="100%" height="280" loading="lazy" className="w-full" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER ------------------------------ */
function Footer() {
  const socials = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];
  return (
    <footer className="bg-gradient-navy text-white pt-14 pb-8 mt-8 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-gold opacity-60" />
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gradient-gold opacity-10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-gold grid place-items-center shadow-gold"><span className="text-primary font-display font-bold text-lg">S</span></div>
            <div>
              <div className="font-display font-bold text-lg">Secure Life Enterprise</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-gold-light">Insurance · Finance · Grow</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">Premium insurance and investment advisory by Manish R. Panchal. Trusted by 2,500+ families across India.</p>
          <div className="mt-5 flex gap-2.5">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener" aria-label={s.label}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gradient-gold grid place-items-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold">
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-gold-light text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {["Home", "About", "Services", "Why Me", "Awards", "Contact"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(" ", "")}`} className="hover:text-gold-light transition-colors">{l}</a></li>
            ))}
            <li><a href="/calculators" className="hover:text-gold-light inline-flex items-center gap-1">Calculators <ExternalLink className="w-3 h-3" /></a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold-light text-sm font-semibold uppercase tracking-wider">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {["Investment", "Protection", "Life Insurance", "Mediclaim", "General Insurance", "Loans"].map(l => (
              <li key={l}><a href="#services" className="hover:text-gold-light transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gold-light text-sm font-semibold uppercase tracking-wider">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold-light mt-0.5 shrink-0" />
              <span>Secure Life Enterprise,<br />Mumbai, Maharashtra 400001, India</span>
            </li>
            <li>
              <a href="tel:+918108801290" className="flex items-center gap-3 hover:text-gold-light transition-colors">
                <Phone className="w-4 h-4 text-gold-light shrink-0" /> +91 81088 01290
              </a>
            </li>
            <li>
              <a href="mailto:contact@buyinsuranceplan.in" className="flex items-center gap-3 hover:text-gold-light transition-colors break-all">
                <Mail className="w-4 h-4 text-gold-light shrink-0" /> contact@buyinsuranceplan.in
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative mt-10 border-t border-white/10 pt-6 mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/60">
        <div>© {new Date().getFullYear()} Secure Life Enterprise · Manish R. Panchal. All rights reserved.</div>
        <div>IRDAI · AMFI Registered Advisor</div>
      </div>
    </footer>
  );
}

/* ------------------------------ PAGE ------------------------------ */
function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Why />
        <Services />
        <Awards />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
