import React from 'react'
import FooterLoggedIn from '@/components/FooterLoggedIn'
import Header from '@/components/Header'
import DoctorSidebar from '@/components/DoctorSidebar'

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="font-work-sans min-h-screen flex flex-col bg-white">
      <div className="flex flex-grow">
        <DoctorSidebar />
        
        <div className="flex flex-col flex-grow">
          <Header />

          <div className="flex-grow w-full bg-background">
            {children}
          </div>
        </div>

      </div>

      <FooterLoggedIn />
    </main>
  )
}

export default layout
