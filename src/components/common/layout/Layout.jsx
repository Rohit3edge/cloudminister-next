"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
import { debounce } from "../others/Scroller"; // Ensure debounce function exists
import Navbar from "../nav/Navbar";
import Footer from "../nav/Footer";
import Footertwo from "../nav/Footertwo";

const Layout = ({ children }) => {
  const headerRef = useRef(null);
  const path = usePathname(); // Get current path

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure code runs only in the browser
  
    const handleScroll = () => {
      if (!headerRef.current) return;
      const header = headerRef.current;
      const headerTop = header.offsetHeight / 3; // Threshold for scroll trigger
    };
  
    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener("scroll", debouncedHandleScroll);
  
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);
  

  return (
    <>
      <header ref={headerRef}>
        <Navbar />
      </header>
      <main className={`${path === "/game-hosting" ? "bg-gray-900" : "bg-secondary"}`}>
        {children}
      </main>
      {path === "/" ? <Footer /> : <Footertwo />}
    </>
  );
};

export default Layout;
