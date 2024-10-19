"use client";

import Container from "@/components/containers/Container";
import React from "react";
import LogoMoonfireLab from "@/components/logos/LogoMoonfireLab";

const HeaderLab = () => {
  return (
    <header className="bg-gradient-to-r from-moonfireGray to-moonfireGray-light">
      <nav>
        <Container className="hidden lg:flex lg:gap-10 relative z-10 justify-between py-8">
          {/* Logo */}
          <div className="relative z-10">
            <LogoMoonfireLab />
          </div>
          {/* NavLinks */}

          {/* Mobile */}
        </Container>
      </nav>
    </header>
  );
};

export default HeaderLab;
