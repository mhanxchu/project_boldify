"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StructureIndicatorProps {
  situation: boolean;
  task: boolean;
  action: boolean;
  result: boolean;
  className?: string;
}

export function StructureIndicator({
  situation,
  task,
  action,
  result,
  className,
}: StructureIndicatorProps) {
  const sections = [
    { label: "Situation", completed: situation },
    { label: "Task", completed: task },
    { label: "Action", completed: action },
    { label: "Result", completed: result },
  ];

  const allComplete = situation && task && action && result;

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <span className="text-sm font-medium text-muted-foreground">
        STAR Structure:
      </span>
      {sections.map((section) => (
        <Badge
          key={section.label}
          variant={section.completed ? "default" : "outline"}
          className={cn(
            "transition-colors",
            section.completed && "bg-primary text-primary-foreground"
          )}
        >
          {section.completed ? "✓" : "○"} {section.label}
        </Badge>
      ))}
      {allComplete && (
        <Badge variant="secondary" className="ml-2">
          Complete
        </Badge>
      )}
    </div>
  );
}

