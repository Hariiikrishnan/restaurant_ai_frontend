import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Bot, CheckCircle2, ShieldCheck, Stars, Zap } from 'lucide-react'
import Button from '../components/ui/button'
import { Card } from '../components/ui/card'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-16 pt-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-lg font-semibold text-slatey-900">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-white">RA</span>
            Review Automation
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="primary">Get Started</Button>
            </Link>
          </div>
        </header>

        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="badge-ring">
              <Zap className="h-4 w-4" /> AI-first review automation
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slatey-900 md:text-5xl">
              Turn every Google review into a brand moment, automatically.
            </h1>
            <p className="text-lg text-slatey-600">
              Review AI monitors every location, generates human replies, escalates negative feedback to WhatsApp,
              and keeps your reputation spotless while you sleep.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/register">
                <Button variant="primary" size="lg">
                  Launch your workspace
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/connect-google">
                <Button variant="outline" size="lg">
                  Connect Google
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slatey-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" /> AI replies within 2 minutes
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-500" /> Enterprise-grade security
              </span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-panel relative overflow-hidden rounded-3xl p-6"
          >
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand-200/40 blur-3xl" />
            <div className="absolute -bottom-10 left-10 h-32 w-32 rounded-full bg-amber-200/40 blur-3xl" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slatey-400">Live dashboard</p>
                  <p className="text-lg font-semibold text-slatey-900">Reputation pulse</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-slatey-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" /> Live
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: 'Avg rating', value: '4.6', icon: <Stars className="h-4 w-4" /> },
                  { label: 'AI replies', value: '2,418', icon: <Bot className="h-4 w-4" /> },
                  { label: 'Escalations', value: '38', icon: <ShieldCheck className="h-4 w-4" /> },
                  { label: 'Sync latency', value: '1m 12s', icon: <Zap className="h-4 w-4" /> }
                ].map((item) => (
                  <Card key={item.label} className="rounded-2xl border border-white/60 bg-white/60 p-4 shadow-sm">
                    <div className="flex items-center justify-between text-sm text-slatey-600">
                      <span>{item.label}</span>
                      <span className="text-brand-600">{item.icon}</span>
                    </div>
                    <p className="mt-3 text-2xl font-semibold text-slatey-900">{item.value}</p>
                  </Card>
                ))}
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slatey-400">Recent automation</p>
                <div className="mt-3 space-y-3 text-sm text-slatey-600">
                  <div className="flex items-center justify-between">
                    <span>"Absolutely loved the ambience"</span>
                    <span className="text-emerald-600">Replied</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>"Service was slow tonight"</span>
                    <span className="text-amber-600">Escalated</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>"Best gym in the city"</span>
                    <span className="text-emerald-600">Replied</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Always-on AI responses',
              description: 'AI replies match brand tone and outlet context, keeping every response human and fast.'
            },
            {
              title: 'Negative review escalation',
              description: 'Ratings under 4 are routed instantly to WhatsApp with suggested responses.'
            },
            {
              title: 'Cross-outlet insights',
              description: 'See rating distribution, response time, and outlet performance in a single view.'
            }
          ].map((feature) => (
            <Card key={feature.title} className="p-6">
              <h3 className="text-lg font-semibold text-slatey-900">{feature.title}</h3>
              <p className="mt-3 text-sm text-slatey-600">{feature.description}</p>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slatey-900">AI automation engine</h3>
            <p className="mt-3 text-sm text-slatey-600">
              Reviews are fetched via Google Business Profile API, validated, deduplicated, and processed by AI.
              Positive reviews are replied to automatically. Negative reviews are escalated to WhatsApp with
              manager-ready suggestions.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slatey-500">
              {['Google OAuth', 'Firestore', 'AI prompts', 'WhatsApp alerts', 'Rate limits'].map((tag) => (
                <span key={tag} className="rounded-full border border-slatey-200 bg-slatey-50 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slatey-900">Dashboard preview</h3>
            <p className="mt-3 text-sm text-slatey-600">
              The admin command center surfaces review trends, outlet health, and escalation SLAs in real time.
            </p>
            <div className="mt-6 grid gap-3">
              {[1, 2, 3].map((row) => (
                <div key={row} className="flex items-center justify-between rounded-xl border border-slatey-200 bg-slatey-50 px-4 py-3 text-sm">
                  <span>Outlet #{row} — 4.{7 - row} rating</span>
                  <span className="text-emerald-600">Stable</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slatey-900">Testimonials</h3>
            <p className="mt-3 text-sm text-slatey-600">
              "We reclaimed 12 hours of team time per week. Response quality improved instantly." — Launch partner
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slatey-900">Pricing</h3>
            <p className="mt-3 text-sm text-slatey-600">Plans scale with review volume. Custom enterprise options available.</p>
            <Button variant="outline" className="mt-4">
              Talk to sales
            </Button>
          </Card>
        </section>

        <section className="flex flex-col items-start gap-4 rounded-3xl bg-slatey-900 px-8 py-10 text-white">
          <h2 className="text-2xl font-semibold">Ready to automate your reputation?</h2>
          <p className="text-sm text-slatey-200">
            Connect Google, onboard outlets, and let AI handle every new review.
          </p>
          <Link to="/register">
            <Button variant="primary" size="lg" className="bg-white text-slatey-900 hover:bg-slatey-100">
              Start free onboarding
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}
