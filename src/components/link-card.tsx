import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

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
    <Link
      href={link}
      className={`${featureColour} flex flex-col p-5 shadow-xl gap-3 text-slate-800 rounded-md border-t-[0.35rem] bg-bgLightColour hover:bg-white max-w-[12.5ch] transition-all hover:scale-[1.025] cursor-pointer group`}
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
    </Link>
  );
}
