// SelectedProject.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import projectsList from './Projects'

export default function SelectedProject() {
  const { id } = useParams()
  const project = projectsList.find(p => p.id === projectId);

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      {/* Display other project details as needed */}
    </div>
  )
}
