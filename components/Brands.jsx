import React from "react";
import Image from "next/image";

const Brands = () => {
  return (
    <ul className="grid grid-cols-3 grid-flow-col gap-12 items-center">
      <li className="w-20">
        <a
          href="https://havascx.com/"
          target="_blank"
          rel="noreferrer"
          className="w-full bg-ycc-pink"
        >
          <Image
            src="/brands/havas-cx.svg"
            className="w-full"
            alt="Havas CX"
            width="150"
            height="150"
          />
        </a>
      </li>
      <li className="w-20">
        <a
          href="https://www.ph.com.tr"
          target="_blank"
          rel="noreferrer"
          className="w-full"
        >
          <Image
            src="/brands/ph-logo.png"
            className="w-full"
            alt="Project House"
            width="130"
            height="80"
          />
        </a>
      </li>
    </ul>
  );
};

export default Brands;
