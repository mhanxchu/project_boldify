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
    <div className={cn("space-y-6", className)}>
      <div>
        <h2 className="text-2xl font-bold mb-2">Interview Question Library</h2>
        <p className="text-muted-foreground">
          Select a question to start building your answer using the STAR method.
        </p>
      </div>

      {categories.map((category) => {
        const questionsInCategory = interviewQuestions.filter(
          (q) => q.category === category
        );

        return (
          <div key={category} className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">{category}</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {questionsInCategory.map((question) => (
                <Card
                  key={question.id}
                  className={cn(
                    "cursor-pointer transition-all hover:shadow-md",
                    selectedQuestionId === question.id &&
                      "ring-2 ring-primary border-primary"
                  )}
                  onClick={() => onSelectQuestion(question)}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base leading-tight">
                      {question.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {question.category}
                      </Badge>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onViewExample(question);
                        }}
                        className="text-xs text-primary hover:underline"
                      >
                        View Example
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

