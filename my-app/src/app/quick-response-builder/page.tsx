"use client";

import { useState } from "react";
import { QuestionLibrary } from "@/components/quick-response-builder/question-library";
import { StarEditor } from "@/components/quick-response-builder/star-editor";
import { ExampleViewer } from "@/components/quick-response-builder/example-viewer";
import { TipsPanel } from "@/components/quick-response-builder/tips-panel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { type InterviewQuestion } from "@/lib/data/interview-questions";

export default function QuickResponseBuilderPage() {
  const [selectedQuestion, setSelectedQuestion] =
    useState<InterviewQuestion | null>(null);
  const [exampleQuestion, setExampleQuestion] =
    useState<InterviewQuestion | null>(null);
  const [isExampleOpen, setIsExampleOpen] = useState(false);

  // STAR method state
  const [situation, setSituation] = useState("");
  const [task, setTask] = useState("");
  const [action, setAction] = useState("");
  const [result, setResult] = useState("");

  const handleSelectQuestion = (question: InterviewQuestion) => {
    setSelectedQuestion(question);
    // Reset STAR fields when selecting a new question
    setSituation("");
    setTask("");
    setAction("");
    setResult("");
  };

  const handleViewExample = (question: InterviewQuestion) => {
    setExampleQuestion(question);
    setIsExampleOpen(true);
  };

  const handleCopyAnswer = () => {
    // Placeholder - no real functionality in Stage 1
    const fullAnswer = `Situation: ${situation}\n\nTask: ${task}\n\nAction: ${action}\n\nResult: ${result}`;
    console.log("Would copy to clipboard:", fullAnswer);
    alert("Copy functionality will be implemented in Stage 2!");
  };

  const getTotalWordCount = () => {
    const allText = `${situation} ${task} ${action} ${result}`;
    return allText.trim().split(/\s+/).filter((word) => word.length > 0).length;
  };

  const isAnswerComplete =
    situation.trim().length > 0 &&
    task.trim().length > 0 &&
    action.trim().length > 0 &&
    result.trim().length > 0;

  return (
    <main className="container mx-auto px-4 py-8 lg:py-12 max-w-7xl">
      <header className="mb-10 lg:mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3 lg:text-5xl">
          Quick Response Builder
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          Build confident interview answers using the STAR method. Select a question, follow the
          prompts, and get real-time feedback on your response structure.
        </p>
      </header>

      <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-6 lg:space-y-8">
          {/* Question Library Section */}
          <section aria-labelledby="question-library-heading">
            <QuestionLibrary
              selectedQuestionId={selectedQuestion?.id || null}
              onSelectQuestion={handleSelectQuestion}
              onViewExample={handleViewExample}
            />
          </section>

          {/* STAR Editor Section */}
          <section aria-labelledby="star-editor-heading">
            <StarEditor
              question={selectedQuestion}
              situation={situation}
              task={task}
              action={action}
              result={result}
              onSituationChange={setSituation}
              onTaskChange={setTask}
              onActionChange={setAction}
              onResultChange={setResult}
            />
          </section>

          {/* Action Bar */}
          {selectedQuestion && (
            <Card aria-live="polite" aria-atomic="true">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold tabular-nums">
                      Total: <span aria-label={`${getTotalWordCount()} words`}>{getTotalWordCount()}</span> words
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {isAnswerComplete
                        ? "✓ All STAR sections completed"
                        : "Complete all sections to copy your answer"}
                    </p>
                  </div>
                  <Button
                    onClick={handleCopyAnswer}
                    disabled={!isAnswerComplete}
                    size="lg"
                    className="transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-disabled={!isAnswerComplete}
                    aria-label={
                      isAnswerComplete
                        ? "Copy your completed answer"
                        : "Complete all sections to copy"
                    }
                  >
                    Copy Answer
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar - Tips Panel */}
        <aside className="lg:col-span-1" aria-label="STAR method guide">
          <div className="lg:sticky lg:top-4">
            <TipsPanel />
          </div>
        </aside>
      </div>

      {/* Example Viewer Dialog */}
      <ExampleViewer
        question={exampleQuestion}
        open={isExampleOpen}
        onOpenChange={setIsExampleOpen}
      />
    </main>
  );
}

