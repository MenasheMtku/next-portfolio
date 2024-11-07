import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full">
      <header className="flex w-full h-full items-center justify-center px-4 pt-[4.5rem] md:items-center md:pt-0 ">
        <div className="grid w-full grid-flow-row grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-8">
          {/* Text Section */}
          <div className="order-1 grid gap-4 pl-4 text-center md:order-[-1] md:text-left">
            <h2 className="text-[1.75rem] font-semibold sm:text-[2rem] lg:text-[2.25rem]">
              Hi, I am Menashe👋🏽
            </h2>
            <h1 className="text-[2rem] font-bold leading-tight sm:text-[2.5rem] lg:text-[3.5rem]">
              Frontend Web Developer
            </h1>
            <p className="text-[1.1rem] sm:text-[1.3rem] lg:text-[1.4rem]">
              I specialize in web development for organizations and businesses.
            </p>
            <>
              <Link href="/projects" type="button">
                <Button className="mx-auto flex w-max items-center justify-center rounded-md bg-primary px-[1rem] py-[0.7rem] font-semibold tracking-widest text-accent duration-500 ease-in md:mx-0">
                  Go To Projects
                </Button>
              </Link>
            </>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <picture>
              <Image
                className="h-[180px] w-[180px] rounded-full object-cover shadow-lg md:h-[15rem] md:w-[15rem]"
                src="/arbel.jpeg"
                width={180}
                height={180}
                alt="profile_image"
                priority
              />
            </picture>
          </div>
        </div>
      </header>
    </section>
  );
}
