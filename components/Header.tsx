"use client";

import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Navbar from "./subc/Navbar";
import { CiMenuFries } from "react-icons/ci";

export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [panelOpen, setPanelOpen] = useState(false);

  // Detecta topo
  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY <= 50;
      setIsAtTop(atTop);

      // saiu do topo -> fecha o painel aberto
      if (!atTop) setPanelOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // trava scroll quando painel aberto
  useEffect(() => {
    if (panelOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, [panelOpen]);

  const showWhiteHeader = !isAtTop;

  return (
    <>
      {/* ===== LOGO ÚNICA (NUNCA MUDA DE LUGAR) ===== */}
      <div className="fixed top-0 left-0 z-[80] h-[80px] flex items-center pl-4 lg:pl-11">
        <a href="/" className="text-AmareloP tracking-widest font-semibold text-3xl">
          PRIME<span className="text-xl text-black">HEALTH</span>
        </a>
      </div>

      {/* ===== BOTÃO MENU / X (MESMO LUGAR SEMPRE) ===== */}
      {isAtTop && (
        <button
          type="button"
          aria-label={panelOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setPanelOpen((v) => !v)}
          className="fixed top-[92px] left-10 z-[85] text-4xl text-black"
        >
          {panelOpen ? <FiX className="cursor-pointer" /> : <CiMenuFries className="cursor-pointer" />}
        </button>
      )}

      {/* ===== PAINEL UNIFICADO (diagonal -> retângulo) ===== */}
      <aside
        className={`hidden lg:block fixed top-0 left-0 z-[70] w-[320px] bg-white shadow-2xl transition-all duration-500 ease-out ${
          isAtTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          height: panelOpen ? "100vh" : "420px",
          clipPath: panelOpen 
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" 
            : "polygon(0 0, 100% 0, 100% 30%, 0 100%)"
        }}
      >
        {/* Conteúdo dentro da aba */}
        <div 
          className={`pt-[170px] px-10 space-y-10 text-black transition-opacity duration-300 ${
            panelOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <p className="text-xl font-semibold">Mon - Fri</p>
            <p className="text-black/70">7 AM - 10 PM</p>
          </div>

          <div>
            <p className="text-xl font-semibold">Sat - Sun</p>
            <p className="text-black/70">7 AM - 2 PM</p>
          </div>

          <div className="space-y-2 text-black/70">
            <p>+01 234 567 8899</p>
            <p>contact@PRIMEHEALTH.com</p>
          </div>

          <div className="text-black/70">
            <p>121 Manila St.</p>
            <p>Brookly, CA</p>
          </div>
        </div>
      </aside>

      {/* Overlay (fecha clicando fora) */}
      <button
        type="button"
        aria-label="Fechar menu (overlay)"
        onClick={() => setPanelOpen(false)}
        className={`fixed inset-0 z-[65] bg-black/30 transition-opacity duration-300 ${
          panelOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ===== FUNDO: HEADER BRANCO (fora do topo) ===== */}
      <div
        className={`fixed top-0 left-0 z-[50] w-full h-[80px] bg-white transition-opacity duration-300 ${
          showWhiteHeader ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ===== NAVBAR ===== */}
      {/* Topo: transparente */}
      {isAtTop && (
        <div className="fixed top-0 left-0 z-[55] w-full pointer-events-none">
          <div className=" h-[80px] flex items-center justify-end pointer-events-auto">
            <Navbar variant="transparent" />
          </div>
        </div>
      )}

      {/* Fora do topo: sólido */}
      {!isAtTop && (
        <div className="fixed top-0 left-0 z-[55] w-full">
          <div className=" h-[80px] flex items-center justify-end">
            <Navbar variant="solid" />
          </div>
        </div>
      )}
    </>
  );
}