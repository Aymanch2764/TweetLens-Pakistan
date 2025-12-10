import React from 'react';
import { Target, Users, Award, Zap, Globe, Shield, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        
        <div className="container mx-auto px-6 relative z-10 text-center">
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Empowering Insights Through Data
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time Twitter analytics and sentiment analysis for Pakistan's digital landscape
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                TweetLens Pakistan is dedicated to providing comprehensive Twitter analytics 
                tailored specifically for the Pakistani digital community. We believe in the 
                power of data-driven insights to understand public sentiment, track trends, 
                and foster informed decision-making.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our platform leverages advanced machine learning and natural language processing 
                to analyze millions of tweets, helping businesses, researchers, journalists, 
                and policymakers stay connected with the pulse of Pakistani Twitter.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-8 card-hover">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
                alt="Analytics Dashboard" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Our Core <span className="gradient-text">Values</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The principles that drive everything we do
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Accuracy', description: '98.5% accuracy in sentiment analysis using state-of-the-art AI models', gradient: 'from-blue-500 to-cyan-500' },
              { icon: Users, title: 'Transparency', description: 'Open about our methods and committed to ethical data practices', gradient: 'from-green-500 to-emerald-500' },
              { icon: Zap, title: 'Innovation', description: 'Continuously improving our algorithms and adding new features', gradient: 'from-purple-500 to-pink-500' },
              { icon: Award, title: 'Excellence', description: 'Delivering world-class analytics tools tailored for Pakistan', gradient: 'from-orange-500 to-red-500' },
            ].map((value, index) => (
              <div 
                key={index} 
                className="glass-card rounded-2xl p-6 card-hover group text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Technology <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Built with cutting-edge technologies to ensure fast, reliable, and accurate analytics
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              'Python', 'React', 'Machine Learning', 'NLP', 'MongoDB',
              'Redis', 'Docker', 'AWS', 'TensorFlow', 'Node.js'
            ].map((tech, index) => (
              <div 
                key={tech} 
                className="glass-card rounded-xl p-6 text-center card-hover group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <p className="font-bold text-gray-800 group-hover:gradient-text transition-all">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Ayman Chaudhry', role: 'Frontend Developer', gradient: 'from-purple-500 to-pink-500' },
              { name: 'Samreen Kazmi', role: 'Backend Developer', gradient: 'from-blue-500 to-cyan-500' },
              { name: 'Alia', role: 'Researcher', gradient: 'from-green-500 to-emerald-500' },
            ].map((member, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 text-center card-hover group">
                <div className={`w-32 h-32 bg-gradient-to-r ${member.gradient} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold group-hover:scale-110 transition-transform shadow-2xl`}>
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
     
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default About;
