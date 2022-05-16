import React from "react"

import Edges from "./Edges"

export default function Footer() {
  return (
    <>
      <Edges size="lg">
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2022{" "}
              <a href="https://totalityworks.com" className="hover:underline">
                Totality Works
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </Edges>
    </>
  )
}