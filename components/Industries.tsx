import Link from "next/link";

export default function Industries() {
  const industries = [
    { icon: '🍽️', title: 'Restaurants' },
    { icon: '🏨', title: 'Hotels' },
    { icon: '⚕️', title: 'Clinics' },
    { icon: '✂️', title: 'Salons' },
    { icon: '💪', title: 'Gyms' },
    { icon: '🛍️', title: 'Retail Shops' },
    { icon: '🎓', title: 'Institutes' },
    { icon: '🏢', title: 'Offices' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Perfect For Every Business</h2>
          <p className="text-gray-600 text-lg">Join thousands of businesses already using Review QR</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {industries.map((industry, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:bg-blue-50 transition cursor-pointer">
              <div className="text-5xl mb-4">{industry.icon}</div>
              <h3 className="font-bold text-gray-900">{industry.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-center">
             <Link href="https://www.reviewbadhao.com" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
            Activate My Review QR
          </Link>
        </div>
      </div>
    </section>
  );
}