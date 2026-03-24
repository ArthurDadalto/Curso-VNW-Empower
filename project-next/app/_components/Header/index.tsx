import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-blue-950 text-white flex flex-col items-center gap-4 py-4 md:flex-row md:items-center md:h-20 md:px-10 md:justify-between">
      <h2 className="text-2xl font-bold md:text-3xl">NEXT & TAILWIND</h2>
      <nav className="w-full flex justify-center gap-6 md:text-2xl md:max-w-64 md:justify-between">
        <Link className="hover:text-red-500" href="/sobre">
          Sobre
        </Link>
        <Link className="hover:text-red-500" href="/contato">
          Contato
        </Link>
      </nav>
    </header>
  );
}
