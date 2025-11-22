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
    { label: "Situation", completed: situation, letter: "S" },
    { label: "Task", completed: task, letter: "T" },
    { label: "Action", completed: action, letter: "A" },
    { label: "Result", completed: result, letter: "R" },
  ];

  const allComplete = situation && task && action && result;
  const completedCount = sections.filter((s) => s.completed).length;

  return (
    <div 
      className={cn("flex flex-wrap items-center gap-2", className)}
      role="status"
      aria-live="polite"
      aria-label={`STAR structure progress: ${completedCount} of 4 sections completed`}
    >
      <span className="text-sm font-semibold text-foreground">
        STAR Structure:
      </span>
      {sections.map((section) => (
        <Badge
          key={section.label}
          variant={section.completed ? "default" : "outline"}
          className={cn(
            "transition-all duration-200",
            section.completed 
              ? "bg-primary text-primary-foreground shadow-sm" 
              : "border-2"
          )}
          aria-label={`${section.label} section ${section.completed ? 'completed' : 'incomplete'}`}
        >
          <span aria-hidden="true">
            {section.completed ? "✓" : "○"} {section.label}
          </span>
        </Badge>
      ))}
      {allComplete && (
        <Badge 
          variant="secondary" 
          className="ml-2 animate-in fade-in duration-300"
          aria-label="All sections complete"
        >
          Complete
        </Badge>
      )}
    </div>
  );
}

