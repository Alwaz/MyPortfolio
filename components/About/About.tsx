import Image from "next/image";
import me from "../../public/me.png";
import { technologies } from "@/constants/Technologies";
import SectionContainer from "../SectionContainer";

export default function About() {
  return (
    <SectionContainer>
      <div className="relative pb-1">
        <div className=" pt-2 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-8 lg:pt-8">
          <div className="mt-5 w-full h-px bg-zinc-800" />

          <div className="flex  flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0">
            <div className="flex  rounded-full h-fit md:border md:border-purple-400 justify-center items-start  w-auto md:justify-start min-w-fit">
              <Image
                src={me}
                alt="Alwaz Qazi"
                className="object-contain w-auto"
                quality={100}
                priority={true}
              />
            </div>
            <div className="flex flex-col space-y-6">
              <article className="flex flex-col space-y-2">
                <h2 className="text-3xl font-bold tracking-tight  self-center md:self-start">
                  Alwaz Qazi
                </h2>
                <h3 className="text-sm font-semibold self-center md:self-start">
                  Front end Engineer
                </h3>
              </article>
              <article className="flex flex-col space-y-2 w-full ">
                <p className=" text-sm leading-7 text-center md:text-start">
                  A curious individual who constantly seeks to understand the
                  “why” behind things. As an engineer, I possess a strong
                  product mindset and love to solve customers’ pain points
                  through code.
                </p>
                <p className="text-sm leading-7 text-center md:text-start">
                  I enjoy collaborating with diverse teams, always looking for
                  opportunities to learn and grow. I’m detail-oriented, and I
                  pay close attention to every aspect of my work, ensuring that
                  it meets the highest standards. Outside of work, I write tech
                  blogs, read some thriller/mystery books, and enjoy good music.
                </p>
              </article>
              <article className="flex flex-col space-y-2 w-full md:w-3/4">
                <h3 className="pt-18 text-3xl font-bold tracking-tight self-center md:self-start">
                  Technologies I use
                </h3>
                <div className="pt-5 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center md:justify-start text-sm">
                  {technologies.map((category) =>
                    category.items.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center flex-col"
                      >
                        {tech.icon}
                        <span className="mt-2">{tech.name}</span>
                      </div>
                    ))
                  )}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
