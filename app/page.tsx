'use client'

import { useState } from 'react'

// --- Components ---

const LogoCloud = () => {
  const partners = [
    { name: 'Kareo', type: 'PMS' },
    { name: 'DrChrono', type: 'EHR' },
    { name: 'Waystar', type: 'Clearinghouse' },
    { name: 'Availity', type: 'Clearinghouse' },
    { name: 'Office Ally', type: 'Clearinghouse' },
    { name: 'Medisoft', type: 'Legacy' },
  ]

  return (
    <div className="w-full border-y border-gray-100 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Trusted integrations & Compatibility
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="group flex flex-col items-center justify-center cursor-default">
              <span className="text-lg font-bold text-gray-400 group-hover:text-gray-800 transition-colors duration-300">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
  <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-100 transition-all duration-300 h-full">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl"></div>
    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
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
              Intelligent RCM Workflow Engine
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1] font-heading">
            The unified command center for <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              high-volume billing.
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Streamline your submission workflow regardless of your clearinghouse partner. 
            Validate, process, and track claims across all your clients in one place.
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

      {/* Logo Cloud */}
      <LogoCloud />

      {/* Platform Visual Section */}
      <section id="platform" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Stop working in the dark.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Traditional clearinghouse reports arrive hours after submission. 
                That means simple errors aren't found until the next day, delaying payment cycles.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Romadix provides <strong>Real-Time Pre-Flight Validation</strong>. 
                Our engine catches NPI errors, missing codes, and formatting issues instantly—before they leave your desk.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Instant validation feedback (seconds, not hours)',
                  'In-line error correction (no re-exporting needed)',
                  'Unified visibility across multiple PMS systems'
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
              {/* Abstract Visual: Central Hub (Safe Visual) */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-inner">
                <div className="space-y-4">
                    {/* Validated Claim */}
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="font-mono text-sm font-bold text-gray-700">CLM-8829</span>
                            <span className="text-sm text-gray-500">Dr. Smith</span>
                        </div>
                        <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded">VALIDATED</span>
                    </div>
                    {/* Error Claim */}
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-red-200 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <span className="font-mono text-sm font-bold text-gray-700">CLM-8830</span>
                            <span className="text-sm text-gray-500">Dr. Jones</span>
                        </div>
                        <span className="px-2 py-1 bg-red-50 text-red-700 text-xs font-bold rounded">MISSING NPI</span>
                    </div>
                     {/* Processed Claim - Changed from TRANSMITTED to PROCESSED/DELIVERED */}
                     <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center justify-between opacity-70">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="font-mono text-sm font-bold text-gray-700">CLM-8831</span>
                            <span className="text-sm text-gray-500">Dr. Doe</span>
                        </div>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded">DELIVERED</span>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Live Validation Engine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid (Safe Messaging) */}
      <section id="workflow" className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Operational efficiency for RCMs
            </h2>
            <p className="text-lg text-gray-600">
              Reduce administrative drag and get your team back to high-value work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Intelligent Connectivity"
              description="Smart pathing ensures your claims are delivered reliably. We optimize connectivity to minimize delays and network congestion."
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              }
            />
            <FeatureCard 
              title="Pre-Flight Scrubbing"
              description="Catch 30% more errors than standard clearinghouse portals. Our rules engine checks against payer-specific criteria instantly."
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              }
            />
            <FeatureCard 
              title="Preferred Partner Pricing"
              description="Leverage our partner network agreements. Access high-volume negotiated rates usually reserved for enterprise hospital systems."
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
              Upgrade your RCM infrastructure.
            </h2>
            <p className="text-gray-300 mb-10 max-w-lg mx-auto">
              We are currently onboarding a limited number of Twin Cities partners for our pilot program.
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
                <circle cx="20" cy="20" r="18" stroke="#2563eb" strokeWidth="2.5" fill="white"/>
                <circle cx="20" cy="20" r="4" fill="#2563eb"/>
                <circle cx="10" cy="15" r="3" fill="#06b6d4"/>
                <circle cx="30" cy="15" r="3" fill="#06b6d4"/>
                <circle cx="10" cy="25" r="3" fill="#06b6d4"/>
                <circle cx="30" cy="25" r="3" fill="#06b6d4"/>
                <line x1="20" y1="20" x2="10" y2="15" stroke="#2563eb" strokeWidth="2"/>
                <line x1="20" y1="20" x2="30" y2="15" stroke="#2563eb" strokeWidth="2"/>
                <line x1="20" y1="20" x2="10" y2="25" stroke="#2563eb" strokeWidth="2"/>
                <line x1="20" y1="20" x2="30" y2="25" stroke="#2563eb" strokeWidth="2"/>
              </svg>
               <span className="text-xl font-bold text-gray-900 font-heading">Romadix</span>
               <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">INFRASTRUCTURE</span>
            </div>
            <div className="text-sm text-gray-500">
              © 2025 Romadix LLC. Minneapolis, MN.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Privacy</a>
              <a href="mailto:admin@romadix.com" className="text-gray-400 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}