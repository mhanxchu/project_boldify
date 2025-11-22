"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { interviewQuestions, type InterviewQuestion } from "@/lib/data/interview-questions";
import { cn } from "@/lib/utils";

interface QuestionLibraryProps {
  selectedQuestionId: string | null;
  onSelectQuestion: (question: InterviewQuestion) => void;
  onViewExample: (question: InterviewQuestion) => void;
  className?: string;
}

export function QuestionLibrary({
  selectedQuestionId,
  onSelectQuestion,
  onViewExample,
  className,
}: QuestionLibraryProps) {
  const categories = Array.from(new Set(interviewQuestions.map((q) => q.category)));

  return (
    <div className={cn("space-y-8", className)}>
      <div className="space-y-2">
        <h2 id="question-library-heading" className="text-3xl font-bold tracking-tight mb-3">
          Interview Question Library
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          Select a question to start building your answer using the STAR method.
        </p>
      </div>

      {categories.map((category) => {
        const questionsInCategory = interviewQuestions.filter(
          (q) => q.category === category
        );

        return (
          <section key={category} className="space-y-4" aria-labelledby={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
            <h3 
              id={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xl font-semibold text-foreground"
            >
              {category}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {questionsInCategory.map((question) => (
                <Card
                  key={question.id}
                  className={cn(
                    "cursor-pointer transition-all duration-200",
                    "hover:shadow-lg hover:scale-[1.02] hover:border-primary/50",
                    "focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2",
                    "active:scale-[0.98]",
                    selectedQuestionId === question.id &&
                      "ring-2 ring-primary border-primary shadow-md"
                  )}
                  onClick={() => onSelectQuestion(question)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onSelectQuestion(question);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={selectedQuestionId === question.id}
                  aria-label={`Select question: ${question.question}`}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base leading-snug">
                      {question.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="secondary" className="text-xs shrink-0">
                        {question.category}
                      </Badge>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onViewExample(question);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.stopPropagation();
                            onViewExample(question);
                          }
                        }}
                        className="text-xs text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1 transition-colors shrink-0"
                        aria-label={`View example response for: ${question.question}`}
                        type="button"
                      >
                        View Example
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

