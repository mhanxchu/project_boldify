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
        <DialogHeader className="space-y-4">
          <DialogTitle className="font-serif-heading text-2xl">{question.question}</DialogTitle>
          <DialogDescription id="example-dialog-description">
            <Badge variant="secondary" className="mt-2 border-gold/30 text-gold-dark font-serif-body">
              {question.category}
            </Badge>
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-8 pt-4">
          <section aria-labelledby="example-response-heading">
            <h3 id="example-response-heading" className="font-serif-heading font-semibold text-lg mb-4">
              Example Response
            </h3>
            <div className="bg-gold-subtle/30 border border-gold/20 rounded-lg p-6">
              <p className="font-serif-body text-base text-foreground leading-relaxed whitespace-pre-wrap">
                {question.exampleResponse}
              </p>
            </div>
          </section>
          <Separator className="bg-border/50" />
          <section aria-labelledby="star-breakdown-heading">
            <h3 id="star-breakdown-heading" className="font-serif-heading font-semibold text-lg mb-4">
              STAR Method Breakdown
            </h3>
            <div className="space-y-5">
              <div>
                <Badge variant="outline" className="mb-3 font-serif-body border-gold/40 text-gold-dark">Situation</Badge>
                <p className="font-serif-body text-sm text-muted-foreground leading-relaxed">
                  {question.starPrompts.situation}
                </p>
              </div>
              <div>
                <Badge variant="outline" className="mb-3 font-serif-body border-gold/40 text-gold-dark">Task</Badge>
                <p className="font-serif-body text-sm text-muted-foreground leading-relaxed">
                  {question.starPrompts.task}
                </p>
              </div>
              <div>
                <Badge variant="outline" className="mb-3 font-serif-body border-gold/40 text-gold-dark">Action</Badge>
                <p className="font-serif-body text-sm text-muted-foreground leading-relaxed">
                  {question.starPrompts.action}
                </p>
              </div>
              <div>
                <Badge variant="outline" className="mb-3 font-serif-body border-gold/40 text-gold-dark">Result</Badge>
                <p className="font-serif-body text-sm text-muted-foreground leading-relaxed">
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

