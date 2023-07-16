import React from "react";
import Link from "next/link";
import Logo from "../assets/img/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="mb-12 border-b py-6">
      <div className="container mx-auto flex items-center justify-between">
        {/*  logo*/}
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>
        {/*  buttons*/}
        <div className="flex items-center gap-6">
          <Link className="transition hover:text-violet-900" href="/login">
            Log in
          </Link>
          <Link
            className="rounded-lg bg-violet-800 px-4 py-3 text-white"
            href="/signup"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
