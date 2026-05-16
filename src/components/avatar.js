"use client";

import { useEffect, useState } from "react";
import { buildAvatarUrl } from "@/lib/auth";

export function Avatar({ name, photoURL, className = "" }) {
  const fallbackSrc = buildAvatarUrl(name);
  const [currentSrc, setCurrentSrc] = useState(photoURL || fallbackSrc);

  useEffect(() => {
    setCurrentSrc(photoURL || fallbackSrc);
  }, [photoURL, fallbackSrc]);

  return (
    <img
      src={currentSrc}
      alt={name}
      className={className}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}
