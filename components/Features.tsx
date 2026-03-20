export default function Features() {
  const features = [
    { icon: '📱', title: 'Scan QR', description: 'Customer scans your unique Review QR code' },
    { icon: '⭐', title: 'Select Rating', description: 'Choose star rating from 1 to 5 stars' },
    { icon: '✅', title: 'Redirect to Google', description: 'Positive reviews sent to Google My Business' },
    { icon: '💬', title: 'Receive Private Feedback', description: 'Negative feedback collected privately' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">0{index + 1}</h3>
              <h4 className="font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}