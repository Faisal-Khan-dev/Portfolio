"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";

type ServiceCardProps = {
	index: number;
	title: string;
	icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
	return (
		<>
			<Tilt
				options={{ max: 45, scale: 1, speed: 450 }}
				className="xs:w-[250px] w-full"
			>
				<motion.div
					variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
					className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
				>
					<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
						<Image
							src={icon}
							width={64}
							height={64}
							alt={title}
							className="w-16 h-16 object-contain"
						/>
						<h3 className="text-white text-[20px] font-bold text-center">
							{title}
						</h3>
					</div>
				</motion.div>
			</Tilt>
		</>
	);
};

const About = () => {
	return (
		<div className="border border-purple-900/60 border-dashed p-6 sm:p-10 rounded-[30px] bg-black-100/30 backdrop-blur-sm">
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">Introduction</p>
				<h2 className="sectionHeadText">Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				Versatile Full-Stack Web Developer with a passion for building modern, high-performance web applications. Proven expertise in React.js, Next.js, Node.js, and MongoDB. Skilled in crafting seamless UI/UX using Tailwind CSS, MUI, and Shadcn UI, backed by strong API integration and backend logic. Demonstrated ability to deliver scalable, pixel-perfect, and maintainable solutions through a robust portfolio of full-stack projects. Eager to apply my technical expertise and problem-solving mindset to develop innovative, user-centric digital experiences.
			</motion.p>
			<div className="mt-12 sm:mt-20 flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(About, "about");
