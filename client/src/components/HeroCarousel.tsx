import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSlide {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  onReadMore?: (slug: string) => void;
}

export default function HeroCarousel({ slides, onReadMore }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-card">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${currentSlide.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-end p-6 md:p-12 lg:p-16">
        <div className="max-w-4xl space-y-4">
          <h1 
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-2xl"
            data-testid="text-hero-title"
          >
            {currentSlide.title}
          </h1>
          
          <p 
            className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl drop-shadow-lg"
            data-testid="text-hero-description"
          >
            {currentSlide.description}
          </p>

          <Button
            onClick={() => onReadMore?.(currentSlide.slug)}
            className="bg-white text-primary hover:bg-white/90 gap-2 group mt-4"
            data-testid="button-read-more"
          >
            <span className="font-semibold">Citește mai mult</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="flex gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-white' : 'w-4 bg-white/50'
              }`}
              data-testid={`button-carousel-dot-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
