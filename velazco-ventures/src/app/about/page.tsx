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
          <a href="/about" className="text-red-500 font-semibold">About</a>
          <a href="/initiative" className="hover:text-red-400 transition-colors">AI Initiative</a>
          <a href="/join" className="hover:text-red-400 transition-colors">Join Us</a>
        </nav>
      </header>

      {/* Page Title */}
      <section className="px-6 sm:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Building <span className="text-red-600">Together</span>
        </h1>
        <p className="text-xl text-stone-300 max-w-4xl mx-auto leading-relaxed">
          A platform where people who want to make a difference can find their community, 
          build meaningful initiatives, and create real impact. Guided by inclusivity, leadership, and sustainability.
        </p>
      </section>

      {/* What is Velazco Ventures */}
      <section className="px-6 sm:px-8 py-16 bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What is <span className="text-red-600">Velazco Ventures?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-stone-900 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-red-500 mb-4">The Problem We Solve</h3>
              <p className="text-stone-300 leading-relaxed mb-4">
                So many people want to make a real difference in the world but don't know where to start. 
                They have ideas, passion, and perspectives that matter, but lack the structure, community, 
                and resources to turn those ideas into reality.
              </p>
              <p className="text-stone-300 leading-relaxed">
                Meanwhile, technology and innovation are rapidly changing our world, often without input 
                from the diverse voices that should be shaping our future.
              </p>
            </div>
            
            <div className="bg-stone-900 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-red-500 mb-4">Our Solution</h3>
              <p className="text-stone-300 leading-relaxed mb-4">
                Velazco Ventures provides the platform, structure, and resources for people to come 
                together around shared values and build initiatives that create meaningful change.
              </p>
              <p className="text-stone-300 leading-relaxed">
                We facilitate impact by bringing diverse perspectives together, providing business frameworks 
                that actually make things happen, and giving everyone (regardless of background) the tools 
                to turn their ideas into action.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-stone-900 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-red-500 mb-8 text-center">Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">Inclusivity</h4>
                <p className="text-stone-300">Everyone's perspective matters. We bring together diverse voices from all backgrounds, disciplines, and experiences.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">Leadership</h4>
                <p className="text-stone-300">Empowering people to lead change in their communities and turn their vision into tangible impact.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">Sustainability</h4>
                <p className="text-stone-300">Building initiatives that last, considering long-term impact on people and our planet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 sm:px-8 py-16 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How <span className="text-red-600">It Works</span>
          </h2>
          
          <div className="space-y-8">
            <div className="bg-stone-800 p-8 rounded-lg">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Find Your Community</h3>
                  <p className="text-stone-300 leading-relaxed">
                    Join monthly meetings organized around specific initiatives. Connect with others who 
                    share your values and want to work on similar challenges. (Currenty only one Initiative is planned for the forseeable future)
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
                  <h3 className="text-xl font-semibold mb-3">Contribute Your Perspective</h3>
                  <p className="text-stone-300 leading-relaxed">
                    All you need to bring is your ideas and perspective. Whether you're in tech, social sciences, 
                    arts, business, or just someone who cares, your voice shapes the direction of our initiatives.
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
                  <h3 className="text-xl font-semibold mb-3">We Provide the Structure</h3>
                  <p className="text-stone-300 leading-relaxed">
                    Velazco Ventures facilitates each initiative by providing business planning, strategic frameworks, 
                    and the resources needed to turn ideas into action. We handle the "how" so you can focus on the "what" and "why."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-stone-800 p-8 rounded-lg">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Build & Create Impact</h3>
                  <p className="text-stone-300 leading-relaxed">
                    Unlike groups that just talk, we use proven business models and strategies to actually make things happen. 
                    Your input doesn't just get heard. It gets built into real initiatives that create measurable impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="px-6 sm:px-8 py-16 bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet the <span className="text-red-600">Founder</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="text-center">
              <div className="w-64 h-64 bg-stone-700 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-red-600">
                <span className="text-6xl text-stone-400">📸</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Samantha Velazco</h3>
              <p className="text-red-500 font-semibold">Founder</p>
              <p className="text-stone-400 mt-2">Computer Science Major<br />AI & Entrepreneurship Minors</p>
            </div>

            <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-semibold text-red-500">Why I Created Velazco Ventures</h3>
              
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  I've been fortunate to witness so many different perspectives: from tech developers focused on 
                  innovation, to social scientists studying human impact, to community members experiencing changes 
                  firsthand. What I've learned is that we need everyone's perspective to shape a future that impacts us all.
                </p>
                
                <p>
                  Technology isn't just a tech problem. It's a human problem. When AI changes how we create art, 
                  when automation impacts low-income communities, when new technologies reshape our daily lives, it 
                  affects all of us in deeply personal ways. Yet the people building these systems often don't include 
                  the diverse perspectives we desperately need.
                </p>
                
                <p>
                  I created Velazco Ventures because I believe change happens when passionate people come together 
                  with the right structure and resources. This platform is for everyone who's wanted to make a difference 
                  but didn't know where to start. Together, we can build initiatives we're proud of (initiatives that 
                  actually serve humanity).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Initiative Teaser */}
      <section className="px-6 sm:px-8 py-16 bg-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our First <span className="text-red-600">Initiative</span>
          </h2>
          <p className="text-xl text-stone-300 mb-8 leading-relaxed">
            We're building an interdisciplinary community around AI: creating accessible resources and 
            fostering dialogue about technology's human impact. Using diverse perspectives to help people 
            better understand AI's effects and develop technology more sustainably and ethically.
          </p>
          <a href="/initiative" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
            Learn About Our AI Initiative
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 sm:px-8 py-16 bg-stone-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to <span className="text-red-600">Build Together?</span>
          </h2>
          <p className="text-xl text-stone-300 mb-8 leading-relaxed">
            All you need is your perspective and passion. We'll provide everything else.
          </p>
          <a href="/join" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-12 rounded-lg transition-colors text-lg">
            Join Our Community
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
              <h4 className="font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-stone-400">
                <li><a href="/about" className="hover:text-red-400 transition-colors">About Us</a></li>
                <li><a href="/initiative" className="hover:text-red-400 transition-colors">Current Initiative</a></li>
                <li><a href="/join" className="hover:text-red-400 transition-colors">Join Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-stone-400">
                <p>Find your people. Build together. Create impact.</p>
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