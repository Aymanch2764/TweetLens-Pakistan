import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, MessageCircle, Heart, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import SentimentChart from '../components/SentimentChart';
import TrendingTopics from '../components/TrendingTopics';
import RecentTweets from '../components/RecentTweets';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalTweets: 2456789,
    activeUsers: 15432,
    avgEngagement: 8.5,
    positiveSentiment: 62
  });

  
  const statCards = [
    {
      title: 'Total Tweets',
      value: stats.totalTweets.toLocaleString(),
      change: '+12.5%',
      isPositive: true,
      icon: MessageCircle,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      title: 'Active Users',
      value: stats.activeUsers.toLocaleString(),
      change: '+8.2%',
      isPositive: true,
      icon: Users,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      title: 'Avg Engagement',
      value: `${stats.avgEngagement}%`,
      change: '-2.1%',
      isPositive: false,
      icon: Heart,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      title: 'Positive Sentiment',
      value: `${stats.positiveSentiment}%`,
      change: '+5.3%',
      isPositive: true,
      icon: TrendingUp,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50'
    }
  ];

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 pt-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-10 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Analytics <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-gray-600 text-lg">Real-time insights from Pakistani Twitter</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {statCards.map((stat, index) => (
            <div 
              key={index}
              className={`relative bg-gradient-to-br ${stat.bgGradient} rounded-2xl p-6 card-hover group overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r ${stat.gradient} rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity`}></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${
                    stat.isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    {stat.change}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm font-medium mb-2">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-2">vs last week</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2 fade-in">
            <SentimentChart />
          </div>
          <div className="lg:col-span-1 fade-in" style={{ animationDelay: '200ms' }}>
            <TrendingTopics />
          </div>
        </div>

        {/* Recent Tweets */}
        <div className="fade-in" style={{ animationDelay: '400ms' }}>
          <RecentTweets />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
