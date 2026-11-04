import React from 'react'

import { BsGithub } from 'react-icons/bs'

import CVButton from './Navbar/CVButton'

export default function Footer() {
  return (
    <div className="mt-3.5 flex justify-between rounded-t-lg bg-[#f1f0ee] p-5 px-5 text-left text-gray-600 dark:bg-[#edeeef]">
      <div>
        <p className="text-xs text-gray-500">@ made by Dennis Abizar 2024</p>

        <a href="mailto:vaskodzhakov@gmail.com" className="mt-2 text-xs text-gray-500 hover:text-indigo-500 tooltip tooltip-top">
          denisabizar54@gmail.com
        </a>
      </div>
      

      <div className="flex gap-2 text-right dark:text-[#e0eaf2]">
        <a className="tooltip tooltip-top" data-tip="github.com/Vasil1001" target="_blank" href="https://github.com/Vasil1001">
          <BsGithub className=" cursor-pointer text-[1.8rem]  hover:fill-[#0058a8 ]  dark:hover:fill-[#00adb5]" fill="black" data-tip="hello" />
        </a>
        <CVButton />
      </div>
    </div>
  )
}
