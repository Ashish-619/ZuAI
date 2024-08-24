import React from 'react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="bg-indigo-700 w-16 h-screen flex flex-col items-center py-4 space-y-8">
      {/* Logo */}
      <div className="text-white font-bold text-xl">
        ZuAi
      </div>

      {/* Navigation Icons */}
      <nav className="flex flex-col items-center space-y-6">
        <SidebarIcon icon="grid" active />
        <SidebarIcon icon="document" />
        <SidebarIcon icon="chat" />
        <SidebarIcon icon="question" />
      </nav>

      {/* User Avatar */}
      <div className="mt-auto mb-4">
        <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
          {/* Replace with actual user avatar */}
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
            U
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarIcon = ({ icon, active = false }) => {
  // You should replace these placeholder icons with actual SVG icons or images
  const iconMap = {
    grid: "□",
    document: "📄",
    chat: "💬",
    question: "❓",
  };

  return (
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl
                    ${active ? 'bg-white text-indigo-700' : 'text-white hover:bg-indigo-600'}`}>
      {iconMap[icon]}
    </div>
  );
};

export default Sidebar;