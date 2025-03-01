"use server";

import { DefaultStyleProps } from "@/config/styles";
import { cn } from "@/lib/utils";

export type ContainerProps = {
  backgroundImage?: string;
  children: React.ReactNode;
} & DefaultStyleProps;

export const Container = async ({
  children,
  backgroundColor,
  backgroundImage,
  fontColour,
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "min-h-full h-full px-4 py-8 font-[family-name:var(--font-body)]"
      )}
      style={{
        backgroundColor,
        color: fontColour,
      }}
    >
      <main className="h-full flex flex-col gap-8 max-w-md mx-auto relative z-10">
        {children}
      </main>
      {backgroundImage && (
        <div
          className="fixed z-0 top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}
    </div>
  );
};
