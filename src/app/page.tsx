'use client'
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import FileUpload from '../components/FileUpload';
import CourseWorkForm from '../components/CourseWorkForm';
import EvaluationCard from '../components/EvaluationCard';
import CourseWorkList from '../components/CourseWorkList';
import ExploreCourseWork from '../components/ExploreCourseWork';
import Sidebar from './sidebar';

// Function to generate dummy data
const generateDummyData = () => ({
  type: 'assignment', // or 'quiz', 'exam' - you can randomize this
  title: `Coursework ${Math.floor(Math.random() * 100)}`, // random title
  description: 'This is a randomly generated coursework description.',
  score: Math.floor(Math.random() * 100), // random score between 0 and 100
  date: new Date().toLocaleDateString(), // current date
});

export default function Home() {
  const [courseWorks, setCourseWorks] = useState([]);

  useEffect(() => {
    // Load courseworks from local storage
    const storedCourseWorks = JSON.parse(localStorage.getItem('courseWorks') || '[]');
    setCourseWorks(storedCourseWorks);
  }, []);

  const addCourseWork = (newCourseWork: any) => {
    const dummyData = generateDummyData(); // Generate dummy data
    const updatedCourseWork = { ...newCourseWork, ...dummyData }; // Merge uploaded file data with dummy data

    const updatedCourseWorks = [...courseWorks, updatedCourseWork];
    setCourseWorks(updatedCourseWorks);
    localStorage.setItem('courseWorks', JSON.stringify(updatedCourseWorks));
  };

  return (
    <Layout>
      {/* <Sidebar/> */}
      <h1 className="text-3xl font-bold mb-6 max-w-2xl">
        Hey IB Folks! Unsure about the quality of your answers? <span className="text-purple-600">We get you.</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center">
          <FileUpload onFileUpload={addCourseWork} />
          <CourseWorkForm onSubmit={addCourseWork} />
        </div>
        <div className="flex justify-start items-start">
          <img src="animated-image.png" alt="Evaluation Image" className="w-72 h-auto mb-4 hidden md:block md:ml-8" />
        </div>
      </div>
      <CourseWorkList courseWorks={courseWorks} />
      <ExploreCourseWork />
    </Layout>
  );
}
