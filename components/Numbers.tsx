"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type NumberCard = {
  id: number;
  icon: string;
  value: number;
  label: string;
  duration?: number;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function Numbers() {
  const cards: NumberCard[] = useMemo(
    () => [
      { id: 1, icon: "/treino.png", value: 300, label: "Alunos Prime", duration: 1200 },
      { id: 2, icon: "/treino.png", value: 5, label: "Professores", duration: 900 },
      { id: 3, icon: "/treino.png", value: 12, label: "Modalidades", duration: 900 },
      { id: 4, icon: "/treino.png", value: 8, label: "Anos de experiência", duration: 900 },
    ],
    []
  );

  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [counts, setCounts] = useState<number[]>(() => cards.map(() => 0));

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setHasStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let rafId = 0;
    const starts = performance.now();
    const durations = cards.map((c) => c.duration ?? 1000);

    const tick = (now: number) => {
      const next = cards.map((c, i) => {
        const d = durations[i];
        const t = Math.min(1, (now - starts) / d);
        const eased = easeOutCubic(t);
        return Math.round(c.value * eased);
      });

      setCounts(next);

      const finished = next.every((n, i) => n >= cards[i].value);
      if (!finished) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [hasStarted, cards]);

  return (
    <>
      <section ref={sectionRef} className="bgN py-20 relative">
        <div className="absolute inset-0 bg-black/70" />

        <div className="maxW relative z-10">
          <div className="flex justify-center items-stretch flex-wrap">
            {cards.map((card, idx) => (
              <div
                key={card.id}
                className="
                  w-1/2 lg:w-1/4
                  px-3 lg:px-4
                "
              >
                {/* CARD PADRONIZADO */}
                <div
                  className="
                    h-full
                    min-h-[260px] lg:min-h-[300px]
                    flex flex-col items-center text-center
                    justify-between
                    py-8
                  "
                >
                  <div className="border-dotted border-[3px] border-white p-6">
                    <img className="w-[100px]" src={card.icon} alt="" />
                  </div>

                  <h2 className="text-white text-5xl font-bold font-Over mt-6 tabular-nums">
                    {counts[idx]}
                  </h2>

                  <p className="text-white font-Over text-2xl mt-3">
                    {card.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
