import React from 'react';
import { Twitter, Github, Linkedin, Mail, Heart, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative mt-20">
      {/* Gradient Wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600"></div>
      
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* About Section */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-2.5 rounded-xl">
                  <Twitter className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold gradient-text">TweetLens Pakistan</span>
                  <p className="text-xs text-gray-600">AI-Powered Analytics</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
                Real-time sentiment analysis and trending topics from Pakistani Twitter. 
                Empowering insights through data-driven analytics and cutting-edge AI technology.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {[
                  { icon: Twitter, color: 'from-blue-500 to-blue-600', link: '#' },
                  { icon: Github, color: 'from-gray-700 to-gray-800', link: '#' },
                  { icon: Linkedin, color: 'from-blue-600 to-blue-700', link: '#' },
                  { icon: Mail, color: 'from-purple-600 to-pink-600', link: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`bg-gradient-to-r ${social.color} p-3 rounded-xl text-white hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-indigo-600 rounded mr-2"></span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {['Dashboard', 'Trends', 'Sentiment', 'Analytics', 'About'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={`/${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-purple-600 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-indigo-600 rounded mr-2"></span>
                Contact
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-600">
                  <Mail className="w-5 h-5 mr-3 mt-0.5 text-purple-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">Email</p>
                    <p className="text-sm">info@tweetlens.pk</p>
                  </div>
                </li>
                <li className="flex items-start text-gray-600">
                  <Phone className="w-5 h-5 mr-3 mt-0.5 text-purple-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">Phone</p>
                    <p className="text-sm">+92 XXX XXXXXXX</p>
                  </div>
                </li>
                <li className="flex items-start text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 text-purple-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">Location</p>
                    <p className="text-sm">Pakistan</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-300 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} TweetLens Pakistan. All rights reserved.
              </p>
              <p className="text-gray-600 text-sm flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> by Samreen Kazmi
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;