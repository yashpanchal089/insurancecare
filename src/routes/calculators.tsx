import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calculator, TrendingUp, Home, Wallet, HeartPulse, PiggyBank, BarChart3 } from "lucide-react";
import { Header } from "@/components/site/Header";
import { FloatingButtons } from "@/components/site/FloatingButtons";

export const Route = createFileRoute("/calculators")({
  head: () => ({
    meta: [
      { title: "Financial Calculators — buyinsuranceplan" },
      { name: "description", content: "Modern SIP, EMI, LIC, retirement and investment growth calculators with real-time results." },
      { property: "og:title", content: "Financial Calculators — buyinsuranceplan" },
      { property: "og:description", content: "Interactive calculators for SIP, mutual funds, EMI, retirement and more." },
    ],
    links: [{ rel: "canonical", href: "/calculators" }],
  }),
  component: CalculatorsPage,
});

const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

function Field({ label, value, set, min, max, step, suffix = "" }: { label: string; value: number; set: (n: number) => void; min: number; max: number; step: number; suffix?: string }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <div className="px-3 py-1 rounded-lg bg-gradient-gold text-white text-sm font-semibold">{value.toLocaleString("en-IN")}{suffix}</div>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => set(Number(e.target.value))}
        className="w-full accent-[color:var(--gold)]" />
    </div>
  );
}

