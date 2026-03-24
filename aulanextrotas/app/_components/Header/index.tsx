import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex h-20 justify-between px-10 items-center">
      <h1 className="text-3xl font-bold">Next com Tailwind</h1>
      <nav>
        <Link href="/contato"></Link>
        <Link href="/sobre"></Link>
      </nav>
    </header>
  );
};

export default Header;
