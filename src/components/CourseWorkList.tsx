import { Key, useState } from 'react';
import CourseWorkCard from './CourseWorkCard';

// Define the shape of a single coursework item
interface CourseWork {
  title: string;
  subject?: string;
  readTime?: string;
  wordCount?: number;
  rating?: string;
  language?: string;
  content?: string;
}

// Define the props type for the CourseWorkList component
interface CourseWorkListProps {
  courseWorks: CourseWork[];
}

export default function CourseWorkList({ courseWorks }: CourseWorkListProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedWorks = showAll ? courseWorks : courseWorks.slice(0, 2);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">My coursework</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedWorks.map((work, index) => (
          <CourseWorkCard key={index} work={work} />
        ))}
      </div>
      {courseWorks.length > 2 && !showAll && (
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
