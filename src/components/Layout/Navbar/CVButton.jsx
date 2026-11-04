import React from 'react'
import { BsFillFileEarmarkTextFill } from 'react-icons/bs'
import dennisresume from './DennisAbizar.pdf'
import './CVButtonAnimate.css'

export default function CVButton() {
  return (
    <a href={dennisresume} download>
      <div className="button cursor-pointer " data-tooltip="Download CV">
        <div className="button-wrapper">
          <div className="text ">
            <BsFillFileEarmarkTextFill className="cursor-pointer hover:fill-[#0000] dark:fill-[#f9f3ee] " fill="black" fontSize="1.8rem" />
          </div>

          <span className="icon dark:hover:bg-[#00adb5]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="2em"
              height="2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </a>
  )
}
