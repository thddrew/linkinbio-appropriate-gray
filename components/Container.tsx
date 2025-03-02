"use server";

import { cn } from "@/lib/utils";
import theme from "@/config/theme";

export type ContainerProps = {
  backgroundColor?: string | null;
  backgroundImage?: string | null;
  children?: React.ReactNode;
};

export const Container = async ({
  children,
  backgroundColor,
  backgroundImage,
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "relative min-h-full h-full px-4 pb-8 pt-10",
        theme?.font.body.className,
        theme?.container?.className
      )}
      style={{
        backgroundColor: backgroundColor ?? undefined,
      }}
    >
      <main className="max-w-md h-full mx-auto flex flex-col gap-8 relative z-10">
        {children}
      </main>
      {backgroundImage && (
        <div
          className="absolute z-0 top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}
    </div>
  );
};
