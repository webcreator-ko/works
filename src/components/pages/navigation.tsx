"use client";
import navigationStyles from "./navigation.module.scss";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navigation = () => {
 const navRef = useRef<HTMLElement>(null);
 const [isDisplay, setDisplay] = useState(false);
 useEffect(() => {
  const handleScroll = () => {
   if (navRef.current) {
    const navRect = navRef.current?.getBoundingClientRect();
    if (!navRect.top) {
     setDisplay(true);
    } else {
     setDisplay(false);
    }
   }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, []);
 return (
  <nav className={navigationStyles.wrap} ref={navRef}>
   <h1 className={isDisplay ? navigationStyles.on : undefined}>
    WEB CREATOR - KO
   </h1>
   <ul>
    <li>
     <Link href="/">Diary</Link>
    </li>
    <li>
     <Link href="/works">Works</Link>
    </li>
    <li>
     <Link href="/contact">Contact</Link>
    </li>
   </ul>
  </nav>
 );
};

export default Navigation;
