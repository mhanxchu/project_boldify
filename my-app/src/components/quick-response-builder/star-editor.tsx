"use client";

import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { StructureIndicator } from "./structure-indicator";
import { type InterviewQuestion } from "@/lib/data/interview-questions";
import { cn } from "@/lib/utils";

interface StarEditorProps {
  question: InterviewQuestion | null;
  situation: string;
  task: string;
  action: string;
  result: string;
  onSituationChange: (value: string) => void;
  onTaskChange: (value: string) => void;
  onActionChange: (value: string) => void;
  onResultChange: (value: string) => void;
  className?: string;
}

export function StarEditor({
  question,
  situation,
  task,
  action,
  result,
  onSituationChange,
  onTaskChange,
  onActionChange,
  onResultChange,
  className,
}: StarEditorProps) {
  if (!question) {
    return (
      <Card className={cn("border border-border/50 shadow-sm", className)} aria-live="polite">
        <CardContent className="pt-12 pb-12">
          <p className="font-serif-body text-center text-muted-foreground text-lg">
            Select a question from the library to start building your answer.
          </p>
        </CardContent>
      </Card>
    );
  }

  const sections = [
    {
      label: "Situation",
      value: situation,
      onChange: onSituationChange,
      prompt: question.starPrompts.situation,
      placeholder: "Describe the context or background...",
    },
    {
      label: "Task",
      value: task,
      onChange: onTaskChange,
      prompt: question.starPrompts.task,
      placeholder: "What was your responsibility or goal?",
    },
    {
      label: "Action",
      value: action,
      onChange: onActionChange,
      prompt: question.starPrompts.action,
      placeholder: "What specific steps did you take?",
    },
    {
      label: "Result",
      value: result,
      onChange: onResultChange,
      prompt: question.starPrompts.result,
      placeholder: "What was the outcome? What did you learn?",
    },
  ];

  const getWordCount = (text: string) => {
    return text.trim().split(/\s+/).filter((word) => word.length > 0).length;
  };

  const getCharacterCount = (text: string) => text.length;

  return (
    <div className={cn("space-y-8 lg:space-y-10", className)}>
      <Card id="star-editor-heading" className="border border-border/50 shadow-sm">
        <CardHeader className="space-y-4 pb-8">
          <CardTitle className="font-serif-heading text-3xl">Build Your Answer</CardTitle>
          <CardDescription className="font-serif-body text-lg leading-relaxed">{question.question}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-10">
          {sections.map((section, index) => {
            const wordCount = getWordCount(section.value);
            const charCount = getCharacterCount(section.value);
            const hasContent = section.value.trim().length > 0;
            const sectionId = section.label.toLowerCase();

            return (
              <div key={section.label} className="space-y-4">
                {index > 0 && <Separator className="my-6 bg-border/50" />}
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <label 
                    htmlFor={`star-${sectionId}`}
                    className="font-serif-heading text-lg font-semibold text-foreground"
                  >
                    {section.label}
                  </label>
                  <div className="flex items-center gap-3">
                    <Badge 
                      variant="outline" 
                      className="text-xs font-serif-body tabular-nums border-gold/30 text-gold-dark"
                      aria-label={`${wordCount} words`}
                    >
                      {wordCount} words
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="text-xs font-serif-body tabular-nums border-gold/30 text-gold-dark"
                      aria-label={`${charCount} characters`}
                    >
                      {charCount} chars
                    </Badge>
                  </div>
                </div>
                <p 
                  id={`${sectionId}-prompt`}
                  className="font-serif-body text-base text-muted-foreground leading-relaxed"
                >
                  {section.prompt}
                </p>
                <Textarea
                  id={`star-${sectionId}`}
                  name={`star-${sectionId}`}
                  placeholder={section.placeholder}
                  value={section.value}
                  onChange={(e) => section.onChange(e.target.value)}
                  aria-label={`${section.label} section: ${section.prompt}`}
                  aria-describedby={`${sectionId}-prompt`}
                  className={cn(
                    "font-serif-body min-h-[140px] transition-colors resize-y text-base leading-relaxed",
                    "border-border/50 focus-visible:ring-gold focus-visible:border-gold/50",
                    hasContent 
                      ? "border-gold/40 bg-gold-subtle/10" 
                      : ""
                  )}
                  rows={6}
                />
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card aria-live="polite" aria-atomic="true" className="border border-border/50 shadow-sm">
        <CardHeader className="pb-6">
          <CardTitle className="font-serif-heading text-2xl">Structure Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <StructureIndicator
            situation={situation.trim().length > 0}
            task={task.trim().length > 0}
            action={action.trim().length > 0}
            result={result.trim().length > 0}
          />
        </CardContent>
      </Card>
    </div>
  );
}

