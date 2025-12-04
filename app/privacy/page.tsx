import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Romadix',
  description: 'How we handle and protect your data.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 font-sans">
       <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-3">
              <span className="text-xl font-bold text-gray-900 tracking-tight font-heading">Romadix</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 font-heading">Privacy Policy</h1>
        <div className="prose prose-lg prose-blue text-gray-600">
          <p className="text-sm text-gray-400 mb-8">Last Updated: December 2025</p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h3>
          <p>
            Romadix LLC ("we," "us," or "our") is committed to protecting the privacy of our clients and their patients. This Privacy Policy explains how we collect, use, and safeguard information when you use our healthcare infrastructure platform.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Protected Health Information (PHI)</h3>
          <p>
            We operate as a Business Associate under the Health Insurance Portability and Accountability Act (HIPAA). Any Protected Health Information (PHI) processed through our platform is handled in strict accordance with our Business Associate Agreement (BAA) and applicable federal laws.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Data Usage & Ownership</h3>
          <p className="font-semibold bg-blue-50 p-4 rounded-lg border border-blue-100">
            We do not sell, rent, or trade your data or your clients' data to third parties. We do not use your claims data to market software directly to providers.
          </p>
          <p>
            We use the data solely for the purpose of facilitating claims transmission, validation, and reporting as directed by you, the Covered Entity or Business Associate.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h3>
          <p>
            We implement administrative, physical, and technical safeguards to protect the confidentiality, integrity, and availability of your electronic PHI. This includes encryption of data in transit and at rest.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h3>
          <p>
            If you have questions about this policy or our data practices, please contact our Privacy Officer at <a href="mailto:privacy@romadix.com" className="text-blue-600 hover:underline">privacy@romadix.com</a>.
          </p>
        </div>
      </div>
    </main>
  )
}