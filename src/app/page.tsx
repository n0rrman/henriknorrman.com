import Image from "next/image";

import logo from "/public/logo.svg";
import Terminal from "@/components/terminal";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-start bg-gradient-to-b from-blue-100 to-slate-300 w-full min-h-[70vh]">
      <div className="relative w-48 h-48 select-none pointer-events-none">
        <Image src={logo} fill alt="" priority loading="eager" />
      </div>
      <Terminal />
    </div>
  );
}
