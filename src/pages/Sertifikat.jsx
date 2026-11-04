import React from 'react'
import cert1 from '../assets/sertifDicoding.png'
import cert2 from '../assets/sertifdicoding2.png'

const certificates = [
  {
    id: 1,
    name: 'Memulai Pemograman Dengan Python',
    issuer: 'Dicoding',
    date: '09 September 2026',
    image: cert1,
    link: 'https://drive.google.com/file/d/1ep3pfrCwiAFPufSGrbtALiaVP0hL1R6U/view', // opsional
  },
  {
    id: 2,
    name: 'Belajar Penerapan Data Science dengan Microsoft Fabric',
    issuer: 'Dicoding',
    date: '09 September 2026',
    image: cert2,
    link: 'https://drive.google.com/file/d/1GJDZm9VbCyem13ynVluHKJO7HsOcl_Bg/view',
  },
]

function CertificateItem({ certificate }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#e5e4e4] bg-[#f5f4f3] p-6 shadow-sm hover:shadow-md">
      <div className="min-h-[88px] text-left">
        <h1 className="font-satoshi text-xl font-semibold text-gray-700">{certificate.name}</h1>
        <p className="mt-1 text-sm text-gray-500">
          {certificate.issuer} • {certificate.date}
        </p>
      </div>

      <hr className="my-3" />

      <img
        src={certificate.image}
        alt={certificate.name}
        className="aspect-[4/3] w-full rounded-lg bg-white object-contain"
      />

      <div className="mt-auto flex gap-2 pt-4 text-gray-600">
        <a
          href={certificate.link || certificate.image}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-[#e8e7e5] p-1 px-1.5 hover:bg-[#dfdddb]"
        >
          Lihat Sertifikat
        </a>
      </div>
    </div>
  )
}
export default function Sertifikat() {
  return (
    <div className="mx-auto px-4 pb-10 xl:w-10/12 2xl:w-8/12 3xl:w-7/12">
      <h1 className="mb-6 font-satoshi text-3xl font-semibold text-[#202124] dark:text-[#f6eee8]">
        Sertifikat
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
        {certificates.map((certificate) => (
          <CertificateItem key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  )
}