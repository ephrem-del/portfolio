import Link from "next/link";
import React from "react";
import { FaDiscord, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  { href: "", icon: FaLinkedinIn },
  {
    href: "",
    icon: FaGithub,
  },
  { href: "", icon: FaFacebook },
  { href: "", icon: FaDiscord },
];

const SocialLinks = () => {
  return (
    <>
      {socialLinks.map((socialLink) => {
        const LinkIcon = socialLink.icon;
        return (
          <Link key={""} href={socialLink.href} className=" ">
            <LinkIcon  className="mx-3 size-8 text-dimgray hover:text-blue-800" />
          </Link>
        );
      })}
    </>
  );
};

export default SocialLinks;