function ResultCard({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-2xl p-5 ${accent ? "bg-gradient-navy text-white shadow-elegant" : "glass-card"}`}>
      <div className={`text-xs uppercase tracking-wider ${accent ? "text-gold-light" : "text-muted-foreground"}`}>{label}</div>
      <div className={`mt-2 text-2xl font-bold font-display ${accent ? "text-gradient-gold" : "text-primary"}`}>{value}</div>
    </div>
  );
}

function Bar({ a, b }: { a: number; b: number }) {
  const total = a + b || 1;
  return (
    <div className="mt-6">
      <div className="flex h-4 rounded-full overflow-hidden shadow-inner">
        <div className="bg-gradient-navy" style={{ width: `${(a / total) * 100}%` }} />
        <div className="bg-gradient-gold" style={{ width: `${(b / total) * 100}%` }} />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground mt-2">
        <span><span className="inline-block w-2 h-2 rounded-full bg-primary mr-1" />Principal</span>
        <span><span className="inline-block w-2 h-2 rounded-full bg-accent mr-1" />Returns</span>
      </div>
    </div>
  );
}

function SIPCalc() {
  const [m, setM] = useState(10000); const [y, setY] = useState(15); const [r, setR] = useState(12);
  const { invested, future, gain } = useMemo(() => {
    const n = y * 12; const i = r / 100 / 12;
    const fv = m * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    return { invested: m * n, future: fv, gain: fv - m * n };
  }, [m, y, r]);
  return (
    <CalcShell id="sip" icon={TrendingUp} title="SIP Calculator" subtitle="See how disciplined investing compounds wealth.">
      <div className="space-y-6">
        <Field label="Monthly Investment (₹)" value={m} set={setM} min={500} max={200000} step={500} />
        <Field label="Time Period (Years)" value={y} set={setY} min={1} max={40} step={1} />
        <Field label="Expected Return (%)" value={r} set={setR} min={1} max={25} step={0.5} />
      </div>
      <div className="space-y-4">
        <ResultCard label="Invested" value={fmt(invested)} />
        <ResultCard label="Est. Returns" value={fmt(gain)} />
        <ResultCard label="Future Value" value={fmt(future)} accent />
        <Bar a={invested} b={gain} />
      </div>
    </CalcShell>
  );
}

function MFCalc() {
  const [p, setP] = useState(500000); const [y, setY] = useState(10); const [r, setR] = useState(12);
  const future = p * Math.pow(1 + r / 100, y);
  return (
    <CalcShell id="mf" icon={BarChart3} title="Mutual Fund (Lumpsum) Calculator" subtitle="Project growth of a one-time investment.">
      <div className="space-y-6">
        <Field label="Investment (₹)" value={p} set={setP} min={10000} max={10000000} step={10000} />
        <Field label="Time Period (Years)" value={y} set={setY} min={1} max={40} step={1} />
        <Field label="Expected Return (%)" value={r} set={setR} min={1} max={25} step={0.5} />
      </div>
      <div className="space-y-4">
        <ResultCard label="Invested" value={fmt(p)} />
        <ResultCard label="Est. Returns" value={fmt(future - p)} />
        <ResultCard label="Future Value" value={fmt(future)} accent />
        <Bar a={p} b={future - p} />
      </div>
    </CalcShell>
  );
}

function EMICalc() {
  const [p, setP] = useState(2500000); const [r, setR] = useState(8.5); const [y, setY] = useState(20);
  const n = y * 12; const i = r / 100 / 12;
  const emi = (p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  const total = emi * n;
  return (
    <CalcShell id="emi" icon={Home} title="EMI Calculator" subtitle="Plan your loan EMI with clarity.">
      <div className="space-y-6">
        <Field label="Loan Amount (₹)" value={p} set={setP} min={50000} max={50000000} step={50000} />
        <Field label="Interest Rate (%)" value={r} set={setR} min={5} max={20} step={0.1} />
        <Field label="Tenure (Years)" value={y} set={setY} min={1} max={30} step={1} />
      </div>
      <div className="space-y-4">
        <ResultCard label="Monthly EMI" value={fmt(emi)} accent />
        <ResultCard label="Total Interest" value={fmt(total - p)} />
        <ResultCard label="Total Payable" value={fmt(total)} />
        <Bar a={p} b={total - p} />
      </div>
    </CalcShell>
  );
}

function LICCalc() {
  const [sa, setSa] = useState(1000000); const [age, setAge] = useState(30); const [term, setTerm] = useState(20);
  // Simple indicative premium: annual premium ≈ (SA / term) * factor by age
  const factor = 1 + (age - 25) * 0.025;
  const annual = (sa / term) * 0.06 * factor;
  return (
    <CalcShell id="lic" icon={HeartPulse} title="LIC Premium Calculator" subtitle="Indicative annual premium estimate.">
      <div className="space-y-6">
        <Field label="Sum Assured (₹)" value={sa} set={setSa} min={100000} max={20000000} step={100000} />
        <Field label="Your Age" value={age} set={setAge} min={18} max={65} step={1} />
        <Field label="Policy Term (Years)" value={term} set={setTerm} min={5} max={40} step={1} />
      </div>
      <div className="space-y-4">
        <ResultCard label="Estimated Annual Premium" value={fmt(annual)} accent />
        <ResultCard label="Monthly" value={fmt(annual / 12)} />
        <ResultCard label="Total over Term" value={fmt(annual * term)} />
        <p className="text-xs text-muted-foreground">* Indicative only. Final premium depends on plan, riders and medical underwriting.</p>
      </div>
    </CalcShell>
  );
}

function LoanEligCalc() {
  const [inc, setInc] = useState(80000); const [oblig, setOblig] = useState(10000); const [r, setR] = useState(9); const [y, setY] = useState(20);
  const maxEmi = inc * 0.5 - oblig;
  const n = y * 12; const i = r / 100 / 12;
  const eligible = Math.max(0, (maxEmi * (Math.pow(1 + i, n) - 1)) / (i * Math.pow(1 + i, n)));
  return (
    <CalcShell id="loan" icon={Wallet} title="Loan Eligibility Calculator" subtitle="How much loan can you avail?">
      <div className="space-y-6">
        <Field label="Monthly Income (₹)" value={inc} set={setInc} min={15000} max={1000000} step={5000} />
        <Field label="Existing EMI / Obligations (₹)" value={oblig} set={setOblig} min={0} max={500000} step={1000} />
        <Field label="Interest Rate (%)" value={r} set={setR} min={6} max={20} step={0.1} />
        <Field label="Tenure (Years)" value={y} set={setY} min={1} max={30} step={1} />
      </div>
      <div className="space-y-4">
        <ResultCard label="Max EMI Possible" value={fmt(maxEmi)} />
        <ResultCard label="Eligible Loan Amount" value={fmt(eligible)} accent />
      </div>
    </CalcShell>
  );
}

function RetireCalc() {
  const [age, setAge] = useState(30); const [retire, setRetire] = useState(60); const [exp, setExp] = useState(50000); const [infl, setInfl] = useState(6); const [r, setR] = useState(12);
  const yrs = retire - age;
  const futureExp = exp * Math.pow(1 + infl / 100, yrs);
  const corpus = futureExp * 12 * 25; // 25x annual expense thumb-rule
  const i = r / 100 / 12; const n = yrs * 12;
  const sip = (corpus * i) / (Math.pow(1 + i, n) - 1);
  return (
    <CalcShell id="retire" icon={PiggyBank} title="Retirement Calculator" subtitle="Plan the corpus you need to retire comfortably.">
      <div className="space-y-6">
        <Field label="Current Age" value={age} set={setAge} min={18} max={55} step={1} />
        <Field label="Retirement Age" value={retire} set={setRetire} min={45} max={70} step={1} />
        <Field label="Current Monthly Expense (₹)" value={exp} set={setExp} min={10000} max={500000} step={5000} />
        <Field label="Inflation (%)" value={infl} set={setInfl} min={3} max={12} step={0.5} />
        <Field label="Return on Investment (%)" value={r} set={setR} min={6} max={18} step={0.5} />
      </div>
      <div className="space-y-4">
        <ResultCard label="Future Monthly Expense" value={fmt(futureExp)} />
        <ResultCard label="Corpus Required" value={fmt(corpus)} accent />
        <ResultCard label="Monthly SIP Needed" value={fmt(sip)} />
      </div>
    </CalcShell>
  );
}

function GrowthCalc() {
  const [p, setP] = useState(100000); const [m, setM] = useState(5000); const [y, setY] = useState(10); const [r, setR] = useState(12);
  const i = r / 100 / 12; const n = y * 12;
  const fvLump = p * Math.pow(1 + i, n);
  const fvSip = m * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  const total = fvLump + fvSip;
  const invested = p + m * n;
  return (
    <CalcShell id="growth" icon={TrendingUp} title="Investment Growth Calculator" subtitle="Combine lumpsum + monthly contributions.">
      <div className="space-y-6">
        <Field label="Initial Investment (₹)" value={p} set={setP} min={0} max={10000000} step={10000} />
        <Field label="Monthly Addition (₹)" value={m} set={setM} min={0} max={200000} step={500} />
        <Field label="Time Period (Years)" value={y} set={setY} min={1} max={40} step={1} />
        <Field label="Expected Return (%)" value={r} set={setR} min={1} max={25} step={0.5} />
      </div>
      <div className="space-y-4">
        <ResultCard label="Total Invested" value={fmt(invested)} />
        <ResultCard label="Wealth Gained" value={fmt(total - invested)} />
        <ResultCard label="Future Value" value={fmt(total)} accent />
        <Bar a={invested} b={total - invested} />
      </div>
    </CalcShell>
  );
}

function CalcShell({ id, icon: Icon, title, subtitle, children }: { id: string; icon: any; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="rounded-3xl p-8 bg-white shadow-elegant gold-border">
        <div className="flex items-start gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-navy grid place-items-center shadow-gold shrink-0">
            <Icon className="w-7 h-7 text-gold-light" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary font-display">{title}</h2>
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">{children}</div>
      </div>
    </section>
  );
}

function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              <Calculator className="w-4 h-4" /> Financial Calculators
            </div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold">Plan with <span className="text-gradient-premium">precision</span></h1>
            <p className="mt-4 text-muted-foreground">Real-time, interactive calculators to help you decide smarter.</p>
          </div>
          <div className="grid gap-8">
            <SIPCalc />
            <MFCalc />
            <EMICalc />
            <LICCalc />
            <LoanEligCalc />
            <RetireCalc />
            <GrowthCalc />
          </div>
        </div>
      </main>
      <FloatingButtons />
    </div>
  );
}
