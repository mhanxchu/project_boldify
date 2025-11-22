"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface HeroProps {
  title?: string;
  description?: string;
  badge?: string;
  ctaText?: string;
  ctaAction?: () => void;
  className?: string;
}

export function Hero({
  title = "Coming Soon",
  description = "Something amazing is on the way. Stay tuned for updates.",
  badge,
  ctaText,
  ctaAction,
  className,
}: HeroProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-8 md:p-12",
        className
      )}
    >
      {/* Subtle luxury background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gold-subtle/30 via-background to-gold-subtle/10" />
      
      {/* Refined grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--color-border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--color-border))_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_110%)]" />

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8 text-center">
        {badge && (
          <Badge 
            variant="secondary" 
            className="mb-4 border-gold/30 text-gold-dark font-serif-body tracking-wider uppercase text-xs px-4 py-1.5"
          >
            {badge}
          </Badge>
        )}
        
        <h1 className="font-serif-heading text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1]">
          <span className="text-foreground">
            {title}
          </span>
        </h1>
        
        <p className="max-w-2xl font-serif-body text-xl text-muted-foreground sm:text-2xl leading-relaxed mt-4">
          {description}
        </p>
        
        {ctaText && (
          <div className="mt-8">
            <Button 
              size="lg" 
              onClick={ctaAction}
              className="font-serif-body border border-gold/40 bg-gold/10 hover:bg-gold/20 text-foreground shadow-sm transition-all duration-300 px-8 py-6 text-base tracking-wide"
            >
              {ctaText}
            </Button>
          </div>
        )}
      </div>

      {/* Subtle gold accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-1 w-1 animate-pulse rounded-full bg-gold/30" />
        <div className="absolute right-1/4 top-1/3 h-0.5 w-0.5 animate-pulse rounded-full bg-gold/20 delay-300" />
        <div className="absolute bottom-1/4 left-1/3 h-1 w-1 animate-pulse rounded-full bg-gold/30 delay-700" />
        <div className="absolute bottom-1/3 right-1/3 h-0.5 w-0.5 animate-pulse rounded-full bg-gold/20 delay-1000" />
      </div>
    </div>
  );
}

