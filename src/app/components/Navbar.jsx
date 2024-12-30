"use client";
import Link from "next/link";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {

  return (
    <nav className="flex items-center justify-between p-4">
      <div className="text-xl font-bold">
        <Link href="/">Moana</Link>
      </div>

      <NavbarLinks />
    </nav>
  );
};

export default Navbar;
