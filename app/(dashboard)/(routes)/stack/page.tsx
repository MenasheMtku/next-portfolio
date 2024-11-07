import Title from "@/components/title";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const skills = [
  { title: "Javascript", src: "./javascript.svg", alt: "javascript" },
  { title: "React", src: "./react.svg", alt: "react" },
  { title: "Next.js", src: "./nextjs.svg", alt: "nextjs" },
  { title: "TypeScript", src: "./typescript.svg", alt: "typescript" },
  { title: "Tailwind", src: "./tailwind.svg", alt: "tailwind css" },
  { title: "git", src: "./git.svg", alt: "git" },
  { title: "HTML", src: "./html.svg", alt: "html5" },
  { title: "CSS", src: "./css.svg", alt: "css" },
];

const StackPage = () => {
  return (
    <section>
      <Title>My Stack</Title>
      <div className="flex flex-col items-center rounded-lg p-2">
        <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
          {skills.map(item => (
            <Card key={item.title} className="bg-slate-200 p-4 text-slate-800">
              <Image
                className="mx-auto mb-3 h-12 w-12 grayscale-[70%] duration-200 hover:grayscale-0"
                src={item.src}
                alt={item.title}
                width={50}
                height={50}
              />
              <p className="text-center text-sm">{item.title}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackPage;
