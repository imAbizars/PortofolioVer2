import React, { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import project1Image from '../../assets/projek1.png'
import project2Image from '../../assets/chatcordporto.png'
import project3Image from '../../assets/projek3.png'
import project4Image from '../../assets/projek4.png'
import project5Image from '../../assets/attendifyporto.png'
import project6Image from '../../assets/1.png'
import project7Image from '../../assets/2.png'
import project8Image from '../../assets/3.png'
import project9Image from '../../assets/4.png'
import project10Image from '../../assets/qq.png'
import project11Image from '../../assets/qw.png'
import project12Image from '../../assets/qe.png'
import project13Image from '../../assets/Dasboard.png'
import project14Image from '../../assets/Peminjaman.png'
import project15Image from '../../assets/Laporan Peminjaman.png'
import project16Image from '../../assets/rblx.png'
import project17Image from '../../assets/rblx2.png'
// import gambar tambahan di sini, contoh:
// import attendify2 from '../../assets/attendify2.png'

// Setiap proyek sekarang berisi ARRAY gambar
const projectImages = {
  1: [project5Image,project6Image,project7Image,project8Image,project9Image/*, attendify2, attendify3 */],
  2: [project2Image, project10Image, project11Image, project12Image  /*, chatcord2 */],
  3: [project3Image],
  4: [project4Image],
  5: [project1Image],
  6: [project13Image, project14Image, project15Image],
  7:[project16Image,project17Image]
}

function ImageSlider({ images, alt }) {
  const [index, setIndex] = useState(0)
  const total = images.length

  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)

  return (
    <div className="group relative h-[250px] w-full overflow-hidden rounded-lg">
      <div
        className="flex h-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${alt} ${i + 1}`}
            className="h-full w-full shrink-0 object-cover"
          />
        ))}
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Gambar sebelumnya"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          >
            <BsChevronLeft />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Gambar berikutnya"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          >
            <BsChevronRight />
          </button>

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ke gambar ${i + 1}`}
                className={`h-2 w-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function ProjectItem({ project }) {
  const images = projectImages[project.id]

  return (
    <div
      className="col-span-4 flex flex-col flex-wrap justify-between overflow-hidden rounded-xl border border-[#e5e4e4] bg-[#f5f4f3] p-6 shadow-sm hover:shadow-md md:col-span-2 lg:col-span-1 2xl:col-span-1"
      style={{ height: '550px' }}
    >
      <div className="text-left">
        <h1 className="font-satoshi text-xl font-semibold text-gray-700">{project.name}</h1>
      </div>

      <hr className="my-2" />

      {images && <ImageSlider images={images} alt={project.name} />}

      <p className="mt-4 text-left text-gray-600">{project.shortDescription}</p>

      <div className="flex grow items-end gap-2 text-gray-600">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="rounded-lg bg-[#e8e7e5] p-1 px-1.5 hover:bg-[#dfdddb]">
            GitHub
          </a>
        )}
        {project.website && (
          <a href={project.website} target="_blank" rel="noreferrer" className="rounded-lg bg-[#e8e7e5] p-1 px-1.5 hover:bg-[#dfdddb]">
            Website
          </a>
        )}
      </div>
    </div>
  )
}