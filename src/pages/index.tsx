import AboutMe from "@/components/Home/AboutMe/AboutMe";
import Head from "next/head";

export default function Home() {
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
      </div>
    </>
  );
}
