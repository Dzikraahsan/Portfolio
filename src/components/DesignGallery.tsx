import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Data desain - ganti dengan desain Anda
const designs = [
    {
        id: 1,
        image: "https://res.cloudinary.com/da4fjxm1e/image/upload/v1765354947/arg-fra2_1_bcs7tq.webp",
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/da4fjxm1e/image/upload/v1765354951/arg-cra_2_p8scpk.webp",
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/da4fjxm1e/image/upload/v1765354953/arg-ned_2_zjxbbz.webp",
    },
];

const DesignGallery = () => {
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
        setCurrentIndex((prev) => (prev === 0 ? designs.length - 1 : prev - 1));
    }, [isAnimating]);

    const goToNext = useCallback(() => {
        if (isAnimating) return;
        setDirection("left");
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev === designs.length - 1 ? 0 : prev + 1));
    }, [isAnimating]);

    // Reset animation state
    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => {
                setIsAnimating(false);
                setDirection(null);
            }, 400);
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

    const currentDesign = designs[currentIndex];

    return (
        <section id="designs" className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 formular-bold">
                        MY DESIGNS
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Koleksi desain yang telah saya buat
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-lg mx-auto">
                    {/* Navigation Button - Left */}
                    <button
                        onClick={goToPrevious}
                        disabled={isAnimating}
                        className={cn(
                            "absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10",
                            "w-10 h-10 md:w-12 md:h-12 rounded-full",
                            "bg-background/90 backdrop-blur-sm border border-border",
                            "flex items-center justify-center",
                            "text-foreground hover:text-primary hover:border-primary",
                            "transition-all duration-300 ease-out",
                            "hover:scale-110 hover:shadow-lg hover:shadow-primary/20",
                            "active:scale-95",
                            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        )}
                        aria-label="Desain sebelumnya"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Design Card */}
                    <div
                        ref={containerRef}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        className="relative overflow-hidden rounded-2xl shadow-2xl"
                    >
                        {/* Aspect Ratio Container 4:5 */}
                        <div className="relative aspect-[4/5] bg-card">
                            {/* Image with Animation */}
                            <div
                                className={cn(
                                    "absolute inset-0 transition-all duration-400 ease-out",
                                    isAnimating && direction === "left" && "animate-slide-out-left",
                                    isAnimating && direction === "right" && "animate-slide-out-right",
                                    !isAnimating && "animate-fade-scale-in"
                                )}
                            >
                                <img
                                    src={currentDesign.image}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />

                                {/* Design Info */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3
                                        className={cn(
                                            "text-xl md:text-2xl font-bold mb-2 organetto-500",
                                            "transform transition-all duration-500 delay-100",
                                            isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                                        )}
                                    >
                                    </h3>
                                    <p
                                        className={cn(
                                            "text-sm md:text-base text-white/80",
                                            "transform transition-all duration-500 delay-200",
                                            isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                                        )}
                                    >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Button - Right */}
                    <button
                        onClick={goToNext}
                        disabled={isAnimating}
                        className={cn(
                            "absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10",
                            "w-10 h-10 md:w-12 md:h-12 rounded-full",
                            "bg-background/90 backdrop-blur-sm border border-border",
                            "flex items-center justify-center",
                            "text-foreground hover:text-primary hover:border-primary",
                            "transition-all duration-300 ease-out",
                            "hover:scale-110 hover:shadow-lg hover:shadow-primary/20",
                            "active:scale-95",
                            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        )}
                        aria-label="Desain selanjutnya"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {designs.map((_, index) => (
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
                                        ? "bg-primary w-8 shadow-md shadow-primary/30"
                                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                )}
                                aria-label={`Lihat desain ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Counter */}
                    <div className="text-center mt-4">
                        <span className="text-sm text-muted-foreground">
                            <span className="text-primary font-semibold">{currentIndex + 1}</span>
                            {" / "}
                            {designs.length}
                        </span>
                    </div>
                </div>
            </div>

            {/* Custom Animation Styles */}
            <style>{`
        @keyframes slide-out-left {
          0% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-30px) scale(0.95);
          }
        }

        @keyframes slide-out-right {
          0% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(30px) scale(0.95);
          }
        }

        @keyframes fade-scale-in {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-out-left {
          animation: slide-out-left 0.4s ease-out forwards;
        }

        .animate-slide-out-right {
          animation: slide-out-right 0.4s ease-out forwards;
        }

        .animate-fade-scale-in {
          animation: fade-scale-in 0.4s ease-out forwards;
        }

        .duration-400 {
          transition-duration: 400ms;
        }
      `}</style>
        </section>
    );
};

export default DesignGallery;
