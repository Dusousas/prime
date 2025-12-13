"use client";

import React, { useEffect, useMemo, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

export default function ToTop() {
  const [progress, setProgress] = useState(0); // 0 a 1
  const [visible, setVisible] = useState(false);

  // configura o círculo (SVG)
  const size = 52; // tamanho do botão
  const stroke = 3.5; // espessura da borda
  const radius = useMemo(() => (size - stroke) / 2, [size, stroke]);
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      const totalScrollable = Math.max(docHeight - winHeight, 1);
      const p = Math.min(Math.max(scrollTop / totalScrollable, 0), 1);

      setProgress(p);
      setVisible(scrollTop > 240); // aparece depois de descer um pouco
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Agora vai PREENCHENDO conforme desce
  const dashOffset = circumference * progress;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={[
        "fixed bottom-6 right-6 z-50",
        "grid place-items-center",
        "rounded-full bg-white/95 shadow-lg",
        "backdrop-blur",
        "transition-all duration-300",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none",
      ].join(" ")}
      style={{ width: size, height: size }}
    >
      {/* Círculo de progresso */}
      <svg
        width={size}
        height={size}
        className="absolute inset-0"
        style={{ transform: "rotate(-90deg)" }} // começa do topo
      >
        {/* trilha (fundo) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#FBCE29"
          strokeWidth={stroke}
        />
        {/* progresso (preenche conforme desce) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="rgba(255, 255, 255, 1)" // borda branca como na foto
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{ transition: "stroke-dashoffset 120ms linear" }}
        />
      </svg>

      {/* ícone */}
      <span className="relative z-10 grid place-items-center w-full h-full rounded-full bg-transparent">
        <FiChevronUp className="text-AmareloP cursor-pointer text-2xl" />
      </span>
    </button>
  );
}
