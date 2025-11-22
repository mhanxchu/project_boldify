/**
 * STAR Method Analyzer
 * 
 * Analyzes STAR method responses to detect structure completeness
 * and provide feedback on response quality.
 */

export interface StarAnalysis {
  situation: {
    hasContent: boolean;
    wordCount: number;
    charCount: number;
  };
  task: {
    hasContent: boolean;
    wordCount: number;
    charCount: number;
  };
  action: {
    hasContent: boolean;
    wordCount: number;
    charCount: number;
  };
  result: {
    hasContent: boolean;
    wordCount: number;
    charCount: number;
  };
  total: {
    wordCount: number;
    charCount: number;
  };
  isComplete: boolean;
  completedSections: number;
}

export interface LengthRecommendation {
  status: "too-short" | "good" | "too-long";
  message: string;
  variant: "destructive" | "default" | "secondary";
}

/**
 * Counts words in a text string
 */
export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter((word) => word.length > 0).length;
}

/**
 * Counts characters in a text string
 */
export function countCharacters(text: string): number {
  return text.length;
}

/**
 * Analyzes STAR method response structure
 */
export function analyzeStarResponse(
  situation: string,
  task: string,
  action: string,
  result: string
): StarAnalysis {
  const situationWords = countWords(situation);
  const taskWords = countWords(task);
  const actionWords = countWords(action);
  const resultWords = countWords(result);

  const situationChars = countCharacters(situation);
  const taskChars = countCharacters(task);
  const actionChars = countCharacters(action);
  const resultChars = countCharacters(result);

  const hasSituation = situation.trim().length > 0;
  const hasTask = task.trim().length > 0;
  const hasAction = action.trim().length > 0;
  const hasResult = result.trim().length > 0;

  const completedSections = [hasSituation, hasTask, hasAction, hasResult].filter(
    Boolean
  ).length;

  return {
    situation: {
      hasContent: hasSituation,
      wordCount: situationWords,
      charCount: situationChars,
    },
    task: {
      hasContent: hasTask,
      wordCount: taskWords,
      charCount: taskChars,
    },
    action: {
      hasContent: hasAction,
      wordCount: actionWords,
      charCount: actionChars,
    },
    result: {
      hasContent: hasResult,
      wordCount: resultWords,
      charCount: resultChars,
    },
    total: {
      wordCount: situationWords + taskWords + actionWords + resultWords,
      charCount: situationChars + taskChars + actionChars + resultChars,
    },
    isComplete: hasSituation && hasTask && hasAction && hasResult,
    completedSections,
  };
}

/**
 * Gets length recommendation for total word count
 * Ideal range: 150-300 words
 */
export function getLengthRecommendation(
  totalWordCount: number
): LengthRecommendation {
  if (totalWordCount === 0) {
    return {
      status: "too-short",
      message: "Start writing your response",
      variant: "secondary",
    };
  }

  if (totalWordCount < 50) {
    return {
      status: "too-short",
      message: "Needs more detail",
      variant: "destructive",
    };
  }

  if (totalWordCount < 150) {
    return {
      status: "too-short",
      message: "Consider adding more detail",
      variant: "secondary",
    };
  }

  if (totalWordCount <= 300) {
    return {
      status: "good",
      message: "Good length",
      variant: "default",
    };
  }

  if (totalWordCount <= 400) {
    return {
      status: "too-long",
      message: "Slightly long, but acceptable",
      variant: "secondary",
    };
  }

  return {
    status: "too-long",
    message: "Consider making it more concise",
    variant: "secondary",
  };
}

/**
 * Validates minimum word count for each section
 * Minimum: 10 words per section
 */
export function validateSectionMinWords(
  wordCount: number,
  sectionName: string
): { isValid: boolean; message: string } {
  const minWords = 10;

  if (wordCount === 0) {
    return {
      isValid: false,
      message: `${sectionName} section is empty`,
    };
  }

  if (wordCount < minWords) {
    return {
      isValid: false,
      message: `${sectionName} section needs more detail (at least ${minWords} words)`,
    };
  }

  return {
    isValid: true,
    message: "",
  };
}

