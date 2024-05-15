import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";
import { RxDiscordLogo } from "react-icons/rx";
import { SiFrontendmentor } from "react-icons/si";
import { SiAiohttp } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { main } from "@/app/fonts";

interface LinkCardProps {
  title: string;
  description: string;
  username: string;
  link: string;
  icon: React.ReactElement;
  featureColour: string;
  arrowColour: string;
}

export default function LinkCard({
  title,
  description,
  username,
  link,
  icon,
  featureColour,
  arrowColour,
}: LinkCardProps) {
  return (
    <div
      className={`${featureColour} flex flex-col p-5 shadow-xl gap-3 text-slate-800 rounded-md border-t-[0.35rem] bg-bgLightColour max-w-[12.5ch] transition-all hover:scale-105 cursor-pointer group`}
    >
      <span className="text-[5rem]">{icon}</span>
      <div className="flex flex-row gap-2 items-center text-2xl font-semibold tracking-wide">
        <h2 className={`${featureColour} border-b-2`}>{title}</h2>
        <span
          className={`${arrowColour} text-lg opacity-70 group-hover:animate-rightBounce`}
        >
          <FaArrowRight />
        </span>
      </div>
      <p className="text-lg opacity-75 leading-snug min-h-[7ch]">
        {description}
      </p>
      <div className="border-b border-bgDarkColour -mx-5"></div>
      <p className="text-sm opacity-75">{username}</p>
    </div>
  );
}
