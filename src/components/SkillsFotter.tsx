"use client";

import Image from "next/image";
import React from "react";
import ScrollReveal from "./animation/ScrollReveal";

interface MyComponentProps {
  items: Array<{ alt?: string; img?: any; name?: string; icon?: string }>;
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <>
      {items &&
        items.map((item, index) => {
          return (
            <ScrollReveal
              key={index}
              direction="left"
              delay={index * 0.05}
              randomDelay
            >
              <div 
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors"
              >
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="w-12 h-12 object-contain"
                />
                <span className="text-sm text-center font-medium text-muted-foreground">
                  {item.name}
                </span>
              </div>
            </ScrollReveal>
          );
        })}
    </>
  );
};

export default SkillsFooter;
