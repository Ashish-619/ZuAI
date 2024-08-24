export default function Header() {
    return (
      <header className="bg-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">ZuAi</div>
        <nav className="lg:hidden">
          {/* Mobile menu button */}
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
      </header>
    )
  }

  export function Header2() {
    return (
      <header className="bg-white shadow-md p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">IB Economic Paper IA2.pdf</h1>
          <div className="flex items-center space-x-4">
            <span className="bg-yellow-400 text-white rounded-full px-2 py-1">120</span>
            <span className="bg-red-500 text-white rounded-full px-2 py-1">24</span>
          </div>
        </div>
      </header>
    )
  }