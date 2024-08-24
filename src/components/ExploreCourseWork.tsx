import { useState } from 'react';
import CourseWorkCard from './CourseWorkCard';

export default function ExploreCourseWork() {
  const [activeTab, setActiveTab] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const tabs = ['All', 'IA Example', 'EE Example', 'IO Example', 'ToK Example'];
  
  // Dummy explore coursework data
  const exampleWorks = [
    { title: "How does the temperature of a Copper pipe affect the time it takes a magnet to fall through?", subject: "Physics HL", readTime: "18 min read", wordCount: 2388, rating: "7/7", language: "English" },
    { title: "The impact of social media on teenage mental health", subject: "Psychology HL", readTime: "22 min read", wordCount: 3102, rating: "6/7", language: "English" },
    { title: "Analysis of themes in 'To Kill a Mockingbird'", subject: "English Literature HL", readTime: "20 min read", wordCount: 2756, rating: "7/7", language: "English" },
    { title: "The effects of deforestation on local ecosystems", subject: "Environmental Systems SL", readTime: "16 min read", wordCount: 2105, rating: "6/7", language: "English" },
    // Add more example works here...
  ];

  const displayedWorks = showAll ? exampleWorks : exampleWorks.slice(0, 4);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Explore coursework</h2>
      <div className="flex space-x-4 mb-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-sm font-medium ${activeTab === tab ? 'text-purple-600 bg-white rounded-xl p-2 font-bold' : 'text-gray-600'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedWorks.map((work, index) => (
          <CourseWorkCard key={index} work={work} />
        ))}
      </div>
      {exampleWorks.length > 4 && !showAll && (
        <button 
          className="mt-4 text-purple-600 font-medium"
          onClick={() => setShowAll(true)}
        >
          View all
        </button>
      )}
    </div>
  );
}