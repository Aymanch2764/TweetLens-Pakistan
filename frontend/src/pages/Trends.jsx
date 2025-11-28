import React, { useState } from 'react';
import { TrendingUp, Clock, MapPin } from 'lucide-react';

const Trends = () => {
  const [timeFilter, setTimeFilter] = useState('24h');
  const [locationFilter, setLocationFilter] = useState('all');

  const trendingData = [
    { rank: 1, hashtag: '#PakistanCricket', tweets: '45.2K', sentiment: 'positive', change: '+125%' },
    { rank: 2, hashtag: '#Elections2024', tweets: '38.7K', sentiment: 'mixed', change: '+98%' },
    { rank: 3, hashtag: '#Karachi', tweets: '32.1K', sentiment: 'neutral', change: '+76%' },
    { rank: 4, hashtag: '#PTI', tweets: '28.9K', sentiment: 'mixed', change: '+65%' },
    { rank: 5, hashtag: '#Lahore', tweets: '25.3K', sentiment: 'positive', change: '+54%' },
    { rank: 6, hashtag: '#PakistanEconomy', tweets: '22.8K', sentiment: 'negative', change: '+48%' },
    { rank: 7, hashtag: '#Education', tweets: '19.5K', sentiment: 'positive', change: '+42%' },
    { rank: 8, hashtag: '#Technology', tweets: '17.2K', sentiment: 'positive', change: '+38%' },
    { rank: 9, hashtag: '#Islamabad', tweets: '15.9K', sentiment: 'neutral', change: '+35%' },
    { rank: 10, hashtag: '#Entertainment', tweets: '14.1K', sentiment: 'positive', change: '+31%' },
  ];

  const getSentimentColor = (sentiment) => {
    switch(sentiment) {
      case 'positive': return 'text-green-600 bg-green-100';
      case 'negative': return 'text-red-600 bg-red-100';
      case 'mixed': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Trending Topics</h1>
          <p className="text-gray-600">Discover what Pakistan is talking about</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Time Filter */}
            <div>
              <label className="flex items-center text-gray-700 font-medium mb-3">
                <Clock className="w-5 h-5 mr-2" />
                Time Period
              </label>
              <div className="flex gap-2">
                {['1h', '6h', '24h', '7d', '30d'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setTimeFilter(period)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      timeFilter === period
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <label className="flex items-center text-gray-700 font-medium mb-3">
                <MapPin className="w-5 h-5 mr-2" />
                Location
              </label>
              <select 
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Pakistan</option>
                <option value="karachi">Karachi</option>
                <option value="lahore">Lahore</option>
                <option value="islamabad">Islamabad</option>
                <option value="peshawar">Peshawar</option>
                <option value="quetta">Quetta</option>
              </select>
            </div>
          </div>
        </div>

        {/* Trending List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Topic</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Tweets</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Sentiment</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Change</th>
                </tr>
              </thead>
              <tbody>
                {trendingData.map((trend) => (
                  <tr key={trend.rank} className="border-b border-gray-100 hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                          trend.rank <= 3 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gray-400'
                        }`}>
                          {trend.rank}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <TrendingUp className="w-5 h-5 text-primary-600 mr-2" />
                        <span className="font-semibold text-gray-800 text-lg">{trend.hashtag}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-700 font-medium">{trend.tweets}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSentimentColor(trend.sentiment)}`}>
                        {trend.sentiment}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-semibold">{trend.change}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;