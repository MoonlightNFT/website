import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, { Fragment, useState } from 'react'
import { FaBars, FaMoon, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { selectDarkMode, toggleDarkMode } from '../../states/application'
import { useAppSelector, useAppDispatch } from '../../states/hooks'

function HeaderSlideMenu() {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState<boolean>(false)
  const darkMode: boolean = useAppSelector(selectDarkMode)

  return (
    <>
      <div>
        <button
          type="button"
          className="p-2 text-lg text-white bg-ml-purple rounded-md focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <FaBars className={clsx(open && 'hidden')} />
          <FaTimes className={clsx(!open && 'hidden')} />
        </button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-24 md:pl-40">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="pointer-events-auto relative w-screen max-w-md">
                  <div className="flex h-full flex-col pt-14 pb-10 overflow-y-scroll bg-white dark:bg-ml-purple-dark shadow-xl">
                    {
                      // <div className="px-4 sm:px-6">
                      //   <Dialog.Title className="text-lg font-medium text-gray-900">Menu</Dialog.Title>
                      // </div>
                    }
                    <div className="relative mt-6 flex-1 px-6 sm:px-8">
                      {
                        // <div className="absolute inset-0 px-4 sm:px-6">
                        //   <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true" />
                        // </div>
                      }
                      <section className="py-2 flex flex-col gap-y-4 text-ml-purple dark:text-white font-semibold">
                        <Link to="/">Home</Link>
                        <Link to="/explore">Explore</Link>
                        <Link to="/signup">Sign Up</Link>
                      </section>
                      <section className="mt-2 py-2 border-t border-slate-200 dark:border-slate-800">
                        <div className="form-control">
                          <label className="cursor-pointer label">
                            <span className="label-text dark:text-white">Dark mode</span>
                            <input
                              type="checkbox"
                              className="toggle toggle-primary"
                              defaultChecked={darkMode}
                              onChange={() => {
                                dispatch(toggleDarkMode())
                              }}
                            />
                          </label>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default function Header() {
  return (
    <nav className="fixed flex items-center w-screen py-3 px-5 bg-white dark:bg-ml-purple text-ml-purple dark:text-white shadow-lg dark:shadow-xl z-[99999]">
      <Link to="/" className="grow flex items-center text-2xl">
        <FaMoon />
        <div className="pl-4 font-semibold tracking-wider">moonlight</div>
      </Link>
      <section className="flex-initial">
        <HeaderSlideMenu />
      </section>
    </nav>
  )
}
