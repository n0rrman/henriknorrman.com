import Image from "next/image";

import logo from "/public/logo.svg";
import Terminal from "@/components/terminal";
import ContactSection from "@/components/contact-section";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="relative w-40 h-40 sm:w-52 sm:h-52 select-none pointer-events-none z-50">
        <Image src={logo} fill alt="" priority loading="eager" />
      </div>
      <Terminal />
      <ContactSection />
    </div>
  );
}
