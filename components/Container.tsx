"use server";

import { DefaultStyleProps } from "@/lib/styles";
import { cn } from "@/lib/utils";

type ContainerProps = {
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
        "min-h-screen px-4 py-8 sm:p-20 font-[family-name:var(--font-body)]"
      )}
      style={{
        backgroundColor,
        color: fontColour,
      }}
    >
      <main className="max-w-md mx-auto space-y-8 relative z-10">
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
