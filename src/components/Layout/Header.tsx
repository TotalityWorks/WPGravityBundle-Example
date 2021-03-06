import React, { Fragment }  from "react"
import { Link } from "gatsby"
import Headroom from "react-headroom"
import { Popover, Transition } from "@headlessui/react"
import {
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline"

const links = [
  {
    name: 'Example Forms', 
    href: '/example-forms'
  },
  {
    name: 'Supported Fields', 
    href: '/supported-fields'
  },
  {
    name: 'Contribute', 
    href: '/contribute'
  },
]

export default function Header() {
  return (
    <>
      <Headroom>
      <Popover className="relative bg-white">
        <div className="bg-gray-100 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-600 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start items-center lg:w-0 lg:flex-1">
              <Link
                to="/"
                className="px-5 text-black hover:text-black font-headingStyled hover:font-headingStyled cursor-pointer hover:no-underline"
              >
                WPGravityBundle
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Link
                to="/example-forms"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Example Forms
              </Link>

              <Link
                to="/supported-fields"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Supported Fields
              </Link>

              <Link
                to="/contribute"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contribute
              </Link>
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div className="">
                    <Link
                      to="/"
                      className="px-5 text-black hover:text-black font-headingStyled hover:font-headingStyled cursor-pointer hover:no-underline "
                    >
                      WPGravityBundle
                    </Link>
                  </div>
                  <hr className="divide-y"/>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6 border-t-2">
                  <nav className="grid gap-y-8">
                    {links.map(item => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 mt-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
      </Transition>
      </Popover>
      </Headroom>
    </>
  )
}