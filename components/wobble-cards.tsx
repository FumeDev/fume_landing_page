"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Get tasks done in the background.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Fume has a computer of it's own and can work on your software tasks in the background. It can make code changes and test it in an isolated development environment.
          </p>
        </div>
        <Image
          src="/images/ezgif-1-4c8ab70d71.gif"
          width={700}
          height={700}
          style={{ marginBottom: "-3%" }}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[10%] -bottom-1 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gray-100 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Integrated in the tools you already use.
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            You can assign tasks to Fume over Jira and Linear. It will work on in and post the progress under the ticket. If Fume ever has a question for you, it will ask you over Slack.
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
          Asks for help when needed.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          As every good engineer, Fume asks for help when stuck. This can be as simple as asking for an API key or asking for technical clarification. If it's a lost cause, you can always take over Fume's progress and finish the task.
        </p>
      </WobbleCard>
    </div>
  );
}
