import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F5F8FF] flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar className="hidden lg:block" />
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  )
}