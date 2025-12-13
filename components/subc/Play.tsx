"use client";

import React, { useEffect, useState } from "react";

export default function Play() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Fecha no ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVideoOpen(false);
    };

    if (isVideoOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isVideoOpen]);

  return (
    <>
      {/* BOTÃO PLAY PULSANDO */}
      <button
        type="button"
        aria-label="Abrir vídeo"
        onClick={() => setIsVideoOpen(true)}
        className="relative inline-flex items-center justify-center mt-10 cursor-pointer"
      >
        {/* pulso */}
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-white/25 animate-ping" />
        {/* glow suave */}
        <span className="absolute h-16 w-16 rounded-full bg-white/10 blur-md" />

        {/* botão */}
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/85 shadow-md backdrop-blur transition hover:bg-white active:scale-[0.98]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-AzulP"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        </span>
      </button>

      {/* MODAL / ABA */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="w-full max-w-4xl rounded-2xl overflow-hidden bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <p className="uppercase font-Over text-AmareloP">
                Sobre nós • Prime Health
              </p>

              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="rounded-lg px-3 py-2 cursor-pointer font-Over text-AmareloP hover:bg-gray-50 transitio uppercase"
              >
                Fechar
              </button>
            </div>

            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Vídeo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
