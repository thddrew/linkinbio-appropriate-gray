"use server";

/**
 * Displays the profile header with the user's name, email, and profile picture
 */

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import appTheme from "@/config/theme";
import { ThemeConfig } from "../Links/types";

const theme = appTheme as ThemeConfig;

type ProfilePictureProps = {
  src: string;
  fallback?: string;
};

const ProfilePicture = ({ src, fallback }: ProfilePictureProps) => {
  return (
    <Avatar className={cn("size-24", theme?.profile?.avatar.className)}>
      <AvatarImage
        src={src}
        fetchPriority="high"
      />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

export type ProfileProps = {
  name: string;
  description: string;
} & ProfilePictureProps;

export const Profile = async ({
  src,
  fallback = "",
  name,
  description,
}: ProfileProps) => {
  return (
    <section className="flex flex-col items-center text-center gap-2 max-w-[280px] mx-auto">
      <ProfilePicture
        src={src}
        fallback={fallback}
      />
      <p
        className={cn(
          theme?.font.header.className,
          theme.profile.header.className
        )}
      >
        {name}
      </p>
      <p
        className={cn(
          theme?.font.body.className,
          theme.profile.description.className
        )}
      >
        {description}
      </p>
    </section>
  );
};
