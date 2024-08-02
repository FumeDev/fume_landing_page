"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    // Create the script element
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/hockeystack@latest/hockeystack.min.js";
    script.async = true;
    script.dataset.apikey = "4177b25dd8a4d4ebe8560537b1cb26";
    script.dataset.cookieless = "1";
    script.dataset.autoIdentify = "1";

    // Append the script to the head
    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}
