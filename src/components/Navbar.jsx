"use client";
import Link from "next/link";
import NavbarLinks from "./NavbarLinks";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="text-xl font-bold">
        <Link href="/">
          <Logo className="cursor-pointer w-[81px] h-[29px] lg:w-[152px] lg:h-[55px] object-cover" />
        </Link>
      </div>

      <NavbarLinks />
    </nav>
  );
};

export default Navbar;
