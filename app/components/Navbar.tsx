"use client";
import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
    <nav
      className={`paddingX
			w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Link href="https://github.com/lestrofarhan" target="_blank">
            <Image
              src="/logo.png"
              width={80}
              height={80}
              alt="logo"
              priority
              className="object-contain"
            />
          </Link>
          <p className="text-white text-[28px] font-bold cursor-pointer flex">
            F K &nbsp; <span className="sm:block hidden ">| Dev</span>
          </p>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <Link href={`#${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
        <div className="mt-2 lg:block hidden">
          <ResumeButton />
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setToggle(!toggle)}
            className="p-1 focus:outline-none"
          >
            <Image
              src={toggle ? "/close.svg" : "/menu.svg"}
              width={28}
              height={28}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
            />
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#050816]/95 backdrop-blur-lg border border-white/10 shadow-2xl absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-30 rounded-2xl transition-all duration-300`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] transition-colors ${
                    active === nav.title ? "text-white font-bold" : "text-secondary hover:text-white"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <Link href={`#${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
              <li className="w-full pt-2 border-t border-white/10">
                <ResumeButton />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
