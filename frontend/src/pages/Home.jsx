import React, { useState } from 'react';
import { Search, TrendingUp, BarChart3, Users, Sparkles, Zap, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-8 fade-in">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                AI-Powered Twitter Analytics
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 slide-in-left">
              Discover Pakistan's
              <span className="block mt-2 gradient-text">Twitter Pulse</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto slide-in-right">
              Real-time sentiment analysis and trending topics powered by advanced AI. 
              Unlock insights from millions of tweets.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-12 fade-in">
              <div className="glass-card rounded-2xl p-2 shadow-2xl flex flex-col md:flex-row gap-3">
                <div className="flex-1 flex items-center px-4">
                  <Search className="w-5 h-5 text-gray-400 mr-3" />
                  <input 
                    type="text" 
                    placeholder="Search trending topics, hashtags..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Analyze Now
                </button>
              </div>
            </form>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto fade-in">
              {[
                { value: '2.4M+', label: 'Tweets Analyzed', icon: BarChart3, color: 'from-blue-500 to-cyan-500' },
                { value: '15K+', label: 'Active Users', icon: Users, color: 'from-green-500 to-emerald-500' },
                { value: 'Real-time', label: 'Updates', icon: Zap, color: 'from-purple-500 to-pink-500' },
                { value: '98.5%', label: 'Accuracy', icon: Shield, color: 'from-orange-500 to-red-500' },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="stat-card rounded-2xl p-6 card-hover group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Powerful <span className="gradient-text">Analytics</span> Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to understand Twitter trends in Pakistan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Trend Tracking',
                description: 'Monitor real-time trending topics and hashtags. Stay ahead of viral conversations with AI-powered predictions.',
                gradient: 'from-blue-500 to-cyan-500',
                bgGradient: 'from-blue-50 to-cyan-50'
              },
              {
                icon: BarChart3,
                title: 'Sentiment Analysis',
                description: 'Advanced AI-powered sentiment analysis to understand public opinion and emotional tone of conversations.',
                gradient: 'from-green-500 to-emerald-500',
                bgGradient: 'from-green-50 to-emerald-50'
              },
              {
                icon: Users,
                title: 'User Insights',
                description: 'Detailed analytics on user engagement, influential accounts, and community dynamics within Pakistani Twitter.',
                gradient: 'from-purple-500 to-pink-500',
                bgGradient: 'from-purple-50 to-pink-50'
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`relative bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 card-hover group overflow-hidden`}
              >
                {/* Glow Effect */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r ${feature.gradient} rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity`}></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  
                  <div className="mt-6 flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                    Learn More
                    <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white">
            <Globe className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Explore?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
              Start analyzing Pakistani Twitter trends and sentiments right now. 
              Join thousands of users getting real-time insights.
            </p>
            <Link 
              to="/dashboard" 
              className="inline-block bg-white text-purple-600 px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </section>

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

export default Home;