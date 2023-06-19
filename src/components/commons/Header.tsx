import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export default function Header() {
  return (
    <header
      className={`${roboto.className} flex justify-between sticky z-20 text-sm py-3 px-5 items-center`}
    >
      <Link href="/">
        <Image src="/logo.png" alt="logo do portfólio" width={55} height={55} />
      </Link>
      <nav className="hidden md:flex items-center gap-10 text-md">
        <Link href="/">Sobre mim</Link>
        {/*<Link href="/portfolio">Portfólio</Link>*/}
        <Link href="/contacts">Entre em contato</Link>
      </nav>
    </header>
  );
}
