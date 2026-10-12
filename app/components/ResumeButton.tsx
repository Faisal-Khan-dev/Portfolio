import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResumeButton = () => {
	return (
		<Link
			href="/resume/FaisalKhanResume.pdf"
			target="_blank"
			download
			className="font-medium text-center px-4 py-2.5 flex items-center gap-2 justify-center rounded-lg transition ease-in-out bg-[#915EFF] hover:-translate-y-0.5 hover:bg-[#804dee] active:scale-95 duration-200 cursor-pointer shadow-md shadow-[#915EFF]/20"
		>
			<Image
				src="/resume.svg"
				width={20}
				height={20}
				alt="resume"
				className="object-contain animate-pulse"
			/>
			<span className="text-white text-sm font-semibold">Resume</span>
		</Link>
	);
};

export default ResumeButton;
