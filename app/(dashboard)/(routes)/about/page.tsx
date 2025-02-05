import Title from "@/components/Title";

const aboutLI = [
  "Practical engineer graduate (ORT Colleges, 2020) specializing in front-end development. Proficient in HTML, CSS, JavaScript, with extensive experience in React and TailwindCSS for building modern, scalable web applications.",
  "Driven by continuous learning and professional growth in development. Actively staying current with front-end and back-end technologies, focusing on JavaScript frameworks and UX/UI principles.",
  "Committed to delivering innovative and efficient web solutions that leverage the latest technological advancements and best practices in modern development.",
  "Strong advocate for effective communication and collaborative teamwork. Excel in both independent and team environments, fostering positive atmospheres that promote creativity and project success.",
  "Balance professional development with personal interests through running and following Manchester United ⚽, maintaining creativity and fresh perspectives in my work."
];

export default function AboutPage() {
  return (
    <section>
      <div className="w-[96%] mx-auto">
        <Title>About Me</Title>
        <div className="grid place-items-center gap-4 p-4">
          {/* About Text */}
          <div className="p-4 max-w-3xl">
            <ul className="space-y-6 text-[16px] leading-relaxed md:text-lg">
              {aboutLI.map(item => (
                <li 
                  className="border-l-2 border-primary pl-4 transition-all duration-300 hover:border-l-4" 
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
