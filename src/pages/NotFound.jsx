import React from "react"
import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center  h-[calc(100vh-20vh)]">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Oops!</h1>
          <p className="text-5xl mb-8">404 - Page not found!</p>
          <Link to="/" className="btn btn-info border border-black dark:border-black bg-[#e9e6e6] dark:btn-info text-black dark:bg-[#e9e6e6]  btn-lg ">
            <FaHome className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  )
}