export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Customer scans QR code',
      description: 'Display your Review QR code at your business location or on receipts',
    },
    {
      number: 2,
      title: 'Customer selects star rating',
      description: 'Simple and intuitive rating interface with 1-5 star options',
    },
    {
      number: 3,
      title: '4-5 star users go to Google review page',
      description: 'Happy customers are automatically redirected to leave Google reviews',
    },
    {
      number: 4,
      title: '1-3 star users submit private feedback',
      description: 'Unhappy customers provide feedback privately, preventing negative public reviews',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Introducing Review QR</h2>
          <p className="text-gray-600 text-lg">The smart solution to manage your online reputation</p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-8 mb-12 md:mb-16">
              {/* Number Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg ${
                    step.number === 3 ? 'bg-green-500' : 'bg-blue-600'
                  }`}
                >
                  {step.number}
                </div>
                {index !== steps.length - 1 && (
                  <div className="w-1 h-16 md:h-24 bg-gray-300 mt-2"></div>
                )}
              </div>

              {/* Content */}
              <div className="pb-8 md:pb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}