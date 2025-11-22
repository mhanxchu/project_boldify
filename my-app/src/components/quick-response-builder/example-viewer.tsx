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
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{question.question}</DialogTitle>
          <DialogDescription>
            <Badge variant="secondary" className="mt-2">
              {question.category}
            </Badge>
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <div>
            <h3 className="font-semibold mb-2">Example Response</h3>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {question.exampleResponse}
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold mb-2">STAR Method Breakdown</h3>
            <div className="space-y-3 text-sm">
              <div>
                <Badge variant="outline" className="mb-1">Situation</Badge>
                <p className="text-muted-foreground">{question.starPrompts.situation}</p>
              </div>
              <div>
                <Badge variant="outline" className="mb-1">Task</Badge>
                <p className="text-muted-foreground">{question.starPrompts.task}</p>
              </div>
              <div>
                <Badge variant="outline" className="mb-1">Action</Badge>
                <p className="text-muted-foreground">{question.starPrompts.action}</p>
              </div>
              <div>
                <Badge variant="outline" className="mb-1">Result</Badge>
                <p className="text-muted-foreground">{question.starPrompts.result}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

