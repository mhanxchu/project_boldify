"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface TipsPanelProps {
  className?: string;
}

export function TipsPanel({ className }: TipsPanelProps) {
  return (
    <Card className={cn("border border-border/50 shadow-sm", className)}>
      <CardHeader className="space-y-2 sm:space-y-3 pb-4 sm:pb-6">
        <CardTitle className="font-serif-heading text-xl sm:text-2xl">STAR Method Guide</CardTitle>
        <CardDescription className="font-serif-body text-sm sm:text-base">
          Structure your answers for maximum impact
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 sm:space-y-6">
        <div className="space-y-4 sm:space-y-5">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <Badge variant="default" className="font-serif-body bg-gold/20 text-gold-text border-gold/50 focus-visible:ring-gold/50 focus-visible:ring-[3px]" aria-label="Situation">S</Badge>
              <span className="font-serif-heading font-semibold text-sm sm:text-base text-foreground">Situation</span>
            </div>
            <p className="font-serif-body text-sm text-muted-foreground leading-relaxed">
              Set the context. What was the background or challenge?
            </p>
          </div>
          <Separator className="bg-border/50" />
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <Badge variant="default" className="font-serif-body bg-gold/20 text-gold-text border-gold/50 focus-visible:ring-gold/50 focus-visible:ring-[3px]" aria-label="Task">T</Badge>
              <span className="font-serif-heading font-semibold text-sm sm:text-base text-foreground">Task</span>
            </div>
            <p className="font-serif-body text-sm text-muted-foreground leading-relaxed">
              Define your responsibility or goal in that situation.
            </p>
          </div>
          <Separator className="bg-border/50" />
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <Badge variant="default" className="font-serif-body bg-gold/20 text-gold-text border-gold/50 focus-visible:ring-gold/50 focus-visible:ring-[3px]" aria-label="Action">A</Badge>
              <span className="font-serif-heading font-semibold text-sm sm:text-base text-foreground">Action</span>
            </div>
            <p className="font-serif-body text-sm text-muted-foreground leading-relaxed">
              Describe the specific steps you took. Use "I" statements.
            </p>
          </div>
          <Separator className="bg-border/50" />
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <Badge variant="default" className="font-serif-body bg-gold/20 text-gold-text border-gold/50 focus-visible:ring-gold/50 focus-visible:ring-[3px]" aria-label="Result">R</Badge>
              <span className="font-serif-heading font-semibold text-sm sm:text-base text-foreground">Result</span>
            </div>
            <p className="font-serif-body text-sm text-muted-foreground leading-relaxed">
              Share the outcome, impact, or what you learned.
            </p>
          </div>
        </div>
        <Separator className="bg-border/50" />
        <div className="space-y-3 sm:space-y-4">
          <h4 className="font-serif-heading font-semibold text-sm sm:text-base text-foreground">Best Practices</h4>
          <ul className="font-serif-body text-sm text-muted-foreground space-y-2 sm:space-y-2.5 list-disc list-inside marker:text-gold-text pl-2">
            <li>Aim for 150-300 words total</li>
            <li>Be specific with numbers and metrics</li>
            <li>Focus on your actions and contributions</li>
            <li>Quantify results when possible</li>
            <li>Keep it concise and relevant</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

