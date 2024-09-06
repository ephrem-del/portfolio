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
            "[text-decoration:none] tracking-[0.03em] text-5xl font-nav-bar-text-21 px-[12px] cursor-pointer hover:text-blue-600 text-nowrap",
            { "bg-sky-100 text-blue-600": pathname === link.href }
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
