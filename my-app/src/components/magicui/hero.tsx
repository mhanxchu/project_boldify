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
      {/* Animated gradient background - lightweight */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      {/* Animated grid pattern - lightweight */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        {badge && (
          <Badge variant="secondary" className="mb-2">
            {badge}
          </Badge>
        )}
        
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        
        <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {description}
        </p>
        
        {ctaText && (
          <div className="mt-4">
            <Button size="lg" onClick={ctaAction}>
              {ctaText}
            </Button>
          </div>
        )}
      </div>

      {/* Floating particles effect - lightweight */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-2 w-2 animate-pulse rounded-full bg-primary/20" />
        <div className="absolute right-1/4 top-1/3 h-1.5 w-1.5 animate-pulse rounded-full bg-secondary/20 delay-300" />
        <div className="absolute bottom-1/4 left-1/3 h-2 w-2 animate-pulse rounded-full bg-primary/20 delay-700" />
        <div className="absolute bottom-1/3 right-1/3 h-1.5 w-1.5 animate-pulse rounded-full bg-secondary/20 delay-1000" />
      </div>
    </div>
  );
}

