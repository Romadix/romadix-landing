'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission logic
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 font-sans">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-3">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="url(#gradient1)" strokeWidth="2.5" fill="white" />
                <circle cx="20" cy="20" r="4" fill="url(#gradient1)" />
                <defs>
                  <linearGradient id="gradient1" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-bold text-gray-900 tracking-tight font-heading">Romadix</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left Side: Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6 font-heading">Contact Us</h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Whether you are an RCM looking for infrastructure or a developer looking for API access, we're here to help.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">General Inquiries</h3>
                <a href="mailto:info@romadix.com" className="text-blue-600 hover:underline text-lg">info@romadix.com</a>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sales & Partnerships</h3>
                <a href="mailto:admin@romadix.com" className="text-blue-600 hover:underline text-lg">admin@romadix.com</a>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Headquarters</h3>
                <p className="text-gray-600">
                  Minneapolis, MN<br />
                  United States
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl text-green-600">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent</h3>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="jane@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Acme Medical Billing" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Tell us about your volume and requirements..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  )
}