"use client";

import Image from "next/image";
import { useState } from "react";

interface FounderImageProps {
  src: string;
  alt: string;
}

export function FounderImage({ src, alt }: FounderImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {!loaded && <div className="image-skeleton" />}
      <Image
        src={src}
        alt={alt}
        width={180}
        height={180}
        priority
        onLoad={() => setLoaded(true)}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  );
}
