import {
  Montserrat,
  Source_Code_Pro,
  Delicious_Handrawn,
} from "next/font/google";
import localFont from "next/font/local";

export const courier = localFont({ src: "courier.woff2" });

export const code = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400"],
});

export const hand = Delicious_Handrawn({
  subsets: ["latin"],
  weight: ["400"],
});

export const main = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
});
