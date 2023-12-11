import { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import myContext from '../../context/data/myContext'
import { RxCross2 } from 'react-icons/rx'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const context = useContext(myContext)
  const { toggleMode, mode } = context

  return (
    <div className=" sticky top-0 z-50  bg-[#e6e7ee] "  >
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-[#e6e7ee] pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 shadow2 px-6"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6 ">
                  
                  <Link to={'/allproducts'} className="text-sm font-medium text-[#31344b] shadow2 px-[105px] py-3 rounded-[25px] " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                  <div className="flow-root">
                    <Link to={'/order'} style={{ color: mode === 'dark' ? 'white' : '', }} className=" hidden  -m-2  p-2 font-medium text-gray-900 shadow2 px-24 py-2 rounded-[25px]">
                      Order
                    </Link>
                  </div>

                  <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-[#31344b] shadow2 px-24 py-2 rounded-[25px] " style={{ color: mode === 'dark' ? 'white' : '', }}>
                      admin
                    </Link>
                  </div>

                  <div className="flow-root">
                  <Link to={'/**'}>
                    <a className="-m-2 block p-2 font-medium text-[#31344b] cursor-pointer shadow2 px-24 py-2 rounded-[25px]" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                    </Link>
                  </div>
                  
                </div>

               
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative  bg-[#e6e7ee]">
        <div className=' bg-[#e6e7ee] h-1'></div>
        

        <nav aria-label="Top" className=" px-4 sm:px-6 lg:px-8 shadow-xl  bg-[#e6e7ee] mx-4 py-2 shadow1 rounded-tr-[30px] rounded-bl-[30px] " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <h1 className=' text-2xl font-bold text-[#31344b]  px-4 py-1 rounded-tr-[10px] rounded-bl-[10px] shadow2' style={{ color: mode === 'dark' ? 'white' : '', }}>Artify</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 gap-4 ">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-700 shadow1 px-4 py-2 rounded-[25px] " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                  <Link to={'/order'} className=" hidden text-sm font-medium text-gray-700 shadow1 px-4 py-2 rounded-[25px]" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Order
                  </Link>
                  <Link to={'/dashboard'} className="text-sm font-medium text-gray-700 shadow1 px-4 py-2 rounded-[25px]" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Admin
                  </Link>
                  <Link to={'/**'}>
                  <a className="text-sm font-medium text-gray-700 cursor-pointer shadow1 px-4 py-2 rounded-[25px] " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Logout
                  </a>
                  </Link>
                  
                </div>

                
                <div className="hidden lg:ml-8 lg:flex ">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full shadow2"
                      src="/images/ritu.jpg"
                      alt="Dan_Abromov" />
                  </a>
                </div>

                

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}