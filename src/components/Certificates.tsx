import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Data sertifikat - ganti dengan sertifikat Anda
const certificates = [
  {
    id: 1,
    title: "Certificate Basic HTML and CSS",
    image:
      "https://res.cloudinary.com/da4fjxm1e/image/upload/v1767703963/HTML_CSS_dasar_os3i3w.jpg",
  },
  {
    id: 2,
    title: "Certificate How To Using Database",
    image:
      "https://res.cloudinary.com/da4fjxm1e/image/upload/v1767703963/PENGGUNAAN_DATABASE_xy3xsn.jpg",
  },
  {
    id: 3,
    title: "Certificate Introducing Database",
    image:
      "https://res.cloudinary.com/da4fjxm1e/image/upload/v1767703963/PENGENALAN_DATABASE_uvgsnd.jpg",
  },
  {
    id: 4,
    title: "Certificate Javascript Basic",
    image:
      "https://res.cloudinary.com/da4fjxm1e/image/upload/v1767703963/JAVASCRIPT_dasar_yfdtyn.jpg",
  },
];

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  const goToPrevious = useCallback(() => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1,
    );
  }, [isAnimating]);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1,
    );
  }, [isAnimating]);

  // Reset animation state
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  const currentCertificate = certificates[currentIndex];

  return (
    <section id="certificates" className="py-16 md:py-24">
      <div className="container mx-auto px-8.5 md:px-4 lg:px-4">
        {/* Section Header */}
        <div className="text-center mb-7 md:mb-10">
          <h2 className="text-[25px] text-[#eaebed] md:text-4xl font-bold formular-bold">
            CERTIFICATES
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-3xl mx-auto px-12 md:px-16">
          {/* Navigation Button - Left */}
          <button
            onClick={goToPrevious}
            disabled={isAnimating}
            className={cn(
              "absolute left-0 md:-left-4 top-1/2 -translate-y-[4rem] md:-translate-y-[3.5rem] z-10",
              "w-9 h-9 md:w-12 md:h-12 rounded-full",
              "bg-background/90 backdrop-blur-sm border border-border",
              "flex items-center justify-center",
              "text-[#eaebed] hover:text-[#4ca1af] hover:border-[#4ca1af]",
              "transition-all duration-300 ease-out",
              "hover:scale-110 hover:shadow-lg hover:shadow-[#4ca1af]/20",
              "active:scale-95",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
            )}
            aria-label="Sertifikat sebelumnya"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          {/* Certificate Card */}
          <div
            ref={containerRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="relative md:max-w-[35rem] mx-auto overflow-hidden rounded-xl shadow-xl"
          >
            {/* Aspect Ratio Container 16:9 */}
            <div className="relative aspect-[3/2] bg-card">
              {/* Image with Animation */}
              <div
                className={cn(
                  "absolute inset-0",
                  isAnimating && direction === "left" && "cert-slide-left",
                  isAnimating && direction === "right" && "cert-slide-right",
                )}
              >
                <img
                  src={currentCertificate.image}
                  alt={currentCertificate.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Navigation Button - Right */}
          <button
            onClick={goToNext}
            disabled={isAnimating}
            className={cn(
              "absolute right-0 md:-right-4 top-1/2 -translate-y-[4rem] md:-translate-y-[3.5rem] z-10",
              "w-9 h-9 md:w-12 md:h-12 rounded-full",
              "bg-background/90 backdrop-blur-sm border border-border",
              "flex items-center justify-center",
              "text-[#eaebed] hover:text-[#4ca1af] hover:border-[#4ca1af]",
              "transition-all duration-300 ease-out",
              "hover:scale-110 hover:shadow-lg hover:shadow-[#4ca1af]/20",
              "active:scale-95",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
            )}
            aria-label="Sertifikat selanjutnya"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setDirection(index > currentIndex ? "left" : "right");
                  setIsAnimating(true);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-[#4ca1af] w-8 shadow-md shadow-[#4ca1af]/30"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
                )}
                aria-label={`Lihat sertifikat ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-[#eaebed]/80">
              <span className="text-[#4ca1af] font-semibold">
                {currentIndex + 1}
              </span>
              {" / "}
              {certificates.length}
            </span>
          </div>
        </div>
      </div>

      {/* Simple Slide Animation */}
      <style>{`
                @keyframes cert-slide-in-left {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }

                @keyframes cert-slide-in-right {
                    from { transform: translateX(-100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }

                .cert-slide-left {
                    animation: cert-slide-in-left 0.35s ease-out forwards;
                }

                .cert-slide-right {
                    animation: cert-slide-in-right 0.35s ease-out forwards;
                }
            `}</style>
    </section>
  );
};

export default Certificates;
