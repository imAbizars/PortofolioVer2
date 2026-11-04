import React from 'react'
import FotoProfil from '../../assets/FotoProfil.jpg'
export default function HeroSection() {
  return (
    <div className="z-0 mb-3.5 w-full items-center justify-center">
      <div className="flex min-h-[calc(100vh-200px)] flex-col-reverse items-center justify-center gap-6 rounded-xl lg:flex-row">
        <div className="align-center   flex max-w-full flex-col justify-center px-3.5 text-center sm:px-0  md:relative  xl:left-0">
          <h1 className="animate__animated animate__lightSpeedInLeft max-w-full text-left font-outfit text-7xl font-medium text-[#202124] dark:text-[#16c4cd] sm:text-8xl md:mb-3">
            Hi, I'm
            <b className="bg-[#202124] from-[#16c4cd] to-blue-500  bg-clip-text pl-2 font-outfit font-medium text-transparent underline dark:bg-gradient-to-r">
              Dennis
            </b>
          </h1>
          <p className="animate__animated animate__flipInX mt-4 max-w-md pl-1.5 text-justify font-supreme text-[20px] leading-relaxed text-[#45474e] dark:text-[#edeeef] sm:max-w-md md:mt-0 ">
          Lulusan Sarjana Teknik Informatika yang memilki minat pengembangan web di bidang frontend maupun backend dan analisa terhadap suatu data, serta tidak menutup diri untuk mempelajari bidang lainnya.
            <br></br> <br></br>
           Ayo lihat lebih lanjut tentang saya.
          </p>
        </div>

        <div className="flex shrink-0 justify-center">
          <img
            src={FotoProfil}
            alt="Foto profil Dennis"
            className="h-[200px] w-[200px] rounded-full object-cover sm:h-[280px] sm:w-[280px] lg:h-[350px] lg:w-[350px]"
          />
        </div>
      </div>
    </div>
  )
}
