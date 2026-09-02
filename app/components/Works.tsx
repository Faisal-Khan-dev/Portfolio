"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type ProjectCardProps = {
	index: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web";
};

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	deploy_link,
	platform,
}: ProjectCardProps) => {
	const [showFull, setShowFull] = useState(false);

	const toggleReadMore = () => setShowFull(!showFull);

	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[250px]">
					<Image
						src={image}
						width={1000}
						height={1000}
						alt="project_image"
						className="w-full h-full rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						{source_code_link && (
							<Link
								href={source_code_link}
								target="_blank"
								className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
							>
								<Image
									src="/tech/github.webp"
									width={24}
									height={24}
									alt="source-code"
									className="object-contain"
								/>
							</Link>
						)}
						<Link
							href={deploy_link}
							target="_blank"
							className="black-gradient w-10 h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer"
						>
							<Image
								src={
									platform === "Netlify"
										? "/tech/netlify.webp"
										: platform === "Vercel"
										? "/tech/vercel.svg"
										: platform === "Wordpress"
										? "/tech/wordpress.webp"
										: platform === "Web"
										? "/web.webp"
										: "/tech/figma.webp"
								}
								width={24}
								height={24}
								alt="source code"
								className="object-contain"
							/>
						</Link>
					</div>
				</div>

				{/* ✅ Fixed height container */}
				<div className="mt-5 h-[160px] overflow-hidden relative">
					<h3 className="text-white font-bold text-[24px] mb-1">{name}</h3>
					<p
						className={`text-secondary text-[14px] transition-all duration-300 ${
							showFull ? "line-clamp-none" : "line-clamp-3"
						}`}
					>
						{description}
					</p>

					{/* ✅ Read More / Less Button */}
					{description.length > 120 && (
						<button
							onClick={toggleReadMore}
							className="text-[13px] text-blue-400 mt-1 hover:underline focus:outline-none"
						>
							{showFull ? "Read Less" : "Read More"}
						</button>
					)}
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">My work</p>
				<h2 className="sectionHeadText">Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					Following projects showcases my skills and experience through
					real-world examples of my work. Each project is briefly described with
					links to code repositories and live demos in it. It reflects my
					ability to solve complex problems, work with different technologies,
					and manage projects effectively.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "");
