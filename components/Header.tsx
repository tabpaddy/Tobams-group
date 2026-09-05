"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoChevronDown, IoClose } from "react-icons/io5";

const links = [
  { label: "About", hasMenu: true },
  { label: "What We Do", hasMenu: true },
  { label: "Jobs", hasMenu: true },
  { label: "Projects", hasMenu: false },
  { label: "TG Academy", hasMenu: false },
  { label: "Strategic Partnership", hasMenu: false },
  { label: "Pricing", hasMenu: false },
  { label: "Book a Consultation", hasMenu: false },
];
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-[75px] max-w-[1312px] items-center justify-between px-6 md:h-[103px] md:px-10 xl:px-0">
        <Link href="#" aria-label="Tobams Group home">
          <Image
            src="/images/Seecondary Logo copy 2.png"
            alt="Tobams Group"
            width={166}
            height={64}
            className="h-auto w-[112px] md:w-[150px]"
          />
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          <button className="flex h-12 items-center gap-3 rounded-[3px] bg-[#5c104b] px-4 text-white">
            <Image
              src="/icons/Vector user.png"
              alt=""
              width={14}
              height={20}
              className="h-5 w-4 brightness-0 invert"
            />
            Account <IoChevronDown aria-hidden="true" className="size-4" />
          </button>
          <Link
            href="#contact"
            className="flex h-12 items-center rounded-[3px] bg-[#f7465b] px-6 text-white">
            Take Assessment
          </Link>
        </div>
        <button
          ref={menuButtonRef}
          type="button"
          aria-label="Open navigation menu"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
          className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#151515] text-white lg:hidden">
          <HiBars3 aria-hidden="true" className="size-5" />
        </button>
      </div>
      <nav
        aria-label="Primary navigation"
        className="hidden h-[70px] border-t border-[#dfd3db] lg:flex lg:items-center lg:justify-center">
        <ul className="flex items-center gap-8 text-[17px] xl:gap-10">
          {links.map(({ label, hasMenu }, index) => (
            <li key={label}>
              <Link
                href="#"
                className={
                  index === 0
                    ? "border-b border-[#641052] pb-3 text-[#641052]"
                    : "hover:text-[#641052]"
                }>
                <span className="inline-flex items-center gap-1.5">
                  {label}
                  {hasMenu && <IoChevronDown aria-hidden="true" className="size-3.5" />}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-50 lg:hidden ${isMenuOpen ? "visible" : "invisible delay-300"}`}>
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/55 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`absolute right-0 top-0 flex h-dvh w-[min(86vw,360px)] flex-col bg-white shadow-[-8px_0_30px_rgba(0,0,0,0.16)] transition-transform duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex h-[75px] shrink-0 items-center justify-between border-b border-[#eadfe7] px-6">
            <Link href="#" aria-label="Tobams Group home" onClick={closeMenu}>
              <Image
                src="/images/Seecondary Logo copy 2.png"
                alt="Tobams Group"
                width={166}
                height={64}
                className="h-auto w-[112px]"
              />
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#151515] text-white">
              <IoClose aria-hidden="true" className="size-6" />
            </button>
          </div>

          <nav aria-label="Mobile primary navigation" className="overflow-y-auto px-6 py-5">
            <ul className="divide-y divide-[#eee5eb]">
              {links.map(({ label, hasMenu }) => (
                <li key={label}>
                  <Link
                    href="#"
                    onClick={closeMenu}
                    className="flex min-h-12 items-center justify-between py-3 text-[16px] text-[#24121f] hover:text-[#641052]">
                    {label}
                    {hasMenu && <IoChevronDown aria-hidden="true" className="size-4" />}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-7 grid gap-3">
              <button
                type="button"
                className="flex h-12 items-center justify-center gap-3 rounded-[3px] bg-[#5c104b] px-4 text-white">
                <Image src="/icons/Vector user.png" alt="" width={14} height={20} className="h-5 w-4 brightness-0 invert" />
                Account <IoChevronDown aria-hidden="true" className="size-4" />
              </button>
              <Link
                href="#contact"
                onClick={closeMenu}
                className="flex h-12 items-center justify-center rounded-[3px] bg-[#f7465b] px-6 text-white">
                Take Assessment
              </Link>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
}
