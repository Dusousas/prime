"use client";

import { useEffect, useState, CSSProperties } from "react";

type Item = {
  text: string;
};

export default function EffectAbout() {
  const items: Item[] = [
    { text: "Prime Health" },
    { text: "Prime Health" },
    { text: "Prime Health" },
    { text: "Prime Health" },
    { text: "Prime Health" },
    { text: "Prime Health" },


  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 800);

    return () => clearInterval(interval);
  }, [items.length]);

  const getTextStyle = (index: number): CSSProperties => ({
    color: activeIndex === index ? "#FBCE29" : "transparent",
    WebkitTextStroke: "0.3px #e6e6e6",
    transition: "all 0.3s ease",
  });

  return (
    <section className="bg-white">
      <div className="space-y-3">
        {items.map((item, index) => (
          <h2
            key={`${item.text}-${index}`}
            className="uppercase font-bold  tracking-widest text-5xl lg:text-6xl"
            style={getTextStyle(index)}
          >
            {item.text}
          </h2>
        ))}
      </div>
    </section>
  );
}
