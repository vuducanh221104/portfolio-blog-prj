"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  "home",
  "about",
  "skills",
  "education",
  "projects",
  "contact",
  "more",
];

export default function ScrollNavigation() {
  const isNavigatingRef = useRef(false);
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastWheelTime = useRef(0);
  const [isPageReady, setIsPageReady] = useState(false);
  const currentSectionRef = useRef(0);

  useEffect(() => {
    // Đợi page load xong
    setIsPageReady(true);
    // Xác định section hiện tại dựa trên scroll position
    updateCurrentSection();
  }, []);

  const updateCurrentSection = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const sectionElements = sections.map((id) => 
      document.getElementById(id)
    ).filter(Boolean) as HTMLElement[];

    for (let i = 0; i < sectionElements.length; i++) {
      const section = sectionElements[i];
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSectionRef.current = i;
        break;
      }
    }
  };

  useEffect(() => {
    if (!isPageReady) return;

    const handleWheel = (e: WheelEvent) => {
      // Ngăn chặn navigation nếu đang trong quá trình chuyển section
      if (isNavigatingRef.current) {
        e.preventDefault();
        return;
      }

      const now = Date.now();
      const timeSinceLastWheel = now - lastWheelTime.current;
      lastWheelTime.current = now;

      // Debounce để tránh trigger quá nhiều lần
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }

      wheelTimeoutRef.current = setTimeout(() => {
        updateCurrentSection();
        const currentIndex = currentSectionRef.current;

        // Scroll xuống - chuyển section tiếp theo
        if (e.deltaY > 30) {
          if (currentIndex < sections.length - 1) {
            e.preventDefault();
            scrollToSection(currentIndex + 1, "down");
          }
        }
        // Scroll lên - chuyển section trước đó
        else if (e.deltaY < -30) {
          if (currentIndex > 0) {
            e.preventDefault();
            scrollToSection(currentIndex - 1, "up");
          }
        }
      }, 100);
    };

    const scrollToSection = (targetIndex: number, direction: "up" | "down") => {
      if (isNavigatingRef.current) return;

      const targetSection = document.getElementById(sections[targetIndex]);
      if (!targetSection) return;

      isNavigatingRef.current = true;
      currentSectionRef.current = targetIndex;

      // Smooth scroll đến section
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Reset flag sau khi scroll hoàn tất
      setTimeout(() => {
        isNavigatingRef.current = false;
      }, 800);
    };

    // Thêm event listener với passive: false để có thể preventDefault
    window.addEventListener("wheel", handleWheel, { passive: false });

    // Cập nhật current section khi scroll thủ công
    const handleScroll = () => {
      if (!isNavigatingRef.current) {
        updateCurrentSection();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
    };
  }, [isPageReady]);

  return null;
}
