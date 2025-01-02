import React from "react";

import Image from "next/image";

const Logo = ({ className }) => {
  return (
    <>
<<<<<<< HEAD
      <Image src={"/assets/logo.png"} width={152} height={55} alt="Moana Logo" className={className} />
=======
      <Image src={logo} alt="Moana Logo" className={className} priority={true} />
>>>>>>> dev
    </>
  );
};

export default Logo;
