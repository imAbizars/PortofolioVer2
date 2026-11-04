import React from 'react'

const skills = [
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'PHP', icon: 'devicon-php-plain' },
  { name: 'React.js', icon: 'devicon-react-original' },
  { name: 'Laravel', icon: 'devicon-laravel-original' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
  { name: 'HTML', icon: 'devicon-html5-plain' },
  { name: 'CSS', icon: 'devicon-css3-plain' },
  { name: 'MySQL', icon: 'devicon-mysql-original' },
  { name: 'Git', icon: 'devicon-git-plain' },
]

const SkillCard = ({ name, icon }) => (
  <div className="flex items-center gap-2 rounded-lg bg-[#393e46] px-3 py-1.5 font-supreme text-sm font-semibold text-[#f1f0ee] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#224871] hover:shadow-md lg:py-2 lg:text-[15px]">
    <i className={`${icon} colored text-lg`} />
    <span>{name}</span>
  </div>
)

export default function Skills() {
  return (
    <div className="mainCard car col-span-4 grid items-center lg:col-span-2 2xl:col-span-2 3xl:col-span-1">
      <div className="flex flex-wrap justify-center gap-2.5">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  )
}