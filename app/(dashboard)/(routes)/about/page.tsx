import Title from "@/components/title";

const aboutLI = [
  "I graduate practical engineer studies at ORT Colleges in 2020.",
  "I am a frontend web developer with knowledge in HTML, CSS JavaScript",
  "In addition, I have experience in React and TailwindCSS.Therefore I can build scalable web applications efficiently and enabling rapid styling.",
  // "I love creating beautiful, responsive websites that are both functional and user-friendly.",

  "I'm constantly learning and enjoy keeping up-to-date with the latest in frontend and backend development, whether it’s exploring new JavaScript frameworks or deepening my knowledge of UX/UI principles.",
  "In addition to my technical skills, I value teamwork and communication. Whether working in a team or independently, I strive to create a positive and collaborative environment where ideas can thrive and projects reach their full potential",
  "When I'm not coding, you can find me probably running or watching Manchester United ⚽ game",
];

export default function AboutPage() {
  return (
    <section>
      <div className="w-[96%] mx-auto">
        <Title>About Me</Title>
        <div className="grid place-items-center gap-4 p-4">
          {/* About Text */}
          <div className=" p-4">
            <ul className="space-y-4 text-[16px] leading-relaxed md:text-lg">
              {aboutLI.map(item => (
                <li className="border-l-2 border-primary pl-4" key={item}>
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
