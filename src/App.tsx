import React, { useState } from 'react';
import {
  Brain,
  Shield,
  Clock,
  Users,
  BookOpen,
  MessageSquare,
  ChevronDown,
  Linkedin,
} from 'lucide-react';

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your Formspree endpoint URL
    const formspreeEndpoint = 'https://formspree.io/f/xwpvrgee';

    fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Ensure that your Formspree form accepts these field names
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setIsFormSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        } else {
          console.error('Form submission error:', response);
          // Optionally, display an error message to the user
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-400 text-white relative">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8" />
            <span className="text-xl font-bold">Ethical Tech Stewards</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {['About', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-blue-200 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </nav>

        <div className="container mx-auto px-6 py-24 text-center">
          <h2 className="title-font text-5xl mb-12">
            Stewarding Tech for Human Flourishing
          </h2>
          <div className="flex justify-center items-center mb-8">
            <div className="flex flex-col items-center">
              <img
                src="https://media.licdn.com/dms/image/v2/C5603AQF7wsTsi5BS4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1644286447259?e=2147483647&v=beta&t=cL8ouu8M248jUIgMgZe61pFGDMvIwXKATd3UO_J-NLs"
                alt="Landon Taliaferro"
                className="rounded-full w-48 h-48 object-cover shadow-xl mb-6"
              />
              <h1 className="title-font text-4xl mb-1">Landon Taliaferro</h1>
              <p className="text-xl mb-4">MSc Cyber Psychology</p>
              <blockquote className="text-xl mb-8 max-w-3xl mx-auto italic">
                "The average teen spends 8-9 hours a day on a screen. The average adult spends 6.
                I'm here to help change that so families and people can reconnect with each other
                and the world."
              </blockquote>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started Today
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center text-white hover:text-blue-200 transition-colors"
            >
              <span className="text-sm mb-2">Learn More</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              Expert Guidance for Digital Parenting
            </h2>
            <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              Empowering families with research-backed strategies to foster healthy digital habits
              and promote positive technology engagement for the next generation.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Brain className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cyber Psychology Expert</h3>
                    <p className="text-gray-600">
                      "With a Master's degree in Cyber Psychology, I bring deep understanding of how
                      technology shapes cognitive development and behavior."
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <BookOpen className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Research-Backed Approach</h3>
                    <p className="text-gray-600">
                      All recommendations are grounded in the latest research on digital wellness and
                      child development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {/* Replaced image with a YouTube Shorts embed */}
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full rounded-lg shadow-lg"
                    height="315"
                    src="https://www.youtube.com/embed/U7Ey7GzNvMo"
                    title="YouTube Shorts video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full rounded-lg shadow-lg"
                    height="315"
                    src="https://www.youtube.com/embed/kaDdqjZumZw?start=163"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Screen Time Management',
                description:
                  "Personalized strategy and plan tailored to your child's age and needs.",
              },
              {
                icon: Users,
                title: 'Family Workshops',
                description:
                  'Interactive sessions on digital wellness and the psychological impact of technology.',
              },
              {
                icon: MessageSquare,
                title: 'Ongoing Support',
                description:
                  'Regular check-ins and updates on the latest digital parenting research and tools.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Schedule a Consultation
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              Send us a message and we'll reach out to schedule a time
            </p>
            <div className="max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {isFormSubmitted ? (
                  <div className="bg-green-50 text-green-600 p-4 rounded-lg">
                    Thank you, we'll be in touch soon!
                  </div>
                ) : (
                  <>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-400 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
                    >
                      Send Message
                    </button>
                  </>
                )}
              </form>
            </div>
            <div className="flex justify-center space-x-4 mt-8">
              <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-6 h-6" />
                <span className="font-bold">Ethical Tech Stewards</span>
              </div>
              <p className="text-gray-400">
                Helping families and individuals build healthier relationships with technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Services', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Ethical Tech Stewards. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
