import Head from "next/head";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 | Filipe</title>
      </Head>
      <div className="text-center mt-12 md:mt-24 flex items-center flex-col gap-8 md:gap-4 px-6 md:px-32">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="flex flex-col gap-8 md:gap-4 md:text-xl">
          <span>Oops, pagina não encontrada!</span>
          <span>
            Clique no botão para ser redirecionado á página Principal.
          </span>
        </p>

        <Link
          href="/"
          className={`${roboto.className} bg-gray-500 p-3 rounded-lg text-2xl md:text-xl max-w-sm transition-all  duration-500 hover:bg-opacity-80
            hover:px-4
            `}
        >
          Ir para página Principal
        </Link>
      </div>
    </>
  );
}
