export default function LogoCloud() {
    const partners = [
      { name: 'Kareo', label: 'Works with' },
      { name: 'DrChrono', label: 'Works with' },
      { name: 'Waystar', label: 'Connects to' },
      { name: 'Availity', label: 'Connects to' },
      { name: 'Office Ally', label: 'Connects to' },
      { name: 'OpenEMR', label: 'Works with' },
    ]
  
    return (
      <section className="py-12 border-b border-gray-100 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Seamlessly integrates with your existing stack
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* 
              In a real app, use SVG logos here. 
              For now, we use styled text placeholders that look like logos.
            */}
            {partners.map((partner) => (
              <div key={partner.name} className="text-xl font-bold text-gray-400 hover:text-gray-600 cursor-default">
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }