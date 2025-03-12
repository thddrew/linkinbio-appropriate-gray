import {
  Playfair_Display as HeaderFont,
  Geist as BodyFont,
  Geist_Mono as ButtonFont,
} from "next/font/google";

export const HeaderFontFamily = HeaderFont({
  variable: "--font-header",
  subsets: ["latin"],
});

export const BodyFontFamily = BodyFont({
  variable: "--font-body",
  subsets: ["latin"],
});

export const ButtonFontFamily = ButtonFont({
  variable: "--font-button",
  subsets: ["latin"],
});
