import React, { useState } from 'react';
import { Calendar, Download, Filter, BarChart3, Users, TrendingUp } from 'lucide-react';

const Analytics = () => {
  const [dateRange, setDateRange] = useState('7d');

  const tweetVolumeData = [
    { day: 'Mon', value: 45 },
    { day: 'Tue', value: 62 },
    { day: 'Wed', value: 58 },
    { day: 'Thu', value: 73 },
    { day: 'Fri', value: 68 },
    { day: 'Sat', value: 82 },
    { day: 'Sun', value: 78 },
  ];

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 pt-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 fade-in">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
              Advanced <span className="gradient-text">Analytics</span>
            </h1>
            <p className="text-gray-600 text-lg">Deep dive into Twitter data patterns and insights</p>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 w-fit">
            <Download className="w-5 h-5" />
            Export Report
          </button>
        </div>

        {/* Filters */}
        <div className="glass-card rounded-2xl p-6 mb-8 fade-in">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-gray-700">Date Range:</span>
            </div>
            {['24h', '7d', '30d', 'Custom'].map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-5 py-2.5 rounded-xl font-semibold transition-all ${
                  dateRange === range
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Tweet Volume Chart - FIXED */}
          <div className="glass-card rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-bold text-gray-800">Tweet Volume Over Time</h2>
            </div>
            <div className="h-64 flex items-end justify-around gap-2 bg-gradient-to-b from-purple-50 to-transparent rounded-lg p-4">
              {tweetVolumeData.map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center group">
                  <div className="relative w-full">
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                      {item.value}K tweets
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
                    </div>
                    
                    {/* Bar */}
                    <div 
                      className="w-full bg-gradient-to-t from-purple-600 to-indigo-500 rounded-t-lg hover:from-purple-700 hover:to-indigo-600 transition-all cursor-pointer shadow-lg"
                      style={{ height: `${item.value * 2.8}px` }}
                    ></div>
                  </div>
                  
                  {/* Day Label */}
                  <span className="text-xs text-gray-600 font-semibold mt-2">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement Rate */}
          <div className="glass-card rounded-2xl p-6 card-hover">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Engagement Rate</h2>
            <div className="h-64 flex items-center justify-center">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="96" cy="96" r="80" stroke="#e5e7eb" strokeWidth="16" fill="none" />
                  <circle 
                    cx="96" 
                    cy="96" 
                    r="80" 
                    stroke="url(#gradient)" 
                    strokeWidth="16" 
                    fill="none"
                    strokeDasharray={`${8.5 * 5.026} ${100 * 5.026}`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9333ea" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">8.5%</span>
                  <span className="text-gray-500 text-sm mt-2 font-medium">Avg Rate</span>
                </div>
              </div>
            </div>
            <div className="text-center text-sm font-semibold mt-4">
              <span className="text-green-600">↑ 12% increase</span>
              <span className="text-gray-500"> from last period</span>
            </div>
          </div>

          {/* Top Influencers */}
          <div className="glass-card rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-bold text-gray-800">Top Influencers</h2>
            </div>
            <div className="space-y-4">
              {[
                { name: 'User 1', handle: '@user1', followers: '1.2M', engagement: '12.5%', gradient: 'from-blue-500 to-cyan-500' },
                { name: 'User 2', handle: '@user2', followers: '980K', engagement: '10.8%', gradient: 'from-purple-500 to-pink-500' },
                { name: 'User 3', handle: '@user3', followers: '850K', engagement: '9.2%', gradient: 'from-green-500 to-emerald-500' },
                { name: 'User 4', handle: '@user4', followers: '720K', engagement: '8.6%', gradient: 'from-orange-500 to-red-500' },
                { name: 'User 5', handle: '@user5', followers: '650K', engagement: '7.9%', gradient: 'from-indigo-500 to-purple-500' },
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${user.gradient} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.handle}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-800">{user.followers}</div>
                    <div className="text-sm text-purple-600 font-semibold">{user.engagement}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hashtag Performance */}
          <div className="glass-card rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-bold text-gray-800">Hashtag Performance</h2>
            </div>
            <div className="space-y-5">
              {[
                { tag: '#WaterShortage', uses: '45.2K', growth: '+125%', percent: 90 },
                { tag: '#LoadShedding', uses: '38.7K', growth: '+98%', percent: 75 },
                { tag: '#Theft', uses: '32.1K', growth: '+76%', percent: 60 },
              ].map((hashtag, i) => (
                <div key={i} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-800">{hashtag.tag}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 font-medium">{hashtag.uses}</span>
                      <span className="text-green-600 font-bold text-sm">{hashtag.growth}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-3 rounded-full transition-all ${
                        i === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                        i === 1 ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                        'bg-gradient-to-r from-green-500 to-green-600'
                      }`}
                      style={{ width: `${hashtag.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Peak Activity Times */}
        <div className="glass-card rounded-2xl p-6 card-hover">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Peak Activity Times (24h)</h2>
          <div className="h-40 flex items-end justify-between gap-1 bg-gradient-to-b from-purple-50 to-transparent rounded-lg p-4">
            {Array.from({ length: 24 }, (_, i) => {
              const activity = Math.sin(i / 4) * 40 + 50;
              return (
                <div key={i} className="flex-1 relative group">
                  <div 
                    className="w-full bg-gradient-to-t from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600 rounded-t transition-all cursor-pointer"
                    style={{ height: `${activity}%` }}
                  >
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                      {i}:00 - {Math.round(activity)}%
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex justify-between text-sm text-gray-500 font-medium">
            <span>12 AM</span>
            <span>6 AM</span>
            <span>12 PM</span>
            <span>6 PM</span>
            <span>11 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
