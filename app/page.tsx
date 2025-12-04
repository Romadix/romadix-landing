'use client'

import { useState } from 'react'

// --- Components ---

const SystemsCarousel = () => {
  const partners = [
    { name: 'Kareo', type: 'PMS' },
    { name: 'DrChrono', type: 'EHR' },
    { name: 'Medisoft', type: 'Legacy' },
    { name: 'AdvancedMD', type: 'PMS' },
    { name: 'Lytec', type: 'Legacy' },
    { name: 'NextGen', type: 'EHR' },
    { name: 'athenahealth', type: 'EHR' },
    { name: 'eClinicalWorks', type: 'EHR' },
  ]

  // Duplicate for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners]

  return (
    <div className="w-full border-y border-gray-100 bg-gradient-to-r from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Works with your existing systems
        </p>
        <div className="relative">
          <div className="flex gap-12 animate-scroll hover:pause-animation">
            {duplicatedPartners.map((partner, idx) => (
              <div key={`${partner.name}-${idx}`} className="flex-shrink-0 group">
                <div className="flex flex-col items-center justify-center px-6">
                  <span className="text-xl font-bold text-gray-400 group-hover:text-blue-600 transition-colors duration-300 whitespace-nowrap">
                    {partner.name}
                  </span>
                  <span className="text-xs text-gray-300 mt-1">{partner.type}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  )
}

const DashboardPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern opacity-[0.02]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Command Center</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Real-time visibility across your entire operation
          </h2>
          <p className="text-lg text-gray-600">
            Track every claim, catch every error, and monitor performance—all from one unified dashboard.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative max-w-6xl mx-auto">
          {/* Browser chrome */}
          <div className="bg-gray-900 rounded-t-2xl p-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-gray-800 rounded px-3 py-1 text-xs text-gray-400 font-mono">dashboard.romadix.com</div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-b-2xl p-8 shadow-2xl">
            {/* Stats row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1">Claims Today</div>
                <div className="text-3xl font-bold text-white">1,247</div>
                <div className="text-green-400 text-xs mt-1">↑ 12% vs yesterday</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1">Validation Rate</div>
                <div className="text-3xl font-bold text-white">98.4%</div>
                <div className="text-green-400 text-xs mt-1">↑ 2.1% this week</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1">Avg Response</div>
                <div className="text-3xl font-bold text-white">1.2s</div>
                <div className="text-gray-400 text-xs mt-1">Real-time processing</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1">Active Clients</div>
                <div className="text-3xl font-bold text-white">34</div>
                <div className="text-blue-400 text-xs mt-1">All systems online</div>
              </div>
            </div>

            {/* Claims table */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-700">
                <h3 className="text-white font-semibold">Recent Claims</h3>
              </div>
              <div className="divide-y divide-gray-700">
                {[
                  { id: 'CLM-8847', provider: 'Dr. Anderson', status: 'validated', time: '2m ago', color: 'green' },
                  { id: 'CLM-8846', provider: 'Dr. Martinez', status: 'processing', time: '5m ago', color: 'blue' },
                  { id: 'CLM-8845', provider: 'Dr. Chen', status: 'validated', time: '8m ago', color: 'green' },
                  { id: 'CLM-8844', provider: 'Dr. Johnson', status: 'error', time: '12m ago', color: 'red' },
                ].map((claim) => (
                  <div key={claim.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-700/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full bg-${claim.color}-500`}></div>
                      <span className="font-mono text-sm font-semibold text-white">{claim.id}</span>
                      <span className="text-gray-400 text-sm">{claim.provider}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold bg-${claim.color}-500/20 text-${claim.color}-400 uppercase`}>
                        {claim.status}
                      </span>
                      <span className="text-gray-500 text-xs">{claim.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const FeatureCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
  <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 h-full">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl"></div>
    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
)

// --- Main Page ---

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('https://formspree.io/f/xovydvze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail('')
        setTimeout(() => {
          setSubmitted(false);
          setIsLoading(false);
        }, 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 font-sans">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              {/* THE ORIGINAL LOGO (Restored) */}
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="url(#gradient1)" strokeWidth="2.5" fill="white" />
                <circle cx="20" cy="20" r="4" fill="url(#gradient1)" />
                <circle cx="10" cy="15" r="3" fill="url(#gradient2)" />
                <circle cx="30" cy="15" r="3" fill="url(#gradient2)" />
                <circle cx="10" cy="25" r="3" fill="url(#gradient2)" />
                <circle cx="30" cy="25" r="3" fill="url(#gradient2)" />
                <line x1="20" y1="20" x2="10" y2="15" stroke="url(#gradient1)" strokeWidth="2" />
                <line x1="20" y1="20" x2="30" y2="15" stroke="url(#gradient1)" strokeWidth="2" />
                <line x1="20" y1="20" x2="10" y2="25" stroke="url(#gradient1)" strokeWidth="2" />
                <line x1="20" y1="20" x2="30" y2="25" stroke="url(#gradient1)" strokeWidth="2" />
                <defs>
                  <linearGradient id="gradient1" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#2563eb" /> {/* Blue 600 */}
                    <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan 500 */}
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-2xl font-bold text-gray-900 tracking-tight font-heading">Romadix</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#platform" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Platform</a>
              <a href="#workflow" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Workflow</a>
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Partner Access
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern opacity-[0.3]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8 animate-fadeIn">
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
              Healthcare Claims Infrastructure
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1] font-heading">
            Modern infrastructure for <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              healthcare billing.
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            One platform. One API. Instant validation. Cost-effective pricing.
            The modern claims infrastructure your RCM team deserves.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="h-12 px-8 flex items-center justify-center text-white bg-gray-900 rounded-xl font-semibold hover:bg-gray-800 transition-all hover:-translate-y-0.5 shadow-lg shadow-gray-900/20"
            >
              Schedule Demo
            </a>
            <a
              href="#platform"
              className="h-12 px-8 flex items-center justify-center text-gray-700 bg-white border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-all hover:border-gray-300"
            >
              View Platform
            </a>
          </div>
        </div>
      </section>

      {/* Urgency Section - Why Now */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 mb-4">
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Industry Context</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-heading">
              The 2024 Change Healthcare cyberattack exposed fragility in legacy infrastructure
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Romadix is built on modern, cloud-native architecture designed for reliability —
              never lose sleep on lost or delayed claims.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <span className="font-medium">Modern Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <span className="font-medium">Enterprise Reliability</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <span className="font-medium">HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Carousel */}
      <SystemsCarousel />

      {/* Integration Section */}
      <section id="platform" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Works with your existing workflow.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                No need to change your practice management system or retrain your staff.
                Romadix integrates seamlessly with your current setup.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Choose the integration method that fits your team—from modern APIs to legacy drop folders.
              </p>

              <ul className="space-y-4">
                {[
                  'REST API for modern integrations',
                  'Drop folder for legacy systems',
                  'Desktop agent (no IT required)'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              {/* Integration Methods Visual */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
                <div className="space-y-6">
                  {/* API Integration */}
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">REST API</h3>
                        <p className="text-xs text-gray-500">For developers</p>
                      </div>
                    </div>
                    <code className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded font-mono block">
                      POST /api/v1/claims
                    </code>
                  </div>

                  {/* Drop Folder */}
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Drop Folder</h3>
                        <p className="text-xs text-gray-500">For legacy systems</p>
                      </div>
                    </div>
                    <code className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded font-mono block">
                      C:\Romadix\Outbound\
                    </code>
                  </div>

                  {/* Desktop Agent */}
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Desktop Agent</h3>
                        <p className="text-xs text-gray-500">Zero-config setup</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs text-gray-600">Auto-watching exports</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Choose Your Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <DashboardPreview />

      {/* Infrastructure Stats Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Built for scale and reliability
            </h2>
            <p className="text-lg text-gray-600">
              Enterprise-grade infrastructure from day one
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600 font-medium">Claims Capacity/Month</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">&lt;1s</div>
              <div className="text-gray-600 font-medium">Validation Response</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid (Safe Messaging) */}
      <section id="workflow" className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Infrastructure that just works
            </h2>
            <p className="text-lg text-gray-600">
              Focus on billing. Let us handle the pipes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Reliable Infrastructure"
              description="Built on enterprise-grade infrastructure with automatic failover. Your claims get delivered, every time."
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              }
            />
            <FeatureCard
              title="Instant Validation"
              description="Catch errors before submission with real-time validation. Our engine checks NPI numbers, codes, and formatting instantly."
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              }
            />
            <FeatureCard
              title="Transparent Pricing"
              description="Simple per-claim pricing with volume discounts. No setup fees, no monthly minimums, no surprises."
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              }
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 shadow-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Ready to modernize your infrastructure?
            </h2>
            <p className="text-gray-300 mb-10 max-w-lg mx-auto">
              Join forward-thinking RCM teams building on reliable, cost-effective infrastructure.
            </p>

            {submitted ? (
              <div className="bg-green-500/20 border border-green-500/50 text-white py-4 px-6 rounded-xl inline-block font-medium animate-fadeIn">
                ✓ Request received. We'll be in touch shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="work@company.com"
                    required
                    disabled={isLoading}
                    className="flex-1 px-5 py-3.5 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-70"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Request Demo'}
                  </button>
                </div>
                <p className="text-gray-400 text-xs mt-4">
                  No commitment required.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
              {/* Footer Logo */}
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="#2563eb" strokeWidth="2.5" fill="white" />
                <circle cx="20" cy="20" r="4" fill="#2563eb" />
                <circle cx="10" cy="15" r="3" fill="#06b6d4" />
                <circle cx="30" cy="15" r="3" fill="#06b6d4" />
                <circle cx="10" cy="25" r="3" fill="#06b6d4" />
                <circle cx="30" cy="25" r="3" fill="#06b6d4" />
                <line x1="20" y1="20" x2="10" y2="15" stroke="#2563eb" strokeWidth="2" />
                <line x1="20" y1="20" x2="30" y2="15" stroke="#2563eb" strokeWidth="2" />
                <line x1="20" y1="20" x2="10" y2="25" stroke="#2563eb" strokeWidth="2" />
                <line x1="20" y1="20" x2="30" y2="25" stroke="#2563eb" strokeWidth="2" />
              </svg>
              <span className="text-xl font-bold text-gray-900 font-heading">Romadix</span>
              <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">INFRASTRUCTURE</span>
            </div>
            <div className="text-sm text-gray-500">
              © 2025 Romadix LLC. Minneapolis, MN.
            </div>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="text-gray-400 hover:text-gray-900 transition-colors">Privacy</a>
              <a href="/security" className="text-gray-400 hover:text-gray-900 transition-colors">Security</a>
              <a href="/contact" className="text-gray-400 hover:text-gray-900 transition-colors">Contact</a>
              <span className="text-gray-300">|</span>
              <a href="https://www.linkedin.com/company/110044582" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}