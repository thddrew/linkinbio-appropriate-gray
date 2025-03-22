export type SizeVariants = "sm" | "md" | "lg";

// Base props that are common to all variants
type BaseCardProps = {
  url?: string;
  title: string;
  newTab?: boolean;
  priority?: boolean;
};

// Small card specific props
export type SmallCardProps = BaseCardProps & {
  size: "sm";
  description?: never; // Explicitly prevent description for small cards
} & (
    | { thumbnailImage: string; thumbnailEmoji?: never }
    | { thumbnailImage?: never; thumbnailEmoji: string }
    | { thumbnailImage?: never; thumbnailEmoji?: never }
  );

// Medium card specific props
export type MediumCardProps = BaseCardProps & {
  size: "md";
  description: string; // Required for medium cards
  buttonText?: string;
  buttonPosition?: "inline" | "end";
  onPreviewClick?: () => void;
  price?: number;
  currency?: string;
  polarProductId?: string;
  polarCheckoutLink?: string;
} & (
    | { thumbnailImage: string; thumbnailEmoji?: never }
    | { thumbnailImage?: never; thumbnailEmoji: string }
    | { thumbnailImage?: never; thumbnailEmoji?: never }
  );

export type CardProps = SmallCardProps | MediumCardProps;
