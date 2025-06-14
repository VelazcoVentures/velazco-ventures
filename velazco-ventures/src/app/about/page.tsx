import Image from "next/image";

export default function About() {
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
          <a href="/about" className="text-red-500 font-semibold">Who We Are</a>
          <a href="/researchers" className="hover:text-red-400 transition-colors">Our Experts</a>
          <a href="/#future" className="hover:text-red-400 transition-colors">Future Impact</a>
        </nav>
      </header>

      {/* Page Title */}
      <section className="px-6 sm:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Who <span className="text-red-600">We Are</span>
        </h1>
        <p className="text-xl text-stone-300 max-w-4xl mx-auto leading-relaxed">
          Meet the team bridging technology and humanity through interdisciplinary research and education.
        </p>
      </section>

      {/* Founder Section - Samantha Velazco */}
      <section className="px-6 sm:px-8 py-16 bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="text-center">
              <div className="w-80 h-80 bg-stone-700 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-red-600">
                <span className="text-6xl text-stone-400">📸</span>
              </div>
              <h2 className="text-3xl font-bold mb-2">Samantha Velazco</h2>
              <p className="text-red-500 font-semibold text-lg">Founder & CEO </p>
              <p className="text-stone-400 mt-2">Computer Science Major<br />AI & Entrepreneurship Minors</p>
            </div>

            {/* Story section */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-semibold text-red-500">Why I Created Velazco Ventures</h3>
              
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  [space holder]
                </p>
                
                <p>
                  [Space holder]
                </p>
                
                <p>
                  [vision for the future]
                </p>
              </div>

              <div className="bg-stone-900 p-6 rounded-lg mt-8">
                <h4 className="text-lg font-semibold text-red-400 mb-3">My Background & Expertise</h4>
                <ul className="space-y-2 text-stone-300">
                  <li>• Computer Science student with focus on AI and machine learning</li>
                  <li>• Entrepreneurship minor with experience in startup development</li>
                  <li>• Software Engineering Intern with hands-on development experience</li>
                  <li>• DEI program assistant with multicultural community support experience</li>
                  <li>• Researcher studying algorithmic bias and inclusive technology design</li>
                  <li>• Filipino woman in tech bringing underrepresented perspectives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Development Team */}
      <section className="px-6 sm:px-8 py-16 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our <span className="text-red-600">Technology</span> Team
          </h2>
          <p className="text-center text-stone-300 mb-12 max-w-3xl mx-auto">
            The developers, product managers, and engineers building the platforms and tools that make our research and education accessible.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center bg-stone-800 p-6 rounded-lg">
              <div className="w-32 h-32 bg-stone-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl text-stone-400">📸</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">[Developer Name]</h3>
              <p className="text-red-500 font-medium mb-3">[Role/Title]</p>
              <p className="text-stone-400 text-sm mb-4">[Brief description of their role and expertise]</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-red-400 hover:text-red-300 transition-colors">LinkedIn</a>
                <a href="#" className="text-red-400 hover:text-red-300 transition-colors">GitHub</a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="text-center bg-stone-800 p-6 rounded-lg">
              <div className="w-32 h-32 bg-stone-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl text-stone-400">📸</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">[Developer Name]</h3>
              <p className="text-red-500 font-medium mb-3">[Role/Title]</p>
              <p className="text-stone-400 text-sm mb-4">[Brief description of their role and expertise]</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-red-400 hover:text-red-300 transition-colors">LinkedIn</a>
                <a href="#" className="text-red-400 hover:text-red-300 transition-colors">GitHub</a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="text-center bg-stone-800 p-6 rounded-lg">
              <div className="w-32 h-32 bg-stone-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl text-stone-400">📸</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">[Developer Name]</h3>
              <p className="text-red-500 font-medium mb-3">[Role/Title]</p>
              <p className="text-stone-400 text-sm mb-4">[Brief description of their role and expertise]</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-red-400 hover:text-red-300 transition-colors">LinkedIn</a>
                <a href="#" className="text-red-400 hover:text-red-300 transition-colors">GitHub</a>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="text-center bg-stone-800 p-6 rounded-lg">
              <div className="w-32 h-32 bg-stone-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl text-stone-400">📸</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">[Developer Name]</h3>
              <p className="text-red-500 font-medium mb-3">[Role/Title]</p>
              <p className="text-stone-400 text-sm mb-4">[Brief description of their role and expertise]</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-red-400 hover:text-red-300 transition-colors">LinkedIn</a>
                <a href="#" className="text-red-400 hover:text-red-300 transition-colors">GitHub</a>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="text-center bg-stone-800 p-6 rounded-lg">
              <div className="w-32 h-32 bg-stone-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl text-stone-400">📸</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">[Developer Name]</h3>
              <p className="text-red-500 font-medium mb-3">[Role/Title]</p>
              <p className="text-stone-400 text-sm mb-4">[Brief description of their role and expertise]</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-red-400 hover:text-red-300 transition-colors">LinkedIn</a>
                <a href="#" className="text-red-400 hover:text-red-300 transition-colors">GitHub</a>
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="text-center bg-stone-800 p-6 rounded-lg">
              <div className="w-32 h-32 bg-stone-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl text-stone-400">📸</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">[Developer Name]</h3>
              <p className="text-red-500 font-medium mb-3">[Role/Title]</p>
              <p className="text-stone-400 text-sm mb-4">[Brief description of their role and expertise]</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-red-400 hover:text-red-300 transition-colors">LinkedIn</a>
                <a href="#" className="text-red-400 hover:text-red-300 transition-colors">GitHub</a>
              </div>
            </div>
          </div>

          {/* Join the Team CTA */}
          <div className="text-center mt-12 bg-stone-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-red-500">Join Our Development Team</h3>
            <p className="text-stone-300 mb-6 max-w-2xl mx-auto">
              Are you a developer, designer, or engineer passionate about using technology to bridge 
              the gap between AI innovation and human impact? We're always looking for talented 
              individuals to join our mission.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Apply to Join Our Tech Team
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
              <h4 className="font-semibold mb-4">Our Team</h4>
              <ul className="space-y-2 text-stone-400">
                <li><a href="/about" className="hover:text-red-400 transition-colors">Technology Team</a></li>
                <li><a href="/researchers" className="hover:text-red-400 transition-colors">Research Experts</a></li>
                <li>Interdisciplinary Collaborators</li>
                <li>Academic Partners</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Get Involved</h4>
              <div className="space-y-2 text-stone-400">
                <p>Join our team and help shape the future of ethical AI.</p>
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