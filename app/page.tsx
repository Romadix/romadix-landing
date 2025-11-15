'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://formspree.io/f/xovydvze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      
      if (response.ok) {
        setSubmitted(true)
        setEmail('')
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50/20 to-blue-50/30">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-3">
            {/* Logo with gradient */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="url(#gradient1)" strokeWidth="2.5" fill="white"/>
              <circle cx="20" cy="20" r="4" fill="url(#gradient1)"/>
              <circle cx="10" cy="15" r="3" fill="url(#gradient2)"/>
              <circle cx="30" cy="15" r="3" fill="url(#gradient2)"/>
              <circle cx="10" cy="25" r="3" fill="url(#gradient2)"/>
              <circle cx="30" cy="25" r="3" fill="url(#gradient2)"/>
              <line x1="20" y1="20" x2="10" y2="15" stroke="url(#gradient1)" strokeWidth="2"/>
              <line x1="20" y1="20" x2="30" y2="15" stroke="url(#gradient1)" strokeWidth="2"/>
              <line x1="20" y1="20" x2="10" y2="25" stroke="url(#gradient1)" strokeWidth="2"/>
              <line x1="20" y1="20" x2="30" y2="25" stroke="url(#gradient1)" strokeWidth="2"/>
              <defs>
                <linearGradient id="gradient1" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Romadix</span>
          </div>
        </div>
      </header>

      {/* Hero Section - Reduced padding */}
      <section className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-5 px-3 py-1.5 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full">
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Launching Early 2026
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Never lose claims
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              processing again
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Resilient claims infrastructure that keeps you online during vendor outages—without increasing costs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#early-access" 
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-0.5"
            >
              Request Early Access
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          
          <p className="mt-6 text-sm text-gray-500">
            Built for RCM companies that can't afford downtime
          </p>
        </div>
      </section>

      {/* The Problem Section - Reduced padding, left-aligned */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 sm:p-12 shadow-xl shadow-gray-200/50 border border-gray-200/50">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 text-left">
              The Change Healthcare outage exposed a{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                critical vulnerability
              </span>
            </h2>
            <p className="text-xl text-gray-600 text-left max-w-4xl leading-relaxed">
              When clearinghouse vendors go down, claims processing stops. Revenue freezes. Staff scrambles for manual workarounds. 
              Single-vendor dependency creates unacceptable risk for healthcare operations.
            </p>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200/40"></div>
      </div>

      {/* The Solution Section - Reduced padding */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Enterprise-grade clearinghouse resilience,
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              without enterprise complexity
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Romadix provides unified infrastructure with automatic failover across multiple clearinghouse vendors. 
            Get the redundancy and resilience of large enterprises without rebuilding your entire integration layer.
          </p>
        </div>
      </section>

      {/* Visual Diagram - New anchor */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/30">
            {/* Simple architecture diagram */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Multiple Clearinghouses */}
              <div className="flex-1 space-y-3">
                <div className="text-center mb-4">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Multiple Clearinghouses</p>
                </div>
                <div className="bg-blue-100/60 backdrop-blur-sm rounded-xl p-4 border border-blue-200/50">
                  <p className="text-sm font-semibold text-blue-900">Office Ally</p>
                </div>
                <div className="bg-blue-100/60 backdrop-blur-sm rounded-xl p-4 border border-blue-200/50">
                  <p className="text-sm font-semibold text-blue-900">Availity</p>
                </div>
                <div className="bg-blue-100/60 backdrop-blur-sm rounded-xl p-4 border border-blue-200/50">
                  <p className="text-sm font-semibold text-blue-900">MN-ITS</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-primary rotate-0 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Romadix */}
              <div className="flex-1">
                <div className="text-center mb-4">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Unified Platform</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 border-2 border-primary/30 shadow-lg">
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center">
                    Romadix
                  </p>
                  <p className="text-sm text-gray-600 text-center mt-2">Automatic Failover</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-primary rotate-0 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Your System */}
              <div className="flex-1">
                <div className="text-center mb-4">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Your System</p>
                </div>
                <div className="bg-gray-100/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
                  <p className="text-lg font-semibold text-gray-900 text-center">RCM Platform</p>
                  <p className="text-sm text-gray-600 text-center mt-2">Single Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section - Reduced padding */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Three pillars of modern claims infrastructure
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Resilience */}
            <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-200/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Resilience</h3>
              <p className="text-gray-700 font-semibold mb-2">Stay online during clearinghouse outages</p>
              <p className="text-gray-600 leading-relaxed">Automatic failover ensures continuous claims processing</p>
            </div>

            {/* Cost Control */}
            <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-200/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Cost Control</h3>
              <p className="text-gray-700 font-semibold mb-2">Never pay more than standard clearinghouse rates</p>
              <p className="text-gray-600 leading-relaxed">Access competitive pricing across multiple vendors</p>
            </div>

            {/* Simplicity */}
            <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-200/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Simplicity</h3>
              <p className="text-gray-700 font-semibold mb-2">One integration, multiple clearinghouse connections</p>
              <p className="text-gray-600 leading-relaxed">Add vendor redundancy without rebuilding your infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost-Neutral Callout - Reduced padding */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-10 border border-purple-200/50">
            <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center">Cost-Neutral Architecture</h3>
            <p className="text-xl text-gray-700 text-center leading-relaxed">
              Our platform fee is designed to ensure you never pay more than direct clearinghouse rates. 
              Get resilience and redundancy without cost penalties.
            </p>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200/40"></div>
      </div>

      {/* How It Works Section - Reduced padding, left-aligned */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 text-left">
            Simple integration.{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Powerful resilience.
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-left">
            Three steps to uninterrupted claims processing
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-6 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-200/50 hover:shadow-xl transition-all">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Connect your system to Romadix once</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Single API integration replaces multiple vendor connections</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-200/50 hover:shadow-xl transition-all">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">We handle clearinghouse connectivity and failover</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Automatic redundancy across multiple vendors, no manual intervention required</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-200/50 hover:shadow-xl transition-all">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Your claims process without interruption</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Continuous uptime even during vendor outages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built For Section - Reduced padding, wider, no backdrop blur */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">
            Built for organizations that{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              can't afford downtime
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-200/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">RCM Companies</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Mid-sized revenue cycle management companies processing millions in claims monthly who need enterprise-grade resilience without enterprise complexity.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-200/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthcare Systems</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Hospital systems and medical groups managing internal billing operations who require guaranteed claims processing uptime.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-200/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Billing Operations</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Billing departments dependent on continuous clearinghouse connectivity for cash flow and revenue cycle performance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-200/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthcare Technology Partners</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Practice management systems and healthcare SaaS platforms looking to offer resilient claims processing to their customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Reduced padding */}
      <section id="early-access" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary via-purple-600 to-secondary rounded-3xl p-10 sm:p-14 shadow-2xl shadow-purple-500/50">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
                Get early access to Romadix
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join the waitlist for launch in early 2026
              </p>
              
              {submitted ? (
                <div className="bg-white/20 backdrop-blur-md text-white py-5 px-8 rounded-2xl inline-block text-lg font-medium animate-fadeIn">
                  ✓ Thanks! We'll be in touch soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white shadow-lg text-lg"
                  />
                  <button
                    type="submit"
                    className="bg-white text-primary hover:bg-gray-50 font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
                  >
                    Request Access
                  </button>
                </form>
              )}
              
              <p className="mt-6 text-white/80">
                No spam. Just updates on our launch and early access opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Reduced padding, added Privacy/Terms */}
      <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" fill="transparent"/>
                  <circle cx="20" cy="20" r="4" fill="white"/>
                  <circle cx="10" cy="15" r="3" fill="white" opacity="0.7"/>
                  <circle cx="30" cy="15" r="3" fill="white" opacity="0.7"/>
                  <circle cx="10" cy="25" r="3" fill="white" opacity="0.7"/>
                  <circle cx="30" cy="25" r="3" fill="white" opacity="0.7"/>
                  <line x1="20" y1="20" x2="10" y2="15" stroke="white" strokeWidth="2" opacity="0.5"/>
                  <line x1="20" y1="20" x2="30" y2="15" stroke="white" strokeWidth="2" opacity="0.5"/>
                  <line x1="20" y1="20" x2="10" y2="25" stroke="white" strokeWidth="2" opacity="0.5"/>
                  <line x1="20" y1="20" x2="30" y2="25" stroke="white" strokeWidth="2" opacity="0.5"/>
                </svg>
                <span className="text-xl font-bold">Romadix</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Resilient claims infrastructure for healthcare
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:admin@romadix.com" className="hover:text-white transition-colors">
                    admin@romadix.com
                  </a>
                </li>
                <li>
                  <a href="mailto:sales@romadix.com" className="hover:text-white transition-colors">
                    sales@romadix.com
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/company/romadix" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Minneapolis, MN</li>
                <li className="text-sm">© 2025 Romadix LLC</li>
                <li className="flex gap-4 mt-4">
                  <a href="#" className="hover:text-white transition-colors text-sm">Privacy</a>
                  <a href="#" className="hover:text-white transition-colors text-sm">Terms</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
            <p>Launching early 2026</p>
          </div>
        </div>
      </footer>
    </main>
  )
}