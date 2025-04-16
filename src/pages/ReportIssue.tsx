
import React from 'react';
import { MapPin, Camera } from 'lucide-react';

const ReportIssue = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <MapPin className="mr-3 text-blue-500" />
          Report a City Issue
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Issue Category</label>
            <select className="w-full border rounded-md p-2">
              <option>Potholes</option>
              <option>Garbage</option>
              <option>Street Lights</option>
              <option>Other</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea 
              className="w-full border rounded-md p-2" 
              rows={4} 
              placeholder="Describe the issue in detail..."
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 flex items-center">
              <Camera className="mr-2 text-green-500" />
              Upload Photo
            </label>
            <input 
              type="file" 
              accept="image/*" 
              className="w-full border rounded-md p-2" 
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Submit Issue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportIssue;

