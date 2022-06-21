import Image from "next/image";
import One from "../public/images/eeyo.png";
import Two from "../public/images/boston.png";
import Three from "../public/images/gmb.png";
import Four from "../public/images/golball.png";
import Five from "../public/images/hockey.png";
import Six from "../public/images/legend.png";
import Seven from "../public/images/tailor.png";
import Four1 from "../public/images/photog/1.jpg";
import Five1 from "../public/images/photog/2.jpg";
import Six1 from "../public/images/photog/3.jpg";
import Seven1 from "../public/images/photog/4.jpg";
import Four2 from "../public/images/photog/5.jpg";
import Five2 from "../public/images/photog/6.jpg";
import Six2 from "../public/images/photog/18.jpg";
import Seven2 from "../public/images/photog/20.jpg";
import Four3 from "../public/images/photog/13.jpg";
import Five3 from "../public/images/photog/21.jpg";
import Six3 from "../public/images/photog/22.jpg";
import Seven3 from "../public/images/photog/12.jpg";
import Four4 from "../public/images/photog/17.jpg";
import Five4 from "../public/images/photog/12.jpg";
import Six4 from "../public/images/photog/14.jpg";
import Seven4 from "../public/images/photog/23.jpg";
import Four5 from "../public/images/datasec.jpg";
import Five5 from "../public/images/ubun.jpg";
import Six5 from "../public/images/terminal.jpg";
import Eight from "../public/images/windcity.png";
import Nine from "../public/images/reshape.png";
import Ten from "../public/images/vesper.png";
import Eleven from "../public/images/maritime.png";
import Twelve from "../public/images/austin.png";
import Thirteen from "../public/images/1.png";
import Foutheen from "../public/images/2.jpg";
import Fifteen from "../public/images/3.jpg";
import Thirteen1 from "../public/images/tecs.jpg";
import Fourteen1 from "../public/images/tecs3.jpg";
import Fifteen1 from "../public/images/tecs1.jpg";
import { Element } from "react-scroll";


function works() {
	return (
		<Element className="bg-cover dark:bg-slate-900" id="work" name="work">
			<div className="overflow-hidden p-0 -mt-5 flex flex-col justify-center items-center  ">
				
				<h1 className=" dark:text-indigo-400  dark:hover:text-red-700 hover:text-red-900 text-indigo-900 text-6xl font-bold text-center">
					All Creative Works
				</h1>
				<p className=" dark:text-indigo-200 my-12 text-lg uppercase text-indigo-600 font-semibold">Web Development</p>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
					<a href="https://eeyo.bike/" target="_black">
						
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={One}
							alt="One"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"

						/>
					</div>
					</a>
					<a href="https://boston.hoopsproject.net/" target="_black">
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Two}
							alt="two"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					</a>
					<a href="https://gmb.io/" target="_black">
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Three}
							alt="three"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					</a>
				</div>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
					<div className=" rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Four}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<a href="https://golfballfinder.com/" target="_black">
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Five}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					</a>
					<a href="https://www.hockeyshift.com/" target="_black">
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Six}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					</a>
				</div>
				
				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
				<a href="https://legendslounge.nl/en" target="_black">
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Seven}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					</a>
					<a href="https://www.tailormade.fit/" target="_black">
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Eight}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					</a>
					<a href="https://windycitysc.com/" target="_black">
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Nine}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					</a>
				</div>
				
				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
				<a href="https://reshape.pl/" target="_black">
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Ten}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					</a>
					<a href="https://www.vesperhotel.com/" target="_black">
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Eleven}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					</a>
					<a href="https://www.themaritimehotel.com/" target="_black">
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Twelve}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					</a>
				</div>

				<p className="dark:text-indigo-200 text-lg uppercase text-indigo-600 font-semibold">App Development</p>
				
				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Thirteen}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Foutheen}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Fifteen}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					
				</div>
				<p className="dark:text-indigo-200 text-lg uppercase text-indigo-600 font-semibold ">PhotogGraphy</p>
				
				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-6 mt-10">
					<div className="rounded w-60 h-40 shadow-xl relative duration-500 ease-out hover:scale-110">
						<Image
							src={Four1}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-60 h-40 shadow-xl relative duration-500 ease-out hover:scale-110">
						<Image
							src={Five1}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-60 h-40 shadow-xl relative duration-500 ease-out hover:scale-110">
						<Image
							src={Six1}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-60 h-40 shadow-xl relative duration-500 ease-out hover:scale-110">
						<Image
							src={Seven1}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					
					
				</div>

				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-6 mt-10">
					<div className="rounded w-60 h-40 shadow-xl relative duration-500 ease-out hover:scale-110">
						<Image
							src={Four2}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-60 h-40 shadow-xl relative duration-500 ease-out hover:scale-110">
						<Image
							src={Five2}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-60 h-40 shadow-xl relative duration-500 ease-out hover:scale-110">
						<Image
							src={Six2}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-60 h-40 shadow-xl relative duration-500 ease-out hover:scale-110">
						<Image
							src={Seven2}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					
					
				</div>
				
				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-6 mt-10">
					<div className="rounded w-60 h-40 shadow-xl relative duration-500 ease-out hover:scale-110">
						<Image
							src={Four4}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-60 h-40 shadow-xl relative duration-500 ease-out hover:scale-110">
						<Image
							src={Five4}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-60 h-40 shadow-xl relative duration-500 ease-out hover:scale-110">
						<Image
							src={Six4}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-60 h-40 shadow-xl relative duration-500 ease-out hover:scale-110">
						<Image
							src={Seven4}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					
					
				</div>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-6 mt-10">
					<div className="rounded w-60 h-40 shadow-xl relative duration-500 ease-out hover:scale-110">
						<Image
							src={Four3}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-60 h-40 shadow-xl relative duration-500 ease-out hover:scale-110">
						<Image
							src={Five3}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-60 h-40 shadow-xl relative duration-500 ease-out hover:scale-110">
						<Image
							src={Six3}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-60 h-40 shadow-xl relative duration-500 ease-out hover:scale-110">
						<Image
							src={Seven3}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					
					
				</div>
				
				<p className="dark:text-indigo-200 text-lg uppercase text-indigo-600 font-semibold">Technical Support</p>
				
				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Thirteen1}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Fourteen1}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Fifteen1}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					
				</div>



			
				<p className="dark:text-indigo-200 text-lg uppercase text-indigo-600 font-semibold">Cyber Security Researcher</p>
				
				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Four5}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Five5}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative duration-500 ease-out hover:scale-125">
						<Image
							src={Six5}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					
				</div>

			</div>
		</Element>
	);
}

export default works;
