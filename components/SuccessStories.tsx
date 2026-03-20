import Link from "next/link";

export default function SuccessStories() {
  const stories = [
    {
      rating: 5,
      quote:
        'हमारी restaurant की Google rating 3.2 से बढ़कर 4.7 हो गई है! इस 6 महीने में Review QR ने हमारे business की transform कर दिया।',
      name: 'Rajesh Sharma',
      title: 'Restaurant Owner, Delhi',
      initials: 'RS',
    },
    {
      rating: 5,
      quote:
        'अब negative reviews private मिलती हैं जिससे हमारी service improve हो सकती है। Customer satisfaction अब trust करने में ज्यादा है!',
      name: 'Priya Kapoor',
      title: 'Salon Owner, Mumbai',
      initials: 'PK',
    },
    {
      rating: 5,
      quote:
        '"Setup बहुत easy था और results चौंकाने वाले हैं! Customer patients की भी positive reviews 5 हो गई हैं। Highly recommend!"',
      name: 'Dr. Amit Mehta',
      title: 'Clinic Owner, Bangalore',
      initials: 'AM',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Success Stories</h2>
          <p className="text-gray-600 text-lg">See how Review QR transformed these businesses</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <span key={i} className="text-2xl text-yellow-400">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed">{story.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {story.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{story.name}</p>
                  <p className="text-gray-600 text-sm">{story.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
             <Link href="https://www.reviewbadhao.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
            Join These Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
}