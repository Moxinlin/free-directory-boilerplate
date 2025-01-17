import { AllSiteConfigs } from "@/config/site";
import Link from "next/link";
import { Icons } from "../shared/icons";
import { Logo } from "../shared/logo";
import { Button } from "../ui/button";
import Image from "next/image";

interface SiteFooterInfoProps extends React.HTMLAttributes<HTMLElement> {
  lang: string;
}

export function SiteFooterInfo({ lang }: SiteFooterInfoProps) {
  // console.log('SiteFooterInfo, lang:', lang);
  const siteConfig = AllSiteConfigs[lang];

  return (
    <section>
      <div className="space-y-4">

        <div className="items-center space-x-2 flex">
          <Logo />
          <span className="dark:text-foreground text-xl font-bold sm:inline-block text-gradient-indigo-purple">
            {siteConfig.name}
          </span>
        </div>

        <p className="text-muted-foreground text-md p4-4 md:pr-12 text-balance">
          {siteConfig.subtitle}
        </p>

        <div className="flex items-center gap-1">
          {/* <Button variant="ghost" size="sm" className="size-8 px-0">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.jike className="size-5" />
            </Link>
          </Button> */}
          <Button variant="ghost" size="sm" className="size-8 px-0">
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.twitterBird className="size-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="sm" className="size-8 px-0">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.github className="size-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="sm" className="size-8 px-0">
            <Link
              href={siteConfig.links.coffee}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.coffee className="size-5" />
            </Link>
          </Button>
        </div>

        <div className="mt-4 inline-block">
          <a href="https://www.uneed.best/tool/indie-hackers"
            target="_blank"
          >
            <Image 
              src="https://www.uneed.best/POTD1.png"
              alt="Uneed POTD1 Badge"
              className="max-w-[250px]"
              width={639}
              height={171}
            />
          </a>
        </div>

        <br/>

        <div className="mt-4 inline-block">
          <a href="https://devhunt.org/tool/indie-hackers"
            target="_blank"
          >
            <Image 
              src="/images/devhunt-1st.png"
              alt="DevHunt 1st Tool of the Week Badge"
              className="max-w-[250px]"
              width={988}
              height={240}
            />
          </a>
        </div>
      </div>

    </section>
  );
}