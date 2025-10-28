import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 sm:p-8">
        <div className="text-2xl font-bold">
          <span className="text-white">Velazco</span>
          <span className="text-red-600"> Ventures</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-red-500 font-semibold">Home</a>
          <a href="/about" className="hover:text-red-400 transition-colors">About</a>
          <a href="/initiative" className="hover:text-red-400 transition-colors">AI Initiative</a>
          <a href="/join" className="hover:text-red-400 transition-colors">Join Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 sm:px-8 py-20">
        <div className="max-w-5xl text-center space-y-8">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            Find Your People.
            <span className="text-red-600"> Build Together.</span>
            <br />
            Create Impact.
          </h1>
          
          <p className="text-xl sm:text-2xl text-stone-300 max-w-4xl mx-auto leading-relaxed">
            Velazco Ventures brings together people who want to make a difference. We provide 
            the structure and resources. You bring your ideas and perspective.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a href="/join" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
              Join Our Community
            </a>
            <a href="/about" className="border-2 border-stone-600 hover:border-red-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
              Learn How It Works
            </a>
          </div>
        </div>
      </main>

      {/* Simple Explanation */}
      <section className="px-6 sm:px-8 py-16 bg-stone-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">
            What is <span className="text-red-600">Velazco Ventures?</span>
          </h2>
          
          <p className="text-xl text-stone-300 leading-relaxed">
            A platform where people with shared values come together to build initiatives that 
            create real change. Guided by inclusivity, leadership, and sustainability.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-stone-900 p-6 rounded-lg">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-stone-300">
                Monthly meetings where everyone's voice matters
              </p>
            </div>
            
            <div className="bg-stone-900 p-6 rounded-lg">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Structure</h3>
              <p className="text-stone-300">
                Business frameworks that turn ideas into action
              </p>
            </div>
            
            <div className="bg-stone-900 p-6 rounded-lg">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <p className="text-stone-300">
                Real initiatives that make measurable difference
              </p>
            </div>
          </div>

          <a href="/about" className="inline-block text-red-500 hover:text-red-400 font-semibold text-lg mt-8">
            Learn more about who we are →
          </a>
        </div>
      </section>

      {/* Current Initiative */}
      <section className="px-6 sm:px-8 py-16 bg-stone-900">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">
            Our First <span className="text-red-600">Initiative</span>
          </h2>
          
          <p className="text-xl text-stone-300 leading-relaxed">
            Building an interdisciplinary community to understand AI's human impact. Creating 
            accessible resources using diverse perspectives to help people understand AI's effects 
            and develop technology more sustainably and ethically.
          </p>

          <div className="bg-stone-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-red-500 mb-4">Who Should Join</h3>
            <p className="text-stone-300 mb-6">
              Anyone curious about AI's impact on humanity. Tech professionals, artists, students, 
              community members, researchers. You don't need expertise, just care about the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/initiative" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Learn About AI Initiative
              </a>
              <a href="/join" className="inline-block border-2 border-red-600 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Join Monthly Meetings
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="px-6 sm:px-8 py-16 bg-stone-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">
            Ready to Make a <span className="text-red-600">Difference?</span>
          </h2>
          <p className="text-xl text-stone-300">
            You don't need to be an expert. You just need to care.
          </p>
          <a href="/join" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-12 rounded-lg transition-colors text-lg">
            Get Involved
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 px-6 sm:px-8 py-12 border-t border-stone-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold mb-4">
                <span className="text-white">Velazco</span>
                <span className="text-red-600"> Ventures</span>
              </div>
              <p className="text-stone-400">
                Building together through inclusivity, leadership, and sustainability.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-stone-400">
                <li><a href="/about" className="hover:text-red-400 transition-colors">About Us</a></li>
                <li><a href="/initiative" className="hover:text-red-400 transition-colors">AI Initiative</a></li>
                <li><a href="/join" className="hover:text-red-400 transition-colors">Join Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Get Involved</h4>
              <div className="space-y-2 text-stone-400">
                <p>Find your people. Build together. Create impact.</p>
                <a href="/join" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors">
                  Join Us
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-700 pt-8 text-center text-stone-400">
            <p>&copy; 2025 Velazco Ventures. Creating a future where technology serves all of humanity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}