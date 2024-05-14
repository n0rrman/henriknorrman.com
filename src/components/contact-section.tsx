import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";
import { RxDiscordLogo } from "react-icons/rx";
import { SiFrontendmentor } from "react-icons/si";
import { SiAiohttp } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { main } from "@/app/fonts";

export default function ContactSection() {
  return (
    <div className={`${main.className} flex flex-col p-16 gap-8 text-4xl`}>
      <h1 className={`${main.className}`}>Contact me</h1>
      <div className="grid grid-cols-3 text-[5rem] gap-10">
        <div className="shadow-xl rounded-md p-6 border-t-[0.3rem] border-discord">
          <RxDiscordLogo className="text-discord" />
          <h1 className="text-2xl">GitHub</h1>
          <p className="text-xl">have a look at me github</p>
        </div>
        <div className="shadow-xl rounded-md p-6 border-t-[0.3rem] border-linkedin">
          <FaLinkedinIn className="text-linkedin" />
          <h1 className="text-2xl">LinkedIn</h1>
          <p className="text-xl">Contact me on LinkedIn</p>
        </div>
        <div className="shadow-xl rounded-md p-6 border-t-[0.3rem] border-discord">
          <RxDiscordLogo className="text-discord" />
          <h1 className="text-2xl">Discord</h1>
          <p className="text-xl">contact me on discord</p>
        </div>
      </div>
    </div>
  );
}
