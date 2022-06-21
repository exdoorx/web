import Head from "next/head";

import HomePage from "./homePage";
import Navbar from "../components/Navbar";
import Services from "./services";
import Works from "./works";
import Clients from "./clients";
import Contact from "./contact";
import Footer from "../components/Footer";
import { ThemeProvider } from '../components/themeContext';

export default function Home() {
	
	
	return (
		<ThemeProvider>
		<div className="dark:bg-black w-full flex flex-1 flex-col ">
			<Head>
				<title>acesoyeo</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/logo.png" />
			</Head>
			<Navbar />
			<HomePage />
			<Works />
			<Services />
			{/* <Clients /> */}
			<Contact />
			<Footer />
		</div>
		</ThemeProvider>
	);
}
