"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gray-100 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            A step-by-step plan under every ticket
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            It feels like someone warmed up a leather seat before you sit in a cold winter day. Fume breaks the barrier of starting a task and gives you a starting point. Works with Jira and Linear.
          </p>
        </div>
        <Image
          src="/images/jira.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[25%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-teal-700">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Automated Full PRs for all your software busy work
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Statistaclly speaking, 18.3% of your issues can be handled by Fume with no assistance (It's our unofficial SWE-Bench score)
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Discuss solutions. Ask questions. Write code.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            It's the best colleague you never had. It can discuss solutions with you or answer your questuons. It generates code with the context fo the codebase and the issue you are working on.
          </p>
        </div>
        <Image
          src="/images/fume-screen.png"
          width={700}
          height={700}
          style={{ marginBottom: "-7%" }}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[15%] grayscale filter -bottom-1 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
