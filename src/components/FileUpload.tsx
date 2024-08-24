import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileData {
  type: string;
  name: string;
  size: number;
  lastModified: number;
}

type OnFileUpload = (fileData: FileData) => void;

interface FileUploadProps {
  onFileUpload: OnFileUpload;
}

export default function FileUpload({ onFileUpload }: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0]) {
      const file = acceptedFiles[0];
      onFileUpload({
        type: 'file',
        name: file.name,
        size: file.size,
        lastModified: file.lastModified,
      });
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    maxSize: 25 * 1024 * 1024, // 25MB
  });

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer"
      >
        <input {...getInputProps()} />
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <p className="mt-2 text-xl font-semibold text-customGray">Drag and drop a PDF</p>
        <p className="text-xs text-customGray">*Limit 25 MB per file.</p>
        <button className="mt-4 px-4 py-2 bg-white font-bold text-purple-600 rounded-full text-lg border shadow-md">
          Upload your file
        </button>
      </div>
    </div>
  );
}
