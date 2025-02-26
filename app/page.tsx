import { Container } from "@/components/Container";
import { Link } from "@/components/Links";
import { Profile, ProfileProps } from "@/components/Profile";
import { Social, SocialProps } from "@/components/Socials";
import { Metadata } from "next";

import metadata from "@/config/metadata.json";
import socials from "@/config/socials.json";
import links from "@/config/links.json";
import bio from "@/config/bio.json";
import container from "@/config/container.json";
import type { CardProps } from "@/components/Links/types";

export const generateMetadata = async (): Promise<Metadata> => {
  return metadata;
};

export default async function Home() {
  return (
    <Container {...container}>
      <Profile {...(bio as ProfileProps)} />
      <section
        id="socials"
        className="flex gap-4 mx-auto justify-center"
      >
        {(socials as SocialProps[]).map((social) => (
          <Social
            key={`${social.url}-${social.brand}`}
            {...social}
          />
        ))}
      </section>
      <section
        id="links"
        className="flex flex-col gap-4"
      >
        {(links as CardProps[]).map((link) => (
          <Link
            key={`${link.url}-${link.title}`}
            {...link}
          />
        ))}
      </section>
      <section className="mt-auto text-center text-xs">
        <a href="https://espressotonic.studio">
          <i>© {new Date().getFullYear()} Espresso Tonic Studio</i>
        </a>
      </section>
    </Container>
  );
}
