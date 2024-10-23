import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <span className="text-xl sm:text-2xl font-bold">CodeSpiral</span>
            <p className="text-gray-400 mt-2">Empowering developers since 2023</p>
          </div>
          <div className="flex flex-col space-y-2">
            <Link to="/terms" className="hover:text-indigo-400">Terms</Link>
            <Link to="/privacy" className="hover:text-indigo-400">Privacy</Link>
            <Link to="/contact" className="hover:text-indigo-400">Contact</Link>
          </div>
          <div className="flex items-start space-x-2">
            <MapPin size={24} className="text-indigo-400 mt-1" />
            <address className="text-gray-400 not-italic">
              123 Tech Street<br />
              San Francisco, CA 94105<br />
              United States
            </address>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; 2024 CodeSpiral. All rights reserved.
        </div>
      </div>
    </footer>
  );
}