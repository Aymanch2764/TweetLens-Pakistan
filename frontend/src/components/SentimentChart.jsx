import React from 'react';


const SentimentChart = () => {
  const data = [
    { day: 'Mon', positive: 65, neutral: 20, negative: 15 },
    { day: 'Tue', positive: 58, neutral: 25, negative: 17 },
    { day: 'Wed', positive: 70, neutral: 18, negative: 12 },
    { day: 'Thu', positive: 62, neutral: 23, negative: 15 },
    { day: 'Fri', positive: 68, neutral: 20, negative: 12 },
    { day: 'Sat', positive: 72, neutral: 17, negative: 11 },
    { day: 'Sun', positive: 75, neutral: 15, negative: 10 },
  ];

  return (
    <div className="glass-card rounded-2xl p-8 card-hover">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">Sentiment Trends</h3>
          <p className="text-sm text-gray-500 mt-1">Last 7 days performance</p>
        </div>
        <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-4 py-2 rounded-lg">
          Weekly
        </span>
      </div>
      
      <div className="h-72 flex items-end justify-between gap-4">
        {data.map((item, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <div className="w-full flex flex-col gap-1 rounded-t-lg overflow-hidden">
              {/* Positive */}
              <div 
                className="bg-gradient-to-t from-green-500 to-emerald-400 rounded-t transition-all hover:opacity-90 cursor-pointer relative group"
                style={{ height: `${item.positive * 2.5}px` }}
                title={`Positive: ${item.positive}%`}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              {/* Neutral */}
              <div 
                className="bg-gradient-to-t from-gray-400 to-gray-300 transition-all hover:opacity-90 cursor-pointer relative group"
                style={{ height: `${item.neutral * 2.5}px` }}
                title={`Neutral: ${item.neutral}%`}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              {/* Negative */}
              <div 
                className="bg-gradient-to-t from-red-500 to-rose-400 rounded-b transition-all hover:opacity-90 cursor-pointer relative group"
                style={{ height: `${item.negative * 2.5}px` }}
                title={`Negative: ${item.negative}%`}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
            </div>
            <span className="text-sm text-gray-600 mt-3 font-semibold">{item.day}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-8">
        <div className="flex items-center">
          <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-400 rounded mr-2"></div>
          <span className="text-sm text-gray-600 font-medium">Positive</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 bg-gradient-to-r from-gray-400 to-gray-300 rounded mr-2"></div>
          <span className="text-sm text-gray-600 font-medium">Neutral</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-rose-400 rounded mr-2"></div>
          <span className="text-sm text-gray-600 font-medium">Negative</span>
        </div>
      </div>
    </div>
  );
};

export default SentimentChart;
