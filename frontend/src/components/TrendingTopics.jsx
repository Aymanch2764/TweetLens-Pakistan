import React from 'react';
import { TrendingUp, Flame } from 'lucide-react';

const TrendingTopics = () => {
  const topics = [
    { rank: 1, hashtag: '#Load Shedding', tweets: '45.2K', change: '+125%', gradient: 'from-blue-500 to-cyan-500' },
    { rank: 2, hashtag: '#Water Shortage', tweets: '38.7K', change: '+98%', gradient: 'from-purple-500 to-pink-500' },
    { rank: 3, hashtag: '#Theft', tweets: '32.1K', change: '+76%', gradient: 'from-green-500 to-emerald-500' },
  ]

  return (
    <div className="glass-card rounded-2xl p-8 card-hover h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Flame className="w-6 h-6 text-orange-500" />
          <h3 className="text-2xl font-bold text-gray-800">Top Trending</h3>
        </div>
        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
          Live
        </span>
      </div>
      <div className="space-y-4">
        {topics.map((topic) => (
          <div 
            key={topic.rank} 
            className="relative bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer group overflow-hidden"
          >
            {/* Glow effect */}
            <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-r ${topic.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 bg-gradient-to-r ${topic.gradient} rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                  #{topic.rank}
                </div>
                <div>
                  <div className="font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {topic.hashtag}
                  </div>
                  <div className="text-sm text-gray-500">{topic.tweets} tweets</div>
                </div>
              </div>
              <div className="flex items-center text-green-600 font-semibold text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                {topic.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
