import React from 'react'
import ProjectList from '../components/ProjectsPage/ProjectList'

export default function Projects() {
  return (
    <div className="mt-2 grid grid-cols-4 flex-wrap gap-3.5 px-3.5 sm:px-0">
      <div className="col-span-4 row-span-2 rounded-xl border border-[#e5e4e4] bg-[#f5f4f3] p-6 lg:col-span-4">
          <div className="flex justify-between">
            <h1 className="px-2  text-left font-supreme text-3xl font-semibold text-[#2f3136] dark:text-[#383b41] md:text-4xl">Projects</h1>
        </div>
      </div>

       <ProjectList />
    </div>
  )
}
