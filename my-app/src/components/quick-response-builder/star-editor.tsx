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
      <Card className={className} aria-live="polite">
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">
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
    <div className={cn("space-y-6 lg:space-y-8", className)}>
      <Card id="star-editor-heading">
        <CardHeader>
          <CardTitle className="text-2xl">Build Your Answer</CardTitle>
          <CardDescription className="text-base">{question.question}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {sections.map((section, index) => {
            const wordCount = getWordCount(section.value);
            const charCount = getCharacterCount(section.value);
            const hasContent = section.value.trim().length > 0;
            const sectionId = section.label.toLowerCase();

            return (
              <div key={section.label} className="space-y-3">
                {index > 0 && <Separator className="my-4" />}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <label 
                    htmlFor={`star-${sectionId}`}
                    className="text-sm font-semibold text-foreground"
                  >
                    {section.label}
                  </label>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="outline" 
                      className="text-xs font-mono tabular-nums"
                      aria-label={`${wordCount} words`}
                    >
                      {wordCount} words
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="text-xs font-mono tabular-nums"
                      aria-label={`${charCount} characters`}
                    >
                      {charCount} chars
                    </Badge>
                  </div>
                </div>
                <p 
                  id={`${sectionId}-prompt`}
                  className="text-sm text-muted-foreground leading-relaxed"
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
                    "min-h-[120px] transition-colors resize-y",
                    hasContent 
                      ? "border-primary/60 dark:border-primary/40 focus-visible:ring-primary/20" 
                      : "border-input focus-visible:ring-ring"
                  )}
                  rows={5}
                />
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card aria-live="polite" aria-atomic="true">
        <CardHeader>
          <CardTitle className="text-xl">Structure Progress</CardTitle>
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

