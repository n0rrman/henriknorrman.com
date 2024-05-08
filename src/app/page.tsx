import Image from "next/image";

import background from "/public/background.svg";
import logo from "/public/logo.svg";
import Terminal from "@/components/terminal";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-5 justify-start items-center bg-blue-100">
      <div className="relative w-52 h-52">
        <Image src={logo.src} fill alt="" priority loading="eager" />
      </div>
      <div className="absolute inset-0 w-full z-0">
        {/* <div className="h-[200vh] w-full relative opacity-75">
          <Image src={background} fill alt="" />
        </div> */}
      </div>
      <div className="z-50">
        <Terminal />
      </div>
    </div>
  );
}
