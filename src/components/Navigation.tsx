"use client";
import {
  Menu,
  Home,
  CalendarDays,
  Smartphone,
  Users,
  Gem,
  ShoppingCart,
  Code,
  Mail
} from "lucide-react";
import { Space_Grotesk, Syncopate } from "next/font/google";
import type { SVGProps } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
});
const syncopate = Syncopate({ subsets: ["latin"], weight: ["400", "700"] });

const leftNavItems = [
  { icon: Home, label: "HOME", href: "/" },
  { icon: CalendarDays, label: "EVENTS", href: "/events" },
  { icon: Smartphone, label: "CONTACT", href: "/contact" },
  { icon: Users, label: "ABOUT US", href: "/about" },
  { icon: Gem, label: "SPONSORS", href: "/sponsors" },
  { icon: ShoppingCart, label: "STORE", href: "/store" },
];


const InstagramIcon = ({ size, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MobileIcon = ({ size, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const rightNavIcons = [
  { Icon: InstagramIcon, href: "https://www.instagram.com/techprabha.gkciet" , target: "blank" },
  { Icon: Mail, href: "mailto:techprabha.gkciet@gmail.com" , target: ""},
  { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/techprabha-gkciet/" , target: "blank"},
  { Icon: MobileIcon, href: "tel:+918837454482" , target: ""}
];


export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-20 z-50 w-screen flex items-center justify-between px-6 bg-gradient-to-b from-[#030008] to-transparent pointer-events-none transition-all">
        <div className="flex flex-row items-center gap-6 pointer-events-auto">
          {/* Replaced T-26 text with logos */}
          <Image src="/gkciet1.png" alt="GKCIET Logo" width={48} height={48} loading="eager" className="h-10 md:h-12 w-auto object-contain" />
          <Image src="/techprabha.png" alt="Techprabha Logo" width={48} height={48} className="h-10 md:h-12 w-10 md:w-12 object-contain scale-125" />
        </div>


        <div className="pointer-events-auto flex items-center gap-4">
          <div className="lg:hidden mt-1">
            <Menu
              className="text-white cursor-pointer hover:text-[#00f0ff] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>
      </nav>

      {/* Left Sidebar */}
      <aside className="fixed left-0 top-1/2 -translate-y-1/2 w-[88px] z-40 hidden md:flex flex-col items-center gap-7 py-8 bg-[#0B0914]/60 backdrop-blur-md rounded-r-2xl pointer-events-auto border-r border-white/5 shadow-2xl">
        {leftNavItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="flex flex-col items-center gap-1.5 group cursor-pointer w-full hover:bg-white/[0.03] py-2.5 transition-all duration-300"
          >
            <item.icon
              size={22}
              strokeWidth={1.5}
              className="text-white/70 group-hover:text-white group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
            />
            {/* Text always visible aligned perfectly under the icon */}
            <span
              className={`${syncopate.className} text-[8px] tracking-[0.1em] font-medium text-white/70 uppercase text-center group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </aside>

      {/* Right Sidebar (Desktop) / Bottom Bar (Mobile) */}
      <aside className="fixed z-40 flex pointer-events-auto bg-[#0B0914]/80 backdrop-blur-xl shadow-2xl border-white/10 
        bottom-0 left-1/8 w-3/4 flex-row justify-center gap-8 py-4 border-t rounded-t-3xl translate-y-0
        lg:right-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:left-auto lg:w-16 lg:flex-col lg:gap-7 lg:py-8 lg:border-t-0 lg:border-l lg:rounded-t-none lg:rounded-l-2xl"
      >
        {rightNavIcons.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.target}
            className="group flex flex-col items-center justify-center p-2 lg:p-0 lg:w-full lg:py-2 hover:bg-white/[0.1] lg:hover:bg-white/[0.03] rounded-xl lg:rounded-none transition-all duration-300"
          >
            <item.Icon
              size={22}
              className="text-white/70 group-hover:text-white group-hover:scale-110 lg:group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
            />
          </a>
        ))}
      </aside>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#030008]/95 backdrop-blur-3xl flex flex-col p-8 pointer-events-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex flex-row items-center gap-4">
                <Image src="/gkciet1.png" alt="GKCIET Logo" width={32} height={32} loading="eager" className="h-8 w-auto object-contain" />
                <Image src="/techprabha.png" alt="Techprabha Logo" width={32} height={32} className="h-8 w-8 object-contain scale-125" />
              </div>
              <Code
                size={28}
                className="text-white cursor-pointer rotate-45 hover:text-[#00f0ff] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
            <div className="flex flex-col gap-6">
              {leftNavItems.map((item, i) => (
                <Link
                  href={item.href}
                  key={i}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${spaceGrotesk.className} text-xl tracking-widest text-white hover:text-[#00f0ff] cursor-pointer transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
