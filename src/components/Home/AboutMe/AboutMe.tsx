import Image from "next/image";
import Link from "next/link";
import perfilImage from "../../../../public/perfil2.jpg";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function AboutMe() {
  return (
    <div>
      <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg xl:text-left xl:flex-nowrap text-center xl:justify-between">
        <div className="text-black flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
          <h1 className="text-3xl sm:text-7xl xl:leading-[5rem]">
            Olá, sou&nbsp;
            <strong className="font-bold">Filipe</strong>
          </h1>

          <div className="mb-12">
            <h2 className={`${roboto.className} mb-12`}>
              Desenvolvedor Front-end{" "}
              <strong className="font-bold text-2xl">React</strong>,{" "}
              <p>
                tenho 29 anos e possuo 6 meses de experiência como Freelancer
              </p>
            </h2>
              <Link
                href="/contacts"
                className="bg-gray-500 p-3 rounded-lg w-fit text-2xl transition-all duration-500 hover:bg-opacity-80 hover:px-4 mx-16"
              >
                Fale comigo!
              </Link>
          </div>
          <h1 className="text-xl"> Tecnologias que uso.</h1>
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
        <div>
          <Image
            src={perfilImage}
            alt="Foto perfil de Filipe"
            height={0}
            width={350}
            unoptimized
            className=" rounded-full border bg-gradient-to-r from-blue-800 via-blue-500 to to-black p-1"
          />
        </div>
      </main>
    </div>
  );
}
