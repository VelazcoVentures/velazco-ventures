import Image from "next/image";

export default function Researchers() {
  return (
    <div className="min-h-screen bg-stone-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 sm:p-8">
        <div className="text-2xl font-bold">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <span className="text-white">Velazco</span>
            <span className="text-red-600"> Ventures</span>
          </a>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-red-400 transition-colors">Home</a>
          <a href="/about" className="hover:text-red-400 transition-colors">Who We Are</a>
          <a href="/researchers" className="text-red-500 font-semibold">Our Experts</a>
          <a href="/#future" className="hover:text-red-400 transition-colors">Future Impact</a>
        </nav>
      </header>

      {/* Page Title */}
      <section className="px-6 sm:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Our <span className="text-red-600">Interdisciplinary</span> Experts
        </h1>
        <p className="text-xl text-stone-300 max-w-4xl mx-auto leading-relaxed">
          Meet the interdisciplinary researchers and experts who are helping us understand 
          AI's impact on humanity, society, and our planet.
        </p>
      </section>

      {/* Research Categories Overview */}
      <section className="px-6 sm:px-8 py-16 bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-red-600">Interdisciplinary</span> Expertise Areas
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="text-center bg-stone-900 p-6 rounded-lg">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Sciences</h3>
              <p className="text-stone-300 text-sm">Sociology, Anthropology, Political Science</p>
            </div>
            
            <div className="text-center bg-stone-900 p-6 rounded-lg">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ethics & Philosophy</h3>
              <p className="text-stone-300 text-sm">Moral Philosophy, Applied Ethics, Consciousness Studies</p>
            </div>
            
            <div className="text-center bg-stone-900 p-6 rounded-lg">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Human & Environmental Sciences</h3>
              <p className="text-stone-300 text-sm">Psychology, Cognitive Science, Environmental Studies</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Researchers */}
      <section className="px-6 sm:px-8 py-16 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-red-600">Research</span> Team
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Researcher 1 */}
            <div className="bg-stone-800 p-6 rounded-lg">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-stone-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl text-stone-400">📸</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">[Researcher Name]</h3>
                  <p className="text-red-500 font-medium mb-3">[Title/Affiliation]</p>
                  <p className="text-stone-300 text-sm mb-4">
                    [About me section - researcher can describe their background, specialization in AI's impact 
                    on their field (sociology, ethics, psychology, etc.), and what drives their research passion.]
                  </p>
                  <div className="flex space-x-4 text-sm">
                    <a href="#" className="text-red-400 hover:text-red-300 transition-colors">Research Profile</a>
                    <a href="#" className="text-red-400 hover:text-red-300 transition-colors">Publications</a>
                    <a href="#" className="text-red-400 hover:text-red-300 transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Researcher 2 */}
            <div className="bg-stone-800 p-6 rounded-lg">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-stone-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl text-stone-400">📸</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">[Researcher Name]</h3>
                  <p className="text-red-500 font-medium mb-3">[Title/Affiliation]</p>
                  <p className="text-stone-300 text-sm mb-4">
                    [About me section - researcher can describe their background, specialization, 
                    and research interests in AI's societal impact.]
                  </p>
                  <div className="flex space-x-4 text-sm">
                    <a href="#" className="text-red-400 hover:text-red-300 transition-colors">Research Profile</a>
                    <a href="#" className="text-red-400 hover:text-red-300 transition-colors">Publications</a>
                    <a href="#" className="text-red-400 hover:text-red-300 transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Researcher 3 */}
            <div className="bg-stone-800 p-6 rounded-lg">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-stone-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl text-stone-400">📸</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">[Researcher Name]</h3>
                  <p className="text-red-500 font-medium mb-3">[Title/Affiliation]</p>
                  <p className="text-stone-300 text-sm mb-4">
                    [About me section - researcher can describe their background, specialization, 
                    and research interests.]
                  </p>
                  <div className="flex space-x-4 text-sm">
                    <a href="#" className="text-red-400 hover:text-red-300 transition-colors">Research Profile</a>
                    <a href="#" className="text-red-400 hover:text-red-300 transition-colors">Publications</a>
                    <a href="#" className="text-red-400 hover:text-red-300 transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Researcher 4 */}
            <div className="bg-stone-800 p-6 rounded-lg">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-stone-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl text-stone-400">📸</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">[Researcher Name]</h3>
                  <p className="text-red-500 font-medium mb-3">[Title/Affiliation]</p>
                  <p className="text-stone-300 text-sm mb-4">
                    [About me section - researcher can describe their background, specialization, 
                    and research interests.]
                  </p>
                  <div className="flex space-x-4 text-sm">
                    <a href="#" className="text-red-400 hover:text-red-300 transition-colors">Research Profile</a>
                    <a href="#" className="text-red-400 hover:text-red-300 transition-colors">Publications</a>
                    <a href="#" className="text-red-400 hover:text-red-300 transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Researcher 5 */}
            <div className="bg-stone-800 p-6 rounded-lg">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-stone-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl text-stone-400">📸</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">[Researcher Name]</h3>
                  <p className="text-red-500 font-medium mb-3">[Title/Affiliation]</p>
                  <p className="text-stone-300 text-sm mb-4">
                    [About me section - researcher can describe their background, specialization, 
                    and research interests.]
                  </p>
                  <div className="flex space-x-4 text-sm">
                    <a href="#" className="text-red-400 hover:text-red-300 transition-colors">Research Profile</a>
                    <a href="#" className="text-red-400 hover:text-red-300 transition-colors">Publications</a>
                    <a href="#" className="text-red-400 hover:text-red-300 transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Researcher 6 */}
            <div className="bg-stone-800 p-6 rounded-lg">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-stone-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl text-stone-400">📸</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">[Researcher Name]</h3>
                  <p className="text-red-500 font-medium mb-3">[Title/Affiliation]</p>
                  <p className="text-stone-300 text-sm mb-4">
                    [About me section - researcher can describe their background, specialization, 
                    and research interests.]
                  </p>
                  <div className="flex space-x-4 text-sm">
                    <a href="#" className="text-red-400 hover:text-red-300 transition-colors">Research Profile</a>
                    <a href="#" className="text-red-400 hover:text-red-300 transition-colors">Publications</a>
                    <a href="#" className="text-red-400 hover:text-red-300 transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Research Team CTA */}
      <section className="px-6 sm:px-8 py-16 bg-stone-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our <span className="text-red-600">Research</span> Community
          </h2>
          <p className="text-lg text-stone-300 mb-8 leading-relaxed">
            Are you conducting research on AI's impact on society, ethics, environment, or human behavior? 
            We're building a collaborative network of interdisciplinary experts.
          </p>
          
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-stone-900 p-6 rounded-lg text-left">
              <h3 className="text-xl font-semibold mb-4 text-red-500">For Researchers</h3>
              <ul className="space-y-2 text-stone-300 text-sm">
                <li>• Collaborate across disciplines</li>
                <li>• Access to interdisciplinary network</li>
                <li>• Opportunities for joint publications</li>
                <li>• Platform to share your research</li>
                <li>• Contribute to educational content</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
              Apply to Join Research Network
            </button>
            <button className="border-2 border-stone-600 hover:border-red-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
              Propose a Collaboration
            </button>
          </div>
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
                Bridging the gap between AI innovation and human impact through 
                interdisciplinary research and education.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Research Areas</h4>
              <ul className="space-y-2 text-stone-400">
                <li>Social Sciences & AI</li>
                <li>Ethics & Philosophy</li>
                <li>Environmental Impact</li>
                <li>Political & Democratic Effects</li>
                <li>Psychology & Human Behavior</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-700 pt-8 text-center text-stone-400">
            <p>&copy; 2025 Velazco Ventures. Understanding AI's impact on humanity and our planet.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}