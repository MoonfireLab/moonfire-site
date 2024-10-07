'use client'

import Container from "@/components/containers/Container";
import React from "react";
import Logo from "@/components/logos/Logo";
import NavLinks from "@/components/headers/NavLinks";

const Header = () => {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          {/* Logo */}
          <div className="relative z-10">
            <Logo />
          </div>
          {/* NavLinks */}
          <div className="hidden lg:flex lg:gap-10 items-center">
            <NavLinks />
          </div>
          {/* Mobile */}
        </Container>
      </nav>
    </header>
  );
};

export default Header;
