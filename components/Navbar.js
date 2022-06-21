import React, { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Toggle from "./Toggle";
import logo from "../public/images/logo.png";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	
	return (
		<div>
					
					
			<nav className="dark:bg-slate-900 ">
				<div className="w-full ">
					<div className="bg-slate-50 dark:bg-slate-900 top-0 left-0 z-50 flex w-full  flex-row items-center justify-between px-5 py-5 pl-4 sm:px-10 lg:px-20  false fixed ">
						<div className="flex items-center  sm:mx-10 md:mx-20 justify-between w-full">
							
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className="dark:text-slate-200 p-4 font-bold text-xl cursor-pointer">
						
									ace<span className="text-blue-500">
							
										soyeo</span>
								</h1>
							</div>
							<div className="hidden md:block" id="mobile-menu">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
										activeClass="Home"
										to="home"
										smooth={true}
										offset={50}
										duration={500}
										className = "dark:text-slate-200 dark:hover:text-indigo-500 hover:text-black cursor-pointer text-indigo-500 px-3 py-2 text-md font-semibold"
										
									>
										Home
									</Link>
									
									<Link
										activeClass="work"
										to="work"
										smooth={true}
										offset={50}
										duration={500}
										className=" dark:hover:text-indigo-500 dark:text-slate-200 hover:text-black cursor-pointer text-indigo-600 px-3 py-2 text-md font-semibold"
									>
										Projects
									</Link>
									<Link
										activeClass="services"
										to="services"
										smooth={true}
										offset={50}
										duration={500}
										className=" dark:hover:text-indigo-500 dark:text-slate-200 hover:text-black cursor-pointer text-indigo-600 px-3 py-2 text-md font-semibold"
									>
										Services
									</Link>

							{/* 		<Link
										activeClass="Clients"
										to="Clients"
										smooth={true}
										offset={50}
										duration={500}
										className=" dark:hover:text-indigo-500 dark:text-slate-200 hover:text-black cursor-pointer text-indigo-600 px-3 py-2 text-md font-semibold"
									>
										Clients
									</Link> */}

									<Link
										activeClass="contact"
										to="contact"
										smooth={true}
										offset={50}
										duration={500}
											className=" dark:hover:text-indigo-500 dark:text-slate-200 hover:text-black cursor-pointer text-indigo-600 px-3 py-2 text-md font-semibold"
									>
										Contact
									</Link> 
								</div>
							</div>

							<div className="hidden md:block flex flex-row">
					
							<Toggle/>
							</div>
						</div>
						<div className="dark:bg-slate-900 mr-14 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md  text-white  hover:bg-slate-900 focus:outline-none focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="dark:bg-slate-800 bg-white mx-4 mr-20 pt-4 pb-4 space-y-1"
							>
								<Link
									href="/home"
									activeClass="home"
									to="home"
									smooth={true}
									offset={50}
									duration={500}
									className="dark:text-slate-200 cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</Link>
								<Link
									href="/services"
									activeClass="services"
									to="services"
									smooth={true}
									offset={50}
									duration={500}
									className="dark:text-slate-200 cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Services
								</Link>

								<Link
									href="/work"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="dark:text-slate-200 cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Projects
								</Link>
					{/* 		 <Link
									href="/Clients"
									activeClass="Clients"
									to="Clients"
									smooth={true}
									offset={50}
									duration={500}
									className="dark:text-slate-200 cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Clients
								</Link> */}

								<Link
									href="/contact"
									activeClass="contact"
									to="contact"
									smooth={true}
									offset={50}
									duration={500}
									className="dark:text-slate-200 cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Contact
								</Link> 
								<Toggle/>
							</div>
							
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;
