import AboutMe from "@/components/Home/AboutMe";
import Head from "next/head";
import Projects from "@/components/Home/Projects";

export default function Home() {
  const projects = [
    {
      slug: "em-breve",
      name: "Em breve",
      image: {
        url: "https://i.imgur.com/wg0xzHw.jpg",
        alt: "Pagina inicial do app de calcular calorias",
      },
    },
    {
      slug: "em-breve",
      name: "Em breve",
      image: {
        url: "https://i.imgur.com/wg0xzHw.jpg",
        alt: "Pagina inicial do app de calcular calorias",
      },
    },
    {
      slug: "em-breve",
      name: "Em breve",
      image: {
        url: "https://i.imgur.com/wg0xzHw.jpg",
        alt: "Pagina inicial do app de calcular calorias",
      },
    },
       
  ];

  return (
    <>
      <Head>
        <title>Sobre mim | Filipe</title>
        <meta
          name="description"
          content="Desenvolvedor React apaixonado por estudar e aprender novas techs"
        />
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
        <AboutMe />
        <Projects projects={projects} />
      </div>
    </>
  );
}
