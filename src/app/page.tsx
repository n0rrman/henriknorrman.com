import Image from "next/image";

import logo from "/public/logo.svg";
import Terminal from "@/components/terminal";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-5 justify-start items-center bg-blue-100">
      <div className="relative w-52 h-52">
        <Image src={logo.src} fill alt="" priority loading="eager" />
      </div>
      <Terminal />
    </div>
  );
}
