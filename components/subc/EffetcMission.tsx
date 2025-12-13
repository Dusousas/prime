import React from "react";

export default function EffectMission() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Mancha esquerda (mais forte embaixo) */}
      <div
        className="absolute -left-56 bottom-[-220px] h-[520px] w-[520px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(251,206,41,0.55) 0%, rgba(251,206,41,0.18) 35%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Mancha direita (superior) */}
      <div
        className="absolute -right-64 top-[-220px] h-[600px] w-[600px] rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(251,206,41,0.45) 0%, rgba(251,206,41,0.14) 35%, rgba(0,0,0,0) 72%)",
        }}
      />

      {/* Mancha extra sutil no meio (profundidade) */}
      <div
        className="absolute left-[35%] top-[20%] h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(251,206,41,0.35) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
    </div>
  );
}
