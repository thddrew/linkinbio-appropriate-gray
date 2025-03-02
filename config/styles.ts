import {
  // Fonts: these will be replaced inline
  Playfair_Display as HeaderFont,
  Geist as BodyFont,
} from "next/font/google";

export const HeaderFontFamily = HeaderFont({
  variable: "--font-header",
  subsets: ["latin"],
});

export const BodyFontFamily = BodyFont({
  variable: "--font-body",
  subsets: ["latin"],
});
