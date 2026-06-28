"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";
import Snap from "lenis/snap";

// Offers a subtle settle toward the top of each [data-snap] section on the
// home page. Free scrolling dominates: "proximity" plus a small distance
// threshold and a long debounce mean it only nudges when the reader stops
// very close to a boundary, and the gentle lerp keeps that nudge soft rather
// than a full-screen page lock.
export function SnapSections() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-snap]"),
    );
    if (sections.length === 0) return;

    const snap = new Snap(lenis, {
      // Never "mandatory": only assist when the reader is already near a
      // boundary, and wait for them to come to rest before nudging.
      type: "proximity",
      lerp: 0.08,
      debounce: 1000,
      distanceThreshold: "12%",
    });
    const remove = snap.addElements(sections, { align: ["start"] });

    return () => {
      remove?.();
      snap.destroy();
    };
  }, [lenis]);

  return null;
}
