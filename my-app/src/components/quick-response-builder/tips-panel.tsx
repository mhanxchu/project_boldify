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
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle className="text-xl">STAR Method Guide</CardTitle>
        <CardDescription className="text-sm">
          Structure your answers for maximum impact
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="default" className="font-mono" aria-label="Situation">S</Badge>
              <span className="font-semibold text-sm text-foreground">Situation</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Set the context. What was the background or challenge?
            </p>
          </div>
          <Separator />
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="default" className="font-mono" aria-label="Task">T</Badge>
              <span className="font-semibold text-sm text-foreground">Task</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Define your responsibility or goal in that situation.
            </p>
          </div>
          <Separator />
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="default" className="font-mono" aria-label="Action">A</Badge>
              <span className="font-semibold text-sm text-foreground">Action</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Describe the specific steps you took. Use "I" statements.
            </p>
          </div>
          <Separator />
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="default" className="font-mono" aria-label="Result">R</Badge>
              <span className="font-semibold text-sm text-foreground">Result</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Share the outcome, impact, or what you learned.
            </p>
          </div>
        </div>
        <Separator />
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-foreground">Best Practices</h4>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside marker:text-muted-foreground">
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

