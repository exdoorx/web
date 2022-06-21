import React from "react";
import Image from "next/image";
import heroImage from "../public/images/heroimage.png";
import { Element } from "react-scroll";

function Home() {
	
	return (
		<Element className="dark:bg-slate-900" id="home" name="home">
				<div className="dark:bg-slate-900  mb-40 flex  justify-self-end items-end flex-col-reverse sm:flex-row md:mx-20 md:pt-32 pt-28">
					<div className="w-3/4 h-96 shadow-xl rounded-full relative ">
							
					
						<Image
							src={heroImage}
							alt="heroImage"
							layout="fill"
							objectFit="cover"
							className="masthead-block pointer-events-none overflow-hidden rounded-full cursor-pointer hidden md:block"
							
						/>
					</div>
					<div className="cursor-pointer flex flex-col md:ml-20 mx-10 mt-10">
						<h1 className="dark:text-slate-200 font-bold text-7xl text-left mb-5 text-indigo-900">
							Hello, I am <br></br>
							<a href="https://linktr.ee/acesoyeo" target="_black"> 
							<span className="py-4 hover:text-indigo-900 text-red-900"> ACESOYEO </span></a>
						</h1>
						<p className="dark:text-slate-200 text-left font-normal font mb-5 flex-wrap">
						Innovative technology developer with corporate and freelance computer programming experience. 
						Capable of working with a variety of development software, modern security, web development, 
						and database management using Firebase, MySQL, and MongoDB.
						</p>

						<a href="" download="acesoyeoCV" className=" text-center duration-500 ease-out hover:scale-125 hover:bg-red-900 hover:text-white text-white bg-indigo-500 shadow-lg dark:shadow-blue-900/50 shadow-indigo-900/50 hover:shadow-red-900/50 w-28 font-sans rounded-full">Download CV
						
						</a>
						
					</div>
				</div>
		</Element>
	);
}

export default Home;
