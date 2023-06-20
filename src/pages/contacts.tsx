import CopyButton from "@/components/commons/Header/CopyButton";
import Head from "next/head";

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contatos | Filipe</title>
      </Head>
      <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
        <h1 className="text-5xl md:text-7xl font-bold md:text-center">
          Contatos
        </h1>
        <ul className="table mx-auto space-y-6 md:space-y-8 ">
          <li className="md:text-xl">
            <span className="font-bold md:text-3xl">E-mail</span>
            <div className="flex gap-1 md:gap-3 items-center">
              <a
                className="text-sm md:text-xl text-slate-500 underline truncate"
                href="mailto:flp.campos@gmail.com"
                target="_blank"
              >
                flp.campos94@gmail.com
              </a>
              <CopyButton textToCopy="flp.campos94@gmail.com" />
            </div>
          </li>
          <li className="md:text-xl">
            <span className="font-bold md:text-3xl">LinkedIn</span>
            <div className="flex gap-1 md:gap-3 items-center">
              <a
                className="text-sm md:text-xl text-slate-500 underline truncate"
                href="https://www.linkedin.com/in/filipe-campos-524a82256/"
                target="_blank"
              >
                https://www.linkedin.com/in/filipe-campos-524a82256/
              </a>
            </div>
          </li>
          <li className="md:text-xl">
            <span className="font-bold md:text-3xl">GitHub</span>
            <div className="flex gap-1 md:gap-3 items-center">
              <a
                className="text-sm md:text-xl text-slate-500 underline truncate"
                href="https://github.com/wantedxp"
                target="_blank"
              >
                https://github.com/wantedxp
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
