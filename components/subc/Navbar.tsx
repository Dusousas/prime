"use client";

import React, { useEffect, useState, JSX } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";

type MenuItem = {
  name: string;
  section?: string;
  path: string;
};

type NavbarProps = {
  variant?: "transparent" | "solid";
};

export default function Navbar({ variant = "solid" }: NavbarProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const router = useRouter();
  const pathname = usePathname();

  const isTransparent = variant === "transparent";

  // trava scroll do body quando menu mobile abre
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNavigation = (path: string, section?: string): void => {
    setIsOpen(false);

    if (path && path !== pathname) {
      if (section) sessionStorage.setItem("scrollToSection", section);
      router.push(path);
      return;
    }

    if (section) scrollToSection(section);
  };

  // quando entrar na página, se tiver section salva, faz scroll
  useEffect(() => {
    const sectionToScroll = sessionStorage.getItem("scrollToSection");
    if (sectionToScroll) {
      sessionStorage.removeItem("scrollToSection");
      setTimeout(() => scrollToSection(sectionToScroll), 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // scroll spy: detecta seção ativa na Home
  useEffect(() => {
    const sections = ["home", "services", "plans", "portfolio", "faq"];

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(section);
          break;
        }
      }
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  const menuItems: MenuItem[] = [
    { name: "Início", section: "home", path: "/" },
    { name: "Serviços", section: "services", path: "/" },
    { name: "Planos", section: "plans", path: "/" },
    { name: "Portfólio", section: "portfolio", path: "/" },
    { name: "Dúvidas", section: "faq", path: "/" },
    { name: "Afiliados", path: "/afiliados" },
  ];

  // botão usado tanto no desktop quanto no drawer
  const renderButton = (item: MenuItem, mode: "topbar" | "drawer") => {
    const isActive =
      (item.section && activeSection === item.section && pathname === "/") ||
      (!item.section && pathname === item.path);

    // cores do TOPO (transparent/solid)
    const topbarBase = isTransparent ? "text-white" : "text-black";
    const topbarHover = isTransparent ? "hover:text-white/80" : "hover:text-black/70";
    const topbarActive = isTransparent
      ? "text-white font-bold border-b border-white/80"
      : "text-BlueP font-bold";

    // drawer (sempre fundo branco)
    const drawerBase = "text-black";
    const drawerHover = "hover:text-BlueP";
    const drawerActive = "text-BlueP font-bold";

    const classes =
      mode === "topbar"
        ? `${topbarBase} ${topbarHover} ${isActive ? topbarActive : ""}`
        : `${drawerBase} ${drawerHover} ${isActive ? drawerActive : ""}`;

    return (
      <button
        key={item.name}
        onClick={() => handleNavigation(item.path, item.section)}
        className={`uppercase transition-colors cursor-pointer ${classes}`}
        type="button"
      >
        {item.name}
      </button>
    );
  };

  return (
    <>
      {/* Desktop */}
      <nav className="hidden lg:block lg:pr-10">
        <ul className="flex gap-6 items-center  text-md uppercase tracking-widest">
          {menuItems.map((item) => renderButton(item, "topbar"))}
        </ul>
      </nav>

      {/* Mobile */}
      <div className="lg:hidden pr-4 lg:pr-0">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`text-3xl cursor-pointer focus:outline-none relative z-50 transition-colors ${
            isTransparent ? "text-white" : "text-black"
          }`}
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav
          className={`fixed top-0 right-0 h-screen w-full bg-white shadow-md z-40 flex flex-col items-center justify-center transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center gap-8 text-lg">
            {menuItems.map((item) => renderButton(item, "drawer"))}
          </ul>
        </nav>
      </div>
    </>
  );
}
