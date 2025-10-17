import Image from "next/image";

export default function AIInitiative() {
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
          <a href="/about" className="hover:text-red-400 transition-colors">About</a>
          <a href="/initiative" className="text-red-500 font-semibold">AI Initiative</a>
          <a href="/join" className="hover:text-red-400 transition-colors">Join Us</a>
        </nav>
      </header>

      {/* Page Title */}
      <section className="px-6 sm:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Our <span className="text-red-600">AI Initiative</span>
        </h1>
        <p className="text-xl text-stone-300 max-w-4xl mx-auto leading-relaxed">
          Building an interdisciplinary community to understand AI's human impact and create 
          accessible resources for everyone. Using diverse perspectives to develop technology 
          more sustainably and ethically.
        </p>
      </section>

      {/* The Challenge */}
      <section className="px-6 sm:px-8 py-16 bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why This <span className="text-red-600">Matters</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-stone-900 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-red-500 mb-4">The Challenge</h3>
              <p className="text-stone-300 leading-relaxed mb-4">
                AI is changing our world rapidly. It affects how we create art, how communities 
                access opportunities, how we work, and how we connect with each other. But most 
                people don't understand how AI works or how it impacts their lives.
              </p>
              <p className="text-stone-300 leading-relaxed">
                Meanwhile, the people building AI systems often lack diverse perspectives from 
                sociology, ethics, environmental science, and the communities most affected by 
                these technologies.
              </p>
            </div>
            
            <div className="bg-stone-900 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-red-500 mb-4">Our Approach</h3>
              <p className="text-stone-300 leading-relaxed mb-4">
                We're bringing together people from all backgrounds to build understanding 
                through research and community dialogue. Not just tech experts, but artists, 
                social scientists, ethicists, students, community members, and anyone who cares.
              </p>
              <p className="text-stone-300 leading-relaxed">
                Together, we're creating resources that make AI accessible and understandable, 
                while conducting research that explores its true impact on humanity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="px-6 sm:px-8 py-16 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We're <span className="text-red-600">Building</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-stone-800 p-8 rounded-lg">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-semibold text-red-500 mb-4">Research & Resources</h3>
              <p className="text-stone-300 leading-relaxed mb-4">
                Creating accessible, research-backed resources that help people understand AI 
                from multiple perspectives: technical, social, ethical, and environmental.
              </p>
              <ul className="space-y-2 text-stone-300">
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Free educational modules for all skill levels</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Interdisciplinary research on AI's impacts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Real-world case studies and examples</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Community-driven content and insights</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-stone-800 p-8 rounded-lg">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-semibold text-red-500 mb-4">Community & Dialogue</h3>
              <p className="text-stone-300 leading-relaxed mb-4">
                Monthly meetings where diverse voices come together to discuss AI's impact, 
                share research findings, and shape the direction of our work.
              </p>
              <ul className="space-y-2 text-stone-300">
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Regular community discussions and meetings</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Collaborative research initiatives</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Knowledge sharing across disciplines</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Platform for diverse perspectives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="px-6 sm:px-8 py-16 bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Research <span className="text-red-600">Focus</span>
          </h2>
          <p className="text-center text-stone-300 mb-12 max-w-3xl mx-auto">
            We explore AI from multiple angles, bringing together insights that are often missing 
            from purely technical discussions.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-stone-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-500 mb-3">Social Impact</h3>
              <p className="text-stone-300 text-sm">
                How AI affects community relationships, cultural dynamics, and social structures 
                across different populations.
              </p>
            </div>
            
            <div className="bg-stone-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-500 mb-3">Ethical Considerations</h3>
              <p className="text-stone-300 text-sm">
                Moral questions around AI development, deployment, and use in various contexts 
                and communities.
              </p>
            </div>
            
            <div className="bg-stone-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-500 mb-3">Environmental Sustainability</h3>
              <p className="text-stone-300 text-sm">
                AI's energy consumption, carbon footprint, and implications for environmental 
                sustainability.
              </p>
            </div>
            
            <div className="bg-stone-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-500 mb-3">Economic Effects</h3>
              <p className="text-stone-300 text-sm">
                Impact on jobs, income inequality, and economic opportunities across different 
                communities.
              </p>
            </div>
            
            <div className="bg-stone-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-500 mb-3">Creative & Cultural</h3>
              <p className="text-stone-300 text-sm">
                How AI is changing art, creativity, cultural expression, and our relationship 
                with human creation.
              </p>
            </div>
            
            <div className="bg-stone-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-500 mb-3">Equity & Access</h3>
              <p className="text-stone-300 text-sm">
                Understanding how AI affects different communities and working toward more 
                equitable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Timeline */}
      <section className="px-6 sm:px-8 py-16 bg-stone-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-red-600">Journey</span>
          </h2>
          
          <div className="space-y-8">
            <div className="bg-stone-800 p-8 rounded-lg">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Now: Building Community (2025-2026)</h3>
                  <p className="text-stone-300 leading-relaxed">
                    Starting with monthly meetings, research collaboration, and creating basic 
                    resources. We're building the foundation and bringing people together around 
                    shared curiosity about AI's impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-stone-800 p-8 rounded-lg">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Next: Expanding Research & Resources</h3>
                  <p className="text-stone-300 leading-relaxed">
                    Developing more comprehensive educational materials, expanding our research, 
                    and growing our community. Making our resources accessible to more people.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-stone-800 p-8 rounded-lg">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Future: Broader Impact</h3>
                  <p className="text-stone-300 leading-relaxed">
                    Using our research and community insights to help organizations implement 
                    AI more responsibly. Creating real change through knowledge and collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="px-6 sm:px-8 py-16 bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Who Should <span className="text-red-600">Join</span>
          </h2>
          <p className="text-center text-stone-300 mb-12 max-w-3xl mx-auto">
            This initiative is for anyone curious about AI's impact on humanity. You don't need 
            technical expertise. You just need to care.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Students & Learners</h3>
              <p className="text-stone-300">
                Learn about AI from multiple perspectives and contribute to meaningful research.
              </p>
            </div>
            
            <div className="bg-stone-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Researchers & Academics</h3>
              <p className="text-stone-300">
                Collaborate on interdisciplinary research and share your expertise across fields.
              </p>
            </div>
            
            <div className="bg-stone-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Members</h3>
              <p className="text-stone-300">
                Bring your lived experience and help shape how we understand AI's real impact.
              </p>
            </div>
            
            <div className="bg-stone-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Tech Professionals</h3>
              <p className="text-stone-300">
                Gain perspectives outside pure tech and help build more ethical systems.
              </p>
            </div>
            
            <div className="bg-stone-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Artists & Creatives</h3>
              <p className="text-stone-300">
                Explore how AI affects creativity and contribute unique perspectives on human expression.
              </p>
            </div>
            
            <div className="bg-stone-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Anyone Who Cares</h3>
              <p className="text-stone-300">
                If you care about humanity's future with technology, there's a place for you here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 sm:px-8 py-16 bg-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our <span className="text-red-600">Community</span>
          </h2>
          <p className="text-xl text-stone-300 mb-8 leading-relaxed">
            We're just getting started, and we need your voice. Whether you want to contribute 
            to research, learn about AI, or just be part of the conversation, we want you here.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-stone-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-red-500 mb-4">Monthly Meetings</h3>
              <p className="text-stone-300 mb-6">
                Join our monthly community discussions where we explore AI's impact together.
              </p>
              <a href="/join" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Attend Next Meeting
              </a>
            </div>
            
            <div className="bg-stone-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-red-500 mb-4">Stay Connected</h3>
              <p className="text-stone-300 mb-6">
                Get updates on new research, resources, and community events.
              </p>
              <a href="/join" className="inline-block border-2 border-red-600 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Join Our Community
              </a>
            </div>
          </div>
          
          <p className="text-stone-300 text-lg">
            Have questions? Want to contribute? <a href="/join" className="text-red-500 hover:text-red-400 underline">Reach out to us.</a>
          </p>
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
              <h4 className="font-semibold mb-4">Our Initiative</h4>
              <ul className="space-y-2 text-stone-400">
                <li>Research & Resources</li>
                <li>Community Building</li>
                <li>Monthly Meetings</li>
                <li>Accessible Education</li>
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