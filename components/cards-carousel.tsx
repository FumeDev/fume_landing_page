"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./ui/apple-card-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-2">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans text-white">
        Back office work for software.
      </h2>
      <h5 className="max-w-7xl pl-4 mx-auto text-l md:text-2xl font-bold text-neutral-400 dark:text-neutral-200 font-sans text-white">
        Fume is not a silver bullet. But it can take away a lot of busy work.
      </h5>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Simple Coding",
    title: "Squash bugs",
    src: "/images/bug.webp",
    content: <DummyContent />,
  },
  {
    category: "Simple Coding",
    title: "Draft New Features",
    src: "/images/build.webp",
    content: <DummyContent />,
  },
  {
    category: "Tech Debt",
    title: "Refactor 'That' Code",
    src: "/images/refactor.webp",
    content: <DummyContent />,
  },

  {
    category: "Productivity",
    title: "Pre-Explore Tickets",
    src: "/images/ticket.webp",
    content: <DummyContent />,
  },
  {
    category: "QA",
    title: "Create Automated E2E and Unit Tests",
    src: "/images/tests.webp",
    content: <DummyContent />,
  },
  {
    category: "Review",
    title: "Review Code. Not Just Read It. Run It.",
    src: "/images/review.webp",
    content: <DummyContent />,
  },
];
