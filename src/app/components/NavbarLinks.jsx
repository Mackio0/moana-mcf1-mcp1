"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLinks = () => {
    const pathname = usePathname();
    //   console.log(pathname)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Characters", href: "/characters" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
  ];
  return (
    <>
      <ul className="flex w-1/2 justify-between list-none">
        {navLinks.map((link) => (
          <li key={link.href} className="">
            <Link
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-primary border-b-2 border-primary"
                  : "hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavbarLinks;
