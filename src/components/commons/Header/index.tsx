import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { Menu } from "./Menu";
import { useCallback, useState } from "react";
import { MenuIcon } from "@/icons/MenuIcon";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header
      className={`${roboto.className} flex justify-between sticky z-20 text-sm py-3 px-5 items-center`}
    >
      <Link href="/">
        <Image src="/logo.png" alt="logo do portfólio" width={55} height={55} />
      </Link>
      <button className="p-1 md:hidden" onClick={openMenu}>
        <MenuIcon className="fill-black h-[30px] w-[30px]"/>
      </button>
      <nav className="hidden md:flex items-center gap-10">
        <Link href="/" className="text-3xl">Sobre mim</Link>
        {/*<Link href="/portfolio">Portfólio</Link>*/}
        <Link href="/contacts" className="text-3xl">Entre em contato</Link>
      </nav>
      <Menu isVisible={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}
