"use client";
import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";
import { HeroScrollDemo } from "@/components/hero-scroll-demo";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";

export default function Hero() {
  return (
    <section className="relative mb-0 pb-0">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1 justify-center align-middle mt-0"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-20 pb-8 md:pt-28 md:pb-12">
          <div className="text-center">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 mt-32"
              data-aos="zoom-y-out"
            >
              AI Software Engineer to {' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400">
                10x efficiency
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Ask technical questions, get step by step solutions, and get automated code changes.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <button  onClick={() => {window.location.href = "https://app.fumedev.com/signup"}} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#418A89,45%,#AFD0CE,55%,#418A89)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full sm:w-auto text-white">
                    Start Free Trial
                  </button>
                </div>
                <div>
                  <a
                    className="btn text-black bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 mt-3 sm:mt-0"
                    href="https://calendly.com/fumedev/30min"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <HeroScrollDemo />
        </div>
      </div>
    </section>
  );
}
