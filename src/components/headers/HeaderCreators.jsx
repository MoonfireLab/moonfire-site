"use client";

import Container from "@/components/containers/Container";
import React from "react";
import LogoCreators from "@/components/logos/LogoCreators";
import NavLinksCreators from "@/components/headers/NavLinksCreators";

const HeaderCreators = () => {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          {/* Logo */}
          <div className="relative z-10">
            <LogoCreators />
          </div>
          {/* NavLinks */}
          <div className="hidden lg:flex lg:gap-10 items-center">
            <NavLinksCreators />
          </div>
          {/* Mobile */}
        </Container>
      </nav>
    </header>
  );
};

export default HeaderCreators;
