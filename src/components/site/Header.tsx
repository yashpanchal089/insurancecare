import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Calculator, ChevronDown } from "lucide-react";
import logoImg from "@/assets/logo.jpeg";

const services = [
  { name: "Investment", href: "/#services" },
  { name: "Protection", href: "/#services" },
  { name: "Life Insurance", href: "/#services" },
  { name: "Mediclaim", href: "/#services" },
  { name: "General Insurance", href: "/#services" },
  { name: "Loans", href: "/#services" },
];

const calculators = [
  { name: "SIP Calculator", href: "/calculators#sip" },
  { name: "Mutual Fund Calculator", href: "/calculators#mf" },
  { name: "EMI Calculator", href: "/calculators#emi" },
  { name: "LIC Premium Calculator", href: "/calculators#lic" },
  { name: "Loan Eligibility", href: "/calculators#loan" },
  { name: "Retirement Calculator", href: "/calculators#retire" },
  { name: "Investment Growth", href: "/calculators#growth" },
];

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Why Me", href: "/#why" },
  { name: "Awards", href: "/#awards" },
  { name: "Contact", href: "/#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [mSvcOpen, setMSvcOpen] = useState(false);
  const [mCalcOpen, setMCalcOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${scrolled ? "glass-card shadow-elegant" : "bg-white/40 backdrop-blur"}`}>
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-11 h-11 rounded-xl overflow-hidden shadow-gold ring-1 ring-accent/30 bg-white transition-transform duration-500 group-hover:scale-105">
              <img src={logoImg} alt="Secure Life Enterprise" className="w-full h-full object-cover" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-primary text-lg">Secure Life Enterprise</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Insurance | Protection | Loans | Security</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
            {navLinks.slice(0, 2).map(l => (
              <a key={l.name} href={l.href} className="hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-gold after:transition-all after:duration-300 hover:after:w-full">{l.name}</a>
            ))}

            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setSvcOpen(true)} onMouseLeave={() => setSvcOpen(false)}>
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                Services <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${svcOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-56 origin-top transition-all duration-300 ${svcOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                <div className="glass-card rounded-2xl p-2 shadow-elegant">
                  {services.map(s => (
                    <a key={s.name} href={s.href} className="block px-3 py-2 rounded-xl text-sm hover:bg-gradient-to-r hover:from-gold-light/40 hover:to-transparent transition-all">{s.name}</a>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(2).map(l => (
              <a key={l.name} href={l.href} className="hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-gold after:transition-all after:duration-300 hover:after:w-full">{l.name}</a>
            ))}

            <div className="relative" onMouseEnter={() => setCalcOpen(true)} onMouseLeave={() => setCalcOpen(false)}>
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <Calculator className="w-4 h-4" /> Calculators <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${calcOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute right-0 top-full pt-3 w-64 origin-top transition-all duration-300 ${calcOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                <div className="glass-card rounded-2xl p-2 shadow-elegant">
                  {calculators.map(c => (
                    <a key={c.name} href={c.href} className="block px-3 py-2 rounded-xl text-sm hover:bg-gradient-to-r hover:from-gold-light/40 hover:to-transparent transition-all">{c.name}</a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <a href="#contact" className="hidden lg:inline-flex items-center gap-2 bg-gradient-navy text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-medium shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-0.5">
            Free Consultation
          </a>

          {/* Animated hamburger */}
          <button
            className="lg:hidden relative w-10 h-10 grid place-items-center rounded-xl hover:bg-secondary/60 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 right-0 top-0 h-0.5 bg-primary rounded transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-primary rounded transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-primary rounded transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu — dark contrast bg */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${open ? "max-h-[80vh] mt-2 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="rounded-2xl p-4 shadow-elegant bg-gradient-navy text-white/90 border border-white/10">
            <nav className="flex flex-col gap-1">
              {navLinks.slice(0, 2).map(l => (
                <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-white/10 text-sm font-medium text-white transition-colors">{l.name}</a>
              ))}

              {/* Mobile Services */}
              <button
                onClick={() => setMSvcOpen(v => !v)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-sm font-medium text-white transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mSvcOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mSvcOpen ? "max-h-96" : "max-h-0"}`}>
                <div className="ml-3 pl-3 border-l border-gold-light/30 my-1 space-y-0.5">
                  {services.map(s => (
                    <a key={s.name} href={s.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-white/80 hover:text-gold-light hover:bg-white/5 transition-colors">{s.name}</a>
                  ))}
                </div>
              </div>

              {navLinks.slice(2).map(l => (
                <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-white/10 text-sm font-medium text-white transition-colors">{l.name}</a>
              ))}

              {/* Mobile Calculators */}
              <button
                onClick={() => setMCalcOpen(v => !v)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-sm font-medium text-white transition-colors"
              >
                <span className="inline-flex items-center gap-2"><Calculator className="w-4 h-4" /> Calculators</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mCalcOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mCalcOpen ? "max-h-96" : "max-h-0"}`}>
                <div className="ml-3 pl-3 border-l border-gold-light/30 my-1 space-y-0.5">
                  {calculators.map(c => (
                    <a key={c.name} href={c.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-white/80 hover:text-gold-light hover:bg-white/5 transition-colors">{c.name}</a>
                  ))}
                </div>
              </div>

              <a href="#contact" onClick={() => setOpen(false)} className="mt-3 text-center bg-gradient-gold text-foreground px-5 py-3 rounded-xl text-sm font-semibold shadow-gold hover:-translate-y-0.5 transition-transform">Free Consultation</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
