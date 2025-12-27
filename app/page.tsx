'use client'

import { useState } from 'react'

// --- Components ---

const SystemsCarousel = () => {
  const partners = [
    { name: 'Tebra', type: 'PMS' },
    { name: 'DrChrono', type: 'EHR' },
    { name: 'Medisoft', type: 'Legacy' },
    { name: 'AdvancedMD', type: 'PMS' },
    { name: 'Lytec', type: 'Legacy' },
    { name: 'NextGen', type: 'EHR' },
    { name: 'athenahealth', type: 'EHR' },
    { name: 'eClinicalWorks', type: 'EHR' },
    { name: 'Office Ally', type: 'Via SFTP' },
  ]

  const duplicatedPartners = [...partners, ...partners]

  return (
    <div className="w-full border-y border-gray-100 bg-gradient-to-r from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Seamless integration with major platforms
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
      <div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern opacity-[0.02]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Centralized Dashboard</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Supervise, Don't Micromanage
          </h2>
          <p className="text-lg text-gray-600">
            Your team focuses on exceptions that require clinical judgment. Routine processing happens automatically.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="bg-gray-900 rounded-t-2xl p-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-b-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1">Auto-Processed</div>
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-green-400 text-xs mt-1">No manual intervention</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1">First-Pass Rate</div>
                <div className="text-3xl font-bold text-white">98.4%</div>
                <div className="text-green-400 text-xs mt-1">Auto-corrected pre-flight</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1">Secondary Claims</div>
                <div className="text-3xl font-bold text-white">147</div>
                <div className="text-blue-400 text-xs mt-1">Auto-generated this week</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1">Exceptions</div>
                <div className="text-3xl font-bold text-white">62</div>
                <div className="text-yellow-400 text-xs mt-1">Requires review</div>
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-700">
                <h3 className="text-white font-semibold">Real-Time Processing Feed</h3>
              </div>
              <div className="divide-y divide-gray-700">
                {[
                  { id: 'CLM-8847', provider: 'Dr. Anderson', status: 'auto-corrected', time: '2m ago', color: 'green' },
                  { id: 'CLM-8846', provider: 'Dr. Martinez', status: 'processing', time: '5m ago', color: 'blue' },
                  { id: 'CLM-8845', provider: 'Dr. Chen', status: 'auto-secondary', time: '8m ago', color: 'purple' },
                  { id: 'CLM-8844', provider: 'Dr. Johnson', status: 'needs review', time: '12m ago', color: 'yellow' },
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
  const [company, setCompany] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('https://formspree.io/f/xovydvze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, company }),
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail('')
        setCompany('')
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
      {/* Global Styles for Smooth Scrolling */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 5rem;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
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
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#06b6d4" />
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
              <a href="#capabilities" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Capabilities</a>
              <a href="#integration" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Integration</a>
              <a href="#technical" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Technical</a>
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get Started
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-8 animate-fadeIn">
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
              Autonomous Revenue Optimization
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1] font-heading">
            Stop Processing Claims.<br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Start Optimizing Revenue.
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Romadix automatically corrects claim errors, generates secondary billings, and monitors revenue risk—so your team can focus on complex cases that need human expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="h-12 px-8 flex items-center justify-center text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-600/30"
            >
              Schedule a Demo
            </a>
            <a
              href="#capabilities"
              className="h-12 px-8 flex items-center justify-center text-gray-700 bg-white border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-all hover:border-gray-300"
            >
              Explore Capabilities
            </a>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50/30 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* The Challenge */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Revenue Cycle Challenge</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>40% of billing staff time spent fixing preventable errors</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Secondary claims often ignored when processing costs exceed claim value</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Revenue lost to timely filing deadlines and underpayments</span>
                </li>
              </ul>
            </div>

            {/* The Romadix Approach */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Autonomous Optimization</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Automatic correction of known error patterns before submission</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Automated secondary claim generation and routing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Proactive monitoring of filing deadlines and contract compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Carousel */}
      <SystemsCarousel />

      {/* Integration Methods */}
      <section id="integration" className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
                  Built for Your Infrastructure
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Modern API or legacy file transfer—we adapt to your environment without forcing a platform migration.
                  </p>

                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                        </div>
                        <div>
                           <h3 className="text-lg font-bold text-gray-900">RESTful API</h3>
                           <p className="text-gray-600">JSON-based integration for modern tech stacks. Comprehensive documentation and webhook support.</p>
                        </div>
                     </div>

                     <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                        </div>
                        <div>
                           <h3 className="text-lg font-bold text-gray-900">File-Based Integration</h3>
                           <p className="text-gray-600">SFTP, secure file transfer, or desktop agent for legacy systems. Works with existing export workflows.</p>
                        </div>
                     </div>

                     <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        </div>
                        <div>
                           <h3 className="text-lg font-bold text-gray-900">Enterprise Security</h3>
                           <p className="text-gray-600">HIPAA-compliant infrastructure with encrypted data transmission and comprehensive audit logging.</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-gray-800 font-mono text-sm overflow-hidden shadow-2xl relative">
                  {/* Mac-style window dots */}
                  <div className="flex gap-2 mb-6">
                     <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                     <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                     <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>

                  {/* The Code with Line Numbers */}
                  <div className="flex gap-4">
                    <div className="flex flex-col text-gray-600 select-none text-right pr-4 border-r border-gray-800">
                       <span>1</span>
                       <span>2</span>
                       <span>3</span>
                       <span>4</span>
                       <span>5</span>
                       <span>6</span>
                       <span>7</span>
                       <span>8</span>
                       <span>9</span>
                       <span>10</span>
                       <span>11</span>
                       <span>12</span>
                       <span>13</span>
                    </div>
                    <div className="flex-1">
                       <div><span className="text-[#569cd6]">const</span> <span className="text-[#9cdcfe]">claim</span> = <span className="text-[#c586c0]">await</span> <span className="text-[#4ec9b0]">romadix</span>.<span className="text-[#dcdcaa]">submit</span>({`({`}</div>
                       <div className="pl-4"><span className="text-[#9cdcfe]">provider_npi</span>: <span className="text-[#ce9178]">'1234567890'</span>,</div>
                       <div className="pl-4"><span className="text-[#9cdcfe]">patient_id</span>: <span className="text-[#ce9178]">'PT-88492'</span>,</div>
                       <div className="pl-4"><span className="text-[#9cdcfe]">services</span>: [</div>
                       <div className="pl-8">{`{`} <span className="text-[#9cdcfe]">cpt</span>: <span className="text-[#ce9178]">'99214'</span>, <span className="text-[#9cdcfe]">amount</span>: <span className="text-[#b5cea8]">150.00</span> {`}`}</div>
                       <div className="pl-4">]</div>
                       <div>{`});`}</div>
                       <div className="mt-2"></div>
                       <div><span className="text-[#6a9955]">{`// Auto-corrections applied`}</span></div>
                       <div><span className="text-[#6a9955]">{`// Response: { status: 'validated',`}</span></div>
                       <div><span className="text-[#6a9955]">{`//            corrections: ['Added Modifier 25'] }`}</span></div>
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Secondary Claims Automation */}
      <section id="capabilities" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 mb-6">
                <span className="text-xs font-semibold text-blue-800 uppercase tracking-wide">Automated Recovery</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Capture Revenue You're Currently Writing Off
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                When manual processing costs $8-12 per claim, small-value secondary claims often go unbilled. Romadix eliminates the labor constraint, making every secondary claim economically viable.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The system monitors primary payments, identifies secondary coverage, generates compliant secondary claims, and routes them automatically—without human intervention.
              </p>

              <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Typical Recovery Scenario</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-sm">Primary claims/month</span>
                    <span className="font-semibold">1,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-sm">Claims with secondary coverage</span>
                    <span className="font-semibold">150 (15%)</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-sm">Average secondary reimbursement</span>
                    <span className="font-semibold">$30</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 text-blue-700 font-bold text-lg">
                    <span>Monthly additional revenue</span>
                    <span>$4,500</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-xl font-bold mb-6">Automated Workflow</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Primary Payment Detected', desc: 'ERA processed, payment posted' },
                    { step: '2', title: 'Secondary Coverage Identified', desc: 'Eligibility database checked' },
                    { step: '3', title: 'Secondary Claim Generated', desc: 'X12 837 built with adjustments' },
                    { step: '4', title: 'Routing & Submission', desc: 'Sent to appropriate payer' },
                    { step: '5', title: 'Payment Posted', desc: 'Automatic reconciliation' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <DashboardPreview />

      {/* Technical Capabilities */}
      <section id="technical" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Complete Revenue Cycle Infrastructure
            </h2>
            <p className="text-lg text-gray-600">
              From pre-submission validation to payment reconciliation, built for scale and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Pre-Submission Validation"
              description="Advanced rules engine catches modifier mismatches, age/gender/POS conflicts, and authorization requirements before transmission. Reduces rejections by 85%."
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              }
            />
            <FeatureCard
              title="Pattern-Based Correction"
              description="Machine learning identifies provider-specific error patterns. Automatically applies corrections based on historical acceptance data from payers."
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              }
            />
            <FeatureCard
              title="Timely Filing Monitoring"
              description="Payer-specific deadline tracking with configurable alert thresholds. Prevents revenue loss from expired filing windows."
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              }
            />
            <FeatureCard
              title="Authorization Management"
              description="Automated session tracking with unit decrementation. Proactive alerts for authorization expiration and remaining unit thresholds."
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              }
            />
            <FeatureCard
              title="Intelligent Denial Routing"
              description="Automatic categorization of denials by root cause. Prioritized workqueues enable targeted resolution strategies by denial type."
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              }
            />
            <FeatureCard
              title="Payment Reconciliation"
              description="Automated ERA processing with contract rate validation. Flags underpayments and contractual discrepancies for review."
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              }
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-12 shadow-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Ready to Optimize Your Revenue Cycle?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Learn how Romadix can reduce manual processing, capture unbilled revenue, and give your team better visibility into revenue operations.
            </p>

            {submitted ? (
              <div className="bg-green-500/20 border border-green-500/50 text-white py-4 px-6 rounded-xl inline-block font-medium animate-fadeIn">
                ✓ Request received. We'll be in touch within 24 hours.
              </div>
            ) : (
              <div>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
                  <div className="flex flex-col gap-3 mb-3">
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company Name"
                      required
                      disabled={isLoading}
                      className="w-full px-5 py-3.5 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-70"
                    />
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="work@company.com"
                        required
                        disabled={isLoading}
                        className="flex-1 px-5 py-3.5 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-70"
                      />
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="px-8 py-3.5 bg-white hover:bg-gray-100 text-blue-600 font-bold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                      >
                        {isLoading ? 'Sending...' : 'Get Started'}
                      </button>
                    </div>
                  </div>
                  <p className="text-blue-200 text-xs mt-4">
                    We'll respond within 24 hours to discuss your requirements.
                  </p>
                </form>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center items-center gap-6 text-blue-100">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    <span className="text-sm font-medium">HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    <span className="text-sm font-medium">Bank-Level Encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-sm font-medium">SOC2 Ready</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
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
