import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  codeUrl: string;
  image: string;
  siteUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Movie App",
    description: "Explore new movies and tv shows, cast members and watch the trailer",
    codeUrl: "https://github.com/MenasheMtku/next-movie-app",
    image: "/images/next-img-site.png",
    siteUrl: "https://next-tmdb.netlify.app/",
  },
  {
    id: 2,
    title: "MERN Workout App",
    description:
      "Guess the correct color in the board which is corresponds to the RGB phrase",
    codeUrl: "https://github.com/MenasheMtku/rgb-color-game",
    image: "/images/rgb_color_game.png",
    siteUrl: "https://rgb-color-dcc2b8.netlify.app/",
  },
  {
    id: 3,
    title: "Movie App",
    description:
      "Explore new movies and tv shows, cast members and watch the trailer",
    codeUrl: "https://github.com/MenasheMtku/movie-app-react",
    image: "/images/movieAppImg.png",
    siteUrl: "https://trailersphere.netlify.app/",
  },
  {
    id: 4,
    title: "RGB Color Game",
    description:
      "Guess the correct color in the board which is corresponds to the RGB phrase",
    codeUrl: "https://github.com/MenasheMtku/rgb-color-game",
    image: "/images/rgb_color_game.png",
    siteUrl: "https://rgb-color-dcc2b8.netlify.app/",
  },
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
    <div className="relative h-52 overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={500}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        priority
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
    
    <div className="flex h-[calc(100%-13rem)] flex-col gap-3 p-6">
      <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
      <p className="flex-grow text-muted-foreground">{project.description}</p>
      
      <div className="flex gap-4">
        <Button asChild className="flex-1 transition-colors hover:bg-primary/90">
          <Link
            href={project.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            Live <FaExternalLinkAlt size={16} />
          </Link>
        </Button>
        <Button asChild variant="outline" className="flex-1 transition-colors hover:bg-secondary/90">
          <Link
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            Code <FaGithubSquare size={18} />
          </Link>
        </Button>
      </div>
    </div>
  </Card>
);

const ProjectsPage: React.FC = () => {
  return (
    <section className="pb-12">
      <Title>Projects</Title>
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mt-0 grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
