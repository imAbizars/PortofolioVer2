import React from 'react'
import imageporto from "../../assets/imageporto.png";
import { HiOutlineExternalLink } from 'react-icons/hi'
import CodeCard from "../ui/CodeCard"
import Skills from './Skills'


export default function AboutMe() {
  const MYSQL = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  const ShadcnLogo = ({ className = '' }) => (
    <svg
      viewBox="0 0 256 256"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="208" y1="128" x2="128" y2="208" />
      <line x1="192" y1="40" x2="40" y2="192" />
    </svg>
  )
  const services = [
    {
      title: 'Web Development',
      icons: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
      desc: 'Berpengalaman membangun website dengan HTML, CSS, dan JavaScript melalui proyek pribadi serta modul Pengembangan Web di universitas.',
    },
    {
      title: 'Frontend Framework',
      icons: ['devicon-react-original', 'devicon-bootstrap-plain'],
      desc: 'Menggunakan React dan Bootstrap untuk membangun antarmuka, sambil terus mempelajari tren desain web modern.',
    },
    {
      title: 'Backend Development',
      icons: ['devicon-php-plain', 'devicon-express-original'],
      desc: 'Mengembangkan sisi backend dengan PHP dan ExpressJS, mulai dari fitur CRUD hingga pembuatan API.',
    },
    {
      title: 'Databases',
      icons: [MYSQL],
      desc: 'Menguasai dasar-dasar MySQL, mulai dari perancangan tabel hingga relasi antardata, yang dipelajari di mata kuliah Sistem Basis Data.',
    },
    {
      title: 'Frontend Design & UI',
      icons: ['devicon-bootstrap-plain', ShadcnLogo],
      desc: 'Membuat tampilan responsif dengan pendekatan mobile first menggunakan Bootstrap, serta memakai shadcnUI untuk membuat layout antarmuka.',
    },
    {
      title: 'Source Control',
      icons: ['devicon-git-plain', 'devicon-github-original'],
      desc: 'Mengelola versi dan perubahan kode dengan Git dan GitHub. Sebagian besar proyek saya dihosting di GitHub.',
    },
  ]
  
  const Icon = ({ icon: IconItem }) => (
    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#ebebeb] bg-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#207c86]">
      {typeof IconItem === 'function' ? (
        <IconItem className="h-7 w-7 text-[#202124]" />
      ) : IconItem.startsWith('http') ? (
        <img src={IconItem} alt="" className="h-8 w-8" />
      ) : (
        <i className={`${IconItem} colored text-3xl`} />
      )}
    </div>
  )
  
  const ServiceCard = ({ title, icons, desc }) => (
    <div className="group flex flex-col items-center rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#207c86] hover:shadow-lg">
      <div className="mb-5 flex items-center justify-center gap-3">
        {icons.map((icon, i) => (
          <Icon key={i} icon={icon} />
        ))}
      </div>
  
      <h3 className="mb-2 text-[19.5px] font-bold text-[#202124]">{title}</h3>
      <p className="text-[16px] leading-relaxed text-[#3b3d42]">{desc}</p>
    </div>
  )

  return (
    <>
      <div className="cont grid grid-cols-4 flex-wrap gap-3.5 px-3.5 sm:px-0">
        <div className="car mainCard col-span-4 row-span-2 lg:col-span-2">
          <div className="flex justify-between">
            <h1 className=" pt-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Personal Note</h1>

            <HiOutlineExternalLink className="car cursor-pointer hover:text-[#207c86]" size={'1.4rem'} />
          </div>
          <hr className="my-3" />
          <div className="space-y-6 text-justify font-supreme text-lg tracking-wide text-gray-700 dark:text-[#383b41] md:text-[20.5px] lg:leading-normal">
            <p>
              Saya lulusan Teknik Informatika Universitas Indraprasta yang berdomisili di
              Jakarta, dengan fokus utama pada frontend dan pengalaman full-stack yang
              terus berkembang lewat berbagai proyek terbaru. Fondasi saya dibangun dari
              HTML, CSS, dan JavaScript, lalu diperdalam dengan framework untuk membangun
              aplikasi web yang lebih kompleks.
            </p>
          </div>
        </div>
        <div className=" align-center col-span-4 flex flex-col items-center justify-center rounded-2xl border-2 border-[#ebebeb] bg-[#f1f0ee] p-1.5 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717] dark:hover:bg-[#edeeef] lg:col-span-2 2xl:col-span-2 3xl:col-span-1">
            <CodeCard />
        </div>

        <Skills />

        
        <div className="  col-span-4 ">
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
