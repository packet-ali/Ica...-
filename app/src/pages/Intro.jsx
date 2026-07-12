import { useEffect, useState } from "react";
import introTexts from "../data/intro";

export default function Intro() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (currentIndex >= introTexts.length - 1) return;

    const fadeTimer = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setVisible(true);
      }, 600);
    }, 2400);

    return () => clearTimeout(fadeTimer);
  }, [currentIndex]);

  return (
    <main className="intro-page">
      <h1 className={visible ? "fade-in" : "fade-out"}>
        {introTexts[currentIndex]}
      </h1>
    </main>
  );
}