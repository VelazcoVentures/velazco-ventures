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
          <a href="#problem" className="hover:text-red-400 transition-colors">The Problem</a>
          <a href="#research" className="hover:text-red-400 transition-colors">Our Research</a>
          <a href="/about" className="hover:text-red-400 transition-colors">Who We Are</a>
          <a href="/researchers" className="hover:text-red-400 transition-colors">Our Experts</a>
          <a href="/future" className="hover:text-red-400 transition-colors">Our Future</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 sm:px-8 py-20">
        <div className="max-w-5xl text-center space-y-8">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            AI's Impact on
            <span className="text-red-600"> Humanity</span>
            <br />
            Goes Far Beyond Code
          </h1>
          
          <p className="text-xl sm:text-2xl text-stone-300 max-w-4xl mx-auto leading-relaxed">
            When people think of AI, they think algorithms, data, and efficiency. But AI is reshaping 
            our communities, ethics, democracy, mental health, and planet in ways most never consider.
          </p>

          <div className="bg-stone-800 p-6 rounded-lg border-l-4 border-red-600 max-w-4xl mx-auto">
            <p className="text-lg text-stone-200">
              <span className="text-red-500 font-semibold">The Reality:</span> AI affects every aspect of human life, 
              yet this knowledge isn't taught anywhere. It's a new field that can feel overwhelming—but ignoring 
              these impacts won't make them disappear.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
              Join Our Research Mission
            </button>
            <button className="border-2 border-stone-600 hover:border-red-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
              Explore the Hidden Impacts
            </button>
          </div>
        </div>
      </main>

      {/* The Problem Section */}
      <section id="problem" className="px-6 sm:px-8 py-16 bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            The <span className="text-red-600">Missing</span> Conversation About AI
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-red-500">What People Think AI Is About:</h3>
              <div className="space-y-3 text-stone-300">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-stone-500 rounded-full"></span>
                  <span>Machine learning algorithms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-stone-500 rounded-full"></span>
                  <span>Data processing and automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-stone-500 rounded-full"></span>
                  <span>Business efficiency and profits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-stone-500 rounded-full"></span>
                  <span>Technical innovation</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-red-500">What AI Actually Affects:</h3>
              <div className="space-y-3 text-stone-300">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span>Community relationships and social structures</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span>Democratic processes and political power</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span>Mental health and human identity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span>Environmental sustainability and climate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span>Economic inequality and social justice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span>Cultural values and human meaning</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-900 p-8 rounded-lg mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4 text-red-400">The Educational Gap</h3>
            <p className="text-stone-300 leading-relaxed max-w-4xl mx-auto">
              This isn't taught in computer science programs. It's not in business schools. 
              It's barely discussed in humanities courses. AI's impact on humanity is a brand new field, 
              and that gap in knowledge affects everyone, from the engineers building AI systems 
              to the communities experiencing their effects.
            </p>
          </div>
        </div>
      </section>

      {/* Our Research Mission */}
      <section id="research" className="px-6 sm:px-8 py-16 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our <span className="text-red-600">Interdisciplinary</span> Research Mission
          </h2>
          <p className="text-center text-stone-300 mb-12 max-w-4xl mx-auto text-lg">
            We're bringing together researchers and experts from technology and the humanities 
            to bridge this critical knowledge gap and understand AI's full impact on humanity and our planet.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 bg-stone-800 p-6 rounded-lg">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold">Deep Research</h3>
              <p className="text-stone-300">Conducting comprehensive studies on AI's effects across sociology, ethics, philosophy, politics, psychology, and environmental science</p>
            </div>
            
            <div className="text-center space-y-4 bg-stone-800 p-6 rounded-lg">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold">Collaborative Approach</h3>
              <p className="text-stone-300">Uniting computer scientists with social scientists, ethicists, philosophers, and environmental researchers</p>
            </div>
            
            <div className="text-center space-y-4 bg-stone-800 p-6 rounded-lg">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold">Human-Centered Focus</h3>
              <p className="text-stone-300">Prioritizing human flourishing and planetary wellbeing in all our research and methodology development</p>
            </div>
          </div>

          <div className="bg-stone-800 p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-red-500 text-center">Our Research Areas</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-3 text-stone-300">
                <li>• How AI systems perpetuate or challenge social inequalities</li>
                <li>• The psychological effects of human-AI interaction</li>
                <li>• Democratic implications of algorithmic decision-making</li>
                <li>• Environmental costs and sustainability of AI infrastructure</li>
              </ul>
              <ul className="space-y-3 text-stone-300">
                <li>• Ethical frameworks for AI development and deployment</li>
                <li>• Cultural and philosophical questions of AI consciousness</li>
                <li>• Community impact assessments for AI implementations</li>
                <li>• Long-term societal implications of AI advancement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Initiative */}
      <section className="px-6 sm:px-8 py-16 bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Making This Knowledge <span className="text-red-600">Accessible</span> to Everyone
          </h2>
          <p className="text-center text-stone-300 mb-12 max-w-4xl mx-auto text-lg">
            Our research is laying the foundation for a comprehensive, free educational course 
            that will make understanding AI's human impact accessible to learners of any background.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-red-500">Why Free Education Matters</h3>
              <p className="text-stone-300 leading-relaxed">
                This knowledge shouldn't be locked away in academic institutions or corporate boardrooms. 
                Everyone affected by AI—which is everyone deserves to understand how these technologies 
                shape their lives, communities, and planet.
              </p>
              
              <div className="bg-stone-900 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-red-400">Course Development Goals:</h4>
                <ul className="space-y-2 text-stone-300">
                  <li>• No prerequisites—accessible to any background</li>
                  <li>• Research-backed, interdisciplinary content</li>
                  <li>• Practical understanding of AI's societal impacts</li>
                  <li>• Tools for critical thinking about AI in daily life</li>
                  <li>• Community-focused learning approach</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-red-500">What We're Creating</h3>
              <p className="text-stone-300 leading-relaxed">
                A curriculum that bridges technical understanding with human impact—covering everything 
                from how algorithms work to how they affect democracy, from machine learning basics 
                to environmental implications, from AI capabilities to psychological effects.
              </p>
              
              <div className="bg-stone-900 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-red-400">Coming Soon:</h4>
                <ul className="space-y-2 text-stone-300">
                  <li>• Interactive learning modules</li>
                  <li>• Real-world case studies and examples</li>
                  <li>• Community discussion forums</li>
                  <li>• Practical assessment tools</li>
                  <li>• Ongoing research updates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Impact Section */}
      <section id="future" className="px-6 sm:px-8 py-16 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Building <span className="text-red-600">Research-Backed</span> Solutions
          </h2>
          <p className="text-center text-stone-300 mb-12 max-w-4xl mx-auto text-lg">
            Our interdisciplinary research is developing methodologies that will help organizations 
            implement AI responsibly, supporting technological advancement while protecting human wellbeing.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-red-500">Methodology Development</h3>
              <p className="text-stone-300 leading-relaxed">
                We're creating frameworks that companies of any size can use to assess, plan, 
                and implement AI systems with full consideration of their human and environmental impact.
              </p>
              
              <div className="bg-stone-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-red-400">Research Focus Areas:</h4>
                <ul className="space-y-2 text-stone-300">
                  <li>• Ethical AI assessment frameworks</li>
                  <li>• Community impact evaluation tools</li>
                  <li>• Environmental sustainability guidelines</li>
                  <li>• Bias detection and mitigation strategies</li>
                  <li>• Democratic participation in AI governance</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-red-500">Future Consulting Vision</h3>
              <p className="text-stone-300 leading-relaxed">
                Eventually, our research will enable consulting services that help organizations 
                bridge the gap between innovation and responsibility, ensuring AI development 
                enhances rather than undermines human flourishing.
              </p>
              
              <div className="bg-stone-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-red-400">Long-term Goals:</h4>
                <ul className="space-y-2 text-stone-300">
                  <li>• Interdisciplinary consulting teams</li>
                  <li>• Implementation support for ethical AI</li>
                  <li>• Ongoing impact monitoring systems</li>
                  <li>• Educational training for organizations</li>
                  <li>• Community engagement facilitation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="px-6 sm:px-8 py-16 bg-stone-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">
            Join Our <span className="text-red-600">Research</span> Community
          </h2>
          <p className="text-lg text-stone-300 leading-relaxed">
            Are you passionate about understanding AI's impact on humanity? Whether you're from 
            technology, social sciences, humanities, or environmental fields—we need your expertise.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-stone-900 p-6 rounded-lg text-left">
              <h3 className="text-xl font-semibold mb-4 text-red-500">Researchers & Experts</h3>
              <ul className="space-y-3 text-stone-300">
                <li>• Computer scientists and AI researchers</li>
                <li>• Sociologists studying technology's social impact</li>
                <li>• Ethicists developing moral frameworks</li>
                <li>• Political scientists analyzing democratic effects</li>
                <li>• Psychologists researching human-AI interaction</li>
                <li>• Environmental scientists studying AI's ecological impact</li>
                <li>• Philosophers exploring consciousness and meaning</li>
              </ul>
            </div>
            
            <div className="bg-stone-900 p-6 rounded-lg text-left">
              <h3 className="text-xl font-semibold mb-4 text-red-500">How You Can Contribute</h3>
              <ul className="space-y-3 text-stone-300">
                <li>• Lead research in your area of expertise</li>
                <li>• Collaborate across disciplines</li>
                <li>• Develop educational content</li>
                <li>• Create assessment methodologies</li>
                <li>• Contribute to our free course curriculum</li>
                <li>• Shape the future of ethical AI development</li>
                <li>• Build bridges between technology and humanity</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg mr-4">
              Join Our Research Team
            </button>
            <button className="border-2 border-stone-600 hover:border-red-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg">
              Learn About Current Research
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 sm:px-8 py-16 bg-stone-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Help Us Bridge the <span className="text-red-600">Knowledge Gap</span>
          </h2>
          <p className="text-lg text-stone-300">
            AI's impact on humanity is too important to leave unexplored. Join us in researching, 
            understanding, and educating others about the full spectrum of AI's effects on our world.
          </p>
          <div className="pt-6">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-12 rounded-lg transition-colors text-lg">
              Get Involved in Our Mission
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
                <li>AI's Social & Cultural Impact</li>
                <li>Ethical AI Development</li>
                <li>Environmental Implications</li>
                <li>Democratic & Political Effects</li>
                <li>Psychological & Human Impact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Get Involved</h4>
              <div className="space-y-2 text-stone-400">
                <p>Join our research community and help shape the future of ethical AI.</p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors">
                  Connect With Us
                </button>
              </div>
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
