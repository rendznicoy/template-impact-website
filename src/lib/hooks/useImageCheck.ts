"use client";

import { useState, useEffect } from "react";

export function useImageCheck(imageUrl: string) {
  const [imagesExist, setImagesExist] = useState(false);

  useEffect(() => {
    const checkImages = async () => {
      try {
        const response = await fetch(imageUrl, { method: "HEAD" });
        setImagesExist(response.ok);
      } catch {
        setImagesExist(false);
      }
    };
    checkImages();
  }, [imageUrl]);

  return imagesExist;
}
