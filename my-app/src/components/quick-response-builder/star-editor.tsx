"use client";

import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      <Card className={className}>
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
    <div className={cn("space-y-6", className)}>
      <Card>
        <CardHeader>
          <CardTitle>Build Your Answer</CardTitle>
          <CardDescription>{question.question}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {sections.map((section) => {
            const wordCount = getWordCount(section.value);
            const charCount = getCharacterCount(section.value);
            const hasContent = section.value.trim().length > 0;

            return (
              <div key={section.label} className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">
                    {section.label}
                  </label>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {wordCount} words
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {charCount} chars
                    </Badge>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  {section.prompt}
                </p>
                <Textarea
                  placeholder={section.placeholder}
                  value={section.value}
                  onChange={(e) => section.onChange(e.target.value)}
                  className={cn(
                    "min-h-[100px]",
                    hasContent && "border-primary/50"
                  )}
                  rows={4}
                />
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Structure Progress</CardTitle>
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

