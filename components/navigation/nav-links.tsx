"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about-me" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            // "flex items-center justify-center font-sm text-stone-950 hover:text-blue-400",
            "[text-decoration:none] relative tracking-[0.03em] text-stone-950 inline-block min-w-[66px] px-[13px] cursor-pointer",
            { "bg-sky-100 text-blue-600": pathname === link.href }
          )}
        >
          {/* <p className="relative tracking-[0.03em] text-[inherit] inline-block min-w-[66px] md:flex">
            {link.name}
          </p> */}
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
