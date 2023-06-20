import { Project } from "@/types/Home";
import Image from "next/image";
import Link from "next/link";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <article className="space-y-16 flex flex-col items-center flex-wrap">
      <h2 className="text-2xl md:text-4xl text-center">Projetos Recentes</h2>
      <ul className="flex flex-wrap gap-16 justify-center">
        {projects.map(({ slug, name, image }, index) => {
          return (
            <Link href={`/projects/${slug}`} key={name + index}>
              <li className="text-md relative">
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={600}
                  height={600}
                  className="object-cover rounded-2xl h-[300px] w-[380px] mb-4"
                />
                <span>{name}</span>
                <div className="text-white bg-gray-500 rounded-xl w-[60px] h-[60px] flex justify-center items-center text-center absolute bottom-[40px] right-[-20px]">
                  <span>{index + 1}</span>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </article>
  );
}
