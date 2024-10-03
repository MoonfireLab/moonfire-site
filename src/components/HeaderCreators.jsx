'use client'

import Container from "./Container";
import React from "react";
import Logo from "./Logo";

const HeaderCreators = () => {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          {/* Logo */}
          <div className="relative z-10">
            <Logo />
          </div>
          {/* Mobile */}
        </Container>
      </nav>
    </header>
  );
};

export default HeaderCreators;
