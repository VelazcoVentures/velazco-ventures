import Image from "next/image";

export default function Future() {
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
          <a href="/researchers" className="hover:text-red-400 transition-colors">Our Experts</a>
          <a href="/future" className="text-red-500 font-semibold">Our Future</a>
        </nav>
      </header>

      {/* Page Title */}
      <section className="px-6 sm:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Our <span className="text-red-600">Future</span> Vision
        </h1>
        <p className="text-xl text-stone-300 max-w-4xl mx-auto leading-relaxed">
          A three-phase roadmap to bridge the gap between AI innovation and human flourishing 
          through research, education, and ethical implementation.
        </p>
      </section>

      {/* Roadmap Overview */}
      <section className="px-6 sm:px-8 py-16 bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our <span className="text-red-600">Three-Phase</span> Approach
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-stone-900 p-8 rounded-lg relative">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Research, Education & Platform</h3>
              <p className="text-stone-300 leading-relaxed">
                Develop interdisciplinary research, create a free AI educational tool, and build 
                a dedicated platform to make it accessible to everyone through strategic outreach.
              </p>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                <span className="text-red-600 text-2xl">→</span>
              </div>
            </div>
            
            <div className="text-center bg-stone-900 p-8 rounded-lg relative">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Methodology Development</h3>
              <p className="text-stone-300 leading-relaxed">
                Continue research to develop ethical and environmentally efficient AI implementation 
                methodologies backed by interdisciplinary studies.
              </p>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                <span className="text-red-600 text-2xl">→</span>
              </div>
            </div>
            
            <div className="text-center bg-stone-900 p-8 rounded-lg">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Consulting Services</h3>
              <p className="text-stone-300 leading-relaxed">
                Provide consulting services to help companies successfully apply these methodologies 
                and understand AI's interdisciplinary impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1: Research & Education */}
      <section className="px-6 sm:px-8 py-16 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h2 className="text-4xl font-bold">Research, Education & <span className="text-red-600">Platform</span></h2>
              </div>
              
              <p className="text-xl text-stone-300 leading-relaxed">
                Our first priority is developing comprehensive interdisciplinary research, creating a free AI educational 
                tool, and building a dedicated platform with strategic outreach to make this knowledge accessible to learners worldwide.
              </p>
              
              <div className="bg-stone-800 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-red-500 mb-6">Current Focus Areas</h3>
                <ul className="space-y-4 text-stone-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>AI's Social Impact:</strong> How artificial intelligence affects community relationships, social structures, and cultural dynamics</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Ethical Frameworks:</strong> Developing moral guidelines for AI development and deployment across different contexts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Environmental Analysis:</strong> Studying AI's energy consumption and environmental implications for sustainability</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Democratic Effects:</strong> Analyzing AI's impact on political processes, governance, and democratic participation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Psychological Impact:</strong> Understanding human-AI interaction and mental health implications</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-stone-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-red-500 mb-6">Educational Tool Vision</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-red-600 pl-6">
                  <h4 className="text-lg font-semibold mb-2">Accessibility First</h4>
                  <p className="text-stone-300">No prerequisites, technical jargon-free, available in multiple formats and languages</p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <h4 className="text-lg font-semibold mb-2">Interdisciplinary Content</h4>
                  <p className="text-stone-300">Combining technical AI concepts with insights from sociology, ethics, philosophy, and environmental science</p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <h4 className="text-lg font-semibold mb-2">Interactive Learning</h4>
                  <p className="text-stone-300">Engaging modules, real-world case studies, community discussions, and practical exercises</p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <h4 className="text-lg font-semibold mb-2">Research-Backed</h4>
                  <p className="text-stone-300">All content grounded in peer-reviewed research and continuously updated with new findings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Methodology Development */}
      <section className="px-6 sm:px-8 py-16 bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-stone-900 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-red-500 mb-6">Methodology Components</h3>
              <div className="space-y-6">
                <div className="bg-stone-800 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-red-400">Ethical Assessment Frameworks</h4>
                  <p className="text-stone-300 text-sm">Tools for evaluating AI systems against moral and ethical standards before deployment</p>
                </div>
                <div className="bg-stone-800 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-red-400">Environmental Impact Guidelines</h4>
                  <p className="text-stone-300 text-sm">Methodologies for measuring and minimizing AI's carbon footprint and resource consumption</p>
                </div>
                <div className="bg-stone-800 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-red-400">Community Impact Evaluation</h4>
                  <p className="text-stone-300 text-sm">Frameworks for assessing how AI implementations affect different communities and social groups</p>
                </div>
                <div className="bg-stone-800 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-red-400">Bias Detection & Mitigation</h4>
                  <p className="text-stone-300 text-sm">Research-backed strategies for identifying and addressing algorithmic bias in AI systems</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h2 className="text-4xl font-bold">Methodology <span className="text-red-600">Development</span></h2>
              </div>
              
              <p className="text-xl text-stone-300 leading-relaxed">
                Building on our educational research foundation, we will develop comprehensive methodologies 
                that enable companies to implement AI in ways that are both ethical and environmentally efficient.
              </p>
              
              <div className="bg-stone-900 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-red-500 mb-6">Research-Backed Approach</h3>
                <ul className="space-y-4 text-stone-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Evidence-Based:</strong> All methodologies grounded in peer-reviewed interdisciplinary research</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Scalable Solutions:</strong> Frameworks that work for startups, enterprises, and everything in between</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Measurable Impact:</strong> Clear metrics for tracking ethical and environmental performance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Continuously Updated:</strong> Methodologies that evolve with new research and technological advances</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 3: Consulting Services */}
      <section className="px-6 sm:px-8 py-16 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h2 className="text-4xl font-bold">Consulting <span className="text-red-600">Services</span></h2>
              </div>
              
              <p className="text-xl text-stone-300 leading-relaxed">
                The culmination of our research and methodology development will be comprehensive consulting 
                services that help organizations successfully implement AI while understanding its full 
                interdisciplinary impact.
              </p>
              
              <div className="bg-stone-800 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-red-500 mb-6">Our Consulting Philosophy</h3>
                <ul className="space-y-4 text-stone-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Human-Centered:</strong> Technology should enhance human flourishing, not replace human connection</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Evidence-Based:</strong> All recommendations backed by rigorous interdisciplinary research</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Holistic Impact:</strong> Consider effects on society, environment, ethics, and democracy</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Long-term Thinking:</strong> Focus on sustainable practices that benefit all stakeholders</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-stone-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-red-500 mb-6">Service Offerings</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-red-600 pl-6">
                  <h4 className="text-lg font-semibold mb-2">AI Impact Assessment</h4>
                  <p className="text-stone-300">Comprehensive evaluation of AI implementations across social, ethical, and environmental dimensions</p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <h4 className="text-lg font-semibold mb-2">Implementation Strategy</h4>
                  <p className="text-stone-300">Custom roadmaps for responsible AI deployment based on organizational needs and values</p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <h4 className="text-lg font-semibold mb-2">Team Training & Education</h4>
                  <p className="text-stone-300">Workshops and courses to help teams understand AI's interdisciplinary implications</p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <h4 className="text-lg font-semibold mb-2">Ongoing Monitoring</h4>
                  <p className="text-stone-300">Continuous assessment and adjustment to ensure AI systems remain aligned with ethical standards</p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <h4 className="text-lg font-semibold mb-2">Community Engagement</h4>
                  <p className="text-stone-300">Facilitating meaningful dialogue between organizations and affected communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Call to Action */}
      <section className="px-6 sm:px-8 py-16 bg-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Be Part of the <span className="text-red-600">Future</span>
          </h2>
          <p className="text-xl text-stone-300 mb-8 leading-relaxed">
            Whether you're a researcher, educator, technologist, or simply someone who cares about 
            AI's impact on humanity—there's a place for you in shaping this future.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-500 mb-3">For Researchers</h3>
              <p className="text-stone-300 text-sm mb-4">Join our interdisciplinary research network</p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors w-full">
                Join Research Network
              </button>
            </div>
            
            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-500 mb-3">For Learners</h3>
              <p className="text-stone-300 text-sm mb-4">Get early access to our educational platform</p>
              <button className="border-2 border-red-600 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors w-full">
                Join Beta Program
              </button>
            </div>
            
            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-500 mb-3">For Everyone</h3>
              <p className="text-stone-300 text-sm mb-4">Stay updated on our progress</p>
              <button className="border-2 border-stone-600 hover:border-red-600 text-white font-semibold py-2 px-4 rounded transition-colors w-full">
                Subscribe to Updates
              </button>
            </div>
          </div>
          
          <div className="bg-stone-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-red-500">Ready to Get Started?</h3>
            <p className="text-stone-300 mb-6">
              The future of AI's impact on humanity starts with the decisions we make today. 
              Join us in ensuring that future is one of human flourishing.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-12 rounded-lg transition-colors text-lg">
              Contact Us Today
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
              <h4 className="font-semibold mb-4">Our Phases</h4>
              <ul className="space-y-2 text-stone-400">
                <li>Research & Education (2025-26)</li>
                <li>Methodology Development (2027-28)</li>
                <li>Consulting Services (2029+)</li>
                <li>Ongoing Impact Assessment</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Get Involved</h4>
              <div className="space-y-2 text-stone-400">
                <p>Join us in shaping the future of ethical AI.</p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors">
                  Connect With Us
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-700 pt-8 text-center text-stone-400">
            <p>&copy; 2025 Velazco Ventures. Building the future of human-centered AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}