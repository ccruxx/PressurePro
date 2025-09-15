import { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
  initialPosition?: number;
  testId?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before image",
  afterAlt = "After image",
  className,
  initialPosition = 50,
  testId,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
    setPosition(percentage);
  }, []);

  const updatePositionByKeyboard = useCallback((percentage: number) => {
    setPosition(Math.max(0, Math.min(100, percentage)));
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        updatePositionByKeyboard(position - 5);
        break;
      case 'ArrowRight':
        e.preventDefault();
        updatePositionByKeyboard(position + 5);
        break;
      case 'Home':
        e.preventDefault();
        updatePositionByKeyboard(0);
        break;
      case 'End':
        e.preventDefault();
        updatePositionByKeyboard(100);
        break;
    }
  }, [position, updatePositionByKeyboard]);

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) {
        updatePosition(e.clientX);
      }
    },
    [isDragging, updatePosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (isDragging && e.touches[0]) {
        updatePosition(e.touches[0].clientX);
      }
    },
    [isDragging, updatePosition]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) {
        updatePosition(e.clientX);
      }
    },
    [isDragging, updatePosition]
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg cursor-col-resize select-none",
        className
      )}
      data-testid={testId || "before-after-slider"}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="w-full h-full object-cover"
          draggable={false}
          loading="lazy"
        />
      </div>

      {/* After Image with clip */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <img
          src={afterImage}
          alt={afterAlt}
          className="w-full h-full object-cover"
          draggable={false}
          loading="lazy"
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        data-testid={testId ? `${testId}-handle` : "slider-handle"}
      >
        {/* Handle Circle with proper accessibility */}
        <div 
          className="absolute top-1/2 left-1/2 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          tabIndex={0}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-label="Before and after comparison slider"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onKeyDown={handleKeyDown}
        >
          <div className="w-1 h-4 bg-gray-400 rounded-full mx-px"></div>
          <div className="w-1 h-4 bg-gray-400 rounded-full mx-px"></div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
        BEFORE
      </div>
      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
        AFTER
      </div>
    </div>
  );
}