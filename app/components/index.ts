import dynamic from "next/dynamic";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Feedbacks from "./Feedbacks";
import Hero from "./Hero";
import Navbar from "./Navbar";
import ResumeButton from "./ResumeButton";
import Tech from "./Tech";
import Works from "./Works";

const ComputersCanvas = dynamic(() => import("./canvas/Computers"), {
	ssr: false,
});
const EarthCanvas = dynamic(() => import("./canvas/Earth"), {
	ssr: false,
});
const BallCanvas = dynamic(() => import("./canvas/Ball"), {
	ssr: false,
});
const StarsCanvas = dynamic(() => import("./canvas/Stars"), {
	ssr: false,
});

export {
	Hero,
	ResumeButton,
	Navbar,
	About,
	Tech,
	Experience,
	Works,
	Feedbacks,
	Contact,
	EarthCanvas,
	BallCanvas,
	ComputersCanvas,
	StarsCanvas,
};