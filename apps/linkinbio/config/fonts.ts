import {
  dm_serif_display_6597e0c-module__LLswHG__variable as HeaderFont,
  dm_sans_31a10f29-module__YbHr9q__variable as BodyFont,
  dm_sans_31a10f29-module__YbHr9q__variable as ButtonFont,
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
