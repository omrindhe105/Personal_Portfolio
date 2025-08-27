import React from "react";
import { SocialIcon } from "react-social-icons";

const socials = [
  {
    id: 1,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/om-rindhe105",
    handle: "om-rindhe105",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/om_rindhe105",
    handle: "om_rindhe105",
  },
];

const Socials = () => {
  return (
    <div className="flex items-center justify-center sm:gap-x-4 mt-10 md:w-[600px] w-2">
      {socials.map((social) => (
        <div
          key={social.id}
          className="flex items-center justify-center flex-1 animate-fade-in-3 cursor-pointer group md:hover:shadow-outline-gray rounded-[9px] p-5 md:p-10 transition duration-200 ease-out"
        >
          <SocialIcon
            url={social.url}
            fgColor="#FFF"
            bgColor="transparent"
            className="!h-16 !w-16"
          />
          <div className="text-xs sm:text-sm space-y-1">
            <p className="text-[#ADB0B1] group-hover:text-[#FAF9F6] transition font-medium">
              {social.name}
            </p>
            <p className="text-[#4B4C52]">{social.handle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Socials;
