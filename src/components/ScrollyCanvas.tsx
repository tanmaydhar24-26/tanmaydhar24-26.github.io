"use client";

import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll();

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const renderFrame = (index: number, imgArray: HTMLImageElement[]) => {
    if (!canvasRef.current || imgArray.length !== FRAME_COUNT) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgArray[index];
    if (!img || !img.complete) return;

    const rect = canvas.parentElement?.getBoundingClientRect();
    if (rect && (canvas.width !== rect.width || canvas.height !== rect.height)) {
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);

    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  };

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, '0');
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) {
            // Render first frame immediately once it's loaded
            renderFrame(0, loadedImages);
        }
        if (loadedCount === FRAME_COUNT) {
          // Re-render once all are loaded just in case
          renderFrame(Math.floor(frameIndex.get()), loadedImages);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);

    const handleResize = () => {
      renderFrame(Math.floor(frameIndex.get()), loadedImages);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderFrame(Math.floor(latest), images);
  });

  return (
    <div className="sticky top-0 left-0 w-full h-screen z-0 bg-[#121212] overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#121212]" />
    </div>
  );
}
