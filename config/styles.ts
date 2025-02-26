import {
  // Fonts: these will be replaced inline
  Playfair_Display as HeaderFont,
  Geist as BodyFont,
} from "next/font/google";
import { tv } from "tailwind-variants";

export const HeaderFontFamily = HeaderFont({
  variable: "--font-header",
  subsets: ["latin"],
});

export const BodyFontFamily = BodyFont({
  variable: "--font-body",
  subsets: ["latin"],
});

export type Shapes = "circle" | "rounded" | "sharp";
export type Themes = "solid" | "outline" | "retro" | "glass";
export type Shadows = "none" | "soft" | "hard" | "none";

export type DefaultStyleProps = {
  fontColour?: string;
  backgroundColor?: string;
  shape?: Shapes;
  theme?: Themes;
  themeColor?: string;
};

export const getShapeStyles = (shape?: Shapes) => {
  if (!shape) return "";

  return tv({
    variants: {
      shape: {
        circle: "rounded-full",
        rounded: "rounded-md",
        sharp: "rounded-none",
      } satisfies Record<Shapes, string>,
    },
  })({ shape });
};

export const getShadowStyles = (color?: string) => {
  return {
    filter: `drop-shadow(6px_6px_${color})`,
  };
};

export const getThemeClasses = () => {
  return "shadow-none border-none";
};

// We need this as inline styles because tw can't generate the dynamic rgb values at runtime
// TODO: investigate updating tailwind.config to preload the dynamic values
export const getDynamicThemeStyles = () => {
  return {};
};
