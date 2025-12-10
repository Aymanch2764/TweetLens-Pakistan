import React from 'react';
import { Heart, MessageCircle, Repeat2, Clock } from 'lucide-react';


const RecentTweets = () => {
  const tweets = [
    {
      id: 1,
      user: 'Ahmad Khan',
      handle: '@ahmadkhan',
      time: '2h ago',
      content: 'Karachi is facing intesive load shedding these days.',
      sentiment: 'positive',
      likes: 234,
      retweets: 45,
      replies: 12,
      avatar: 'AK'
    },
    {
      id: 2,
      user: 'Ayesha Ali',
      handle: '@ayeshaali',
      time: '3h ago',
      content: 'I have been robbed today near Shaheen Chowk #Gujrat',
      sentiment: 'negative',
      likes: 156,
      retweets: 32,
      replies: 28,
      avatar: 'AA'
    },
    {
      id: 3,
      user: 'Hassan Raza',
      handle: '@hassanraza',
      time: '4h ago',
      content: 'Pleaseeeee Government Wake up. We need water in our city #Lahore',
      sentiment: 'positive',
      likes: 512,
      retweets: 89,
      replies: 45,
      avatar: 'HR'
    },
    {
      id: 4,
      user: 'Fatima Sheikh',
      handle: '@fatimasheikh',
      time: '5h ago',
      content: 'Water Shortage in Islamabad is getting worse day by day.',
      sentiment: 'neutral',
      likes: 198,
      retweets: 56,
      replies: 19,
      avatar: 'FS'
    },
  ];

  const getSentimentStyle = (sentiment) => {
    switch(sentiment) {
      case 'positive': return { border: 'border-green-200', bg: 'bg-green-50', badge: 'bg-green-100 text-green-700' };
      case 'negative': return { border: 'border-red-200', bg: 'bg-red-50', badge: 'bg-red-100 text-red-700' };
      default: return { border: 'border-gray-200', bg: 'bg-white', badge: 'bg-gray-100 text-gray-700' };
    }
  };

  const getAvatarGradient = (index) => {
    const gradients = [
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-green-500 to-emerald-500',
      'from-orange-500 to-red-500',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="glass-card rounded-2xl p-8 card-hover">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Recent Activity</h3>
        <button className="text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors">
          View All →
        </button>
      </div>
      <div className="space-y-4">
        {tweets.map((tweet, index) => {
          const style = getSentimentStyle(tweet.sentiment);
          return (
            <div 
              key={tweet.id} 
              className={`border-l-4 ${style.border} ${style.bg} rounded-r-xl p-5 hover:shadow-lg transition-all group`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getAvatarGradient(index)} rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                    {tweet.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{tweet.user}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                      {tweet.handle}
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {tweet.time}
                      </span>
                    </div>
                  </div>
                </div>
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${style.badge}`}>
                  {tweet.sentiment}
                </span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{tweet.content}</p>
              <div className="flex items-center space-x-6 text-gray-500">
                <button className="flex items-center space-x-2 hover:text-red-500 transition-colors group/btn">
                  <Heart className="w-4 h-4 group-hover/btn:scale-125 transition-transform" />
                  <span className="text-sm font-medium">{tweet.likes}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors group/btn">
                  <MessageCircle className="w-4 h-4 group-hover/btn:scale-125 transition-transform" />
                  <span className="text-sm font-medium">{tweet.replies}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-green-500 transition-colors group/btn">
                  <Repeat2 className="w-4 h-4 group-hover/btn:scale-125 transition-transform" />
                  <span className="text-sm font-medium">{tweet.retweets}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentTweets;
