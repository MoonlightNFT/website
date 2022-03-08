import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, {
  Fragment, useEffect, useRef, useState,
} from 'react'
import { CgClose, CgDarkMode, CgMenuGridO } from 'react-icons/cg'
import { FaMoon } from 'react-icons/fa'
import { MdOutlineExplore } from 'react-icons/md'
import { Link } from 'react-router-dom'
// import { useOnWindowScroll } from 'rooks'

import { selectDarkMode, toggleDarkMode } from '../../states/application'
import { useAppSelector, useAppDispatch } from '../../states/hooks'

function HeaderSlideMenu() {
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const darkMode: boolean = useAppSelector(selectDarkMode)

  return (
    <>
      <button
        type="button"
        className="text-4xl focus:outline-none"
        onClick={() => setIsOpen((prevOpen) => !prevOpen)}
      >
        {isOpen ? <CgClose /> : <CgMenuGridO />}
      </button>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setIsOpen}>
          <div className="absolute inset-0 overflow-hidden">
            {
              // <Transition.Child
              //   as={Fragment}
              //   enter="ease-in-out duration-400"
              //   enterFrom="opacity-0"
              //   enterTo="opacity-100"
              //   leave="ease-in-out duration-200"
              //   leaveFrom="opacity-100"
              //   leaveTo="opacity-0"
              // >
              //   <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              // </Transition.Child>
            }
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="pointer-events-auto relative w-screen max-w-lg">
                  <div className="flex h-full w-full flex-col pt-14 overflow-y-scroll bg-white dark:bg-ml-purple-dark shadow-xl">
                    {
                      // <div className="px-4 sm:px-6">
                      //   <Dialog.Title className="text-lg font-medium text-gray-900">Menu</Dialog.Title>
                      // </div>
                    }
                    <div className="relative h-full w-full flex-1 pt-8 px-8 sm:px-10 bg-slate-100 dark:bg-slate-900">
                      {
                        // <div className="absolute inset-0 px-4 sm:px-6">
                        //   <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true" />
                        // </div>
                      }
                      <section className="py-4 flex flex-col gap-y-4 text-2xl dark:text-white font-bold">
                        <Link to="/" className="focus:outline-none">Home</Link>
                        <Link to="/explore" className="focus:outline-none">Explore</Link>
                        <Link to="/signup" className="focus:outline-none">Sign Up</Link>
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
  const dispatch = useAppDispatch()

  const [isNavDark, setIsNavDark] = useState<boolean>(false)
  // const homeOwningNFTTop: number | undefined = document.getElementById('home-owning-nft')?.offsetTop
  // const homeOwningNFTHeight: number | undefined = document.getElementById('home-owning-nft')?.offsetHeight

  // useOnWindowScroll((event) => {
  //   if (!homeOwningNFTTop || !homeOwningNFTHeight) return
  //   const scrollY = event.srcElement.body.scrollTop
  //   if (scrollY > homeOwningNFTTop && scrollY < homeOwningNFTTop + homeOwningNFTHeight && !isNavDark) {
  //     setIsNavDark(true)
  //   } else if (isNavDark) {
  //     setIsNavDark(false)
  //   }
  // })
  // const listInnerRef = useRef()
  //
  // const onScroll = () => {
  //   if (listInnerRef.current) {
  //     const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current
  //     if (scrollTop + clientHeight === scrollHeight) {
  //       console.log('reached bottom')
  //     }
  //   }
  // }

  // dark class must be parent of all dark-modes
  return (
    <nav className={clsx('sticky inset-x-0 top-0 w-screen backdrop-filter backdrop-blur-3xl bg-white/30 dark:bg-black/30 shadow z-[99998]', isNavDark && 'dark')}>
      <div className="flex items-center pt-4 pb-3 px-5 w-full text-ml-purple dark:text-white transition">
        <Link to="/" className="flex-initial flex items-center text-4xl text-ml-purple">
          <FaMoon />
          {/* <div className="pl-3 font-brand font-bold">moonlight</div> */}
        </Link>
        <div className="grow" />
        <section className="flex-initial flex items-center space-x-3 text-3xl text-slate-700 dark:text-white">
          <div>
            <Link
              to="/explore"
              className="block p-2 bg-slate-200/30 dark:bg-transparent hover:bg-slate-200/60 dark:hover:bg-black/80 rounded-full focus:outline-none transition"
            >
              <MdOutlineExplore />
            </Link>
          </div>
          <div>
            <button
              type="button"
              className="p-2 bg-slate-200/30 dark:bg-transparent hover:bg-slate-200/60 dark:hover:bg-black/80 rounded-full focus:outline-none transition"
              onClick={() => {
                dispatch(toggleDarkMode())
              }}
            >
              <CgDarkMode />
            </button>
          </div>
          <HeaderSlideMenu />
        </section>
      </div>
    </nav>
  )
}
