import React, { useState } from 'react';
import { Smile, Frown, Meh, TrendingUp, BarChart3 } from 'lucide-react';

const Sentiment = () => {
  const [selectedTopic, setSelectedTopic] = useState('overall');

  const sentimentData = {
    positive: 62,
    neutral: 23,
    negative: 15
  };
  const topicSentiments = [
    { topic: 'Water Shortage', positive: 45, neutral: 30, negative: 25, gradient: 'from-blue-500 to-cyan-500' },
    { topic: 'Load Shedding', positive: 78, neutral: 15, negative: 7, gradient: 'from-green-500 to-emerald-500' },
    { topic: 'Theft', positive: 32, neutral: 28, negative: 40, gradient: 'from-orange-500 to-red-500' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 pt-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-10 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Sentiment <span className="gradient-text">Analysis</span>
          </h1>
          <p className="text-gray-600 text-lg">Understanding public opinion across Pakistani Twitter</p>
        </div>

        {/* Overall Sentiment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Positive */}
          <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 card-hover group overflow-hidden border-2 border-green-200">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <Smile className="w-12 h-12 text-green-600" />
                <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1.5 rounded-full">Last 24h</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Positive</h3>
              <div className="text-6xl font-bold text-green-600 mb-4">{sentimentData.positive}%</div>
              <div className="flex items-center text-green-600 font-semibold">
                <TrendingUp className="w-5 h-5 mr-2" />
                +5.3% from yesterday
              </div>
            </div>
          </div>

          {/* Neutral */}
          <div className="relative bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 card-hover group overflow-hidden border-2 border-gray-200">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-gray-500 to-slate-500 rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <Meh className="w-12 h-12 text-gray-600" />
                <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">Last 24h</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Neutral</h3>
              <div className="text-6xl font-bold text-gray-600 mb-4">{sentimentData.neutral}%</div>
              <div className="flex items-center text-gray-600 font-semibold">
                <TrendingUp className="w-5 h-5 mr-2" />
                -1.2% from yesterday
              </div>
            </div>
          </div>

          {/* Negative */}
          <div className="relative bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-8 card-hover group overflow-hidden border-2 border-red-200">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-red-500 to-rose-500 rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <Frown className="w-12 h-12 text-red-600" />
                <span className="text-sm font-semibold text-red-600 bg-red-100 px-3 py-1.5 rounded-full">Last 24h</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Negative</h3>
              <div className="text-6xl font-bold text-red-600 mb-4">{sentimentData.negative}%</div>
              <div className="flex items-center text-red-600 font-semibold">
                <TrendingUp className="w-5 h-5 mr-2 rotate-180" />
                -4.1% from yesterday
              </div>
            </div>
          </div>
        </div>

        {/* Sentiment by Topic */}
        <div className="glass-card rounded-2xl p-8 mb-10">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-800">Sentiment by Topic</h2>
          </div>
          <div className="space-y-6">
            {topicSentiments.map((item, index) => (
              <div key={item.topic} className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.gradient}`}></div>
                    <h3 className="text-lg font-bold text-gray-800">{item.topic}</h3>
                  </div>
                  <div className="flex gap-4 text-sm font-semibold">
                    <span className="text-green-600">+{item.positive}%</span>
                    <span className="text-gray-600">={item.neutral}%</span>
                    <span className="text-red-600">-{item.negative}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-8 flex overflow-hidden shadow-inner">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold transition-all hover:opacity-90"
                    style={{ width: `${item.positive}%` }}
                  >
                    {item.positive > 15 && `${item.positive}%`}
                  </div>
                  <div 
                    className="bg-gradient-to-r from-gray-400 to-slate-400 flex items-center justify-center text-white text-sm font-bold transition-all hover:opacity-90"
                    style={{ width: `${item.neutral}%` }}
                  >
                    {item.neutral > 15 && `${item.neutral}%`}
                  </div>
                  <div 
                    className="bg-gradient-to-r from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold transition-all hover:opacity-90"
                    style={{ width: `${item.negative}%` }}
                  >
                    {item.negative > 15 && `${item.negative}%`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Tweets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Positive Tweets */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Smile className="w-6 h-6 text-green-600" />
              Most Positive Tweets
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4 hover:shadow-lg transition-all">
                  <p className="text-gray-700 mb-2 leading-relaxed">
                    "Amazing performance by Pakistan team! So proud of our players 🇵🇰 #PakistanCricket"
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span className="font-medium">@user{i}</span>
                    <span className="text-green-600 font-bold">98% Positive</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Negative Tweets */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Frown className="w-6 h-6 text-red-600" />
              Most Negative Tweets
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-xl p-4 hover:shadow-lg transition-all">
                  <p className="text-gray-700 mb-2 leading-relaxed">
                    "Really disappointed with the current economic situation. We need better policies."
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span className="font-medium">@user{i + 3}</span>
                    <span className="text-red-600 font-bold">87% Negative</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
