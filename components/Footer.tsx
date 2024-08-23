import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/Data";

const Footer = () => {
  return (
    <footer
      className="w-full mb-[100px] md:mb-5 pb-10 overflow-clip"
      id="contact"
    >
      <div className="w-full absolute left-0 -bottom-72 min-h-96  overflow-clip">
        <img src="/footer-grid.svg" className="w-full h-full opacity-50" />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Have a project in mind? Let&apos;s make it
          <span className="text-purple"> happen.</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Drop me a message. I’d love to hear from you!
        </p>
        <a href="shikshashakya220@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Shiksha
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-2">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.href}>
                <img
                  src={profile.img}
                  alt={profile.img}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
