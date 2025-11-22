"use server";

/**
 * Server Actions for Quick Response Builder
 * 
 * Handles server-side validation and formatting of STAR responses
 */

export interface StarResponse {
  situation: string;
  task: string;
  action: string;
  result: string;
  questionId: string;
}

export interface ValidationResult {
  success: boolean;
  errors: string[];
  warnings: string[];
  formattedResponse?: string;
}

/**
 * Validates and formats a STAR method response
 * 
 * @param response - The STAR response to validate
 * @returns Validation result with formatted response if valid
 */
export async function validateAndFormatResponse(
  response: StarResponse
): Promise<ValidationResult> {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Server-side logging
  console.log("[Server Action] Validating STAR response for question:", response.questionId);

  // Validate all sections have content
  if (!response.situation.trim()) {
    errors.push("Situation section is required");
  }
  if (!response.task.trim()) {
    errors.push("Task section is required");
  }
  if (!response.action.trim()) {
    errors.push("Action section is required");
  }
  if (!response.result.trim()) {
    errors.push("Result section is required");
  }

  // Count words
  const wordCounts = {
    situation: response.situation.trim().split(/\s+/).filter((w) => w.length > 0).length,
    task: response.task.trim().split(/\s+/).filter((w) => w.length > 0).length,
    action: response.action.trim().split(/\s+/).filter((w) => w.length > 0).length,
    result: response.result.trim().split(/\s+/).filter((w) => w.length > 0).length,
  };

  const totalWords = Object.values(wordCounts).reduce((sum, count) => sum + count, 0);

  // Check minimum word counts per section
  const minWordsPerSection = 10;
  if (wordCounts.situation > 0 && wordCounts.situation < minWordsPerSection) {
    warnings.push(`Situation section is quite brief (${wordCounts.situation} words). Consider adding more detail.`);
  }
  if (wordCounts.task > 0 && wordCounts.task < minWordsPerSection) {
    warnings.push(`Task section is quite brief (${wordCounts.task} words). Consider adding more detail.`);
  }
  if (wordCounts.action > 0 && wordCounts.action < minWordsPerSection) {
    warnings.push(`Action section is quite brief (${wordCounts.action} words). Consider adding more detail.`);
  }
  if (wordCounts.result > 0 && wordCounts.result < minWordsPerSection) {
    warnings.push(`Result section is quite brief (${wordCounts.result} words). Consider adding more detail.`);
  }

  // Check total length
  if (totalWords < 150) {
    warnings.push(`Response is ${totalWords} words. Aim for 150-300 words for a complete answer.`);
  } else if (totalWords > 400) {
    warnings.push(`Response is ${totalWords} words. Consider making it more concise (150-300 words ideal).`);
  }

  // If there are errors, don't format
  if (errors.length > 0) {
    console.log("[Server Action] Validation failed:", errors);
    return {
      success: false,
      errors,
      warnings,
    };
  }

  // Format the response for copying
  const formattedResponse = formatStarResponse(response);

  console.log("[Server Action] Validation successful. Total words:", totalWords);

  return {
    success: true,
    errors: [],
    warnings,
    formattedResponse,
  };
}

/**
 * Formats a STAR response into a readable text format
 */
function formatStarResponse(response: StarResponse): string {
  return `Situation:
${response.situation.trim()}

Task:
${response.task.trim()}

Action:
${response.action.trim()}

Result:
${response.result.trim()}`;
}

