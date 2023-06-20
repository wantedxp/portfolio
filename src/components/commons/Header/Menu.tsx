import { MenuCloseIcon } from "@/icons/MenuCloseIcon";
import Image from "next/image";
import Link from "next/link";

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
}

export function Menu({ isVisible, onClose }: MenuProps) {
  return (
    <div
      className={`${
        isVisible ? "flex" : "hidden"
      } fixed inset-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm md:hidden`}
      onClick={onClose}
    >
      <div
        className="min-w-full bg-[#e8e8e8] h-96 shadow-md py-3 px-9"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-5">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo do portfolio"
              width={55}
              height={55}
            />
          </Link>
          <button onClick={onClose}>
            <MenuCloseIcon className="fill-black h-[30px] w-[30px]" />
          </button>
        </div>
        <nav className="flex flex-col gap-5 text-xl p-5 items-center">
          <Link href="/" onClick={onClose}>
            Sobre mim
          </Link>
          {/*<Link onClick={onClose}>Portfolio</Link>*/}
          <Link href="/contacts" onClick={onClose}>
            Entre em contato
          </Link>
        </nav>
      </div>
    </div>
  );
}
