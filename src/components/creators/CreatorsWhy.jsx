import React from "react";
import LibAndGrow from "./LibAndGrow";
import ConsulAndConn from "./ConsulAndConn";
import SuppAndDevMark from "./SuppAndDevMark";
import WorkAndSuppVis from "./WorkAndSuppVis";

function CreatorsWhy() {
  return (
    <section id="why" className="overflow-hidden py-2 sm:py-2 lg:pb-12 xl:pb-3">
      <LibAndGrow />
      <ConsulAndConn />
      <SuppAndDevMark />
      <WorkAndSuppVis />
    </section>
  );
}

export default CreatorsWhy;
