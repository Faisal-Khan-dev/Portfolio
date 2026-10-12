"use client";
import { slideIn } from "@/app/utils/motion";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "./HigherOrderComponents";
import { EarthCanvas } from "./canvas";

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null);

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		const serviceId =
			process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_91ssn8g";
		const templateId =
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_jjegxdr";
		const publicKey =
			process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "VeFeVdEHL9F9_i6xp";
		const toName = process.env.NEXT_PUBLIC_EMAILJS_TO_NAME || "Faisal Khan";
		const toEmail =
			process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || "moizahmedlap2@gmail.com";

		emailjs
			.send(
				serviceId,
				templateId,
				{
					from_name: form.name,
					to_name: toName,
					from_email: form.email,
					to_email: toEmail,
					message: form.message,
				},
				publicKey,
			)
			.then(() => {
				setLoading(false);
				alert(
					"A humble thanks for reaching out. I will respond to you as soon as possible.",
				);
				setForm({
					name: "",
					email: "",
					message: "",
				});
			})
			.catch((error) => {
				setLoading(false);
				console.error("EmailJS error:", error);
				alert("Sorry!! Something went wrong!!");
			});
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className="heroSubText">Get in Touch</p>
				<h3 className="heroHeadText">Contact.</h3>
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name.</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Whats's your name?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Email.</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="Whats's your email?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Message.</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What do you want to say?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl cursor-pointer hover:bg-tertiary/80 transition-colors"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
