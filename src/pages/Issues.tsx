
import React from 'react';
import { List, Map } from 'lucide-react';

const Issues = () => {
  const mockIssues = [
    {
      id: 1,
      title: 'Large Pothole on Main Street',
      category: 'Infrastructure',
      upvotes: 42,
      location: 'Downtown',
      status: 'Pending'
    },
    {
      id: 2,
      title: 'Overflowing Trash Bins',
      category: 'Sanitation',
      upvotes: 28,
      location: 'Park Area',
      status: 'In Progress'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <List className="mr-3 text-blue-500" />
          Community Issues
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {mockIssues.map(issue => (
            <div 
              key={issue.id} 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{issue.title}</h3>
              <div className="flex justify-between text-gray-600 mb-4">
                <span>{issue.category}</span>
                <span>{issue.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button className="text-green-500 mr-2">👍</button>
                  <span>{issue.upvotes} Upvotes</span>
                </div>
                <span 
                  className={`px-3 py-1 rounded-full text-sm 
                    ${issue.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-green-100 text-green-800'}`}
                >
                  {issue.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Issues;

