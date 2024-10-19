import React from "react";
import Link from "next/link";
import Image from "next/image";

const LogoMoonfireLab = () => {
  return (
    <Link href={"/"}>
      <div>
        <Image
          src="/images/Moonfire-Lab-Logo-Tranparent-WP.png"
          width={300}
          height={280}
          alt=""
        ></Image>
      </div>
    </Link>
  );
};

export default LogoMoonfireLab;
