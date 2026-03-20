export default function Problems() {
  const problems = [
    {
      icon: '👎',
      title: 'Customers happy but do not leave reviews',
      description: 'Happy customers are unlikely to leave reviews',
    },
    {
      icon: '😠',
      title: 'Angry customers directly leave 1-star reviews',
      description: 'Unhappy customers immediately post negative reviews',
    },
    {
      icon: '📉',
      title: 'Negative ratings damage reputation',
      description: 'Bad reviews hurt your online presence',
    },
    {
      icon: '📊',
      title: 'Low Google rating reduces customers and sales',
      description: 'Poor ratings directly impact revenue',
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">हर business owner इस problem से परेशान है</h2>
          <p className="text-gray-600 text-lg">These challenges are costing you customers and revenue</p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600 text-sm">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
            Fix My Google Rating
          </button>
        </div>

        {/* Statistics */}
        <div className="bg-blue-600 text-white rounded-lg p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">92%</div>
              <p>customers read online reviews</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">88%</div>
              <p>customers trust Google ratings</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">&lt;4.0</div>
              <p>businesses with rating below 4.0 lose customers</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Start Improving My Rating
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}