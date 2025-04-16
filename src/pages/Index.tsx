
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Upload, ThumbsUp } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Civic FixIt: Empower Your Community
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Report local issues, collaborate with neighbors, and drive positive change in your city.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <MapPin size={48} className="mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pinpoint Issues</h3>
            <p>Use our interactive map to precisely locate city problems.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <Upload size={48} className="mx-auto text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Reporting</h3>
            <p>Upload photos and descriptions with just a few taps.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <ThumbsUp size={48} className="mx-auto text-coral-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Power</h3>
            <p>Upvote issues to prioritize what matters most to your neighborhood.</p>
          </div>
        </div>
        
        <div className="space-x-4">
          <Link 
            to="/report" 
            className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors font-semibold"
          >
            Report an Issue
          </Link>
          <Link 
            to="/issues" 
            className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors font-semibold"
          >
            View Issues
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;

