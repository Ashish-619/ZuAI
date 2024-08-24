import { useState } from 'react';
interface FormData {
  courseWorkType: string;
  subject: string;
  essayTitle: string;
  date?: string;
}


export default function CourseWorkForm({ onSubmit }: any) {
  const [formData, setFormData] = useState<FormData>({
    courseWorkType: '',
    subject: '',
    essayTitle: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      type: 'form',
      ...formData,
      date: new Date().toISOString(),
    });
    setFormData({ courseWorkType: '', subject: '', essayTitle: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6">
      {/* Container for Selectors */}
      <div className="flex md:flex-row gap-4 mb-4">
        {/* Coursework Type select */}
        <div className="flex-1">
          <p className="block text-md font-medium text-customGray">Select your course & subjects</p>
          <select
            name="courseWorkType"
            value={formData.courseWorkType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-full border-gray-300 shadow-sm bg-slate-100 p-2"
            required
          >
            <option value="">Coursework Type</option>
            <option value="essay">Essay</option>
            <option value="research">Research Paper</option>
            <option value="project">Project</option>
          </select>
        </div>

        {/* Subject select */}
        <div className="flex-1">
          <p className="invisible md:visible block text-md font-medium text-customGray">Subject</p>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 block w-full rounded-full border-gray-300 shadow-sm bg-slate-100 p-2"
            required
          >
            <option value="">Subject</option>
            <option value="math">Mathematics</option>
            <option value="science">Science</option>
            <option value="literature">Literature</option>
          </select>
        </div>
      </div>

      {/* Container for Text Field */}
      <div className="mb-4">
        <label className="block text-md font-medium text-customGray">Enter your essay title*</label>
        <input
          type="text"
          name="essayTitle"
          value={formData.essayTitle}
          onChange={handleChange}
          className="mt-1 block w-full rounded-full bg-slate-100 p-2 border-gray-300 shadow-sm"
          placeholder="How nation works..."
          required
        />
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="w-56 px-4 py-2 bg-customGray text-white rounded-full text-md font-bold flex items-center justify-center"
        >
          <img src="btn-img.png" alt="button" className="w-5 h-auto mr-2 bg-white rounded-full" />
          Evaluate your Score
        </button>
      </div>
    </form>
  );
}
