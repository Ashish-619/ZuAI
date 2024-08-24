export default function CourseWorkCard({ work, expanded = false }: { work: { title: string; subject?: string; readTime?: string; wordCount?: number; rating?: string; language?: string; content?: string }; expanded?: boolean }) {
    // Use dummy data for all fields except title
    const dummyData = {
        subject: 'Mathematics', // Dummy subject
        readTime: '15 mins', // Dummy read time
        wordCount: 1200, // Dummy word count
        rating: '4.5/5', // Dummy rating
        language: 'English', // Dummy language
    };

    return (
        <div className={`bg-white rounded-lg shadow-md overflow-hidden ${expanded ? 'col-span-2' : ''}`}>
            <div className="p-4 flex justify-between">
                <img src="/pdf-img.png" alt="pdf" className="w-20 h-auto object-fill mr-4" />
                <div className="flex flex-col flex-1">
                    <h5 className="font-bold text-md mb-1 line-clamp-2">{work.title}</h5>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{work.title}</p>
                    <div className="flex flex-wrap items-center text-sm text-gray-600 gap-2 mt-2">
                        <div className="flex items-center bg-slate-200 px-2 py-1 rounded-full">
                            <img src="/subject-icon.png" alt="Subject" className="w-5 h-5 mr-1" />
                            <span>{work.subject ?? dummyData.subject}</span>
                        </div>
                        <div className="flex items-center bg-slate-200 px-2 py-1 rounded-full">
                            <img src="/clock-icon.png" alt="Read time" className="w-5 h-5 mr-1" />
                            <span>{dummyData.readTime}</span>
                        </div>
                        <div className="flex items-center bg-slate-200 px-2 py-1 rounded-full">
                            <img src="/word-count-icon.png" alt="Word count" className="w-5 h-5 mr-1" />
                            <span>{dummyData.wordCount} words</span>
                        </div>
                        <div className="flex items-center bg-slate-200 px-2 py-1 rounded-full">
                            <img src="/star-icon.png" alt="Rating" className="w-5 h-5 mr-1" />
                            <span>{dummyData.rating}</span>
                        </div>
                        <div className="flex items-center bg-slate-200 px-2 py-1 rounded-full">
                            <img src="/language-icon.png" alt="Language" className="w-5 h-5 mr-1" />
                            <span>{dummyData.language}</span>
                        </div>
                    </div>
                </div>
            </div>
            {expanded && (
                <div className="p-4 text-sm text-gray-700 mb-4 line-clamp-6">
                    {work.content}
                </div>
            )}
        </div>
    );
}
