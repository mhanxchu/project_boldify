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
    <Card className={cn("sticky top-4", className)}>
      <CardHeader>
        <CardTitle className="text-lg">STAR Method Guide</CardTitle>
        <CardDescription>
          Structure your answers for maximum impact
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="default">S</Badge>
              <span className="font-semibold text-sm">Situation</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Set the context. What was the background or challenge?
            </p>
          </div>
          <Separator />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="default">T</Badge>
              <span className="font-semibold text-sm">Task</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Define your responsibility or goal in that situation.
            </p>
          </div>
          <Separator />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="default">A</Badge>
              <span className="font-semibold text-sm">Action</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Describe the specific steps you took. Use "I" statements.
            </p>
          </div>
          <Separator />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="default">R</Badge>
              <span className="font-semibold text-sm">Result</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Share the outcome, impact, or what you learned.
            </p>
          </div>
        </div>
        <Separator />
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Best Practices</h4>
          <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
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

