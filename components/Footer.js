import { FiInstagram } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { AiFillLinkedin } from "react-icons/ai";
function Footer() {
	return (
		<div className="bg-slate-800 w-full h-24 flex justify-center items-center">
			<div className="p-0 -mt-5 flex flex-row absolute inline-block">
			<a
									href="mailto:andyreyes.com.ph@gmail.com"
									target="_black"
						
								>

						
									<HiOutlineMail className="duration-500 ease-out hover:scale-150 w-8 h-8 text-blue-100 m-3 p-1 rounded-md"/>
								
								</a>
								<a
									href="https://www.facebook.com/acesoyeooo"
									target="_black"
								>
									<ImFacebook className="duration-500 ease-out hover:scale-150 w-8 h-8 text-blue-100 m-3 p-1 rounded-md"/>
								</a>
							
								<a
									href="https://www.Instagram.com/acesoyeo"
									target="_black"
								>
									<FiInstagram className="duration-500 ease-out hover:scale-150 w-8 h-8 text-blue-100 m-3 p-1 rounded-md"/>
								</a>
								<a
									href="https://www.twitter.com/acesoyeo"
									target="_black"
								>
									<ImTwitter className="duration-500 ease-out hover:scale-150 w-8 h-8 text-blue-100 m-3 p-1 rounded-md"/>
								</a>
								<a
									href="https://www.linkedin.com/in/acesoyeo"
									target="_black"
								>
									<AiFillLinkedin className="duration-500 ease-out hover:scale-150 w-8 h-8 text-blue-100 m-3 p-1 rounded-md"/>
								</a>
								</div>
								<div className="mt-16">
			<h1 className="text-xl text-blue-300">
				{" "}
				Created by{" "}
				<a
					href="https://linktr.ee/acesoyeo"target="_black"
					className="dark:hover:text-slate-500 cursor-pointer font-semibold text-indigo-200 hover:text-black"
				>
					Andy Rosales Reyes
				</a>
				
			</h1>
			</div>
			</div>
		
		
	);
}

export default Footer;
