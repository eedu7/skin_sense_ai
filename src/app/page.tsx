import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    ShieldCheck,
    Zap,
    Search,
    Smartphone,
    CheckCircle2,
    Check,
    Star,
    Activity,
} from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans selection:bg-blue-100">
            {/* --- NAVIGATION --- */}
            <nav className="flex items-center justify-between px-6 py-5 border-b border-slate-50 max-w-7xl mx-auto w-full sticky top-0 bg-white/80 backdrop-blur-md z-50">
                <div className="flex items-center gap-2">
                    <div className="bg-blue-600 p-1.5 rounded-xl">
                        <Search className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900 italic">
                        SkinAI
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
                    <Link
                        href="#features"
                        className="hover:text-blue-600 transition-colors"
                    >
                        Features
                    </Link>
                    <Link
                        href="#pricing"
                        className="hover:text-blue-600 transition-colors"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/about"
                        className="hover:text-blue-600 transition-colors"
                    >
                        Safety
                    </Link>
                </div>

                <div className="flex items-center gap-3">
                    <Link href="/login" className="hidden sm:block">
                        <Button
                            variant="ghost"
                            className="text-slate-600 font-bold"
                        >
                            Login
                        </Button>
                    </Link>
                    <Link href="/scans">
                        <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 shadow-lg shadow-blue-100 font-bold">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </nav>

            <main className="flex-1">
                {/* --- HERO SECTION --- */}
                <section className="relative pt-20 pb-32 overflow-hidden">
                    {/* Background Decorative Gradients */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-[120px] opacity-60 animate-pulse" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[100px] opacity-60" />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 uppercase tracking-widest">
                            <Zap className="w-3.5 h-3.5 fill-blue-700" />
                            <span>Next-Gen Dermatology AI</span>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 leading-[0.9]">
                            Know Your Skin <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400">
                                In Seconds.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 font-medium">
                            Join 10,000+ users who use our clinically-trained AI
                            to monitor skin characteristics and track changes
                            over time.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                            <Link href="/scans">
                                <Button
                                    size="lg"
                                    className="h-16 px-10 rounded-2xl bg-slate-900 text-lg font-bold shadow-2xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
                                >
                                    Start Your Free Scan
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale items-center justify-items-center max-w-4xl mx-auto">
                            <span className="font-black text-xl tracking-tighter">
                                HEALTH-TECH
                            </span>
                            <span className="font-black text-xl tracking-tighter">
                                CLINIC_AI
                            </span>
                            <span className="font-black text-xl tracking-tighter">
                                DERMA_LABS
                            </span>
                            <span className="font-black text-xl tracking-tighter">
                                BIO_SCAN
                            </span>
                        </div>
                    </div>
                </section>

                {/* --- FEATURES SECTION --- */}
                <section id="features" className="py-32 bg-slate-50/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-12">
                            <FeatureCard
                                icon={
                                    <ShieldCheck className="w-8 h-8 text-blue-600" />
                                }
                                title="Privacy First"
                                description="Your health data is encrypted at rest and in transit. We never share your photos with third parties."
                            />
                            <FeatureCard
                                icon={
                                    <Activity className="w-8 h-8 text-blue-600" />
                                }
                                title="Pattern Recognition"
                                description="Our AI identifies visual characteristics and markers with high-fidelity accuracy across all skin types."
                            />
                            <FeatureCard
                                icon={
                                    <Smartphone className="w-8 h-8 text-blue-600" />
                                }
                                title="Mobile First"
                                description="Take a snap directly from your phone. No apps required, fully browser-optimized experience."
                            />
                        </div>
                    </div>
                </section>

                {/* --- PRICING SECTION --- */}
                <section
                    id="pricing"
                    className="py-32 bg-white relative overflow-hidden"
                >
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                                One Plan. Total Clarity.
                            </h2>
                            <p className="text-slate-500 text-lg font-medium">
                                No hidden fees. Start with a full week on us.
                            </p>
                        </div>

                        <div className="max-w-md mx-auto">
                            <div className="relative group">
                                {/* Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                                <div className="relative bg-white border border-slate-100 rounded-[3rem] p-10 md:p-14 shadow-2xl">
                                    <div className="flex justify-between items-start mb-10">
                                        <div>
                                            <h3 className="text-3xl font-bold text-slate-900">
                                                Pro Access
                                            </h3>
                                            <p className="text-slate-400 font-medium text-sm mt-1 tracking-wide uppercase">
                                                Annual Subscription
                                            </p>
                                        </div>
                                        <div className="bg-blue-600 p-3 rounded-2xl shadow-lg shadow-blue-200">
                                            <Star className="w-6 h-6 text-white fill-white" />
                                        </div>
                                    </div>

                                    <div className="mb-10">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-6xl font-black text-slate-900">
                                                $9.79
                                            </span>
                                            <span className="text-slate-400 font-bold text-xl">
                                                /mo
                                            </span>
                                        </div>
                                        <div className="mt-6 inline-flex items-center gap-2 py-2 px-5 bg-emerald-50 rounded-full border border-emerald-100">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                            <p className="text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em]">
                                                7 Days Free Trial
                                            </p>
                                        </div>
                                    </div>

                                    <ul className="space-y-5 mb-12">
                                        <PricingItem text="Unlimited AI Scans" />
                                        <PricingItem text="PDF Analysis Reports" />
                                        <PricingItem text="Tracking History" />
                                        <PricingItem text="24/7 Priority Support" />
                                    </ul>

                                    <Link href="/scans">
                                        <Button className="w-full h-16 rounded-[1.5rem] bg-blue-600 hover:bg-blue-700 text-lg font-black shadow-xl shadow-blue-200 transition-all hover:scale-[1.03] active:scale-95">
                                            Get Started Free
                                        </Button>
                                    </Link>

                                    <p className="text-center text-slate-400 text-xs font-medium mt-8">
                                        Secure payment by Stripe. Cancel
                                        anytime.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* --- FOOTER --- */}
            <footer className="bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-slate-900 p-1 rounded-lg">
                                <Search className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-lg font-bold tracking-tight text-slate-900">
                                SkinAI
                            </span>
                        </div>
                        <p className="text-slate-500 max-w-sm leading-relaxed">
                            We empower individuals to take control of their skin
                            health through accessible, high-performance AI
                            analysis.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">
                            Product
                        </h4>
                        <div className="flex flex-col gap-4 text-sm text-slate-500 font-medium">
                            <Link href="/scans">Scan Tool</Link>
                            <Link href="#pricing">Pricing</Link>
                            <Link href="/safety">Safety Data</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">
                            Company
                        </h4>
                        <div className="flex flex-col gap-4 text-sm text-slate-500 font-medium">
                            <Link href="/privacy">Privacy Policy</Link>
                            <Link href="/terms">Terms of Service</Link>
                            <Link href="/contact">Support</Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-200 flex justify-between items-center">
                    <p className="text-slate-400 text-xs">
                        © 2024 SkinAI Labs Inc.
                    </p>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-slate-200" />
                        <div className="w-8 h-8 rounded-full bg-slate-200" />
                    </div>
                </div>
            </footer>
        </div>
    );
}

// --- HELPER COMPONENTS ---

function FeatureCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
            <div className="mb-8 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {title}
            </h3>
            <p className="text-slate-500 leading-relaxed font-medium">
                {description}
            </p>
        </div>
    );
}

function PricingItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-4">
            <div className="bg-emerald-100 rounded-full p-1.5 shrink-0">
                <Check className="w-3 h-3 text-emerald-600 stroke-[4px]" />
            </div>
            <span className="text-slate-700 font-bold text-sm tracking-tight">
                {text}
            </span>
        </li>
    );
}