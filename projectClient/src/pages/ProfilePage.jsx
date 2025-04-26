import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'

const ProfilePage = () => {
  const user = {
    name: 'John Doe',
    image:'/avatardemo.jpg', 
  }

  const items = [
    {
      id: 1,
      name: 'Article 1',
      status: 'Published',
      publishedDate: '2025-04-10',
      publishedBy: 'Admin',
      views: 120,
    },
    {
      id: 2,
      name: 'Article 2',
      status: 'Draft',
      publishedDate: '2025-03-15',
      publishedBy: 'Editor',
      views: 45,
    },
  ]

  return (
    <>
      <Navbar />
      <div className="p-4 sm:p-6">
        {/* User Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <img src={user.image} alt="User" className="w-20 h-20 rounded-full" />
          <h2 className="text-xl sm:text-2xl font-semibold poppins-bold">{user.name}</h2>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white-opacity border rounded-lg shadow text-sm sm:text-base">
            <thead>
              <tr className="bg-white-opacity text-left">
                <th className="p-3 sm:p-4 whitespace-nowrap">Name</th>
                <th className="p-3 sm:p-4 whitespace-nowrap">Status</th>
                <th className="p-3 sm:p-4 whitespace-nowrap">Published Date</th>
                <th className="p-3 sm:p-4 whitespace-nowrap">Published By</th>
                <th className="p-3 sm:p-4 whitespace-nowrap">Views</th>
                <th className="p-3 sm:p-4 whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id} className="border-t bg-white-opahover hover:scale-[1.005] transition">
                  <td className="p-3 sm:p-4">{item.name}</td>
                  <td className="p-3 sm:p-4">{item.status}</td>
                  <td className="p-3 sm:p-4">{item.publishedDate}</td>
                  <td className="p-3 sm:p-4">{item.publishedBy}</td>
                  <td className="p-3 sm:p-4">{item.views}</td>
                  <td className="p-3 sm:p-4">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button className="px-3 py-1 text-xs sm:text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        Update
                      </button>
                      <button className="px-3 py-1 text-xs sm:text-sm bg-red-500 text-white rounded hover:bg-red-600 transition">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default ProfilePage
