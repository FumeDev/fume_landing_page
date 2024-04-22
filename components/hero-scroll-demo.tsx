"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden my-0 py-0 p-0">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white mt-0 mb-0 py-0">
              Try the best <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-0 leading-none w-full text-white">
                AI Software Developer
              </span>
            </h1>
          </>
        }
      >
        <Image
          onClick={() => {
            window.open("https://app.fumedev.com/playground", "_blank");
          }}
          src={`/images/demo.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center py-0"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
