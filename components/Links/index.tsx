/**
 * A link component directs users to a resource.
 * It can be used to link to a website, a social media profile, or a document.
 */
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CardProps, MediumCardProps, SmallCardProps } from "./types";
import Image from "next/image";
import theme from "@/config/theme";
import { useRef } from "react";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
} from "@/components/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const Thumbnail = ({
  image,
  alt,
  emoji,
  size,
}: {
  size: "sm" | "md";
  image?: string;
  alt: string;
  emoji?: string;
}) => {
  if (image) {
    return (
      <div>
        <Image
          src={image}
          alt={alt}
          width={theme?.links?.thumbnailImage?.[size]?.width ?? 40}
          height={theme?.links?.thumbnailImage?.[size]?.height ?? 40}
          className={cn(
            "aspect-square",
            theme?.links?.thumbnailImage?.className,
            theme?.links?.thumbnailImage?.[size]?.className
          )}
        />
      </div>
    );
  }

  if (emoji) {
    return (
      <span
        className={cn(
          "size-10 text-3xl content-center aspect-square",
          theme?.links?.thumbnailEmoji?.className
        )}
      >
        {emoji}
      </span>
    );
  }

  return null;
};

const SmallLinkCard = ({
  url,
  title,
  thumbnailImage,
  thumbnailEmoji,
  newTab = false,
}: SmallCardProps) => {
  return (
    <a
      href={url}
      target={newTab ? "_blank" : "_self"}
    >
      <Card
        className={cn(
          "p-2 min-h-14 rounded-full h-auto w-full relative text-center flex items-center gap-4 text-inherit",
          theme?.links?.background?.className
        )}
      >
        <Thumbnail
          size="sm"
          image={thumbnailImage}
          emoji={thumbnailEmoji}
          alt={title}
        />
        <div
          className={cn("w-full mr-auto", {
            "pr-10": thumbnailEmoji || thumbnailImage,
          })}
        >
          {title}
        </div>
      </Card>
    </a>
  );
};

const MediumLinkCardPreview = ({
  url,
  title,
  thumbnailImage,
  thumbnailEmoji,
  description,
  newTab = false,
  buttonText = "Purchase",
  size = "md",
  onPreviewClick,
}: MediumCardProps) => {
  return (
    <Card
      role="button"
      className={cn(
        "p-3 w-full relative flex flex-wrap items-start gap-4 text-inherit",
        theme?.links?.background?.className
      )}
      onClick={onPreviewClick}
    >
      <Thumbnail
        image={thumbnailImage}
        emoji={thumbnailEmoji}
        alt={title}
        size={size}
      />
      <div className="flex-1 flex flex-col gap-2">
        <p className={cn(theme?.links?.font?.header?.className)}>{title}</p>
        <p
          className={cn(
            "line-clamp-3 text-ellipsis",
            theme?.links?.font?.body?.className
          )}
        >
          {description}
        </p>
      </div>
      <a
        className="mt-auto w-full"
        href={url}
        target={newTab ? "_blank" : "_self"}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Button
          variant="outline"
          className={cn(
            "w-full whitespace-normal h-auto",
            theme?.font.button.className,
            theme?.links?.button?.className
          )}
        >
          {buttonText}
        </Button>
      </a>
    </Card>
  );
};

const MediumLinkCard = ({
  url,
  title,
  thumbnailImage,
  thumbnailEmoji,
  description,
  newTab = false,
  buttonText = "Purchase",
  size = "md",
}: MediumCardProps) => {
  return (
    <Card
      className={cn(
        "p-3 w-full relative flex flex-col items-start gap-4 text-inherit h-[70dvh] min-h-[350px]",
        theme?.links?.background?.className
      )}
    >
      <Thumbnail
        image={thumbnailImage}
        emoji={thumbnailEmoji}
        alt={title}
        size={size}
      />
      <p className={cn(theme?.links?.font?.header?.className)}>{title}</p>
      <p className={cn(theme?.links?.font?.body?.className)}>{description}</p>
      <a
        className="mt-auto w-full"
        href={url}
        target={newTab ? "_blank" : "_self"}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Button
          variant="outline"
          className={cn(
            "w-full whitespace-normal h-auto",
            theme?.font.button.className,
            theme?.links?.button?.className
          )}
        >
          {buttonText}
        </Button>
      </a>
    </Card>
  );
};

const MediumLinkCardWrapper = (props: MediumCardProps) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const drawerCntr = useRef<HTMLDivElement>(
    document.getElementById("preview-container") as HTMLDivElement
  );
  return (
    <Drawer
      open={isPreviewOpen}
      onOpenChange={setIsPreviewOpen}
    >
      <DrawerTrigger asChild>
        <MediumLinkCardPreview
          onPreviewClick={() => setIsPreviewOpen(true)}
          {...props}
        />
      </DrawerTrigger>
      <DrawerContent
        container={drawerCntr.current}
        className={cn("absolute", theme?.links?.background?.className)}
      >
        <VisuallyHidden>
          <DrawerTitle>{props.title}</DrawerTitle>
        </VisuallyHidden>
        <MediumLinkCard {...props} />
      </DrawerContent>
    </Drawer>
  );
};

// Type guards to narrow the props
function isSmallCardProps(props: CardProps): props is SmallCardProps {
  return props.size === "sm";
}

function isMediumCardProps(props: CardProps): props is MediumCardProps {
  return props.size === "md";
}

export const Link = (props: CardProps) => {
  if (isSmallCardProps(props)) {
    return <SmallLinkCard {...props} />;
  }

  if (isMediumCardProps(props)) {
    return <MediumLinkCardWrapper {...props} />;
  }

  return null;
};
