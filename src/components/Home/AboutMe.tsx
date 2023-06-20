import Image from "next/image";
import Link from "next/link";
import perfilImage from "../../../public/perfil1.png";
import { Roboto } from "next/font/google";
import styles from "./styles.module.css";
import { useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function AboutMe() {
  const [startDate] = useState(new Date(2022, 1, 10));

  function calculateExperience() {
    const currentDate = new Date();
    const diffInMoths =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      currentDate.getMonth() -
      startDate.getMonth();

    const years = Math.floor(diffInMoths / 12);
    const months = diffInMoths % 12;

    if (years === 0) {
      return `${months} meses`;
    } else {
      return `${years} anos e ${months} meses`;
    }
  }

  return (
    <div>
      <main
        className={`flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 text-lg xl:text-left xl:flex-nowrap text-center xl:justify-between`}
      >
        <div className="text-black flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
          <h1 className="text-3xl sm:text-7xl xl:leading-[5rem]">
            Olá, sou&nbsp;
            <strong className="font-bold">Filipe</strong>
          </h1>

          <div className="mb-12">
            <h2 className={`${roboto.className} mb-12`}>
              <p className="xl:text-xl">
                Desenvolvedor Front-end{" "}
                <strong className="font-bold text-2xl">React</strong>,
              </p>{" "}
              <p className="xl:text-xl">
                tenho 29 anos e possuo {calculateExperience()} meses de
                experiência como Freelancer.
              </p>
            </h2>
            <Link
              href="/contacts"
              className="bg-gray-500 p-3 rounded-lg w-fit text-2xl transition-all duration-500 hover:bg-opacity-80 hover:px-4 mx-16"
            >
              Fale comigo!
            </Link>
          </div>
          <h1 className="text-2xl md:text-4xl"> Principais Tecnologias.</h1>
          <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
            <li
              style={{ backgroundColor: "#6BDDFA", color: "#000000" }}
              className="p-2 rounded-lg w-fit text-center"
            >
              react
            </li>
            <li
              style={{ backgroundColor: "#2F74C0", color: "#FFFFFF" }}
              className="p-2 rounded-lg w-fit text-center"
            >
              typescript
            </li>
            <li
              style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
              className="p-2 rounded-lg w-fit text-center"
            >
              next.js
            </li>
            <li
              style={{ backgroundColor: "#41ACB1", color: "#000000" }}
              className="p-2 rounded-lg w-fit text-center"
            >
              tailwind css
            </li>
          </ul>
        </div>
        <div className={styles.wrapper}>
          <Image
            src={perfilImage}
            alt="Foto perfil de Filipe"
            height={300}
            width={500}
            unoptimized
            className="p-8"
          />
        </div>
      </main>
    </div>
  );
}
