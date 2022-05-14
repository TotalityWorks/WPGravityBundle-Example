import React from "react"
import { Link } from "gatsby"
import Headroom from "react-headroom"

export default function Header() {
  return (
    <>
      <Headroom>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start items-center lg:w-0 lg:flex-1">
              <Link
                to="/"
                className="px-5 text-black hover:text-black font-heading hover:font-heading cursor-pointer hover:no-underline"
              >
                WPGravityBundle
              </Link>
            </div>
            <Link
              to="/example-forms"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Example Forms
            </Link>

            <Link
              to="/contribute"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contribute
            </Link>
          </div>
        </div>
      </Headroom>
    </>
  )
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}