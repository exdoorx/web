import { CgWebsite } from "react-icons/cg";
import { GoSettings } from "react-icons/go";
import { GrShieldSecurity } from "react-icons/gr";
import { AiOutlineCamera } from "react-icons/ai";
import { Element } from "react-scroll";

function services() {
	return (
		<Element className="dark:bg-slate-900" id="services" name="services">
			<div className="masthead-block pointer-events-none overflow-hidden p-0 -mt-5 flex flex-col justify-center items-center ">
				<p className="dark:text-indigo-200 text-lg uppercase text-indigo-600 font-semibold">Skills</p>
				<a href="">
				<h1 className="dark:text-indigo-400 dark:hover:text-red-700 hover:text-red-900 text-indigo-900 text-6xl font-bold text-center">
					Services
				</h1>
				</a>
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex  flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<CgWebsite className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								Web Development
							</h2>
						</div>
					
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
						Becoming a good Web Developer can be more challenging, 
						equiring ongoing learning and effort over years.
						</p>
					
					</div>
			
					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<GoSettings className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								Technical Support
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-sm sm:text-left">
						Diagnosing software or hardware faults and solving the 
						issues over the phone or in person. 
						</p>
					</div>
				</div>

				{/* second grid */}
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<AiOutlineCamera className="w-10 h-10 bg-green-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold ">
								Photography
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
						The art, application, and practice of creating durable images by taking random scenery
						 or chemically by means of a light-sensitive material such as photographic film.
						</p>
					</div>

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<GrShieldSecurity className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								Cyber Security Researcher
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
						Security researcher keeps up-to-date on all the latest developments in threats 
						to computer software and networks.
						</p>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default services;
