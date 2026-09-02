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

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
			alert("Please fill in all fields before sending!");
			return;
		}

		setLoading(true);

		const googleSheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

		try {
			// 1. Submit to EmailJS for email notification
			const emailPromise = emailjs.send(
				"service_91ssn8g",
				"template_jjegxdr",
				{
					from_name: form.name,
					to_name: "Farhan Khan",
					from_email: form.email,
					to_email: "lestrofarhan@gmail.com",
					message: form.message,
				},
				"VeFeVdEHL9F9_i6xp",
			);

			// 2. Submit to Google Sheet Web App (if configured)
			let sheetPromise: Promise<unknown> = Promise.resolve();
			if (googleSheetUrl) {
				const formData = new FormData();
				formData.append("name", form.name);
				formData.append("email", form.email);
				formData.append("message", form.message);
				formData.append("timestamp", new Date().toLocaleString());

				sheetPromise = fetch(googleSheetUrl, {
					method: "POST",
					body: formData,
					mode: "no-cors",
				});
			}

			await Promise.allSettled([emailPromise, sheetPromise]);

			setLoading(false);
			alert(
				"A humble thanks for reaching out! Your message has been received and saved.",
			);
			setForm({
				name: "",
				email: "",
				message: "",
			});
		} catch (error) {
			setLoading(false);
			alert("Sorry!! Something went wrong. Please try again.");
		}
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
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-purple-700 transition-colors cursor-pointer"
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
