"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { type InterviewQuestion } from "@/lib/data/interview-questions";

interface ExampleViewerProps {
  question: InterviewQuestion | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExampleViewer({ question, open, onOpenChange }: ExampleViewerProps) {
  if (!question) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-3xl max-h-[85vh] overflow-y-auto"
        aria-describedby="example-dialog-description"
      >
        <DialogHeader>
          <DialogTitle className="text-xl">{question.question}</DialogTitle>
          <DialogDescription id="example-dialog-description">
            <Badge variant="secondary" className="mt-2">
              {question.category}
            </Badge>
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 pt-4">
          <section aria-labelledby="example-response-heading">
            <h3 id="example-response-heading" className="font-semibold text-base mb-3">
              Example Response
            </h3>
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                {question.exampleResponse}
              </p>
            </div>
          </section>
          <Separator />
          <section aria-labelledby="star-breakdown-heading">
            <h3 id="star-breakdown-heading" className="font-semibold text-base mb-3">
              STAR Method Breakdown
            </h3>
            <div className="space-y-4">
              <div>
                <Badge variant="outline" className="mb-2 font-semibold">Situation</Badge>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {question.starPrompts.situation}
                </p>
              </div>
              <div>
                <Badge variant="outline" className="mb-2 font-semibold">Task</Badge>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {question.starPrompts.task}
                </p>
              </div>
              <div>
                <Badge variant="outline" className="mb-2 font-semibold">Action</Badge>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {question.starPrompts.action}
                </p>
              </div>
              <div>
                <Badge variant="outline" className="mb-2 font-semibold">Result</Badge>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {question.starPrompts.result}
                </p>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

