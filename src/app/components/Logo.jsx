import React from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";

const Logo = ({ className }) => {
  return (
    <>
      <Image src={logo} alt="Moana Logo" className={className} priority={true} />
    </>
  );
};

export default Logo;
