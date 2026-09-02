"use client";
import { motion } from "framer-motion";
import React from "react";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto overflow-hidden">
			<div className="paddingX absolute inset-0 top-[90px] sm:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 pointer-events-none z-10">
				<div className="flex flex-col justify-center items-center mt-5 sm:mt-10">
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.5 }}
						className="w-5 h-5 rounded-full bg-[#915EFF]"
					/>
					<motion.div
						initial={{ height: 0 }}
						animate={{ height: "100%" }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="w-1 sm:h-80 h-40 violet-gradient"
					/>
				</div>
				<motion.div
					initial={{ x: -50, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="mt-5 sm:mt-10"
				>
					<h1 className="heroHeadText text-white">
						Hi, I&apos;m <span className="text-[#915EFF]">Farhan Khan</span>
					</h1>
					<p className="heroSubText mt-2 text-white-100">
						Full-Stack Web Developer &amp; Gen AI Specialist
					</p>
				</motion.div>
			</div>

			<ComputersCanvas />

			<div className="absolute xs:bottom-6 bottom-4 w-full flex justify-center items-center z-10">
				<a href="#about" aria-label="Scroll down to About section">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Number.POSITIVE_INFINITY,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;

