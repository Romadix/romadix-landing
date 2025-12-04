import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security | Romadix',
  description: 'Enterprise-grade security, encryption, and compliance standards.',
}

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-3">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-bold text-gray-900 tracking-tight font-heading">Romadix</span>
            </a>
            <div className="flex items-center space-x-8">
              <a href="/contact" className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 font-heading">Security & Compliance</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We process sensitive healthcare data. Our infrastructure is built with a security-first mindset, exceeding HIPAA requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50/50">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">HIPAA Compliance</h3>
            <p className="text-gray-600">
              Romadix operates as a Business Associate under HIPAA. We sign BAAs with all partners and enforce strict data handling protocols for PHI (Protected Health Information).
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50/50">
             <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Encryption</h3>
            <p className="text-gray-600">
              Data is encrypted at rest using AES-256 and in transit using TLS 1.2+. Your data is secure from the moment it leaves your device until it reaches the payer.
            </p>
          </div>

           {/* Card 3 */}
           <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50/50">
             <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Infrastructure</h3>
            <p className="text-gray-600">
              Our platform is hosted on Google Cloud Platform (GCP) in US-based data centers, utilizing the same infrastructure trusted by major financial and healthcare institutions.
            </p>
          </div>

           {/* Card 4 */}
           <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50/50">
             <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Audit & Access Control</h3>
            <p className="text-gray-600">
              We employ strict Role-Based Access Control (RBAC) and maintain immutable audit logs of every transaction and file access for compliance and accountability.
            </p>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          © 2025 Romadix LLC. Minneapolis, MN.
        </div>
      </footer>
    </main>
  )
}