import { Element } from "react-scroll";

function contact() {
	return (
		<Element className="dark:bg-slate-900" id="contact" name="contact">
			<div>
				<div className="w-full my-20 h-auto flex flex-col justify-center items-center">
				<p className="font-serif dark:text-indigo-200 text-2xl uppercase text-indigo-600 font-semibold">Send Message Anonymously</p>
				<a href="https://sayout.me/say/acesoyeo" target="_black">
					<h1 className=" font-serif duration-500 ease-out hover:scale-125 dark:text-indigo-400 dark:hover:text-red-700 hover:text-red-900 text-indigo-900 text-6xl font-bold text-center">
						Parivate Message
					</h1>
					</a>
				{/* 	<div className="flex justify-center text-center md:w-1/2 w-full my-5">
						<input
							type="text"
							placeholder="Message..."
							className="mt-5 pb-1 pl-8 w-full rounded-tl-lg rounded-bl-lg text-blue-800 text-xl border-2 border-indigo-900 h-10"
						/>
						<button type="submit" className="mt-5 text-xl w-36 h-10 bg-indigo-900 text-white rounded-tr-lg rounded-br-lg hover:bg-red-800">
							Send
						</button>
					</div> */}
				</div>
			</div>
		</Element>
	);
}

export default contact;
