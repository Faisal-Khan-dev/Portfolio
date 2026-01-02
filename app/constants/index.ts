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
		title: "UI/UX Designer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
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
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "CodeAlpha",
    icon: "/company/codeAlpha.png",
    iconBg: "#1D1836",
    date: "March 2025 - April 2025",
    points: [
      "Worked as a Frontend Developer Intern focusing on modern UI creation using HTML, CSS, and JavaScript.",
      "Collaborated with the development team to build responsive and interactive web components.",
      "Gained hands-on experience in frontend optimization, layout design, and reusable component development.",
      "Successfully completed internship projects and delivered clean, structured, and maintainable code.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Applotech",
    icon: "/company/applotech.png",
    iconBg: "#1D1836",
    date: "June 2025 - Present",
    points: [
      "Working as a MERN Stack Developer, building scalable full-stack applications using React.js, Node.js, Express.js, and MongoDB.",
      "Developed and maintained dashboard systems with role-based authentication and dynamic data rendering.",
      "Integrated RESTful APIs and optimized frontend performance using Tailwind CSS, MUI, and Shadcn UI.",
      "Collaborating with cross-functional teams to deliver efficient, user-friendly web solutions for clients.",
    ],
  },
  {
    title: "Web & App Development Trainee",
    company_name: "Saylani Bootcamp",
    icon: "/company/saylaniBootcamp.png",
    iconBg: "#1D1836",
    date: "October 2025 - Present",
    points: [
      "Enrolled in Saylani’s intensive Web & App Development Bootcamp focused on modern JavaScript, React, and React Native.",
      "Learning to build responsive web and mobile applications following industry-level architecture and best practices.",
      "Enhancing problem-solving and teamwork skills through hands-on projects and real-world development tasks.",
      "Continuously improving expertise in full-stack development with practical exposure to latest tools and frameworks.",
    ],
  },
];


const testimonials = [
  // {
  // 	id: 1,
  // 	testimonial:
  // 		"Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
  // 	name: "Om Patel",
  // 	image: "/socialmedia/behance.svg",
  // 	link: "https://www.behance.net/omthecreator",
  // },
  {
    id: 2,
    testimonial:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    name: "Faisal khan",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/faisal-khan-345013347/",
  },
  {
    id: 3,
    testimonial:
      "Dribble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
    name: "Faisal khan",
    image: "/socialmedia/dribble.svg",
    link: "https://dribbble.com/",
  },
  {
    id: 5,
    testimonial:
      "Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
    name: "faisal-khan-dev",
    image: "/tech/github.webp",
    link: "https://github.com/Faisal-Khan-dev",
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
		name: "DressWellTailor",
		description:
			"A fully functional E-Commerce + Tailoring platform built using React.js, Tailwind CSS, Express.js, and MySQL. Features include dynamic product management, online order tracking, user profiles, and light/dark mode support. Designed with a premium look and seamless user experience — one of my best and most professional projects.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "express",
				color: "orange-text-gradient",
			},
			{
				name: "mysql",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/dwtProject.png",
		source_code_link: "https://github.com/moizawan07?tab=repositories",
		platform: "Web",
		deploy_link: "https://dresswelltailor.applotech.com/",
	},
	{
		name: "Vital General Maintenance (Vial CMS)",
		description:
			"A modern CMS-based company management system for multi-service businesses. Built with React.js, Tailwind CSS, Framer Motion, Express.js, and MySQL. Includes advanced modules for user signup, profile management, service booking, meeting scheduling, and appointment handling — delivering both functionality and animation-rich UI.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "framer-motion",
				color: "orange-text-gradient",
			},
			{
				name: "express",
				color: "pink-text-gradient",
			},
			{
				name: "mysql",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/vitalProject.png",
		source_code_link: "https://github.com/moizawan07?tab=repositories",
		platform: "Web",
		deploy_link: "https://vitalgeneralmaintenance.com/",
	},
	{
		name: "HRMS (Human Resource Management System)",
		description:
			"A complete HRMS solution supporting multiple companies with role-based access. Developed using React.js, Node.js, Express.js, and MongoDB. The system includes features like company creation, employee invitation, salary management, attendance tracking, and leave monitoring — all under a unified dashboard for owners, admins, HR, and employees.",
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
		],
		image: "/projectimg/mern.png",
		source_code_link: "https://github.com/moizawan07/HRMS",
		platform: "Vercel",
		deploy_link: "https://hrms-o68d.vercel.app/",
	},
	{
	name: "TekVive (E-Commerce Platform)",
	description:
		"TekVive is a complete MERN stack eCommerce solution offering a seamless shopping experience for all tech-related items including mobiles, headphones, and accessories. It features a powerful admin dashboard to manage products, inventory, orders, and users. Includes full authentication system with login, signup, and password reset.",
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
	],
	image: "/projectimg/tekvibeProject.png",
	source_code_link: "https://github.com/moizawan07/eCommerce_with_MERN",
	platform: "Vercel",
	deploy_link: "https://e-commerce-with-mern-eight.vercel.app/",
},
{
	name: "Event Booking Management System",
	description:
		"A multi-role event booking and management system built using the MERN stack. Users can explore available venues based on location and time, while admins can manage event details, availability, and user bookings — offering a dynamic and responsive event management experience.",
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
	],
	image: "/projectimg/eventBookingProject.png",
	source_code_link: "https://github.com/moizawan07/EvnetBooking",
	platform: "Vercel",
	deploy_link: "https://evnet-booking.vercel.app/",
},
{
	name: "Blog Website (React + Firebase)",
	description:
		"A modern blog application developed using React and Firebase. Features include user authentication, blog creation, editing, and deletion, as well as public viewing of all blogs. Delivers a clean UI with smooth functionality for both writers and readers.",
	tags: [
		{
			name: "react",
			color: "blue-text-gradient",
		},
		{
			name: "firebase",
			color: "orange-text-gradient",
		},
		{
			name: "css",
			color: "pink-text-gradient",
		},
	],
	image: "/projectimg/blogProject.png",
	source_code_link: "https://github.com/moizawan07/Blog-App-r5",
	platform: "Netlify",
	deploy_link: "https://blogappfigmatoreact.netlify.app/",
},

];

export { services, technologies, experiences, testimonials, projects };
