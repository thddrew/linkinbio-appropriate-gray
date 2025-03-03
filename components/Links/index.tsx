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

const Thumbnail = ({
  image,
  alt,
  emoji,
}: {
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
          width={theme?.links?.thumbnailImage?.width ?? 40}
          height={theme?.links?.thumbnailImage?.height ?? 40}
          className={cn(
            "aspect-square",
            theme?.links?.thumbnailImage?.className
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

const MediumLinkCard = ({
  url,
  title,
  thumbnailImage,
  thumbnailEmoji,
  description,
  newTab = false,
  buttonText = "Purchase",
}: MediumCardProps) => {
  return (
    <Card
      className={cn(
        "p-3 w-full relative flex flex-wrap items-stretch gap-4 text-inherit",
        theme?.links?.background?.className
      )}
    >
      <Thumbnail
        image={thumbnailImage}
        emoji={thumbnailEmoji}
        alt={title}
      />
      <div className="flex flex-col flex-1 w-full mr-auto gap-2">
        <div>
          <p className={cn(theme?.links?.font?.header?.className)}>{title}</p>
          <p className={cn(theme?.links?.font?.body?.className)}>
            {description}
          </p>
        </div>
        <a
          className="mt-auto hidden xs:block"
          href={url}
          target={newTab ? "_blank" : "_self"}
        >
          <Button
            variant="outline"
            className={cn(
              "w-full whitespace-normal h-auto",
              theme?.font.button.className,
              theme?.links.button.className
            )}
          >
            {buttonText}
          </Button>
        </a>
      </div>
      <a
        className="w-full mt-auto block xs:hidden"
        href={url}
        target={newTab ? "_blank" : "_self"}
      >
        <Button
          variant="outline"
          className={cn(
            "w-full whitespace-normal h-auto",
            theme?.font.button.className,
            theme?.links.button.className
          )}
        >
          {buttonText}
        </Button>
      </a>
    </Card>
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
    return <MediumLinkCard {...props} />;
  }

  return null;
};
