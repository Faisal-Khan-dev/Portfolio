export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Full-Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "Frontend Specialist (React & Next.js)",
		icon: "/mobile.webp",
	},
	{
		title: "Backend & API Engineer",
		icon: "/backend.webp",
	},
	{
		title: "Generative AI SaaS Developer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "Git",
		icon: "/tech/git.webp",
	},
	{
		name: "GitHub",
		icon: "/tech/github.webp",
	},
	{
		name: "Vercel",
		icon: "/tech/vercel.svg",
	},
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Saylani Tech Limited",
    icon: "/company/saylaniBootcamp.png",
    iconBg: "#1D1836",
    date: "2026 – Present",
    points: [
      "Architected and deployed full-stack web applications utilizing React.js, Node.js, and Express.js, ensuring scalable codebases.",
      "Designed and optimized structured MongoDB schemas and queries, improving data retrieval efficiency.",
      "Collaborated within a fast-paced development environment to deliver production-ready features under strict sprint deadlines.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Entrovex",
    icon: "/company/applotech.png",
    iconBg: "#1D1836",
    date: "2025 (2 Months)",
    points: [
      "Developed highly responsive user interfaces using React.js and Tailwind CSS, ensuring mobile-first responsiveness across all core views.",
      "Integrated RESTful APIs into frontend applications, optimizing state management and reducing re-render overhead.",
      "Utilized Git and GitHub for explicit version control and collaborative code reviews within a remote engineering team.",
    ],
  },
  {
    title: "Modern Web Development Certification",
    company_name: "Saylani Mass IT Training",
    icon: "/company/saylaniBootcamp.png",
    iconBg: "#1D1836",
    date: "Graduated – 2026",
    points: [
      "Completed comprehensive training in Modern Web Development focusing on MERN stack, Next.js, and TypeScript.",
      "Built real-world scalable projects following production standards and industry best practices.",
    ],
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "Connect with me on LinkedIn to explore my professional background, network, and development updates.",
    name: "Farhan Khan",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/lestrofarhan",
  },
  {
    id: 2,
    testimonial:
      "Check out my GitHub profile where I share all my open-source projects, repositories, and technical experiments.",
    name: "lestrofarhan",
    image: "/tech/github.webp",
    link: "https://github.com/lestrofarhan",
  },
  {
    id: 3,
    testimonial:
      "Feel free to reach out directly via email for full-stack project inquiries, freelance opportunities, or collaborations.",
    name: "lestrofarhan@gmail.com",
    image: "/web.webp",
    link: "mailto:lestrofarhan@gmail.com",
  },
];

const projects: {
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
}[] = [
	{
		name: "AI Video Course Generator",
		description:
			"Engineered a high-performance Gen AI platform featuring an automated text-to-video pipeline and agentic workflows to dynamically generate structured educational courses. Implemented asynchronous API orchestration to handle intensive video rendering tasks while maintaining an optimal user experience.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "typescript",
				color: "green-text-gradient",
			},
			{
				name: "genai",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/tekvibeProject.png",
		source_code_link: "https://github.com/lestrofarhan",
		platform: "Vercel",
		deploy_link: "https://github.com/lestrofarhan",
	},
	{
		name: "Real Estate Marketplace",
		description:
			"Built a comprehensive, production-ready full-stack platform using the MERN stack. Engineered a secure, real-time bidirectional messaging infrastructure utilizing Socket.io for instant agent communication.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "node",
				color: "green-text-gradient",
			},
			{
				name: "express",
				color: "orange-text-gradient",
			},
			{
				name: "mongodb",
				color: "pink-text-gradient",
			},
			{
				name: "socketio",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/vitalProject.png",
		source_code_link: "https://github.com/lestrofarhan",
		platform: "Vercel",
		deploy_link: "https://github.com/lestrofarhan",
	},
	{
		name: "Lumina (High-Performance Blog Platform)",
		description:
			"Created a minimalist blogging platform leveraging Next.js and TypeScript for strict type-safety and robust architecture. Leveraged SSG and ISR to maximize SEO optimization, page speed, and server-response latency.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "typescript",
				color: "green-text-gradient",
			},
			{
				name: "ssg-isr",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/dwtProject.png",
		source_code_link: "https://github.com/lestrofarhan",
		platform: "Vercel",
		deploy_link: "https://github.com/lestrofarhan",
	},
];

export { services, technologies, experiences, testimonials, projects };
