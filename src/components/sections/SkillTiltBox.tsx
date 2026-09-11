"use client";

import type { PointerEvent, ReactNode } from "react";

type SkillTiltBoxProps = {
  children: ReactNode;
};

function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
  const element = event.currentTarget;
  const bounds = element.getBoundingClientRect();
  const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
  const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));

  element.style.transition = "none";
  element.style.setProperty("--skill-rotate-x", `${(0.5 - y) * 12}deg`);
  element.style.setProperty("--skill-rotate-y", `${(x - 0.5) * 12}deg`);
  element.style.setProperty("--skill-scale", "1.04");
  element.style.setProperty("--skill-glare-x", `${x * 100}%`);
  element.style.setProperty("--skill-glare-y", `${y * 100}%`);
  element.style.setProperty("--skill-glare-opacity", "1");
}

function resetTilt(event: PointerEvent<HTMLDivElement>) {
  const element = event.currentTarget;

  element.style.transition = "transform 180ms ease, box-shadow 180ms ease";
  element.style.setProperty("--skill-rotate-x", "0deg");
  element.style.setProperty("--skill-rotate-y", "0deg");
  element.style.setProperty("--skill-scale", "1");
  element.style.setProperty("--skill-glare-x", "50%");
  element.style.setProperty("--skill-glare-y", "50%");
  element.style.setProperty("--skill-glare-opacity", "0");
}

export default function SkillTiltBox({ children }: SkillTiltBoxProps) {
  return (
    <div
      className="skill-box"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      {children}
    </div>
  );
}
