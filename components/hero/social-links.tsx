import Link from "next/link";
import React from "react";
import { FaDiscord, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  { id: 1, href: "", icon: FaLinkedinIn },
  { id: 2, href: "", icon: FaGithub },
  { id: 3, href: "", icon: FaFacebook },
  { id: 4, href: "", icon: FaDiscord },
];

const SocialLinks = () => {
  return (
    <>
      {socialLinks.map((socialLink) => {
        const LinkIcon = socialLink.icon;
        return (
          <Link key={socialLink.id} href={socialLink.href} className=" ">
            <LinkIcon className="mx-3 size-5 text-dimgray hover:text-blue-800 desktop:size-8" />
          </Link>
        );
      })}
    </>
  );
};

export default SocialLinks;
