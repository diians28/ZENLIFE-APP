import { useState } from 'react';
import Navbar from './Navbar';
import BottomNavigation from './BottomNavigation';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-lg mx-auto px-4 pb-20">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Layout; 