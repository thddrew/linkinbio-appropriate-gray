import {DM_Serif_Display, DM_Sans } from "next/font/google";

export const HeaderFontFamily = DM_Serif_Display({
  variable: "--font-header",
  subsets: ["latin"],
});

export const BodyFontFamily = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const ButtonFontFamily = DM_Sans({
  variable: "--font-button",
  subsets: ["latin"],
});
