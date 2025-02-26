import Image from "next/image";

// https://cdn.simpleicons.org/[ICON SLUG]/[COLOR]/[DARK_MODE_COLOR]
const cdnLink = `https://cdn.simpleicons.org`;

const createBrandLink = (brand: string, color: string, darkColor: string) => {
  return `${`${cdnLink}/${brand}`}/${color}/${darkColor}`;
};

export type SocialProps = {
  url: string;
  brand: string;
  color?: string;
  darkColor?: string;
  size?: "sm" | "md";
};

export const Social = ({
  url,
  brand,
  color = "black",
  darkColor = "white",
  size = "sm",
}: SocialProps) => {
  return (
    <a
      href={url}
      target="_blank"
    >
      <Image
        src={brand ? createBrandLink(brand, color, darkColor) : "/avatar.png"}
        alt={url}
        width={size === "sm" ? 20 : 24}
        height={size === "sm" ? 20 : 24}
        unoptimized
      />
    </a>
  );
};
