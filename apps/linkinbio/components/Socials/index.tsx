import Image from "next/image";
import { cn } from "@/lib/utils";
import theme from "@/config/theme";
// https://cdn.simpleicons.org/[ICON SLUG]/[COLOR]/[DARK_MODE_COLOR]
const cdnLink = `https://cdn.simpleicons.org`;

const createBrandLink = (brand: string, color: string) => {
  return `${cdnLink}/${brand}/${color}`;
};

export type SocialProps = {
  url: string;
  brand: string;
  color?: string;
  darkColor?: string;
};

export const Social = ({ url, brand }: SocialProps) => {
  return (
    <a
      href={url}
      target="_blank"
    >
      <Image
        src={
          brand
            ? createBrandLink(brand, theme?.socials?.icon?.color || "000000")
            : "/avatar.png"
        }
        unoptimized
        alt={url}
        width={theme?.socials?.icon?.width ?? 24}
        height={theme?.socials?.icon?.height ?? 24}
        className={cn(theme?.socials?.icon.className)}
      />
    </a>
  );
};
