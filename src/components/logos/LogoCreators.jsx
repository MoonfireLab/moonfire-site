import React from "react";
import Link from "next/link";
import Image from "next/image";

const LogoCreators = () => {
  return (
    <Link href={"/"}>
      <div>
        <Image
          src="/images/Moonfire-Creators-Logo-Tranparent.png"
          width={300}
          height={280}
          alt=""
        ></Image>
      </div>
    </Link>
  );
};

export default LogoCreators;
