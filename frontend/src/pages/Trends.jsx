import React, { useState } from 'react';
import { TrendingUp, Clock, MapPin, Flame, Filter } from 'lucide-react';

const Trends = () => {
  const [timeFilter, setTimeFilter] = useState('24h');
  const [locationFilter, setLocationFilter] = useState('all');

  const trendingData = [
    { rank: 1, hashtag: '#PakistanCricket', tweets: '45.2K', sentiment: 'positive', change: '+125%', gradient: 'from-blue-500 to-cyan-500' },
    { rank: 2, hashtag: '#Elections2024', tweets: '38.7K', sentiment: 'mixed', change: '+98%', gradient: 'from-purple-500 to-pink-500' },
    { rank: 3, hashtag: '#Karachi', tweets: '32.1K', sentiment: 'neutral', change: '+76%', gradient: 'from-green-500 to-emerald-500' },
    { rank: 4, hashtag: '#PTI', tweets: '28.9K', sentiment: 'mixed', change: '+65%', gradient: 'from-orange-500 to-red-500' },
    { rank: 5, hashtag: '#Lahore', tweets: '25.3K', sentiment: 'positive', change: '+54%', gradient: 'from-indigo-500 to-purple-500' },
    { rank: 6, hashtag: '#PakistanEconomy', tweets: '22.8K', sentiment: 'negative', change: '+48%', gradient: 'from-red-500 to-pink-500' },
    { rank: 7, hashtag: '#Education', tweets: '19.5K', sentiment: 'positive', change: '+42%', gradient: 'from-cyan-500 to-blue-500' },
    { rank: 8, hashtag: '#Technology', tweets: '17.2K', sentiment: 'positive', change: '+38%', gradient: 'from-teal-500 to-green-500' },
    { rank: 9, hashtag: '#Islamabad', tweets: '15.9K', sentiment: 'neutral', change: '+35%', gradient: 'from-gray-500 to-slate-500' },
    { rank: 10, hashtag: '#Entertainment', tweets: '14.1K', sentiment: 'positive', change: '+31%', gradient: 'from-pink-500 to-rose-500' },
  ];

  const getSentimentStyle = (sentiment) => {
    switch(sentiment) {
      case 'positive': return { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' };
      case 'negative': return { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200' };
      case 'mixed': return { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-200' };
      default: return { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200' };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 pt-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-10 fade-in">
          <div className="flex items-center gap-3 mb-3">
            <Flame className="w-10 h-10 text-orange-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Trending <span className="gradient-text">Topics</span>
            </h1>
          </div>
          <p className="text-gray-600 text-lg">Discover what Pakistan is talking about right now</p>
        </div>

        {/* Filters */}
        <div className="glass-card rounded-2xl p-6 mb-8 fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Time Filter */}
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-3 gap-2">
                <Clock className="w-5 h-5 text-purple-600" />
                Time Period
              </label>
              <div className="flex gap-2 flex-wrap">
                {['1h', '6h', '24h', '7d', '30d'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setTimeFilter(period)}
                    className={`px-5 py-2.5 rounded-xl font-semibold transition-all ${
                      timeFilter === period
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-3 gap-2">
                <MapPin className="w-5 h-5 text-purple-600" />
                Location
              </label>
              <select 
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white font-medium text-gray-700"
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
        <div className="space-y-4">
          {trendingData.map((trend, index) => {
            const sentimentStyle = getSentimentStyle(trend.sentiment);
            return (
              <div 
                key={trend.rank}
                className="glass-card rounded-2xl p-6 card-hover group fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  {/* Rank & Topic */}
                  <div className="flex items-center gap-4 flex-1 min-w-[200px]">
                    <div className={`w-14 h-14 bg-gradient-to-r ${trend.gradient} rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                      {trend.rank}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                        <span className="font-bold text-gray-800 text-xl">{trend.hashtag}</span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{trend.tweets} tweets</div>
                    </div>
                  </div>

                  {/* Sentiment & Change */}
                  <div className="flex items-center gap-4">
                    <span className={`px-4 py-2 rounded-xl text-sm font-semibold border ${sentimentStyle.bg} ${sentimentStyle.text} ${sentimentStyle.border}`}>
                      {sentiment}
                    </span>
                    <div className="flex items-center gap-1 text-green-600 font-bold">
                      <TrendingUp className="w-4 h-4" />
                      {trend.change}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trends;