"use client";

import { useState, useEffect, useTransition } from "react";
import { QuestionLibrary } from "@/components/quick-response-builder/question-library";
import { StarEditor } from "@/components/quick-response-builder/star-editor";
import { ExampleViewer } from "@/components/quick-response-builder/example-viewer";
import { TipsPanel } from "@/components/quick-response-builder/tips-panel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { type InterviewQuestion } from "@/lib/data/interview-questions";
import { useStarResponseStorage } from "@/lib/hooks/use-local-storage";
import { validateAndFormatResponse } from "@/app/quick-response-builder/actions";
import { analyzeStarResponse, getLengthRecommendation } from "@/lib/utils/star-analyzer";

export default function QuickResponseBuilderPage() {
  const [selectedQuestion, setSelectedQuestion] =
    useState<InterviewQuestion | null>(null);
  const [exampleQuestion, setExampleQuestion] =
    useState<InterviewQuestion | null>(null);
  const [isExampleOpen, setIsExampleOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [copyStatus, setCopyStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Use localStorage hook for persistence
  const { responseData, updateResponse, clearResponseData } = useStarResponseStorage();

  // Initialize from localStorage or use empty state
  const [situation, setSituation] = useState(responseData.situation);
  const [task, setTask] = useState(responseData.task);
  const [action, setAction] = useState(responseData.action);
  const [result, setResult] = useState(responseData.result);

  // Load saved question if available
  useEffect(() => {
    if (responseData.questionId && typeof window !== "undefined") {
      // Import questions dynamically to avoid SSR issues
      import("@/lib/data/interview-questions").then(({ interviewQuestions }) => {
        const savedQuestion = interviewQuestions.find(
          (q) => q.id === responseData.questionId
        );
        if (savedQuestion && !selectedQuestion) {
          setSelectedQuestion(savedQuestion);
          // Restore saved values
          setSituation(responseData.situation);
          setTask(responseData.task);
          setAction(responseData.action);
          setResult(responseData.result);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run on mount

  // Save to localStorage whenever state changes
  useEffect(() => {
    updateResponse({
      questionId: selectedQuestion?.id || null,
      situation,
      task,
      action,
      result,
    });
  }, [situation, task, action, result, selectedQuestion?.id, updateResponse]);

  const handleSelectQuestion = (question: InterviewQuestion) => {
    setSelectedQuestion(question);
    // Reset STAR fields when selecting a new question
    setSituation("");
    setTask("");
    setAction("");
    setResult("");
    clearResponseData();
  };

  const handleViewExample = (question: InterviewQuestion) => {
    setExampleQuestion(question);
    setIsExampleOpen(true);
  };

  const handleCopyAnswer = async () => {
    if (!selectedQuestion) return;

    setCopyStatus("loading");
    setErrorMessage("");

    try {
      // Validate and format using Server Action
      const validation = await validateAndFormatResponse({
        situation,
        task,
        action,
        result,
        questionId: selectedQuestion.id,
      });

      if (!validation.success) {
        setCopyStatus("error");
        setErrorMessage(validation.errors.join(", "));
        return;
      }

      // Copy to clipboard
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(validation.formattedResponse || "");
        setCopyStatus("success");
        setTimeout(() => setCopyStatus("idle"), 2000);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = validation.formattedResponse || "";
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopyStatus("success");
        setTimeout(() => setCopyStatus("idle"), 2000);
      }
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      setCopyStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to copy to clipboard"
      );
      setTimeout(() => {
        setCopyStatus("idle");
        setErrorMessage("");
      }, 3000);
    }
  };

  // Use star-analyzer for real-time analysis
  const analysis = analyzeStarResponse(situation, task, action, result);
  const lengthRecommendation = getLengthRecommendation(analysis.total.wordCount);

  const isAnswerComplete = analysis.isComplete;

  return (
    <main 
      className="container mx-auto px-4 py-12 lg:py-16 max-w-7xl bg-background"
      role="main"
      aria-label="Quick Response Builder"
    >
      <header className="mb-12 lg:mb-16 space-y-4">
        <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight">
          Quick Response Builder
        </h1>
        <p className="font-serif-body text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-3xl">
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
              analysis={analysis}
            />
          </section>

          {/* Action Bar */}
          {selectedQuestion && (
            <Card aria-live="polite" aria-atomic="true" className="border border-border/50 shadow-sm">
              <CardContent className="pt-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <p className="font-serif-body text-base font-semibold tabular-nums">
                      Total: <span 
                        aria-label={`${analysis.total.wordCount} words`} 
                        className="text-gold-text font-bold"
                      >
                        {analysis.total.wordCount}
                      </span> words
                    </p>
                    <div className="space-y-1">
                      <p 
                        className="font-serif-body text-sm text-muted-foreground"
                        role="status"
                        aria-live="polite"
                      >
                        {isAnswerComplete
                          ? "✓ All STAR sections completed"
                          : `Complete all sections (${analysis.completedSections}/4) to copy your answer`}
                      </p>
                      {analysis.total.wordCount > 0 && (
                        <p className="font-serif-body text-xs text-muted-foreground">
                          {lengthRecommendation.message}
                        </p>
                      )}
                      {copyStatus === "error" && errorMessage && (
                        <p className="font-serif-body text-xs text-destructive" role="alert">
                          {errorMessage}
                        </p>
                      )}
                      {copyStatus === "success" && (
                        <p className="font-serif-body text-xs text-green-600 dark:text-green-400" role="status">
                          ✓ Copied to clipboard!
                        </p>
                      )}
                    </div>
                  </div>
                  <Button
                    onClick={handleCopyAnswer}
                    disabled={!isAnswerComplete || isPending || copyStatus === "loading"}
                    size="lg"
                    variant="outline"
                    className="font-serif-body border-gold/50 bg-gold/10 hover:bg-gold/20 hover:border-gold/60 text-foreground shadow-sm disabled:opacity-50 disabled:cursor-not-allowed px-8 py-6 text-base tracking-wide focus-visible:ring-gold/50 focus-visible:ring-[3px] transition-all"
                    aria-disabled={!isAnswerComplete || isPending || copyStatus === "loading"}
                    aria-label={
                      isAnswerComplete
                        ? "Copy your completed answer to clipboard"
                        : "Complete all sections to copy your answer"
                    }
                  >
                    {copyStatus === "loading" ? "Copying..." : copyStatus === "success" ? "Copied!" : "Copy Answer"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar - Tips Panel */}
        <aside className="lg:col-span-1" aria-label="STAR method guide">
          <div className="lg:sticky lg:top-4">
            <TipsPanel 
              totalWordCount={analysis.total.wordCount}
              lengthRecommendation={lengthRecommendation}
            />
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

